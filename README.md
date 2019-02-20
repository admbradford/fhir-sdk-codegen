# [WIP] FHIR Type Generator

Package generator for FHIR API from JSON Schema
Uses FHIR JSON Schema published by HL7 to generate polygot FHIR SDKs (https://www.hl7.org/fhir/fhir.schema.json.zip)[https://www.hl7.org/fhir/fhir.schema.json.zip]

## DISCLAIMER
DO NOT USE IN PRODUCTION, THIS IS STILL A WORK IN PROGRESS

## Uses
- (quicktype)[https://github.com/quicktype/quicktype]
- (execa)[https://github.com/sindresorhus/execa]

## Install
```
npm i
```

## Generating 
```
npm run gen:typescript
```

## Todo
- Support multiple languages
- Reduce duplicate code
- Create unit tests for generated code to validate against
- Document
 