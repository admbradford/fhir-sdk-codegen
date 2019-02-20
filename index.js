const fs = require('fs');
const path = require('path');
const execa = require('execa');

const FHIR_SCHEMA = require('./fhir.schema.json');
const { definitions, oneOf } = FHIR_SCHEMA;

function getDefinitionKey(str) {
  const RE = new RegExp('#\/definitions\/(.*)$', 'g');
  const results = RE.exec(str);
  if (results) {
    return results[1];
  }
}

function buildSchemaFile(key, definition) {
  let schema = {
    "$schema": "http://json-schema.org/draft-06/schema#",
    definitions: {},
  };

  function processProperties(def) {
    const { properties } = def;
    for ( key in properties ) {
      let refKey = null;
      if (properties[key]['$ref']) {
        refKey = getDefinitionKey(properties[key]['$ref']);
      } else if (properties[key].type && properties[key].type === 'array') {
        refKey = getDefinitionKey(properties[key].items['$ref']);
      }
      if (refKey === 'ResourceList') {
        delete properties[key];
      }
      if (refKey && !schema.definitions[refKey] && refKey !== 'ResourceList') {
        schema.definitions[refKey] = definitions[refKey];
        
        if (!schema.definitions[refKey].type) {
          schema.definitions[refKey].type = 'object';
        }
        if (!schema.definitions[refKey].title) {
          schema.definitions[refKey].title = key;
        }
        if(definitions[refKey].properties) {
          delete schema.definitions[refKey].properties.resourceType;
          processProperties(definitions[refKey]);
        }
      }
    }
  }
  definition.type = (definition.type) ? definition.type : 'object';
  definition.title = (definition.title) ? definition.title : key;
  delete definition.properties.resourceType;
  delete definition.required;
  schema = {
    ...schema,
    ...definition,
  };
  processProperties(definition);
  return schema;
}
(async () => {
  for (idx in oneOf) {
    try {
      const { $ref } = oneOf[idx];
      const key = getDefinitionKey($ref);
      const jsonSchema = buildSchemaFile(key, definitions[key]);
      const filePath = path.join(__dirname, `generated_schemas/${key}.schema.json`);
      fs.writeFileSync(filePath, JSON.stringify(jsonSchema));
      await execa(path.join(__dirname, 'node_modules/.bin/quicktype'), 
      [
        '--src-lang',
        'schema',
        '--src',
        filePath,
        '-o',
        `lib/typescript/${key}.ts`,
      ]);
      fs.unlinkSync(filePath);
    } catch (error) {
      console.error(error);
    }
  }
})();