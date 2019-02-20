// To parse this data:
//
//   import { Convert, StructureDefinition } from "./file";
//
//   const structureDefinition = Convert.toStructureDefinition(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * A definition of a FHIR structure. This resource is used to describe the underlying
 * resources, data types defined in FHIR, and also for describing extensions and constraints
 * on resources and data types.
 */
export interface StructureDefinition {
    /**
     * Extensions for abstract
     */
    _abstract?: PuneHedgehog;
    /**
     * Extensions for contextInvariant
     */
    _contextInvariant?: PuneHedgehog[];
    /**
     * Extensions for copyright
     */
    _copyright?: PuneHedgehog;
    /**
     * Extensions for date
     */
    _date?: PuneHedgehog;
    /**
     * Extensions for derivation
     */
    _derivation?: PuneHedgehog;
    /**
     * Extensions for description
     */
    _description?: PuneHedgehog;
    /**
     * Extensions for experimental
     */
    _experimental?: PuneHedgehog;
    /**
     * Extensions for fhirVersion
     */
    _fhirVersion?: PuneHedgehog;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: PuneHedgehog;
    /**
     * Extensions for kind
     */
    _kind?: PuneHedgehog;
    /**
     * Extensions for language
     */
    _language?: PuneHedgehog;
    /**
     * Extensions for name
     */
    _name?: PuneHedgehog;
    /**
     * Extensions for publisher
     */
    _publisher?: PuneHedgehog;
    /**
     * Extensions for purpose
     */
    _purpose?: PuneHedgehog;
    /**
     * Extensions for status
     */
    _status?: PuneHedgehog;
    /**
     * Extensions for title
     */
    _title?: PuneHedgehog;
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * Extensions for url
     */
    _url?: PuneHedgehog;
    /**
     * Extensions for version
     */
    _version?: PuneHedgehog;
    /**
     * Whether structure this definition describes is abstract or not  - that is, whether the
     * structure is not intended to be instantiated. For Resources and Data types, abstract
     * types will never be exchanged  between systems.
     */
    abstract?: boolean;
    /**
     * An absolute URI that is the base structure from which this type is derived, either by
     * specialization or constraint.
     */
    baseDefinition?: string;
    /**
     * Contact details to assist a user in finding and communicating with the publisher.
     */
    contact?: ValueContactDetail[];
    /**
     * Identifies the types of resource or data type elements to which the extension can be
     * applied.
     */
    context?: Context[];
    /**
     * A set of rules as FHIRPath Invariants about when the extension can be used (e.g.
     * co-occurrence variants for the extension). All the rules must be true.
     */
    contextInvariant?: string[];
    /**
     * A copyright statement relating to the structure definition and/or its contents. Copyright
     * statements are generally legal restrictions on the use and publishing of the structure
     * definition.
     */
    copyright?: string;
    /**
     * The date  (and optionally time) when the structure definition was published. The date
     * must change when the business version changes and it must change if the status code
     * changes. In addition, it should change when the substantive content of the structure
     * definition changes.
     */
    date?: string;
    /**
     * How the type relates to the baseDefinition.
     */
    derivation?: Derivation;
    /**
     * A free text natural language description of the structure definition from a consumer's
     * perspective.
     */
    description?: string;
    /**
     * A differential view is expressed relative to the base StructureDefinition - a statement
     * of differences that it applies.
     */
    differential?: Differential;
    /**
     * A Boolean value to indicate that this structure definition is authored for testing
     * purposes (or education/evaluation/marketing) and is not intended to be used for genuine
     * usage.
     */
    experimental?: boolean;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The version of the FHIR specification on which this StructureDefinition is based - this
     * is the formal version of the specification, without the revision number, e.g.
     * [publication].[major].[minor], which is 4.0.0. for this version.
     */
    fhirVersion?: FhirVersion;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A formal identifier that is used to identify this structure definition when it is
     * represented in other formats, or referenced in a specification, model, design or an
     * instance.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * A legal or geographic region in which the structure definition is intended to be used.
     */
    jurisdiction?: PurpleType[];
    /**
     * A set of key words or terms from external terminologies that may be used to assist with
     * indexing and searching of templates nby describing the use of this structure definition,
     * or the content it describes.
     */
    keyword?: Coding[];
    /**
     * Defines the kind of structure that this definition is describing.
     */
    kind?: Kind;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * An external specification that the content is mapped to.
     */
    mapping?: StructureDefinitionMapping[];
    /**
     * The metadata about the resource. This is content that is maintained by the
     * infrastructure. Changes to the content might not always be associated with version
     * changes to the resource.
     */
    meta?: Meta;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource and that modifies the understanding of the element that contains it
     * and/or the understanding of the containing element's descendants. Usually modifier
     * elements provide negation or qualification. To make the use of extensions safe and
     * manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer is allowed to define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * A natural language name identifying the structure definition. This name should be usable
     * as an identifier for the module by machine processing applications such as code
     * generation.
     */
    name?: string;
    /**
     * The name of the organization or individual that published the structure definition.
     */
    publisher?: string;
    /**
     * Explanation of why this structure definition is needed and why it has been designed as it
     * has.
     */
    purpose?: string;
    /**
     * A snapshot view is expressed in a standalone form that can be used and interpreted
     * without considering the base StructureDefinition.
     */
    snapshot?: Snapshot;
    /**
     * The status of this structure definition. Enables tracking the life-cycle of the content.
     */
    status?: StructureDefinitionStatus;
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Text;
    /**
     * A short, descriptive, user-friendly title for the structure definition.
     */
    title?: string;
    /**
     * The type this structure describes. If the derivation kind is 'specialization' then this
     * is the master definition for a type, and there is always one of these (a data type, an
     * extension, a resource, including abstract ones). Otherwise the structure definition is a
     * constraint on the stated type (and in this case, the type cannot be an abstract type).
     * References are URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g.
     * "string" is a reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs
     * are only allowed in logical models.
     */
    type?: string;
    /**
     * An absolute URI that is used to identify this structure definition when it is referenced
     * in a specification, model, design or an instance; also called its canonical identifier.
     * This SHOULD be globally unique and SHOULD be a literal address at which at which an
     * authoritative instance of this structure definition is (or will be) published. This URL
     * can be the target of a canonical reference. It SHALL remain the same when the structure
     * definition is stored on different servers.
     */
    url?: string;
    /**
     * The content was developed with a focus and intent of supporting the contexts that are
     * listed. These contexts may be general categories (gender, age, ...) or may be references
     * to specific programs (insurance plans, studies, ...) and may be used to assist with
     * indexing and searching for appropriate structure definition instances.
     */
    useContext?: ValueUsageContext[];
    /**
     * The identifier that is used to identify this version of the structure definition when it
     * is referenced in a specification, model, design or instance. This is an arbitrary value
     * managed by the structure definition author and is not expected to be globally unique. For
     * example, it might be a timestamp (e.g. yyyymmdd) if a managed version is not available.
     * There is also no expectation that versions can be placed in a lexicographical sequence.
     */
    version?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or
 * categorize an artifact. This metadata can either be specific to the applicable population
 * (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting,
 * provider of care).
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueUsageContext {
    /**
     * A code that identifies the type of context being specified by this usage context.
     */
    code: Coding;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A value that defines the context specified in this context of use. The interpretation of
     * the value is defined by the code.
     */
    valueCodeableConcept?: PurpleType;
    /**
     * A value that defines the context specified in this context of use. The interpretation of
     * the value is defined by the code.
     */
    valueQuantity?: ValueQuantity;
    /**
     * A value that defines the context specified in this context of use. The interpretation of
     * the value is defined by the code.
     */
    valueRange?: ValueRange;
    /**
     * A value that defines the context specified in this context of use. The interpretation of
     * the value is defined by the code.
     */
    valueReference?: AuthorReference;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A description of a triggering event. Triggering events can be named events, data events,
 * or periodic, as determined by the type element.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueTriggerDefinition {
    /**
     * Extensions for name
     */
    _name?: PuneHedgehog;
    /**
     * Extensions for timingDate
     */
    _timingDate?: PuneHedgehog;
    /**
     * Extensions for timingDateTime
     */
    _timingDateTime?: PuneHedgehog;
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * A boolean-valued expression that is evaluated in the context of the container of the
     * trigger definition and returns whether or not the trigger fires.
     */
    condition?: ValueExpression;
    /**
     * The triggering data of the event (if this is a data trigger). If more than one data is
     * requirement is specified, then all the data requirements must be true.
     */
    data?: ValueDataRequirement[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A formal name for the event. This may be an absolute URI that identifies the event
     * formally (e.g. from a trigger registry), or a simple relative URI that identifies the
     * event in a local context.
     */
    name?: string;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDate?: string;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingDateTime?: string;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingReference?: AuthorReference;
    /**
     * The timing of the event (if this is a periodic trigger).
     */
    timingTiming?: ValueTiming;
    /**
     * The type of triggering event.
     */
    type?: ValueTriggerDefinitionType;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A signature along with supporting context. The signature may be a digital signature that
 * is cryptographic in nature, or some other signature acceptable to the domain. This other
 * signature may be as simple as a graphical image representing a hand-written signature, or
 * a signature ceremony Different signature approaches have different utilities.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueSignature {
    /**
     * Extensions for data
     */
    _data?: PuneHedgehog;
    /**
     * Extensions for sigFormat
     */
    _sigFormat?: PuneHedgehog;
    /**
     * Extensions for targetFormat
     */
    _targetFormat?: PuneHedgehog;
    /**
     * Extensions for when
     */
    _when?: PuneHedgehog;
    /**
     * The base64 encoding of the Signature content. When signature is not recorded
     * electronically this element would be empty.
     */
    data?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A reference to an application-usable description of the identity that is represented by
     * the signature.
     */
    onBehalfOf?: AuthorReference;
    /**
     * A mime type that indicates the technical format of the signature. Important mime types
     * are application/signature+xml for X ML DigSig, application/jose for JWS, and image/* for
     * a graphical image of a signature, etc.
     */
    sigFormat?: string;
    /**
     * A mime type that indicates the technical format of the target resources signed by the
     * signature.
     */
    targetFormat?: string;
    /**
     * An indication of the reason that the entity signed this document. This may be explicitly
     * included as part of the signature information and can be used when determining
     * accountability for various actions concerning the document.
     */
    type: Coding[];
    /**
     * When the digital signature was signed.
     */
    when?: string;
    /**
     * A reference to an application-usable description of the identity that signed  (e.g. the
     * signature used their private key).
     */
    who: AuthorReference;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A series of measurements taken by a device, with upper and lower limits. There may be
 * more than one dimension in the data.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueSampledData {
    /**
     * Extensions for data
     */
    _data?: PuneHedgehog;
    /**
     * Extensions for dimensions
     */
    _dimensions?: PuneHedgehog;
    /**
     * Extensions for factor
     */
    _factor?: PuneHedgehog;
    /**
     * Extensions for lowerLimit
     */
    _lowerLimit?: PuneHedgehog;
    /**
     * Extensions for period
     */
    _period?: PuneHedgehog;
    /**
     * Extensions for upperLimit
     */
    _upperLimit?: PuneHedgehog;
    /**
     * A series of data points which are decimal values separated by a single space (character
     * u20). The special values "E" (error), "L" (below detection limit) and "U" (above
     * detection limit) can also be used in place of a decimal value.
     */
    data?: string;
    /**
     * The number of sample points at each time point. If this value is greater than one, then
     * the dimensions will be interlaced - all the sample points for a point in time will be
     * recorded at once.
     */
    dimensions?: number;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * A correction factor that is applied to the sampled data points before they are added to
     * the origin.
     */
    factor?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The lower limit of detection of the measured points. This is needed if any of the data
     * points have the value "L" (lower than detection limit).
     */
    lowerLimit?: number;
    /**
     * The base quantity that a measured value of zero represents. In addition, this provides
     * the units of the entire measurement series.
     */
    origin: ValueQuantity;
    /**
     * The length of time between sampling times, measured in milliseconds.
     */
    period?: number;
    /**
     * The upper limit of detection of the measured points. This is needed if any of the data
     * points have the value "U" (higher than detection limit).
     */
    upperLimit?: number;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Related artifacts such as additional documentation, justification, or bibliographic
 * references.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueRelatedArtifact {
    /**
     * Extensions for citation
     */
    _citation?: PuneHedgehog;
    /**
     * Extensions for display
     */
    _display?: PuneHedgehog;
    /**
     * Extensions for label
     */
    _label?: PuneHedgehog;
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * Extensions for url
     */
    _url?: PuneHedgehog;
    /**
     * A bibliographic citation for the related artifact. This text SHOULD be formatted
     * according to an accepted citation format.
     */
    citation?: string;
    /**
     * A brief description of the document or knowledge resource being referenced, suitable for
     * display to a consumer.
     */
    display?: string;
    /**
     * The document being referenced, represented as an attachment. This is exclusive with the
     * resource element.
     */
    document?: ValueAttachment;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A short label that can be used to reference the citation from elsewhere in the containing
     * artifact, such as a footnote index.
     */
    label?: string;
    /**
     * The related resource, such as a library, value set, profile, or other knowledge resource.
     */
    resource?: string;
    /**
     * The type of relationship to the related artifact.
     */
    type?: ValueRelatedArtifactType;
    /**
     * A url for the artifact that can be followed to access the actual content.
     */
    url?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The parameters to the module. This collection specifies both the input and output
 * parameters. Input parameters are provided by the caller as part of the $evaluate
 * operation. Output parameters are included in the GuidanceResponse.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueParameterDefinition {
    /**
     * Extensions for documentation
     */
    _documentation?: PuneHedgehog;
    /**
     * Extensions for max
     */
    _max?: PuneHedgehog;
    /**
     * Extensions for min
     */
    _min?: PuneHedgehog;
    /**
     * Extensions for name
     */
    _name?: PuneHedgehog;
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * Extensions for use
     */
    _use?: PuneHedgehog;
    /**
     * A brief discussion of what the parameter is for and how it is used by the module.
     */
    documentation?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The maximum number of times this element is permitted to appear in the request or
     * response.
     */
    max?: string;
    /**
     * The minimum number of times this parameter SHALL appear in the request or response.
     */
    min?: number;
    /**
     * The name of the parameter used to allow access to the value of the parameter in
     * evaluation contexts.
     */
    name?: string;
    /**
     * If specified, this indicates a profile that the input data must conform to, or that the
     * output data will conform to.
     */
    profile?: string;
    /**
     * The type of the parameter.
     */
    type?: string;
    /**
     * Whether the parameter is input or output for the module.
     */
    use?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * An amount of economic utility in some recognized currency.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueMoney {
    /**
     * Extensions for currency
     */
    _currency?: PuneHedgehog;
    /**
     * Extensions for value
     */
    _value?: PuneHedgehog;
    /**
     * ISO 4217 Currency Code.
     */
    currency?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Numerical value (with implicit precision).
     */
    value?: number;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A human's name with the ability to identify parts and usage.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueHumanName {
    /**
     * Extensions for family
     */
    _family?: PuneHedgehog;
    /**
     * Extensions for given
     */
    _given?: PuneHedgehog[];
    /**
     * Extensions for prefix
     */
    _prefix?: PuneHedgehog[];
    /**
     * Extensions for suffix
     */
    _suffix?: PuneHedgehog[];
    /**
     * Extensions for text
     */
    _text?: PuneHedgehog;
    /**
     * Extensions for use
     */
    _use?: PuneHedgehog;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The part of a name that links to the genealogy. In some cultures (e.g. Eritrea) the
     * family name of a son is the first name of his father.
     */
    family?: string;
    /**
     * Given name.
     */
    given?: string[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Indicates the period of time when this name was valid for the named person.
     */
    period?: Period;
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or
     * nobility status, etc. and that appears at the start of the name.
     */
    prefix?: string[];
    /**
     * Part of the name that is acquired as a title due to academic, legal, employment or
     * nobility status, etc. and that appears at the end of the name.
     */
    suffix?: string[];
    /**
     * Specifies the entire name as it should be displayed e.g. on an application UI. This may
     * be provided instead of or as well as the specific parts.
     */
    text?: string;
    /**
     * Identifies the purpose for this name.
     */
    use?: ValueHumanNameUse;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A expression that is evaluated in a specified context and returns a value. The context of
 * use of the expression must specify the context in which the expression is evaluated, and
 * how the result of the expression is used.
 *
 * A boolean-valued expression that is evaluated in the context of the container of the
 * trigger definition and returns whether or not the trigger fires.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueExpression {
    /**
     * Extensions for description
     */
    _description?: PuneHedgehog;
    /**
     * Extensions for expression
     */
    _expression?: PuneHedgehog;
    /**
     * Extensions for language
     */
    _language?: PuneHedgehog;
    /**
     * Extensions for name
     */
    _name?: PuneHedgehog;
    /**
     * Extensions for reference
     */
    _reference?: PuneHedgehog;
    /**
     * A brief, natural language description of the condition that effectively communicates the
     * intended semantics.
     */
    description?: string;
    /**
     * An expression in the specified language that returns a value.
     */
    expression?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The media type of the language for the expression.
     */
    language?: Language;
    /**
     * A short name assigned to the expression to allow for multiple reuse of the expression in
     * the context where it is defined.
     */
    name?: string;
    /**
     * A URI that defines where the expression is found.
     */
    reference?: string;
}

/**
 * A set of rules that describe when the event is scheduled.
 *
 * Specifies an event that may occur multiple times. Timing schedules are used to record
 * when things are planned, expected or requested to occur. The most common usage is in
 * dosage instructions for medications. They are also used when planning care of various
 * kinds, and may be used for reporting the schedule to which past regular activities were
 * carried out.
 */
export interface Repeat {
    /**
     * Extensions for count
     */
    _count?: PuneHedgehog;
    /**
     * Extensions for countMax
     */
    _countMax?: PuneHedgehog;
    /**
     * Extensions for dayOfWeek
     */
    _dayOfWeek?: PuneHedgehog[];
    /**
     * Extensions for duration
     */
    _duration?: PuneHedgehog;
    /**
     * Extensions for durationMax
     */
    _durationMax?: PuneHedgehog;
    /**
     * Extensions for durationUnit
     */
    _durationUnit?: PuneHedgehog;
    /**
     * Extensions for frequency
     */
    _frequency?: PuneHedgehog;
    /**
     * Extensions for frequencyMax
     */
    _frequencyMax?: PuneHedgehog;
    /**
     * Extensions for offset
     */
    _offset?: PuneHedgehog;
    /**
     * Extensions for period
     */
    _period?: PuneHedgehog;
    /**
     * Extensions for periodMax
     */
    _periodMax?: PuneHedgehog;
    /**
     * Extensions for periodUnit
     */
    _periodUnit?: PuneHedgehog;
    /**
     * Extensions for timeOfDay
     */
    _timeOfDay?: PuneHedgehog[];
    /**
     * Extensions for when
     */
    _when?: PuneHedgehog[];
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or
     * outer bounds for start and/or end limits of the timing schedule.
     */
    boundsDuration?: ValueDuration;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or
     * outer bounds for start and/or end limits of the timing schedule.
     */
    boundsPeriod?: Period;
    /**
     * Either a duration for the length of the timing schedule, a range of possible length, or
     * outer bounds for start and/or end limits of the timing schedule.
     */
    boundsRange?: ValueRange;
    /**
     * A total count of the desired number of repetitions across the duration of the entire
     * timing specification. If countMax is present, this element indicates the lower bound of
     * the allowed range of count values.
     */
    count?: number;
    /**
     * If present, indicates that the count is a range - so to perform the action between
     * [count] and [countMax] times.
     */
    countMax?: number;
    /**
     * If one or more days of week is provided, then the action happens only on the specified
     * day(s).
     */
    dayOfWeek?: string[];
    /**
     * How long this thing happens for when it happens. If durationMax is present, this element
     * indicates the lower bound of the allowed range of the duration.
     */
    duration?: number;
    /**
     * If present, indicates that the duration is a range - so to perform the action between
     * [duration] and [durationMax] time length.
     */
    durationMax?: number;
    /**
     * The units of time for the duration, in UCUM units.
     */
    durationUnit?: Unit;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The number of times to repeat the action within the specified period. If frequencyMax is
     * present, this element indicates the lower bound of the allowed range of the frequency.
     */
    frequency?: number;
    /**
     * If present, indicates that the frequency is a range - so to repeat between [frequency]
     * and [frequencyMax] times within the period or period range.
     */
    frequencyMax?: number;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * The number of minutes from the event. If the event code does not indicate whether the
     * minutes is before or after the event, then the offset is assumed to be after the event.
     */
    offset?: number;
    /**
     * Indicates the duration of time over which repetitions are to occur; e.g. to express "3
     * times per day", 3 would be the frequency and "1 day" would be the period. If periodMax is
     * present, this element indicates the lower bound of the allowed range of the period length.
     */
    period?: number;
    /**
     * If present, indicates that the period is a range from [period] to [periodMax], allowing
     * expressing concepts such as "do this once every 3-5 days.
     */
    periodMax?: number;
    /**
     * The units of time for the period in UCUM units.
     */
    periodUnit?: Unit;
    /**
     * Specified time of day for action to take place.
     */
    timeOfDay?: string[];
    /**
     * An approximate time period during the day, potentially linked to an event of daily living
     * that indicates when the action should occur.
     */
    when?: When[];
}

/**
 * When medication should be administered.
 *
 * Specifies an event that may occur multiple times. Timing schedules are used to record
 * when things are planned, expected or requested to occur. The most common usage is in
 * dosage instructions for medications. They are also used when planning care of various
 * kinds, and may be used for reporting the schedule to which past regular activities were
 * carried out.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The timing of the event (if this is a periodic trigger).
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueTiming {
    /**
     * Extensions for event
     */
    _event?: PuneHedgehog[];
    /**
     * A code for the timing schedule (or just text in code.text). Some codes such as BID are
     * ubiquitous, but many institutions define their own additional codes. If a code is
     * provided, the code is understood to be a complete statement of whatever is specified in
     * the structured timing data, and either the code or the data may be used to interpret the
     * Timing, with the exception that .repeat.bounds still applies over the code (and is not
     * contained in the code).
     */
    code?: PurpleType;
    /**
     * Identifies specific times when the event occurs.
     */
    event?: string[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * A set of rules that describe when the event is scheduled.
     */
    repeat?: Repeat;
}

/**
 * Amount of medication per unit of time.
 *
 * A relationship of two Quantity values - expressed as a numerator and a denominator.
 *
 * Upper limit on medication per unit of time.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueRatio {
    /**
     * The value of the denominator.
     */
    denominator?: ValueQuantity;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The value of the numerator.
     */
    numerator?: ValueQuantity;
}

/**
 * Amount of medication per dose.
 *
 * A set of ordered Quantities defined by a low and high limit.
 *
 * Amount of medication per unit of time.
 *
 * Either a duration for the length of the timing schedule, a range of possible length, or
 * outer bounds for start and/or end limits of the timing schedule.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A value that defines the context specified in this context of use. The interpretation of
 * the value is defined by the code.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueRange {
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The high limit. The boundary is inclusive.
     */
    high?: ValueQuantity;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The low limit. The boundary is inclusive.
     */
    low?: ValueQuantity;
}

/**
 * Amount of medication per dose.
 *
 * A measured amount (or an amount that can potentially be measured). Note that measured
 * amounts include amounts that are not precisely quantified, including amounts involving
 * arbitrary units and floating currencies.
 *
 * The high limit. The boundary is inclusive.
 *
 * The low limit. The boundary is inclusive.
 *
 * Amount of medication per unit of time.
 *
 * The value of the denominator.
 *
 * The value of the numerator.
 *
 * Upper limit on medication per administration.
 *
 * Upper limit on medication per lifetime of the patient.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The base quantity that a measured value of zero represents. In addition, this provides
 * the units of the entire measurement series.
 *
 * A value that defines the context specified in this context of use. The interpretation of
 * the value is defined by the code.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * The maximum allowed value for the element. The value is inclusive. This is allowed for
 * the types date, dateTime, instant, time, decimal, integer, and Quantity.
 *
 * The minimum allowed value for the element. The value is inclusive. This is allowed for
 * the types date, dateTime, instant, time, decimal, integer, and Quantity.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueQuantity {
    /**
     * Extensions for code
     */
    _code?: PuneHedgehog;
    /**
     * Extensions for comparator
     */
    _comparator?: PuneHedgehog;
    /**
     * Extensions for system
     */
    _system?: PuneHedgehog;
    /**
     * Extensions for unit
     */
    _unit?: PuneHedgehog;
    /**
     * Extensions for value
     */
    _value?: PuneHedgehog;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Indicates how the medication is/was taken or should be taken by the patient.
 */
export interface DoseAndRate {
    /**
     * Amount of medication per dose.
     */
    doseQuantity?: ValueQuantity;
    /**
     * Amount of medication per dose.
     */
    doseRange?: ValueRange;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * Amount of medication per unit of time.
     */
    rateQuantity?: ValueQuantity;
    /**
     * Amount of medication per unit of time.
     */
    rateRange?: ValueRange;
    /**
     * Amount of medication per unit of time.
     */
    rateRatio?: ValueRatio;
    /**
     * The kind of dose or rate specified, for example, ordered or calculated.
     */
    type?: PurpleType;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Indicates how the medication is/was taken or should be taken by the patient.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueDosage {
    /**
     * Extensions for asNeededBoolean
     */
    _asNeededBoolean?: PuneHedgehog;
    /**
     * Extensions for patientInstruction
     */
    _patientInstruction?: PuneHedgehog;
    /**
     * Extensions for sequence
     */
    _sequence?: PuneHedgehog;
    /**
     * Extensions for text
     */
    _text?: PuneHedgehog;
    /**
     * Supplemental instructions to the patient on how to take the medication  (e.g. "with
     * meals" or"take half to one hour before food") or warnings for the patient about the
     * medication (e.g. "may cause drowsiness" or "avoid exposure of skin to direct sunlight or
     * sunlamps").
     */
    additionalInstruction?: PurpleType[];
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing
     * schedule (Boolean option), or it indicates the precondition for taking the Medication
     * (CodeableConcept).
     */
    asNeededBoolean?: boolean;
    /**
     * Indicates whether the Medication is only taken when needed within a specific dosing
     * schedule (Boolean option), or it indicates the precondition for taking the Medication
     * (CodeableConcept).
     */
    asNeededCodeableConcept?: PurpleType;
    /**
     * The amount of medication administered.
     */
    doseAndRate?: DoseAndRate[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Upper limit on medication per administration.
     */
    maxDosePerAdministration?: ValueQuantity;
    /**
     * Upper limit on medication per lifetime of the patient.
     */
    maxDosePerLifetime?: ValueQuantity;
    /**
     * Upper limit on medication per unit of time.
     */
    maxDosePerPeriod?: ValueRatio;
    /**
     * Technique for administering medication.
     */
    method?: PurpleType;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * Instructions in terms that are understood by the patient or consumer.
     */
    patientInstruction?: string;
    /**
     * How drug should enter body.
     */
    route?: PurpleType;
    /**
     * Indicates the order in which the dosage instructions should be applied or interpreted.
     */
    sequence?: number;
    /**
     * Body site to administer to.
     */
    site?: PurpleType;
    /**
     * Free text dosage instructions e.g. SIG.
     */
    text?: string;
    /**
     * When medication should be administered.
     */
    timing?: ValueTiming;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A length - a value with a unit that is a physical distance.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueDistance {
    /**
     * Extensions for code
     */
    _code?: PuneHedgehog;
    /**
     * Extensions for comparator
     */
    _comparator?: PuneHedgehog;
    /**
     * Extensions for system
     */
    _system?: PuneHedgehog;
    /**
     * Extensions for unit
     */
    _unit?: PuneHedgehog;
    /**
     * Extensions for value
     */
    _value?: PuneHedgehog;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Describes a required data item for evaluation in terms of the type of data, and optional
 * code or date-based filters of the data.
 */
export interface Sort {
    /**
     * Extensions for direction
     */
    _direction?: PuneHedgehog;
    /**
     * Extensions for path
     */
    _path?: PuneHedgehog;
    /**
     * The direction of the sort, ascending or descending.
     */
    direction?: Direction;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * The attribute of the sort. The specified path must be resolvable from the type of the
     * required data. The path is allowed to contain qualifiers (.) to traverse sub-elements, as
     * well as indexers ([x]) to traverse multiple-cardinality sub-elements. Note that the index
     * must be an integer constant.
     */
    path?: string;
}

/**
 * The value of the filter. If period is specified, the filter will return only those data
 * items that fall within the bounds determined by the Period, inclusive of the period
 * boundaries. If dateTime is specified, the filter will return only those data items that
 * are equal to the specified dateTime. If a Duration is specified, the filter will return
 * only those data items that fall within Duration before now.
 *
 * A length of time.
 *
 * Either a duration for the length of the timing schedule, a range of possible length, or
 * outer bounds for start and/or end limits of the timing schedule.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueDuration {
    /**
     * Extensions for code
     */
    _code?: PuneHedgehog;
    /**
     * Extensions for comparator
     */
    _comparator?: PuneHedgehog;
    /**
     * Extensions for system
     */
    _system?: PuneHedgehog;
    /**
     * Extensions for unit
     */
    _unit?: PuneHedgehog;
    /**
     * Extensions for value
     */
    _value?: PuneHedgehog;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Describes a required data item for evaluation in terms of the type of data, and optional
 * code or date-based filters of the data.
 */
export interface DateFilter {
    /**
     * Extensions for path
     */
    _path?: PuneHedgehog;
    /**
     * Extensions for searchParam
     */
    _searchParam?: PuneHedgehog;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: PuneHedgehog;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * The date-valued attribute of the filter. The specified path SHALL be a FHIRPath
     * resolveable on the specified type of the DataRequirement, and SHALL consist only of
     * identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers
     * (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality
     * sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     * Note that the index must be an integer constant. The path must resolve to an element of
     * type date, dateTime, Period, Schedule, or Timing.
     */
    path?: string;
    /**
     * A date parameter that refers to a search parameter defined on the specified type of the
     * DataRequirement, and which searches on elements of type date, dateTime, Period, Schedule,
     * or Timing.
     */
    searchParam?: string;
    /**
     * The value of the filter. If period is specified, the filter will return only those data
     * items that fall within the bounds determined by the Period, inclusive of the period
     * boundaries. If dateTime is specified, the filter will return only those data items that
     * are equal to the specified dateTime. If a Duration is specified, the filter will return
     * only those data items that fall within Duration before now.
     */
    valueDateTime?: string;
    /**
     * The value of the filter. If period is specified, the filter will return only those data
     * items that fall within the bounds determined by the Period, inclusive of the period
     * boundaries. If dateTime is specified, the filter will return only those data items that
     * are equal to the specified dateTime. If a Duration is specified, the filter will return
     * only those data items that fall within Duration before now.
     */
    valueDuration?: ValueDuration;
    /**
     * The value of the filter. If period is specified, the filter will return only those data
     * items that fall within the bounds determined by the Period, inclusive of the period
     * boundaries. If dateTime is specified, the filter will return only those data items that
     * are equal to the specified dateTime. If a Duration is specified, the filter will return
     * only those data items that fall within Duration before now.
     */
    valuePeriod?: Period;
}

/**
 * Describes a required data item for evaluation in terms of the type of data, and optional
 * code or date-based filters of the data.
 */
export interface CodeFilter {
    /**
     * Extensions for path
     */
    _path?: PuneHedgehog;
    /**
     * Extensions for searchParam
     */
    _searchParam?: PuneHedgehog;
    /**
     * The codes for the code filter. If values are given, the filter will return only those
     * data items for which the code-valued attribute specified by the path has a value that is
     * one of the specified codes. If codes are specified in addition to a value set, the filter
     * returns items matching a code in the value set or one of the specified codes.
     */
    code?: Coding[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * The code-valued attribute of the filter. The specified path SHALL be a FHIRPath
     * resolveable on the specified type of the DataRequirement, and SHALL consist only of
     * identifiers, constant indexers, and .resolve(). The path is allowed to contain qualifiers
     * (.) to traverse sub-elements, as well as indexers ([x]) to traverse multiple-cardinality
     * sub-elements (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     * Note that the index must be an integer constant. The path must resolve to an element of
     * type code, Coding, or CodeableConcept.
     */
    path?: string;
    /**
     * A token parameter that refers to a search parameter defined on the specified type of the
     * DataRequirement, and which searches on elements of type code, Coding, or CodeableConcept.
     */
    searchParam?: string;
    /**
     * The valueset for the code filter. The valueSet and code elements are additive. If
     * valueSet is specified, the filter will return only those data items for which the value
     * of the code-valued element specified in the path is a member of the specified valueset.
     */
    valueSet?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Describes a required data item for evaluation in terms of the type of data, and optional
 * code or date-based filters of the data.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueDataRequirement {
    /**
     * Extensions for limit
     */
    _limit?: PuneHedgehog;
    /**
     * Extensions for mustSupport
     */
    _mustSupport?: PuneHedgehog[];
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * Code filters specify additional constraints on the data, specifying the value set of
     * interest for a particular element of the data. Each code filter defines an additional
     * constraint on the data, i.e. code filters are AND'ed, not OR'ed.
     */
    codeFilter?: CodeFilter[];
    /**
     * Date filters specify additional constraints on the data in terms of the applicable date
     * range for specific elements. Each date filter specifies an additional constraint on the
     * data, i.e. date filters are AND'ed, not OR'ed.
     */
    dateFilter?: DateFilter[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Specifies a maximum number of results that are required (uses the _count search
     * parameter).
     */
    limit?: number;
    /**
     * Indicates that specific elements of the type are referenced by the knowledge module and
     * must be supported by the consumer in order to obtain an effective evaluation. This does
     * not mean that a value is required for this element, only that the consuming system must
     * understand the element and be able to provide values for it if they are available.
     *
     * The value of mustSupport SHALL be a FHIRPath resolveable on the type of the
     * DataRequirement. The path SHALL consist only of identifiers, constant indexers, and
     * .resolve() (see the [Simple FHIRPath Profile](fhirpath.html#simple) for full details).
     */
    mustSupport?: string[];
    /**
     * The profile of the required data, specified as the uri of the profile definition.
     */
    profile?: string[];
    /**
     * Specifies the order of the results to be returned.
     */
    sort?: Sort[];
    /**
     * The intended subjects of the data requirement. If this element is not provided, a Patient
     * subject is assumed.
     */
    subjectCodeableConcept?: PurpleType;
    /**
     * The intended subjects of the data requirement. If this element is not provided, a Patient
     * subject is assumed.
     */
    subjectReference?: AuthorReference;
    /**
     * The type of the required data, specified as the type name of a resource. For profiles,
     * this value is set to the type of the base resource of the profile.
     */
    type?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A measured amount (or an amount that can potentially be measured). Note that measured
 * amounts include amounts that are not precisely quantified, including amounts involving
 * arbitrary units and floating currencies.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueCount {
    /**
     * Extensions for code
     */
    _code?: PuneHedgehog;
    /**
     * Extensions for comparator
     */
    _comparator?: PuneHedgehog;
    /**
     * Extensions for system
     */
    _system?: PuneHedgehog;
    /**
     * Extensions for unit
     */
    _unit?: PuneHedgehog;
    /**
     * Extensions for value
     */
    _value?: PuneHedgehog;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A contributor to the content of a knowledge asset, including authors, editors, reviewers,
 * and endorsers.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueContributor {
    /**
     * Extensions for name
     */
    _name?: PuneHedgehog;
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * Contact details to assist a user in finding and communicating with the contributor.
     */
    contact?: ValueContactDetail[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The name of the individual or organization responsible for the contribution.
     */
    name?: string;
    /**
     * The type of contributor.
     */
    type?: ValueContributorType;
}

/**
 * Details for all kinds of technology mediated contact points for a person or organization,
 * including telephone, email, etc.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueContactPoint {
    /**
     * Extensions for rank
     */
    _rank?: PuneHedgehog;
    /**
     * Extensions for system
     */
    _system?: PuneHedgehog;
    /**
     * Extensions for use
     */
    _use?: PuneHedgehog;
    /**
     * Extensions for value
     */
    _value?: PuneHedgehog;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Time period when the contact point was/is in use.
     */
    period?: Period;
    /**
     * Specifies a preferred order in which to use a set of contacts. ContactPoints with lower
     * rank values are more preferred than those with higher rank values.
     */
    rank?: number;
    /**
     * Telecommunications form for contact point - what communications system is required to
     * make use of the contact.
     */
    system?: System;
    /**
     * Identifies the purpose for the contact point.
     */
    use?: ValueContactPointUse;
    /**
     * The actual contact point details, in a form that is meaningful to the designated
     * communication system (i.e. phone number or email address).
     */
    value?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Specifies contact information for a person or organization.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueContactDetail {
    /**
     * Extensions for name
     */
    _name?: PuneHedgehog;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The name of an individual to contact.
     */
    name?: string;
    /**
     * The contact details for the individual (if a name was provided) or the organization.
     */
    telecom?: ValueContactPoint[];
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * For referring to data content defined in other formats.
 *
 * The document being referenced, represented as an attachment. This is exclusive with the
 * resource element.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueAttachment {
    /**
     * Extensions for contentType
     */
    _contentType?: PuneHedgehog;
    /**
     * Extensions for creation
     */
    _creation?: PuneHedgehog;
    /**
     * Extensions for data
     */
    _data?: PuneHedgehog;
    /**
     * Extensions for hash
     */
    _hash?: PuneHedgehog;
    /**
     * Extensions for language
     */
    _language?: PuneHedgehog;
    /**
     * Extensions for size
     */
    _size?: PuneHedgehog;
    /**
     * Extensions for title
     */
    _title?: PuneHedgehog;
    /**
     * Extensions for url
     */
    _url?: PuneHedgehog;
    /**
     * Identifies the type of the data in the attachment and allows a method to be chosen to
     * interpret or render the data. Includes mime type parameters such as charset where
     * appropriate.
     */
    contentType?: string;
    /**
     * The date that the attachment was first created.
     */
    creation?: string;
    /**
     * The actual data of the attachment - a sequence of bytes, base64 encoded.
     */
    data?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * The calculated hash of the data using SHA-1. Represented using base64.
     */
    hash?: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The human language of the content. The value can be any valid value according to BCP 47.
     */
    language?: string;
    /**
     * The number of bytes of data that make up this attachment (before base64 encoding, if that
     * is done).
     */
    size?: number;
    /**
     * A label or set of text to display in place of the data.
     */
    title?: string;
    /**
     * A location where the data can be accessed.
     */
    url?: string;
}

/**
 * A reference to a code defined by a terminology system.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A code that identifies the type of context being specified by this usage context.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface Coding {
    /**
     * Extensions for code
     */
    _code?: PuneHedgehog;
    /**
     * Extensions for display
     */
    _display?: PuneHedgehog;
    /**
     * Extensions for system
     */
    _system?: PuneHedgehog;
    /**
     * Extensions for userSelected
     */
    _userSelected?: PuneHedgehog;
    /**
     * Extensions for version
     */
    _version?: PuneHedgehog;
    /**
     * A symbol in syntax defined by the system. The symbol may be a predefined code or an
     * expression in a syntax defined by the coding system (e.g. post-coordination).
     */
    code?: string;
    /**
     * A representation of the meaning of the code in the system, following the rules of the
     * system.
     */
    display?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The identification of the code system that defines the meaning of the symbol in the code.
     */
    system?: string;
    /**
     * Indicates that this coding was chosen by a user directly - e.g. off a pick list of
     * available items (codes or displays).
     */
    userSelected?: boolean;
    /**
     * The version of the code system which was used when choosing this code. Note that a
     * well-maintained code system does not need the version reported, because the meaning of
     * codes is consistent across versions. However this cannot consistently be assured, and
     * when the meaning is not guaranteed to be consistent, the version SHOULD be exchanged.
     */
    version?: string;
}

/**
 * A coded type for the identifier that can be used to determine which identifier to use for
 * a specific purpose.
 *
 * A concept that may be defined by a formal reference to a terminology or ontology or may
 * be provided by text.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The intended subjects of the data requirement. If this element is not provided, a Patient
 * subject is assumed.
 *
 * Indicates whether the Medication is only taken when needed within a specific dosing
 * schedule (Boolean option), or it indicates the precondition for taking the Medication
 * (CodeableConcept).
 *
 * The kind of dose or rate specified, for example, ordered or calculated.
 *
 * Technique for administering medication.
 *
 * How drug should enter body.
 *
 * Body site to administer to.
 *
 * A code for the timing schedule (or just text in code.text). Some codes such as BID are
 * ubiquitous, but many institutions define their own additional codes. If a code is
 * provided, the code is understood to be a complete statement of whatever is specified in
 * the structured timing data, and either the code or the data may be used to interpret the
 * Timing, with the exception that .repeat.bounds still applies over the code (and is not
 * contained in the code).
 *
 * A value that defines the context specified in this context of use. The interpretation of
 * the value is defined by the code.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface PurpleType {
    /**
     * Extensions for text
     */
    _text?: PuneHedgehog;
    /**
     * A reference to a code defined by a terminology system.
     */
    coding?: Coding[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * A human language representation of the concept as seen/selected/uttered by the user who
     * entered the data and/or which represents the intended meaning of the user.
     */
    text?: string;
}

/**
 * An identifier for the target resource. This is used when there is no way to reference the
 * other resource directly, either because the entity it represents is not available through
 * a FHIR server, or because there is no way for the author of the resource to convert a
 * known identifier to an actual location. There is no requirement that a
 * Reference.identifier point to something that is actually exposed as a FHIR instance, but
 * it SHALL point to a business concept that would be expected to be exposed as a FHIR
 * instance, and that instance would need to be of a FHIR resource type allowed by the
 * reference.
 *
 * An identifier - identifies some entity uniquely and unambiguously. Typically this is used
 * for business identifiers.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface Identifier {
    /**
     * Extensions for system
     */
    _system?: PuneHedgehog;
    /**
     * Extensions for use
     */
    _use?: PuneHedgehog;
    /**
     * Extensions for value
     */
    _value?: PuneHedgehog;
    /**
     * Organization that issued/manages the identifier.
     */
    assigner?: AuthorReference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Time period during which identifier is/was valid for use.
     */
    period?: Period;
    /**
     * Establishes the namespace for the value - that is, a URL that describes a set values that
     * are unique.
     */
    system?: string;
    /**
     * A coded type for the identifier that can be used to determine which identifier to use for
     * a specific purpose.
     */
    type?: PurpleType;
    /**
     * The purpose of this identifier.
     */
    use?: IdentifierUse;
    /**
     * The portion of the identifier typically relevant to the user and which is unique within
     * the context of the system.
     */
    value?: string;
}

/**
 * The individual responsible for making the annotation.
 *
 * A reference from one resource to another.
 *
 * Organization that issued/manages the identifier.
 *
 * The intended subjects of the data requirement. If this element is not provided, a Patient
 * subject is assumed.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A reference to an application-usable description of the identity that is represented by
 * the signature.
 *
 * A reference to an application-usable description of the identity that signed  (e.g. the
 * signature used their private key).
 *
 * The timing of the event (if this is a periodic trigger).
 *
 * A value that defines the context specified in this context of use. The interpretation of
 * the value is defined by the code.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface AuthorReference {
    /**
     * Extensions for display
     */
    _display?: PuneHedgehog;
    /**
     * Extensions for reference
     */
    _reference?: PuneHedgehog;
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * Plain text narrative that identifies the resource in addition to the resource reference.
     */
    display?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * An identifier for the target resource. This is used when there is no way to reference the
     * other resource directly, either because the entity it represents is not available through
     * a FHIR server, or because there is no way for the author of the resource to convert a
     * known identifier to an actual location. There is no requirement that a
     * Reference.identifier point to something that is actually exposed as a FHIR instance, but
     * it SHALL point to a business concept that would be expected to be exposed as a FHIR
     * instance, and that instance would need to be of a FHIR resource type allowed by the
     * reference.
     */
    identifier?: Identifier;
    /**
     * A reference to a location at which the other resource is found. The reference may be a
     * relative reference, in which case it is relative to the service base URL, or an absolute
     * URL that resolves to the location where the resource is found. The reference may be
     * version specific or not. If the reference is not to a FHIR RESTful server, then it should
     * be assumed to be version specific. Internal fragment references (start with '#') refer to
     * contained resources.
     */
    reference?: string;
    /**
     * The expected type of the target of the reference. If both Reference.type and
     * Reference.reference are populated and Reference.reference is a FHIR URL, both SHALL be
     * consistent.
     *
     * The type is the Canonical URL of Resource Definition that is the type this reference
     * refers to. References are URLs that are relative to
     * http://hl7.org/fhir/StructureDefinition/ e.g. "Patient" is a reference to
     * http://hl7.org/fhir/StructureDefinition/Patient. Absolute URLs are only allowed for
     * logical models (and can only be used in references in logical models, not resources).
     */
    type?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A  text note which also  contains information about who made the statement and when.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueAnnotation {
    /**
     * Extensions for authorString
     */
    _authorString?: PuneHedgehog;
    /**
     * Extensions for text
     */
    _text?: PuneHedgehog;
    /**
     * Extensions for time
     */
    _time?: PuneHedgehog;
    /**
     * The individual responsible for making the annotation.
     */
    authorReference?: AuthorReference;
    /**
     * The individual responsible for making the annotation.
     */
    authorString?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The text of the annotation in markdown format.
     */
    text?: string;
    /**
     * Indicates when this particular annotation was made.
     */
    time?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * A duration of time during which an organism (or a process) has existed.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueAge {
    /**
     * Extensions for code
     */
    _code?: PuneHedgehog;
    /**
     * Extensions for comparator
     */
    _comparator?: PuneHedgehog;
    /**
     * Extensions for system
     */
    _system?: PuneHedgehog;
    /**
     * Extensions for unit
     */
    _unit?: PuneHedgehog;
    /**
     * Extensions for value
     */
    _value?: PuneHedgehog;
    /**
     * A computer processable form of the unit in some unit representation system.
     */
    code?: string;
    /**
     * How the value should be understood and represented - whether the actual value is greater
     * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
     * then the real value is < stated value.
     */
    comparator?: Comparator;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The identification of the system that provides the coded form of the unit.
     */
    system?: string;
    /**
     * A human-readable form of the unit.
     */
    unit?: string;
    /**
     * The value of the measured amount. The value includes an implicit precision in the
     * presentation of the value.
     */
    value?: number;
}

/**
 * Time period when address was/is in use.
 *
 * A time period defined by a start and end date and optionally time.
 *
 * Time period during which identifier is/was valid for use.
 *
 * Time period when the contact point was/is in use.
 *
 * The value of the filter. If period is specified, the filter will return only those data
 * items that fall within the bounds determined by the Period, inclusive of the period
 * boundaries. If dateTime is specified, the filter will return only those data items that
 * are equal to the specified dateTime. If a Duration is specified, the filter will return
 * only those data items that fall within Duration before now.
 *
 * Either a duration for the length of the timing schedule, a range of possible length, or
 * outer bounds for start and/or end limits of the timing schedule.
 *
 * Indicates the period of time when this name was valid for the named person.
 *
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface Period {
    /**
     * Extensions for end
     */
    _end?: PuneHedgehog;
    /**
     * Extensions for start
     */
    _start?: PuneHedgehog;
    /**
     * The end of the period. If the end of the period is missing, it means no end was known or
     * planned at the time the instance was created. The start may be in the past, and the end
     * date in the future, which means that period is expected/planned to end at that time.
     */
    end?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The start of the period. The boundary is inclusive.
     */
    start?: string;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * An address expressed using postal conventions (as opposed to GPS or other location
 * definition formats).  This data type may be used to convey addresses for use in
 * delivering mail as well as for visiting locations which might not be valid for mail
 * delivery.  There are a variety of postal address formats defined around the world.
 *
 * The value that should be used if there is no value stated in the instance (e.g. 'if not
 * otherwise specified, the abstract is false').
 *
 * The actual value for the element, which must be one of the types allowed for this
 * element.
 *
 * Specifies a value that SHALL be exactly the value  for this element in the instance. For
 * purposes of comparison, non-significant whitespace is ignored, and all values must be an
 * exact match (case and accent sensitive). Missing elements/attributes must also be
 * missing.
 *
 * Specifies a value that the value in the instance SHALL follow - that is, any value in the
 * pattern must be found in the instance. Other additional values may be found too. This is
 * effectively constraint by example.
 *
 * When pattern[x] is used to constrain a primitive, it means that the value provided in the
 * pattern[x] must match the instance value exactly.
 *
 * When pattern[x] is used to constrain an array, it means that each element provided in the
 * pattern[x] array must (recursively) match at least one element from the instance array.
 *
 * When pattern[x] is used to constrain a complex object, it means that each property in the
 * pattern must be present in the complex object, and its value must recursively match --
 * i.e.,
 *
 * 1. If primitive: it must match exactly the pattern value
 * 2. If a complex object: it must match (recursively) the pattern value
 * 3. If an array: it must match (recursively) the pattern value.
 */
export interface ValueAddress {
    /**
     * Extensions for city
     */
    _city?: PuneHedgehog;
    /**
     * Extensions for country
     */
    _country?: PuneHedgehog;
    /**
     * Extensions for district
     */
    _district?: PuneHedgehog;
    /**
     * Extensions for line
     */
    _line?: PuneHedgehog[];
    /**
     * Extensions for postalCode
     */
    _postalCode?: PuneHedgehog;
    /**
     * Extensions for state
     */
    _state?: PuneHedgehog;
    /**
     * Extensions for text
     */
    _text?: PuneHedgehog;
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * Extensions for use
     */
    _use?: PuneHedgehog;
    /**
     * The name of the city, town, suburb, village or other community or delivery center.
     */
    city?: string;
    /**
     * Country - a nation as commonly understood or generally accepted.
     */
    country?: string;
    /**
     * The name of the administrative area (county).
     */
    district?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * This component contains the house number, apartment number, street name, street
     * direction,  P.O. Box number, delivery hints, and similar address information.
     */
    line?: string[];
    /**
     * Time period when address was/is in use.
     */
    period?: Period;
    /**
     * A postal code designating a region defined by the postal service.
     */
    postalCode?: string;
    /**
     * Sub-unit of a country with limited sovereignty in a federally organized country. A code
     * may be used if codes are in common use (e.g. US 2 letter state codes).
     */
    state?: string;
    /**
     * Specifies the entire address as it should be displayed e.g. on a postal label. This may
     * be provided instead of or as well as the specific parts.
     */
    text?: string;
    /**
     * Distinguishes between physical addresses (those you can visit) and mailing addresses
     * (e.g. PO Boxes and care-of addresses). Most addresses are both.
     */
    type?: ValueAddressType;
    /**
     * The purpose of this address.
     */
    use?: ValueAddressUse;
}

/**
 * Optional Extension Element - found in all resources.
 */
export interface Extension {
    /**
     * Extensions for url
     */
    _url?: PuneHedgehog;
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: PuneHedgehog;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: PuneHedgehog;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: PuneHedgehog;
    /**
     * Extensions for valueCode
     */
    _valueCode?: PuneHedgehog;
    /**
     * Extensions for valueDate
     */
    _valueDate?: PuneHedgehog;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: PuneHedgehog;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: PuneHedgehog;
    /**
     * Extensions for valueId
     */
    _valueId?: PuneHedgehog;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: PuneHedgehog;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: PuneHedgehog;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: PuneHedgehog;
    /**
     * Extensions for valueOid
     */
    _valueOid?: PuneHedgehog;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: PuneHedgehog;
    /**
     * Extensions for valueString
     */
    _valueString?: PuneHedgehog;
    /**
     * Extensions for valueTime
     */
    _valueTime?: PuneHedgehog;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: PuneHedgehog;
    /**
     * Extensions for valueUri
     */
    _valueUri?: PuneHedgehog;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: PuneHedgehog;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: PuneHedgehog;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Source of the definition for the extension code - a logical name or a URL.
     */
    url?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueAddress?: ValueAddress;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueAge?: ValueAge;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueAnnotation?: ValueAnnotation;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueAttachment?: ValueAttachment;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueBase64Binary?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueBoolean?: boolean;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCanonical?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCode?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCodeableConcept?: PurpleType;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCoding?: Coding;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueContactDetail?: ValueContactDetail;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueContactPoint?: ValueContactPoint;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueContributor?: ValueContributor;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueCount?: ValueCount;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDataRequirement?: ValueDataRequirement;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDate?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDateTime?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDecimal?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDistance?: ValueDistance;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDosage?: ValueDosage;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueDuration?: ValueDuration;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueExpression?: ValueExpression;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueHumanName?: ValueHumanName;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueId?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueIdentifier?: Identifier;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueInstant?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueInteger?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueMarkdown?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueMoney?: ValueMoney;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueOid?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueParameterDefinition?: ValueParameterDefinition;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valuePeriod?: Period;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valuePositiveInt?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueQuantity?: ValueQuantity;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueRange?: ValueRange;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueRatio?: ValueRatio;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueReference?: AuthorReference;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueRelatedArtifact?: ValueRelatedArtifact;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueSampledData?: ValueSampledData;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueSignature?: ValueSignature;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueString?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueTime?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueTiming?: ValueTiming;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueTriggerDefinition?: ValueTriggerDefinition;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUnsignedInt?: number;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUri?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUrl?: string;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUsageContext?: ValueUsageContext;
    /**
     * Value of extension - must be one of a constrained set of the data types (see
     * [Extensibility](extensibility.html) for a list).
     */
    valueUuid?: string;
}

/**
 * Extensions for abstract
 *
 * Base definition for all elements in a resource.
 *
 * Extensions for url
 *
 * Extensions for valueBase64Binary
 *
 * Extensions for valueBoolean
 *
 * Extensions for valueCanonical
 *
 * Extensions for valueCode
 *
 * Extensions for valueDate
 *
 * Extensions for valueDateTime
 *
 * Extensions for valueDecimal
 *
 * Extensions for valueId
 *
 * Extensions for valueInstant
 *
 * Extensions for valueInteger
 *
 * Extensions for valueMarkdown
 *
 * Extensions for valueOid
 *
 * Extensions for valuePositiveInt
 *
 * Extensions for valueString
 *
 * Extensions for valueTime
 *
 * Extensions for valueUnsignedInt
 *
 * Extensions for valueUri
 *
 * Extensions for valueUrl
 *
 * Extensions for valueUuid
 *
 * Extensions for city
 *
 * Extensions for country
 *
 * Extensions for district
 *
 * Extensions for postalCode
 *
 * Extensions for state
 *
 * Extensions for text
 *
 * Extensions for type
 *
 * Extensions for use
 *
 * Extensions for end
 *
 * Extensions for start
 *
 * Extensions for code
 *
 * Extensions for comparator
 *
 * Extensions for system
 *
 * Extensions for unit
 *
 * Extensions for value
 *
 * Extensions for authorString
 *
 * Extensions for time
 *
 * Extensions for display
 *
 * Extensions for reference
 *
 * Extensions for userSelected
 *
 * Extensions for version
 *
 * Extensions for contentType
 *
 * Extensions for creation
 *
 * Extensions for data
 *
 * Extensions for hash
 *
 * Extensions for language
 *
 * Extensions for size
 *
 * Extensions for title
 *
 * Extensions for name
 *
 * Extensions for rank
 *
 * Extensions for limit
 *
 * Extensions for path
 *
 * Extensions for searchParam
 *
 * Extensions for direction
 *
 * Extensions for asNeededBoolean
 *
 * Extensions for patientInstruction
 *
 * Extensions for sequence
 *
 * Extensions for count
 *
 * Extensions for countMax
 *
 * Extensions for duration
 *
 * Extensions for durationMax
 *
 * Extensions for durationUnit
 *
 * Extensions for frequency
 *
 * Extensions for frequencyMax
 *
 * Extensions for offset
 *
 * Extensions for period
 *
 * Extensions for periodMax
 *
 * Extensions for periodUnit
 *
 * Extensions for description
 *
 * Extensions for expression
 *
 * Extensions for family
 *
 * Extensions for currency
 *
 * Extensions for documentation
 *
 * Extensions for max
 *
 * Extensions for min
 *
 * Extensions for citation
 *
 * Extensions for label
 *
 * Extensions for dimensions
 *
 * Extensions for factor
 *
 * Extensions for lowerLimit
 *
 * Extensions for upperLimit
 *
 * Extensions for sigFormat
 *
 * Extensions for targetFormat
 *
 * Extensions for when
 *
 * Extensions for timingDate
 *
 * Extensions for timingDateTime
 *
 * Extensions for copyright
 *
 * Extensions for date
 *
 * Extensions for derivation
 *
 * Extensions for experimental
 *
 * Extensions for fhirVersion
 *
 * Extensions for implicitRules
 *
 * Extensions for kind
 *
 * Extensions for publisher
 *
 * Extensions for purpose
 *
 * Extensions for status
 *
 * Extensions for comment
 *
 * Extensions for contentReference
 *
 * Extensions for defaultValueBase64Binary
 *
 * Extensions for defaultValueBoolean
 *
 * Extensions for defaultValueCanonical
 *
 * Extensions for defaultValueCode
 *
 * Extensions for defaultValueDate
 *
 * Extensions for defaultValueDateTime
 *
 * Extensions for defaultValueDecimal
 *
 * Extensions for defaultValueId
 *
 * Extensions for defaultValueInstant
 *
 * Extensions for defaultValueInteger
 *
 * Extensions for defaultValueMarkdown
 *
 * Extensions for defaultValueOid
 *
 * Extensions for defaultValuePositiveInt
 *
 * Extensions for defaultValueString
 *
 * Extensions for defaultValueTime
 *
 * Extensions for defaultValueUnsignedInt
 *
 * Extensions for defaultValueUri
 *
 * Extensions for defaultValueUrl
 *
 * Extensions for defaultValueUuid
 *
 * Extensions for definition
 *
 * Extensions for fixedBase64Binary
 *
 * Extensions for fixedBoolean
 *
 * Extensions for fixedCanonical
 *
 * Extensions for fixedCode
 *
 * Extensions for fixedDate
 *
 * Extensions for fixedDateTime
 *
 * Extensions for fixedDecimal
 *
 * Extensions for fixedId
 *
 * Extensions for fixedInstant
 *
 * Extensions for fixedInteger
 *
 * Extensions for fixedMarkdown
 *
 * Extensions for fixedOid
 *
 * Extensions for fixedPositiveInt
 *
 * Extensions for fixedString
 *
 * Extensions for fixedTime
 *
 * Extensions for fixedUnsignedInt
 *
 * Extensions for fixedUri
 *
 * Extensions for fixedUrl
 *
 * Extensions for fixedUuid
 *
 * Extensions for isModifier
 *
 * Extensions for isModifierReason
 *
 * Extensions for isSummary
 *
 * Extensions for maxLength
 *
 * Extensions for maxValueDate
 *
 * Extensions for maxValueDateTime
 *
 * Extensions for maxValueDecimal
 *
 * Extensions for maxValueInstant
 *
 * Extensions for maxValueInteger
 *
 * Extensions for maxValuePositiveInt
 *
 * Extensions for maxValueTime
 *
 * Extensions for maxValueUnsignedInt
 *
 * Extensions for meaningWhenMissing
 *
 * Extensions for minValueDate
 *
 * Extensions for minValueDateTime
 *
 * Extensions for minValueDecimal
 *
 * Extensions for minValueInstant
 *
 * Extensions for minValueInteger
 *
 * Extensions for minValuePositiveInt
 *
 * Extensions for minValueTime
 *
 * Extensions for minValueUnsignedInt
 *
 * Extensions for mustSupport
 *
 * Extensions for orderMeaning
 *
 * Extensions for patternBase64Binary
 *
 * Extensions for patternBoolean
 *
 * Extensions for patternCanonical
 *
 * Extensions for patternCode
 *
 * Extensions for patternDate
 *
 * Extensions for patternDateTime
 *
 * Extensions for patternDecimal
 *
 * Extensions for patternId
 *
 * Extensions for patternInstant
 *
 * Extensions for patternInteger
 *
 * Extensions for patternMarkdown
 *
 * Extensions for patternOid
 *
 * Extensions for patternPositiveInt
 *
 * Extensions for patternString
 *
 * Extensions for patternTime
 *
 * Extensions for patternUnsignedInt
 *
 * Extensions for patternUri
 *
 * Extensions for patternUrl
 *
 * Extensions for patternUuid
 *
 * Extensions for requirements
 *
 * Extensions for short
 *
 * Extensions for sliceIsConstraining
 *
 * Extensions for sliceName
 *
 * Extensions for strength
 *
 * Extensions for human
 *
 * Extensions for key
 *
 * Extensions for severity
 *
 * Extensions for xpath
 *
 * Extensions for identity
 *
 * Extensions for map
 *
 * Extensions for ordered
 *
 * Extensions for rules
 *
 * Extensions for versioning
 *
 * Extensions for uri
 *
 * Extensions for lastUpdated
 *
 * Extensions for source
 *
 * Extensions for versionId
 */
export interface PuneHedgehog {
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
}

/**
 * The type of triggering event.
 */
export enum ValueTriggerDefinitionType {
    DataAccessEnded = "data-access-ended",
    DataAccessed = "data-accessed",
    DataAdded = "data-added",
    DataChanged = "data-changed",
    DataModified = "data-modified",
    DataRemoved = "data-removed",
    NamedEvent = "named-event",
    Periodic = "periodic",
}

/**
 * The type of relationship to the related artifact.
 */
export enum ValueRelatedArtifactType {
    Citation = "citation",
    ComposedOf = "composed-of",
    DependsOn = "depends-on",
    DerivedFrom = "derived-from",
    Documentation = "documentation",
    Justification = "justification",
    Predecessor = "predecessor",
    Successor = "successor",
}

/**
 * Identifies the purpose for this name.
 */
export enum ValueHumanNameUse {
    Anonymous = "anonymous",
    Maiden = "maiden",
    Nickname = "nickname",
    Official = "official",
    Old = "old",
    Temp = "temp",
    Usual = "usual",
}

/**
 * The media type of the language for the expression.
 */
export enum Language {
    ApplicationXFhirQuery = "application/x-fhir-query",
    TextCql = "text/cql",
    TextFhirpath = "text/fhirpath",
}

/**
 * The units of time for the duration, in UCUM units.
 *
 * The units of time for the period in UCUM units.
 */
export enum Unit {
    A = "a",
    D = "d",
    H = "h",
    Min = "min",
    Mo = "mo",
    S = "s",
    Wk = "wk",
}

export enum When {
    AC = "AC",
    ACD = "ACD",
    ACM = "ACM",
    AFTEarly = "AFT.early",
    AFTLate = "AFT.late",
    Acv = "ACV",
    Aft = "AFT",
    C = "C",
    CD = "CD",
    CM = "CM",
    Cv = "CV",
    EVEEarly = "EVE.early",
    EVELate = "EVE.late",
    Eve = "EVE",
    Hs = "HS",
    MORNEarly = "MORN.early",
    MORNLate = "MORN.late",
    Morn = "MORN",
    Night = "NIGHT",
    Noon = "NOON",
    PC = "PC",
    PCM = "PCM",
    Pcd = "PCD",
    Pcv = "PCV",
    Phs = "PHS",
    Wake = "WAKE",
}

/**
 * How the value should be understood and represented - whether the actual value is greater
 * or less than the stated value due to measurement issues; e.g. if the comparator is "<" ,
 * then the real value is < stated value.
 */
export enum Comparator {
    Comparator = "<=",
    Empty = "<",
    Fluffy = ">",
    Purple = ">=",
}

/**
 * The direction of the sort, ascending or descending.
 */
export enum Direction {
    Ascending = "ascending",
    Descending = "descending",
}

/**
 * The type of contributor.
 */
export enum ValueContributorType {
    Author = "author",
    Editor = "editor",
    Endorser = "endorser",
    Reviewer = "reviewer",
}

/**
 * Telecommunications form for contact point - what communications system is required to
 * make use of the contact.
 */
export enum System {
    Email = "email",
    Fax = "fax",
    Other = "other",
    Pager = "pager",
    Phone = "phone",
    SMS = "sms",
    URL = "url",
}

/**
 * Identifies the purpose for the contact point.
 */
export enum ValueContactPointUse {
    Home = "home",
    Mobile = "mobile",
    Old = "old",
    Temp = "temp",
    Work = "work",
}

/**
 * The purpose of this identifier.
 */
export enum IdentifierUse {
    Official = "official",
    Old = "old",
    Secondary = "secondary",
    Temp = "temp",
    Usual = "usual",
}

/**
 * Distinguishes between physical addresses (those you can visit) and mailing addresses
 * (e.g. PO Boxes and care-of addresses). Most addresses are both.
 */
export enum ValueAddressType {
    Both = "both",
    Physical = "physical",
    Postal = "postal",
}

/**
 * The purpose of this address.
 */
export enum ValueAddressUse {
    Billing = "billing",
    Home = "home",
    Old = "old",
    Temp = "temp",
    Work = "work",
}

/**
 * A definition of a FHIR structure. This resource is used to describe the underlying
 * resources, data types defined in FHIR, and also for describing extensions and constraints
 * on resources and data types.
 */
export interface Context {
    /**
     * Extensions for expression
     */
    _expression?: PuneHedgehog;
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * An expression that defines where an extension can be used in resources.
     */
    expression?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * Defines how to interpret the expression that defines what the context of the extension is.
     */
    type?: ContextType;
}

/**
 * Defines how to interpret the expression that defines what the context of the extension is.
 */
export enum ContextType {
    Element = "element",
    Extension = "extension",
    Fhirpath = "fhirpath",
}

/**
 * How the type relates to the baseDefinition.
 */
export enum Derivation {
    Constraint = "constraint",
    Specialization = "specialization",
}

/**
 * A differential view is expressed relative to the base StructureDefinition - a statement
 * of differences that it applies.
 *
 * A definition of a FHIR structure. This resource is used to describe the underlying
 * resources, data types defined in FHIR, and also for describing extensions and constraints
 * on resources and data types.
 */
export interface Differential {
    /**
     * Captures constraints on each element within the resource.
     */
    element: Element[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface Element {
    /**
     * Extensions for alias
     */
    _alias?: PuneHedgehog[];
    /**
     * Extensions for comment
     */
    _comment?: PuneHedgehog;
    /**
     * Extensions for condition
     */
    _condition?: PuneHedgehog[];
    /**
     * Extensions for contentReference
     */
    _contentReference?: PuneHedgehog;
    /**
     * Extensions for defaultValueBase64Binary
     */
    _defaultValueBase64Binary?: PuneHedgehog;
    /**
     * Extensions for defaultValueBoolean
     */
    _defaultValueBoolean?: PuneHedgehog;
    /**
     * Extensions for defaultValueCanonical
     */
    _defaultValueCanonical?: PuneHedgehog;
    /**
     * Extensions for defaultValueCode
     */
    _defaultValueCode?: PuneHedgehog;
    /**
     * Extensions for defaultValueDate
     */
    _defaultValueDate?: PuneHedgehog;
    /**
     * Extensions for defaultValueDateTime
     */
    _defaultValueDateTime?: PuneHedgehog;
    /**
     * Extensions for defaultValueDecimal
     */
    _defaultValueDecimal?: PuneHedgehog;
    /**
     * Extensions for defaultValueId
     */
    _defaultValueId?: PuneHedgehog;
    /**
     * Extensions for defaultValueInstant
     */
    _defaultValueInstant?: PuneHedgehog;
    /**
     * Extensions for defaultValueInteger
     */
    _defaultValueInteger?: PuneHedgehog;
    /**
     * Extensions for defaultValueMarkdown
     */
    _defaultValueMarkdown?: PuneHedgehog;
    /**
     * Extensions for defaultValueOid
     */
    _defaultValueOid?: PuneHedgehog;
    /**
     * Extensions for defaultValuePositiveInt
     */
    _defaultValuePositiveInt?: PuneHedgehog;
    /**
     * Extensions for defaultValueString
     */
    _defaultValueString?: PuneHedgehog;
    /**
     * Extensions for defaultValueTime
     */
    _defaultValueTime?: PuneHedgehog;
    /**
     * Extensions for defaultValueUnsignedInt
     */
    _defaultValueUnsignedInt?: PuneHedgehog;
    /**
     * Extensions for defaultValueUri
     */
    _defaultValueUri?: PuneHedgehog;
    /**
     * Extensions for defaultValueUrl
     */
    _defaultValueUrl?: PuneHedgehog;
    /**
     * Extensions for defaultValueUuid
     */
    _defaultValueUuid?: PuneHedgehog;
    /**
     * Extensions for definition
     */
    _definition?: PuneHedgehog;
    /**
     * Extensions for fixedBase64Binary
     */
    _fixedBase64Binary?: PuneHedgehog;
    /**
     * Extensions for fixedBoolean
     */
    _fixedBoolean?: PuneHedgehog;
    /**
     * Extensions for fixedCanonical
     */
    _fixedCanonical?: PuneHedgehog;
    /**
     * Extensions for fixedCode
     */
    _fixedCode?: PuneHedgehog;
    /**
     * Extensions for fixedDate
     */
    _fixedDate?: PuneHedgehog;
    /**
     * Extensions for fixedDateTime
     */
    _fixedDateTime?: PuneHedgehog;
    /**
     * Extensions for fixedDecimal
     */
    _fixedDecimal?: PuneHedgehog;
    /**
     * Extensions for fixedId
     */
    _fixedId?: PuneHedgehog;
    /**
     * Extensions for fixedInstant
     */
    _fixedInstant?: PuneHedgehog;
    /**
     * Extensions for fixedInteger
     */
    _fixedInteger?: PuneHedgehog;
    /**
     * Extensions for fixedMarkdown
     */
    _fixedMarkdown?: PuneHedgehog;
    /**
     * Extensions for fixedOid
     */
    _fixedOid?: PuneHedgehog;
    /**
     * Extensions for fixedPositiveInt
     */
    _fixedPositiveInt?: PuneHedgehog;
    /**
     * Extensions for fixedString
     */
    _fixedString?: PuneHedgehog;
    /**
     * Extensions for fixedTime
     */
    _fixedTime?: PuneHedgehog;
    /**
     * Extensions for fixedUnsignedInt
     */
    _fixedUnsignedInt?: PuneHedgehog;
    /**
     * Extensions for fixedUri
     */
    _fixedUri?: PuneHedgehog;
    /**
     * Extensions for fixedUrl
     */
    _fixedUrl?: PuneHedgehog;
    /**
     * Extensions for fixedUuid
     */
    _fixedUuid?: PuneHedgehog;
    /**
     * Extensions for isModifier
     */
    _isModifier?: PuneHedgehog;
    /**
     * Extensions for isModifierReason
     */
    _isModifierReason?: PuneHedgehog;
    /**
     * Extensions for isSummary
     */
    _isSummary?: PuneHedgehog;
    /**
     * Extensions for label
     */
    _label?: PuneHedgehog;
    /**
     * Extensions for max
     */
    _max?: PuneHedgehog;
    /**
     * Extensions for maxLength
     */
    _maxLength?: PuneHedgehog;
    /**
     * Extensions for maxValueDate
     */
    _maxValueDate?: PuneHedgehog;
    /**
     * Extensions for maxValueDateTime
     */
    _maxValueDateTime?: PuneHedgehog;
    /**
     * Extensions for maxValueDecimal
     */
    _maxValueDecimal?: PuneHedgehog;
    /**
     * Extensions for maxValueInstant
     */
    _maxValueInstant?: PuneHedgehog;
    /**
     * Extensions for maxValueInteger
     */
    _maxValueInteger?: PuneHedgehog;
    /**
     * Extensions for maxValuePositiveInt
     */
    _maxValuePositiveInt?: PuneHedgehog;
    /**
     * Extensions for maxValueTime
     */
    _maxValueTime?: PuneHedgehog;
    /**
     * Extensions for maxValueUnsignedInt
     */
    _maxValueUnsignedInt?: PuneHedgehog;
    /**
     * Extensions for meaningWhenMissing
     */
    _meaningWhenMissing?: PuneHedgehog;
    /**
     * Extensions for min
     */
    _min?: PuneHedgehog;
    /**
     * Extensions for minValueDate
     */
    _minValueDate?: PuneHedgehog;
    /**
     * Extensions for minValueDateTime
     */
    _minValueDateTime?: PuneHedgehog;
    /**
     * Extensions for minValueDecimal
     */
    _minValueDecimal?: PuneHedgehog;
    /**
     * Extensions for minValueInstant
     */
    _minValueInstant?: PuneHedgehog;
    /**
     * Extensions for minValueInteger
     */
    _minValueInteger?: PuneHedgehog;
    /**
     * Extensions for minValuePositiveInt
     */
    _minValuePositiveInt?: PuneHedgehog;
    /**
     * Extensions for minValueTime
     */
    _minValueTime?: PuneHedgehog;
    /**
     * Extensions for minValueUnsignedInt
     */
    _minValueUnsignedInt?: PuneHedgehog;
    /**
     * Extensions for mustSupport
     */
    _mustSupport?: PuneHedgehog;
    /**
     * Extensions for orderMeaning
     */
    _orderMeaning?: PuneHedgehog;
    /**
     * Extensions for path
     */
    _path?: PuneHedgehog;
    /**
     * Extensions for patternBase64Binary
     */
    _patternBase64Binary?: PuneHedgehog;
    /**
     * Extensions for patternBoolean
     */
    _patternBoolean?: PuneHedgehog;
    /**
     * Extensions for patternCanonical
     */
    _patternCanonical?: PuneHedgehog;
    /**
     * Extensions for patternCode
     */
    _patternCode?: PuneHedgehog;
    /**
     * Extensions for patternDate
     */
    _patternDate?: PuneHedgehog;
    /**
     * Extensions for patternDateTime
     */
    _patternDateTime?: PuneHedgehog;
    /**
     * Extensions for patternDecimal
     */
    _patternDecimal?: PuneHedgehog;
    /**
     * Extensions for patternId
     */
    _patternId?: PuneHedgehog;
    /**
     * Extensions for patternInstant
     */
    _patternInstant?: PuneHedgehog;
    /**
     * Extensions for patternInteger
     */
    _patternInteger?: PuneHedgehog;
    /**
     * Extensions for patternMarkdown
     */
    _patternMarkdown?: PuneHedgehog;
    /**
     * Extensions for patternOid
     */
    _patternOid?: PuneHedgehog;
    /**
     * Extensions for patternPositiveInt
     */
    _patternPositiveInt?: PuneHedgehog;
    /**
     * Extensions for patternString
     */
    _patternString?: PuneHedgehog;
    /**
     * Extensions for patternTime
     */
    _patternTime?: PuneHedgehog;
    /**
     * Extensions for patternUnsignedInt
     */
    _patternUnsignedInt?: PuneHedgehog;
    /**
     * Extensions for patternUri
     */
    _patternUri?: PuneHedgehog;
    /**
     * Extensions for patternUrl
     */
    _patternUrl?: PuneHedgehog;
    /**
     * Extensions for patternUuid
     */
    _patternUuid?: PuneHedgehog;
    /**
     * Extensions for representation
     */
    _representation?: PuneHedgehog[];
    /**
     * Extensions for requirements
     */
    _requirements?: PuneHedgehog;
    /**
     * Extensions for short
     */
    _short?: PuneHedgehog;
    /**
     * Extensions for sliceIsConstraining
     */
    _sliceIsConstraining?: PuneHedgehog;
    /**
     * Extensions for sliceName
     */
    _sliceName?: PuneHedgehog;
    /**
     * Identifies additional names by which this element might also be known.
     */
    alias?: string[];
    /**
     * Information about the base definition of the element, provided to make it unnecessary for
     * tools to trace the deviation of the element through the derived and related profiles.
     * When the element definition is not the original definition of an element - i.g. either in
     * a constraint on another type, or for elements from a super type in a snap shot - then the
     * information in provided in the element definition may be different to the base
     * definition. On the original definition of the element, it will be same.
     */
    base?: Base;
    /**
     * Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity),
     * or the data types (string, uri).
     */
    binding?: Binding;
    /**
     * A code that has the same meaning as the element in a particular terminology.
     */
    code?: Coding[];
    /**
     * Explanatory notes and implementation guidance about the data element, including notes
     * about how to use the data properly, exceptions to proper use, etc. (Note: The text you
     * are reading is specified in ElementDefinition.comment).
     */
    comment?: string;
    /**
     * A reference to an invariant that may make additional statements about the cardinality or
     * value in the instance.
     */
    condition?: string[];
    /**
     * Formal constraints such as co-occurrence and other constraints that can be
     * computationally evaluated within the context of the instance.
     */
    constraint?: Constraint[];
    /**
     * Identifies an element defined elsewhere in the definition whose content rules should be
     * applied to the current element. ContentReferences bring across all the rules that are in
     * the ElementDefinition for the element, including definitions, cardinality constraints,
     * bindings, invariants etc.
     */
    contentReference?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAddress?: ValueAddress;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAge?: ValueAge;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAnnotation?: ValueAnnotation;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueAttachment?: ValueAttachment;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueBase64Binary?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueBoolean?: boolean;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCanonical?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCode?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCodeableConcept?: PurpleType;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCoding?: Coding;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueContactDetail?: ValueContactDetail;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueContactPoint?: ValueContactPoint;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueContributor?: ValueContributor;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueCount?: ValueCount;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDataRequirement?: ValueDataRequirement;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDate?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDateTime?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDecimal?: number;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDistance?: ValueDistance;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDosage?: ValueDosage;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueDuration?: ValueDuration;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueExpression?: ValueExpression;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueHumanName?: ValueHumanName;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueId?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueIdentifier?: Identifier;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueInstant?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueInteger?: number;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueMarkdown?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueMoney?: ValueMoney;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueOid?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueParameterDefinition?: ValueParameterDefinition;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValuePeriod?: Period;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValuePositiveInt?: number;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueQuantity?: ValueQuantity;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueRange?: ValueRange;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueRatio?: ValueRatio;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueReference?: AuthorReference;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueRelatedArtifact?: ValueRelatedArtifact;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueSampledData?: ValueSampledData;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueSignature?: ValueSignature;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueString?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueTime?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueTiming?: ValueTiming;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueTriggerDefinition?: ValueTriggerDefinition;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUnsignedInt?: number;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUri?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUrl?: string;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUsageContext?: ValueUsageContext;
    /**
     * The value that should be used if there is no value stated in the instance (e.g. 'if not
     * otherwise specified, the abstract is false').
     */
    defaultValueUuid?: string;
    /**
     * Provides a complete explanation of the meaning of the data element for human
     * readability.  For the case of elements derived from existing elements (e.g. constraints),
     * the definition SHALL be consistent with the base definition, but convey the meaning of
     * the element in the particular context of use of the resource. (Note: The text you are
     * reading is specified in ElementDefinition.definition).
     */
    definition?: string;
    /**
     * A sample value for this element demonstrating the type of information that would
     * typically be found in the element.
     */
    example?: Example[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAddress?: ValueAddress;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAge?: ValueAge;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAnnotation?: ValueAnnotation;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedAttachment?: ValueAttachment;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedBase64Binary?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedBoolean?: boolean;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCanonical?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCode?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCodeableConcept?: PurpleType;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCoding?: Coding;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContactDetail?: ValueContactDetail;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContactPoint?: ValueContactPoint;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedContributor?: ValueContributor;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedCount?: ValueCount;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDataRequirement?: ValueDataRequirement;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDate?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDateTime?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDecimal?: number;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDistance?: ValueDistance;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDosage?: ValueDosage;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedDuration?: ValueDuration;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedExpression?: ValueExpression;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedHumanName?: ValueHumanName;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedId?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedIdentifier?: Identifier;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedInstant?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedInteger?: number;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedMarkdown?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedMoney?: ValueMoney;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedOid?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedParameterDefinition?: ValueParameterDefinition;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedPeriod?: Period;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedPositiveInt?: number;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedQuantity?: ValueQuantity;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRange?: ValueRange;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRatio?: ValueRatio;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedReference?: AuthorReference;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedRelatedArtifact?: ValueRelatedArtifact;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSampledData?: ValueSampledData;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedSignature?: ValueSignature;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedString?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTime?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTiming?: ValueTiming;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedTriggerDefinition?: ValueTriggerDefinition;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUnsignedInt?: number;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUri?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUrl?: string;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUsageContext?: ValueUsageContext;
    /**
     * Specifies a value that SHALL be exactly the value  for this element in the instance. For
     * purposes of comparison, non-significant whitespace is ignored, and all values must be an
     * exact match (case and accent sensitive). Missing elements/attributes must also be missing.
     */
    fixedUuid?: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * If true, the value of this element affects the interpretation of the element or resource
     * that contains it, and the value of the element cannot be ignored. Typically, this is used
     * for status, negation and qualification codes. The effect of this is that the element
     * cannot be ignored by systems: they SHALL either recognize the element and process it,
     * and/or a pre-determination has been made that it is not relevant to their particular
     * system.
     */
    isModifier?: boolean;
    /**
     * Explains how that element affects the interpretation of the resource or element that
     * contains it.
     */
    isModifierReason?: string;
    /**
     * Whether the element should be included if a client requests a search with the parameter
     * _summary=true.
     */
    isSummary?: boolean;
    /**
     * A single preferred label which is the text to display beside the element indicating its
     * meaning or to use to prompt for the element in a user display or form.
     */
    label?: string;
    /**
     * Identifies a concept from an external specification that roughly corresponds to this
     * element.
     */
    mapping?: ElementMapping[];
    /**
     * The maximum number of times this element is permitted to appear in the instance.
     */
    max?: string;
    /**
     * Indicates the maximum length in characters that is permitted to be present in conformant
     * instances and which is expected to be supported by conformant consumers that support the
     * element.
     */
    maxLength?: number;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDate?: string;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDateTime?: string;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueDecimal?: number;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueInstant?: string;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueInteger?: number;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValuePositiveInt?: number;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueQuantity?: ValueQuantity;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueTime?: string;
    /**
     * The maximum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    maxValueUnsignedInt?: number;
    /**
     * The Implicit meaning that is to be understood when this element is missing (e.g. 'when
     * this element is missing, the period is ongoing').
     */
    meaningWhenMissing?: string;
    /**
     * The minimum number of times this element SHALL appear in the instance.
     */
    min?: number;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDate?: string;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDateTime?: string;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueDecimal?: number;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueInstant?: string;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueInteger?: number;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValuePositiveInt?: number;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueQuantity?: ValueQuantity;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueTime?: string;
    /**
     * The minimum allowed value for the element. The value is inclusive. This is allowed for
     * the types date, dateTime, instant, time, decimal, integer, and Quantity.
     */
    minValueUnsignedInt?: number;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * If true, implementations that produce or consume resources SHALL provide "support" for
     * the element in some meaningful way.  If false, the element may be ignored and not
     * supported. If false, whether to populate or use the data element in any way is at the
     * discretion of the implementation.
     */
    mustSupport?: boolean;
    /**
     * If present, indicates that the order of the repeating element has meaning and describes
     * what that meaning is.  If absent, it means that the order of the element has no meaning.
     */
    orderMeaning?: string;
    /**
     * The path identifies the element and is expressed as a "."-separated list of ancestor
     * elements, beginning with the name of the resource or extension.
     */
    path?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternAddress?: ValueAddress;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternAge?: ValueAge;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternAnnotation?: ValueAnnotation;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternAttachment?: ValueAttachment;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternBase64Binary?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternBoolean?: boolean;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCanonical?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCode?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCodeableConcept?: PurpleType;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCoding?: Coding;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternContactDetail?: ValueContactDetail;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternContactPoint?: ValueContactPoint;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternContributor?: ValueContributor;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternCount?: ValueCount;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDataRequirement?: ValueDataRequirement;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDate?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDateTime?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDecimal?: number;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDistance?: ValueDistance;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDosage?: ValueDosage;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternDuration?: ValueDuration;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternExpression?: ValueExpression;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternHumanName?: ValueHumanName;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternId?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternIdentifier?: Identifier;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternInstant?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternInteger?: number;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternMarkdown?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternMoney?: ValueMoney;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternOid?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternParameterDefinition?: ValueParameterDefinition;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternPeriod?: Period;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternPositiveInt?: number;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternQuantity?: ValueQuantity;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternRange?: ValueRange;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternRatio?: ValueRatio;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternReference?: AuthorReference;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternRelatedArtifact?: ValueRelatedArtifact;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternSampledData?: ValueSampledData;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternSignature?: ValueSignature;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternString?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternTime?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternTiming?: ValueTiming;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternTriggerDefinition?: ValueTriggerDefinition;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUnsignedInt?: number;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUri?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUrl?: string;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUsageContext?: ValueUsageContext;
    /**
     * Specifies a value that the value in the instance SHALL follow - that is, any value in the
     * pattern must be found in the instance. Other additional values may be found too. This is
     * effectively constraint by example.
     *
     * When pattern[x] is used to constrain a primitive, it means that the value provided in the
     * pattern[x] must match the instance value exactly.
     *
     * When pattern[x] is used to constrain an array, it means that each element provided in the
     * pattern[x] array must (recursively) match at least one element from the instance array.
     *
     * When pattern[x] is used to constrain a complex object, it means that each property in the
     * pattern must be present in the complex object, and its value must recursively match --
     * i.e.,
     *
     * 1. If primitive: it must match exactly the pattern value
     * 2. If a complex object: it must match (recursively) the pattern value
     * 3. If an array: it must match (recursively) the pattern value.
     */
    patternUuid?: string;
    /**
     * Codes that define how this element is represented in instances, when the deviation varies
     * from the normal case.
     */
    representation?: Representation[];
    /**
     * This element is for traceability of why the element was created and why the constraints
     * exist as they do. This may be used to point to source materials or specifications that
     * drove the structure of this element.
     */
    requirements?: string;
    /**
     * A concise description of what this element means (e.g. for use in autogenerated
     * summaries).
     */
    short?: string;
    /**
     * If true, indicates that this slice definition is constraining a slice definition with the
     * same name in an inherited profile. If false, the slice is not overriding any slice in an
     * inherited profile. If missing, the slice might or might not be overriding a slice in an
     * inherited profile, depending on the sliceName.
     */
    sliceIsConstraining?: boolean;
    /**
     * The name of this element definition slice, when slicing is working. The name must be a
     * token with no dots or spaces. This is a unique name referring to a specific set of
     * constraints applied to this element, used to provide a name to different slices of the
     * same element.
     */
    sliceName?: string;
    /**
     * Indicates that the element is sliced into a set of alternative definitions (i.e. in a
     * structure definition, there are multiple different constraints on a single element in the
     * base resource). Slicing can be used in any resource that has cardinality ..* on the base
     * resource, or any resource with a choice of types. The set of slices is any elements that
     * come after this in the element sequence that have the same path, until a shorter path
     * occurs (the shorter path terminates the set).
     */
    slicing?: Slicing;
    /**
     * The data type or resource that the value of this element is permitted to be.
     */
    type?: TypeElement[];
}

/**
 * Information about the base definition of the element, provided to make it unnecessary for
 * tools to trace the deviation of the element through the derived and related profiles.
 * When the element definition is not the original definition of an element - i.g. either in
 * a constraint on another type, or for elements from a super type in a snap shot - then the
 * information in provided in the element definition may be different to the base
 * definition. On the original definition of the element, it will be same.
 *
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface Base {
    /**
     * Extensions for max
     */
    _max?: PuneHedgehog;
    /**
     * Extensions for min
     */
    _min?: PuneHedgehog;
    /**
     * Extensions for path
     */
    _path?: PuneHedgehog;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Maximum cardinality of the base element identified by the path.
     */
    max?: string;
    /**
     * Minimum cardinality of the base element identified by the path.
     */
    min?: number;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * The Path that identifies the base element - this matches the ElementDefinition.path for
     * that element. Across FHIR, there is only one base definition of any element - that is, an
     * element definition on a [[[StructureDefinition]]] without a StructureDefinition.base.
     */
    path?: string;
}

/**
 * Binds to a value set if this element is coded (code, Coding, CodeableConcept, Quantity),
 * or the data types (string, uri).
 *
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface Binding {
    /**
     * Extensions for description
     */
    _description?: PuneHedgehog;
    /**
     * Extensions for strength
     */
    _strength?: PuneHedgehog;
    /**
     * Describes the intended use of this particular set of codes.
     */
    description?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * Indicates the degree of conformance expectations associated with this binding - that is,
     * the degree to which the provided value set must be adhered to in the instances.
     */
    strength?: Strength;
    /**
     * Refers to the value set that identifies the set of codes the binding refers to.
     */
    valueSet?: string;
}

/**
 * Indicates the degree of conformance expectations associated with this binding - that is,
 * the degree to which the provided value set must be adhered to in the instances.
 */
export enum Strength {
    Example = "example",
    Extensible = "extensible",
    Preferred = "preferred",
    Required = "required",
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface Constraint {
    /**
     * Extensions for expression
     */
    _expression?: PuneHedgehog;
    /**
     * Extensions for human
     */
    _human?: PuneHedgehog;
    /**
     * Extensions for key
     */
    _key?: PuneHedgehog;
    /**
     * Extensions for requirements
     */
    _requirements?: PuneHedgehog;
    /**
     * Extensions for severity
     */
    _severity?: PuneHedgehog;
    /**
     * Extensions for xpath
     */
    _xpath?: PuneHedgehog;
    /**
     * A [FHIRPath](fhirpath.html) expression of constraint that can be executed to see if this
     * constraint is met.
     */
    expression?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Text that can be used to describe the constraint in messages identifying that the
     * constraint has been violated.
     */
    human?: string;
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Allows identification of which elements have their cardinalities impacted by the
     * constraint.  Will not be referenced for constraints that do not affect cardinality.
     */
    key?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * Description of why this constraint is necessary or appropriate.
     */
    requirements?: string;
    /**
     * Identifies the impact constraint violation has on the conformance of the instance.
     */
    severity?: Severity;
    /**
     * A reference to the original source of the constraint, for traceability purposes.
     */
    source?: string;
    /**
     * An XPath expression of constraint that can be executed to see if this constraint is met.
     */
    xpath?: string;
}

/**
 * Identifies the impact constraint violation has on the conformance of the instance.
 */
export enum Severity {
    Error = "error",
    Warning = "warning",
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface Example {
    /**
     * Extensions for label
     */
    _label?: PuneHedgehog;
    /**
     * Extensions for valueBase64Binary
     */
    _valueBase64Binary?: PuneHedgehog;
    /**
     * Extensions for valueBoolean
     */
    _valueBoolean?: PuneHedgehog;
    /**
     * Extensions for valueCanonical
     */
    _valueCanonical?: PuneHedgehog;
    /**
     * Extensions for valueCode
     */
    _valueCode?: PuneHedgehog;
    /**
     * Extensions for valueDate
     */
    _valueDate?: PuneHedgehog;
    /**
     * Extensions for valueDateTime
     */
    _valueDateTime?: PuneHedgehog;
    /**
     * Extensions for valueDecimal
     */
    _valueDecimal?: PuneHedgehog;
    /**
     * Extensions for valueId
     */
    _valueId?: PuneHedgehog;
    /**
     * Extensions for valueInstant
     */
    _valueInstant?: PuneHedgehog;
    /**
     * Extensions for valueInteger
     */
    _valueInteger?: PuneHedgehog;
    /**
     * Extensions for valueMarkdown
     */
    _valueMarkdown?: PuneHedgehog;
    /**
     * Extensions for valueOid
     */
    _valueOid?: PuneHedgehog;
    /**
     * Extensions for valuePositiveInt
     */
    _valuePositiveInt?: PuneHedgehog;
    /**
     * Extensions for valueString
     */
    _valueString?: PuneHedgehog;
    /**
     * Extensions for valueTime
     */
    _valueTime?: PuneHedgehog;
    /**
     * Extensions for valueUnsignedInt
     */
    _valueUnsignedInt?: PuneHedgehog;
    /**
     * Extensions for valueUri
     */
    _valueUri?: PuneHedgehog;
    /**
     * Extensions for valueUrl
     */
    _valueUrl?: PuneHedgehog;
    /**
     * Extensions for valueUuid
     */
    _valueUuid?: PuneHedgehog;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * Describes the purpose of this example amoung the set of examples.
     */
    label?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAddress?: ValueAddress;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAge?: ValueAge;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAnnotation?: ValueAnnotation;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueAttachment?: ValueAttachment;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBase64Binary?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueBoolean?: boolean;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCanonical?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCode?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCodeableConcept?: PurpleType;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCoding?: Coding;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactDetail?: ValueContactDetail;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContactPoint?: ValueContactPoint;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueContributor?: ValueContributor;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueCount?: ValueCount;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDataRequirement?: ValueDataRequirement;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDate?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDateTime?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDecimal?: number;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDistance?: ValueDistance;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDosage?: ValueDosage;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueDuration?: ValueDuration;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueExpression?: ValueExpression;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueHumanName?: ValueHumanName;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueId?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueIdentifier?: Identifier;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInstant?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueInteger?: number;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMarkdown?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueMoney?: ValueMoney;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueOid?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueParameterDefinition?: ValueParameterDefinition;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePeriod?: Period;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valuePositiveInt?: number;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueQuantity?: ValueQuantity;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRange?: ValueRange;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRatio?: ValueRatio;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueReference?: AuthorReference;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueRelatedArtifact?: ValueRelatedArtifact;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSampledData?: ValueSampledData;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueSignature?: ValueSignature;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueString?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTime?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTiming?: ValueTiming;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueTriggerDefinition?: ValueTriggerDefinition;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUnsignedInt?: number;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUri?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUrl?: string;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUsageContext?: ValueUsageContext;
    /**
     * The actual value for the element, which must be one of the types allowed for this element.
     */
    valueUuid?: string;
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface ElementMapping {
    /**
     * Extensions for comment
     */
    _comment?: PuneHedgehog;
    /**
     * Extensions for identity
     */
    _identity?: PuneHedgehog;
    /**
     * Extensions for language
     */
    _language?: PuneHedgehog;
    /**
     * Extensions for map
     */
    _map?: PuneHedgehog;
    /**
     * Comments that provide information about the mapping or its use.
     */
    comment?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * An internal reference to the definition of a mapping.
     */
    identity?: string;
    /**
     * Identifies the computable language in which mapping.map is expressed.
     */
    language?: string;
    /**
     * Expresses what part of the target specification corresponds to this element.
     */
    map?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
}

export enum Representation {
    CdaText = "cdaText",
    TypeAttr = "typeAttr",
    XHTML = "xhtml",
    XMLAttr = "xmlAttr",
    XMLText = "xmlText",
}

/**
 * Indicates that the element is sliced into a set of alternative definitions (i.e. in a
 * structure definition, there are multiple different constraints on a single element in the
 * base resource). Slicing can be used in any resource that has cardinality ..* on the base
 * resource, or any resource with a choice of types. The set of slices is any elements that
 * come after this in the element sequence that have the same path, until a shorter path
 * occurs (the shorter path terminates the set).
 *
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface Slicing {
    /**
     * Extensions for description
     */
    _description?: PuneHedgehog;
    /**
     * Extensions for ordered
     */
    _ordered?: PuneHedgehog;
    /**
     * Extensions for rules
     */
    _rules?: PuneHedgehog;
    /**
     * A human-readable text description of how the slicing works. If there is no discriminator,
     * this is required to be present to provide whatever information is possible about how the
     * slices can be differentiated.
     */
    description?: string;
    /**
     * Designates which child elements are used to discriminate between the slices when
     * processing an instance. If one or more discriminators are provided, the value of the
     * child elements in the instance data SHALL completely distinguish which slice the element
     * in the resource matches based on the allowed values for those elements in each of the
     * slices.
     */
    discriminator?: Discriminator[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * If the matching elements have to occur in the same order as defined in the profile.
     */
    ordered?: boolean;
    /**
     * Whether additional slices are allowed or not. When the slices are ordered, profile
     * authors can also say that additional slices are only allowed at the end.
     */
    rules?: Rules;
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface Discriminator {
    /**
     * Extensions for path
     */
    _path?: PuneHedgehog;
    /**
     * Extensions for type
     */
    _type?: PuneHedgehog;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * A FHIRPath expression, using [the simple subset of FHIRPath](fhirpath.html#simple), that
     * is used to identify the element on which discrimination is based.
     */
    path?: string;
    /**
     * How the element value is interpreted when discrimination is evaluated.
     */
    type?: DiscriminatorType;
}

/**
 * How the element value is interpreted when discrimination is evaluated.
 */
export enum DiscriminatorType {
    Exists = "exists",
    Pattern = "pattern",
    Profile = "profile",
    Type = "type",
    Value = "value",
}

/**
 * Whether additional slices are allowed or not. When the slices are ordered, profile
 * authors can also say that additional slices are only allowed at the end.
 */
export enum Rules {
    Closed = "closed",
    Open = "open",
    OpenAtEnd = "openAtEnd",
}

/**
 * Captures constraints on each element within the resource, profile, or extension.
 */
export interface TypeElement {
    /**
     * Extensions for aggregation
     */
    _aggregation?: PuneHedgehog[];
    /**
     * Extensions for code
     */
    _code?: PuneHedgehog;
    /**
     * Extensions for versioning
     */
    _versioning?: PuneHedgehog;
    /**
     * If the type is a reference to another resource, how the resource is or can be aggregated
     * - is it a contained resource, or a reference, and if the context is a bundle, is it
     * included in the bundle.
     */
    aggregation?: Aggregation[];
    /**
     * URL of Data type or Resource that is a(or the) type used for this element. References are
     * URLs that are relative to http://hl7.org/fhir/StructureDefinition e.g. "string" is a
     * reference to http://hl7.org/fhir/StructureDefinition/string. Absolute URLs are only
     * allowed in logical models.
     */
    code?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * Identifies a profile structure or implementation Guide that applies to the datatype this
     * element refers to. If any profiles are specified, then the content must conform to at
     * least one of them. The URL can be a local reference - to a contained StructureDefinition,
     * or a reference to another StructureDefinition or Implementation Guide by a canonical URL.
     * When an implementation guide is specified, the type SHALL conform to at least one profile
     * defined in the implementation guide.
     */
    profile?: string[];
    /**
     * Used when the type is "Reference" or "canonical", and identifies a profile structure or
     * implementation Guide that applies to the target of the reference this element refers to.
     * If any profiles are specified, then the content must conform to at least one of them. The
     * URL can be a local reference - to a contained StructureDefinition, or a reference to
     * another StructureDefinition or Implementation Guide by a canonical URL. When an
     * implementation guide is specified, the target resource SHALL conform to at least one
     * profile defined in the implementation guide.
     */
    targetProfile?: string[];
    /**
     * Whether this reference needs to be version specific or version independent, or whether
     * either can be used.
     */
    versioning?: Versioning;
}

export enum Aggregation {
    Bundled = "bundled",
    Contained = "contained",
    Referenced = "referenced",
}

/**
 * Whether this reference needs to be version specific or version independent, or whether
 * either can be used.
 */
export enum Versioning {
    Either = "either",
    Independent = "independent",
    Specific = "specific",
}

/**
 * The version of the FHIR specification on which this StructureDefinition is based - this
 * is the formal version of the specification, without the revision number, e.g.
 * [publication].[major].[minor], which is 4.0.0. for this version.
 */
export enum FhirVersion {
    The001 = "0.01",
    The005 = "0.05",
    The006 = "0.06",
    The0080 = "0.0.80",
    The0081 = "0.0.81",
    The0082 = "0.0.82",
    The011 = "0.11",
    The040 = "0.4.0",
    The050 = "0.5.0",
    The100 = "1.0.0",
    The101 = "1.0.1",
    The102 = "1.0.2",
    The110 = "1.1.0",
    The140 = "1.4.0",
    The160 = "1.6.0",
    The180 = "1.8.0",
    The300 = "3.0.0",
    The301 = "3.0.1",
    The330 = "3.3.0",
    The350 = "3.5.0",
    The400 = "4.0.0",
}

/**
 * Defines the kind of structure that this definition is describing.
 */
export enum Kind {
    ComplexType = "complex-type",
    Logical = "logical",
    PrimitiveType = "primitive-type",
    Resource = "resource",
}

/**
 * A definition of a FHIR structure. This resource is used to describe the underlying
 * resources, data types defined in FHIR, and also for describing extensions and constraints
 * on resources and data types.
 */
export interface StructureDefinitionMapping {
    /**
     * Extensions for comment
     */
    _comment?: PuneHedgehog;
    /**
     * Extensions for identity
     */
    _identity?: PuneHedgehog;
    /**
     * Extensions for name
     */
    _name?: PuneHedgehog;
    /**
     * Extensions for uri
     */
    _uri?: PuneHedgehog;
    /**
     * Comments about this mapping, including version notes, issues, scope limitations, and
     * other important notes for usage.
     */
    comment?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * An Internal id that is used to identify this mapping set when specific mappings are made.
     */
    identity?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
    /**
     * A name for the specification that is being mapped to.
     */
    name?: string;
    /**
     * An absolute URI that identifies the specification that this mapping is expressed to.
     */
    uri?: string;
}

/**
 * The metadata about the resource. This is content that is maintained by the
 * infrastructure. Changes to the content might not always be associated with version
 * changes to the resource.
 *
 * The metadata about a resource. This is content in the resource that is maintained by the
 * infrastructure. Changes to the content might not always be associated with version
 * changes to the resource.
 */
export interface Meta {
    /**
     * Extensions for lastUpdated
     */
    _lastUpdated?: PuneHedgehog;
    /**
     * Extensions for source
     */
    _source?: PuneHedgehog;
    /**
     * Extensions for versionId
     */
    _versionId?: PuneHedgehog;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * When the resource last changed - e.g. when the version changed.
     */
    lastUpdated?: string;
    /**
     * A list of profiles (references to [[[StructureDefinition]]] resources) that this resource
     * claims to conform to. The URL is a reference to [[[StructureDefinition.url]]].
     */
    profile?: string[];
    /**
     * Security labels applied to this resource. These tags connect specific resources to the
     * overall security policy and infrastructure.
     */
    security?: Coding[];
    /**
     * A uri that identifies the source system of the resource. This provides a minimal amount
     * of [[[Provenance]]] information that can be used to track or differentiate the source of
     * information in the resource. The source may identify another FHIR server, document,
     * message, database, etc.
     */
    source?: string;
    /**
     * Tags applied to this resource. Tags are intended to be used to identify and relate
     * resources to process and workflow, and applications are not required to consider the tags
     * when interpreting the meaning of a resource.
     */
    tag?: Coding[];
    /**
     * The version specific identifier, as it appears in the version portion of the URL. This
     * value changes when the resource is created, updated, or deleted.
     */
    versionId?: string;
}

/**
 * A snapshot view is expressed in a standalone form that can be used and interpreted
 * without considering the base StructureDefinition.
 *
 * A definition of a FHIR structure. This resource is used to describe the underlying
 * resources, data types defined in FHIR, and also for describing extensions and constraints
 * on resources and data types.
 */
export interface Snapshot {
    /**
     * Captures constraints on each element within the resource.
     */
    element: Element[];
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element and that modifies the understanding of the element in which it is
     * contained and/or the understanding of the containing element's descendants. Usually
     * modifier elements provide negation or qualification. To make the use of extensions safe
     * and manageable, there is a strict set of governance applied to the definition and use of
     * extensions. Though any implementer can define an extension, there is a set of
     * requirements that SHALL be met as part of the definition of the extension. Applications
     * processing a resource are required to check for modifier extensions.
     *
     * Modifier extensions SHALL NOT change the meaning of any elements on Resource or
     * DomainResource (including cannot change the meaning of modifierExtension itself).
     */
    modifierExtension?: Extension[];
}

/**
 * The status of this structure definition. Enables tracking the life-cycle of the content.
 */
export enum StructureDefinitionStatus {
    Active = "active",
    Draft = "draft",
    Retired = "retired",
    Unknown = "unknown",
}

/**
 * A human-readable narrative that contains a summary of the resource and can be used to
 * represent the content of the resource to a human. The narrative need not encode all the
 * structured data, but is required to contain sufficient detail to make it "clinically
 * safe" for a human to just read the narrative. Resource definitions may define what
 * content should be represented in the narrative to ensure clinical safety.
 *
 * A human-readable summary of the resource conveying the essential clinical and business
 * information for the resource.
 */
export interface Text {
    /**
     * Extensions for status
     */
    _status?: PuneHedgehog;
    /**
     * The actual narrative content, a stripped down version of XHTML.
     */
    div: { [key: string]: any };
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Unique id for the element within a resource (for internal references). This may be any
     * string value that does not contain spaces.
     */
    id?: string;
    /**
     * The status of the narrative - whether it's entirely generated (from just the defined data
     * or the extensions too), or whether a human authored it and it may contain additional data.
     */
    status?: TextStatus;
}

/**
 * The status of the narrative - whether it's entirely generated (from just the defined data
 * or the extensions too), or whether a human authored it and it may contain additional data.
 */
export enum TextStatus {
    Additional = "additional",
    Empty = "empty",
    Extensions = "extensions",
    Generated = "generated",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export namespace Convert {
    export function toStructureDefinition(json: string): StructureDefinition {
        return cast(JSON.parse(json), r("StructureDefinition"));
    }

    export function structureDefinitionToJson(value: StructureDefinition): string {
        return JSON.stringify(uncast(value, r("StructureDefinition")), null, 2);
    }

    function invalidValue(typ: any, val: any): never {
        throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`);
    }

    function jsonToJSProps(typ: any): any {
        if (typ.jsonToJS === undefined) {
            var map: any = {};
            typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
            typ.jsonToJS = map;
        }
        return typ.jsonToJS;
    }

    function jsToJSONProps(typ: any): any {
        if (typ.jsToJSON === undefined) {
            var map: any = {};
            typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
            typ.jsToJSON = map;
        }
        return typ.jsToJSON;
    }

    function transform(val: any, typ: any, getProps: any): any {
        function transformPrimitive(typ: string, val: any): any {
            if (typeof typ === typeof val) return val;
            return invalidValue(typ, val);
        }

        function transformUnion(typs: any[], val: any): any {
            // val must validate against one typ in typs
            var l = typs.length;
            for (var i = 0; i < l; i++) {
                var typ = typs[i];
                try {
                    return transform(val, typ, getProps);
                } catch (_) {}
            }
            return invalidValue(typs, val);
        }

        function transformEnum(cases: string[], val: any): any {
            if (cases.indexOf(val) !== -1) return val;
            return invalidValue(cases, val);
        }

        function transformArray(typ: any, val: any): any {
            // val must be an array with no invalid elements
            if (!Array.isArray(val)) return invalidValue("array", val);
            return val.map(el => transform(el, typ, getProps));
        }

        function transformDate(typ: any, val: any): any {
            if (val === null) {
                return null;
            }
            const d = new Date(val);
            if (isNaN(d.valueOf())) {
                return invalidValue("Date", val);
            }
            return d;
        }

        function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
            if (val === null || typeof val !== "object" || Array.isArray(val)) {
                return invalidValue("object", val);
            }
            var result: any = {};
            Object.getOwnPropertyNames(props).forEach(key => {
                const prop = props[key];
                const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
                result[prop.key] = transform(v, prop.typ, getProps);
            });
            Object.getOwnPropertyNames(val).forEach(key => {
                if (!Object.prototype.hasOwnProperty.call(props, key)) {
                    result[key] = transform(val[key], additional, getProps);
                }
            });
            return result;
        }

        if (typ === "any") return val;
        if (typ === null) {
            if (val === null) return val;
            return invalidValue(typ, val);
        }
        if (typ === false) return invalidValue(typ, val);
        while (typeof typ === "object" && typ.ref !== undefined) {
            typ = typeMap[typ.ref];
        }
        if (Array.isArray(typ)) return transformEnum(typ, val);
        if (typeof typ === "object") {
            return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
                : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
                : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
                : invalidValue(typ, val);
        }
        // Numbers can be parsed by Date but shouldn't be.
        if (typ === Date && typeof val !== "number") return transformDate(typ, val);
        return transformPrimitive(typ, val);
    }

    function cast<T>(val: any, typ: any): T {
        return transform(val, typ, jsonToJSProps);
    }

    function uncast<T>(val: T, typ: any): any {
        return transform(val, typ, jsToJSONProps);
    }

    function a(typ: any) {
        return { arrayItems: typ };
    }

    function u(...typs: any[]) {
        return { unionMembers: typs };
    }

    function o(props: any[], additional: any) {
        return { props, additional };
    }

    function m(additional: any) {
        return { props: [], additional };
    }

    function r(name: string) {
        return { ref: name };
    }

    const typeMap: any = {
        "StructureDefinition": o([
            { json: "_abstract", js: "_abstract", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_contextInvariant", js: "_contextInvariant", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_copyright", js: "_copyright", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_date", js: "_date", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_derivation", js: "_derivation", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_description", js: "_description", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_experimental", js: "_experimental", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fhirVersion", js: "_fhirVersion", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_implicitRules", js: "_implicitRules", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_kind", js: "_kind", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_language", js: "_language", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_name", js: "_name", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_publisher", js: "_publisher", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_purpose", js: "_purpose", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_status", js: "_status", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_title", js: "_title", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_url", js: "_url", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_version", js: "_version", typ: u(undefined, r("PuneHedgehog")) },
            { json: "abstract", js: "abstract", typ: u(undefined, true) },
            { json: "baseDefinition", js: "baseDefinition", typ: u(undefined, "") },
            { json: "contact", js: "contact", typ: u(undefined, a(r("ValueContactDetail"))) },
            { json: "context", js: "context", typ: u(undefined, a(r("Context"))) },
            { json: "contextInvariant", js: "contextInvariant", typ: u(undefined, a("")) },
            { json: "copyright", js: "copyright", typ: u(undefined, "") },
            { json: "date", js: "date", typ: u(undefined, "") },
            { json: "derivation", js: "derivation", typ: u(undefined, r("Derivation")) },
            { json: "description", js: "description", typ: u(undefined, "") },
            { json: "differential", js: "differential", typ: u(undefined, r("Differential")) },
            { json: "experimental", js: "experimental", typ: u(undefined, true) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "fhirVersion", js: "fhirVersion", typ: u(undefined, r("FhirVersion")) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "identifier", js: "identifier", typ: u(undefined, a(r("Identifier"))) },
            { json: "implicitRules", js: "implicitRules", typ: u(undefined, "") },
            { json: "jurisdiction", js: "jurisdiction", typ: u(undefined, a(r("PurpleType"))) },
            { json: "keyword", js: "keyword", typ: u(undefined, a(r("Coding"))) },
            { json: "kind", js: "kind", typ: u(undefined, r("Kind")) },
            { json: "language", js: "language", typ: u(undefined, "") },
            { json: "mapping", js: "mapping", typ: u(undefined, a(r("StructureDefinitionMapping"))) },
            { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "publisher", js: "publisher", typ: u(undefined, "") },
            { json: "purpose", js: "purpose", typ: u(undefined, "") },
            { json: "snapshot", js: "snapshot", typ: u(undefined, r("Snapshot")) },
            { json: "status", js: "status", typ: u(undefined, r("StructureDefinitionStatus")) },
            { json: "text", js: "text", typ: u(undefined, r("Text")) },
            { json: "title", js: "title", typ: u(undefined, "") },
            { json: "type", js: "type", typ: u(undefined, "") },
            { json: "url", js: "url", typ: u(undefined, "") },
            { json: "useContext", js: "useContext", typ: u(undefined, a(r("ValueUsageContext"))) },
            { json: "version", js: "version", typ: u(undefined, "") },
        ], false),
        "ValueUsageContext": o([
            { json: "code", js: "code", typ: r("Coding") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "valueCodeableConcept", js: "valueCodeableConcept", typ: u(undefined, r("PurpleType")) },
            { json: "valueQuantity", js: "valueQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "valueRange", js: "valueRange", typ: u(undefined, r("ValueRange")) },
            { json: "valueReference", js: "valueReference", typ: u(undefined, r("AuthorReference")) },
        ], false),
        "ValueTriggerDefinition": o([
            { json: "_name", js: "_name", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_timingDate", js: "_timingDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_timingDateTime", js: "_timingDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "condition", js: "condition", typ: u(undefined, r("ValueExpression")) },
            { json: "data", js: "data", typ: u(undefined, a(r("ValueDataRequirement"))) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "timingDate", js: "timingDate", typ: u(undefined, "") },
            { json: "timingDateTime", js: "timingDateTime", typ: u(undefined, "") },
            { json: "timingReference", js: "timingReference", typ: u(undefined, r("AuthorReference")) },
            { json: "timingTiming", js: "timingTiming", typ: u(undefined, r("ValueTiming")) },
            { json: "type", js: "type", typ: u(undefined, r("ValueTriggerDefinitionType")) },
        ], false),
        "ValueSignature": o([
            { json: "_data", js: "_data", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_sigFormat", js: "_sigFormat", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_targetFormat", js: "_targetFormat", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_when", js: "_when", typ: u(undefined, r("PuneHedgehog")) },
            { json: "data", js: "data", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "onBehalfOf", js: "onBehalfOf", typ: u(undefined, r("AuthorReference")) },
            { json: "sigFormat", js: "sigFormat", typ: u(undefined, "") },
            { json: "targetFormat", js: "targetFormat", typ: u(undefined, "") },
            { json: "type", js: "type", typ: a(r("Coding")) },
            { json: "when", js: "when", typ: u(undefined, "") },
            { json: "who", js: "who", typ: r("AuthorReference") },
        ], false),
        "ValueSampledData": o([
            { json: "_data", js: "_data", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_dimensions", js: "_dimensions", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_factor", js: "_factor", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_lowerLimit", js: "_lowerLimit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_period", js: "_period", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_upperLimit", js: "_upperLimit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "data", js: "data", typ: u(undefined, "") },
            { json: "dimensions", js: "dimensions", typ: u(undefined, 3.14) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "factor", js: "factor", typ: u(undefined, 3.14) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "lowerLimit", js: "lowerLimit", typ: u(undefined, 3.14) },
            { json: "origin", js: "origin", typ: r("ValueQuantity") },
            { json: "period", js: "period", typ: u(undefined, 3.14) },
            { json: "upperLimit", js: "upperLimit", typ: u(undefined, 3.14) },
        ], false),
        "ValueRelatedArtifact": o([
            { json: "_citation", js: "_citation", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_display", js: "_display", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_label", js: "_label", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_url", js: "_url", typ: u(undefined, r("PuneHedgehog")) },
            { json: "citation", js: "citation", typ: u(undefined, "") },
            { json: "display", js: "display", typ: u(undefined, "") },
            { json: "document", js: "document", typ: u(undefined, r("ValueAttachment")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "label", js: "label", typ: u(undefined, "") },
            { json: "resource", js: "resource", typ: u(undefined, "") },
            { json: "type", js: "type", typ: u(undefined, r("ValueRelatedArtifactType")) },
            { json: "url", js: "url", typ: u(undefined, "") },
        ], false),
        "ValueParameterDefinition": o([
            { json: "_documentation", js: "_documentation", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_max", js: "_max", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_min", js: "_min", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_name", js: "_name", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_use", js: "_use", typ: u(undefined, r("PuneHedgehog")) },
            { json: "documentation", js: "documentation", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "max", js: "max", typ: u(undefined, "") },
            { json: "min", js: "min", typ: u(undefined, 3.14) },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "profile", js: "profile", typ: u(undefined, "") },
            { json: "type", js: "type", typ: u(undefined, "") },
            { json: "use", js: "use", typ: u(undefined, "") },
        ], false),
        "ValueMoney": o([
            { json: "_currency", js: "_currency", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_value", js: "_value", typ: u(undefined, r("PuneHedgehog")) },
            { json: "currency", js: "currency", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "value", js: "value", typ: u(undefined, 3.14) },
        ], false),
        "ValueHumanName": o([
            { json: "_family", js: "_family", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_given", js: "_given", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_prefix", js: "_prefix", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_suffix", js: "_suffix", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_text", js: "_text", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_use", js: "_use", typ: u(undefined, r("PuneHedgehog")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "family", js: "family", typ: u(undefined, "") },
            { json: "given", js: "given", typ: u(undefined, a("")) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "period", js: "period", typ: u(undefined, r("Period")) },
            { json: "prefix", js: "prefix", typ: u(undefined, a("")) },
            { json: "suffix", js: "suffix", typ: u(undefined, a("")) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "use", js: "use", typ: u(undefined, r("ValueHumanNameUse")) },
        ], false),
        "ValueExpression": o([
            { json: "_description", js: "_description", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_expression", js: "_expression", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_language", js: "_language", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_name", js: "_name", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_reference", js: "_reference", typ: u(undefined, r("PuneHedgehog")) },
            { json: "description", js: "description", typ: u(undefined, "") },
            { json: "expression", js: "expression", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "language", js: "language", typ: u(undefined, r("Language")) },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "reference", js: "reference", typ: u(undefined, "") },
        ], false),
        "Repeat": o([
            { json: "_count", js: "_count", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_countMax", js: "_countMax", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_dayOfWeek", js: "_dayOfWeek", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_duration", js: "_duration", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_durationMax", js: "_durationMax", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_durationUnit", js: "_durationUnit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_frequency", js: "_frequency", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_frequencyMax", js: "_frequencyMax", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_offset", js: "_offset", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_period", js: "_period", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_periodMax", js: "_periodMax", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_periodUnit", js: "_periodUnit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_timeOfDay", js: "_timeOfDay", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_when", js: "_when", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "boundsDuration", js: "boundsDuration", typ: u(undefined, r("ValueDuration")) },
            { json: "boundsPeriod", js: "boundsPeriod", typ: u(undefined, r("Period")) },
            { json: "boundsRange", js: "boundsRange", typ: u(undefined, r("ValueRange")) },
            { json: "count", js: "count", typ: u(undefined, 3.14) },
            { json: "countMax", js: "countMax", typ: u(undefined, 3.14) },
            { json: "dayOfWeek", js: "dayOfWeek", typ: u(undefined, a("")) },
            { json: "duration", js: "duration", typ: u(undefined, 3.14) },
            { json: "durationMax", js: "durationMax", typ: u(undefined, 3.14) },
            { json: "durationUnit", js: "durationUnit", typ: u(undefined, r("Unit")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "frequency", js: "frequency", typ: u(undefined, 3.14) },
            { json: "frequencyMax", js: "frequencyMax", typ: u(undefined, 3.14) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "offset", js: "offset", typ: u(undefined, 3.14) },
            { json: "period", js: "period", typ: u(undefined, 3.14) },
            { json: "periodMax", js: "periodMax", typ: u(undefined, 3.14) },
            { json: "periodUnit", js: "periodUnit", typ: u(undefined, r("Unit")) },
            { json: "timeOfDay", js: "timeOfDay", typ: u(undefined, a("")) },
            { json: "when", js: "when", typ: u(undefined, a(r("When"))) },
        ], false),
        "ValueTiming": o([
            { json: "_event", js: "_event", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "code", js: "code", typ: u(undefined, r("PurpleType")) },
            { json: "event", js: "event", typ: u(undefined, a("")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "repeat", js: "repeat", typ: u(undefined, r("Repeat")) },
        ], false),
        "ValueRatio": o([
            { json: "denominator", js: "denominator", typ: u(undefined, r("ValueQuantity")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "numerator", js: "numerator", typ: u(undefined, r("ValueQuantity")) },
        ], false),
        "ValueRange": o([
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "high", js: "high", typ: u(undefined, r("ValueQuantity")) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "low", js: "low", typ: u(undefined, r("ValueQuantity")) },
        ], false),
        "ValueQuantity": o([
            { json: "_code", js: "_code", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_comparator", js: "_comparator", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_system", js: "_system", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_unit", js: "_unit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_value", js: "_value", typ: u(undefined, r("PuneHedgehog")) },
            { json: "code", js: "code", typ: u(undefined, "") },
            { json: "comparator", js: "comparator", typ: u(undefined, r("Comparator")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "system", js: "system", typ: u(undefined, "") },
            { json: "unit", js: "unit", typ: u(undefined, "") },
            { json: "value", js: "value", typ: u(undefined, 3.14) },
        ], false),
        "DoseAndRate": o([
            { json: "doseQuantity", js: "doseQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "doseRange", js: "doseRange", typ: u(undefined, r("ValueRange")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "rateQuantity", js: "rateQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "rateRange", js: "rateRange", typ: u(undefined, r("ValueRange")) },
            { json: "rateRatio", js: "rateRatio", typ: u(undefined, r("ValueRatio")) },
            { json: "type", js: "type", typ: u(undefined, r("PurpleType")) },
        ], false),
        "ValueDosage": o([
            { json: "_asNeededBoolean", js: "_asNeededBoolean", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patientInstruction", js: "_patientInstruction", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_sequence", js: "_sequence", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_text", js: "_text", typ: u(undefined, r("PuneHedgehog")) },
            { json: "additionalInstruction", js: "additionalInstruction", typ: u(undefined, a(r("PurpleType"))) },
            { json: "asNeededBoolean", js: "asNeededBoolean", typ: u(undefined, true) },
            { json: "asNeededCodeableConcept", js: "asNeededCodeableConcept", typ: u(undefined, r("PurpleType")) },
            { json: "doseAndRate", js: "doseAndRate", typ: u(undefined, a(r("DoseAndRate"))) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "maxDosePerAdministration", js: "maxDosePerAdministration", typ: u(undefined, r("ValueQuantity")) },
            { json: "maxDosePerLifetime", js: "maxDosePerLifetime", typ: u(undefined, r("ValueQuantity")) },
            { json: "maxDosePerPeriod", js: "maxDosePerPeriod", typ: u(undefined, r("ValueRatio")) },
            { json: "method", js: "method", typ: u(undefined, r("PurpleType")) },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "patientInstruction", js: "patientInstruction", typ: u(undefined, "") },
            { json: "route", js: "route", typ: u(undefined, r("PurpleType")) },
            { json: "sequence", js: "sequence", typ: u(undefined, 3.14) },
            { json: "site", js: "site", typ: u(undefined, r("PurpleType")) },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "timing", js: "timing", typ: u(undefined, r("ValueTiming")) },
        ], false),
        "ValueDistance": o([
            { json: "_code", js: "_code", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_comparator", js: "_comparator", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_system", js: "_system", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_unit", js: "_unit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_value", js: "_value", typ: u(undefined, r("PuneHedgehog")) },
            { json: "code", js: "code", typ: u(undefined, "") },
            { json: "comparator", js: "comparator", typ: u(undefined, r("Comparator")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "system", js: "system", typ: u(undefined, "") },
            { json: "unit", js: "unit", typ: u(undefined, "") },
            { json: "value", js: "value", typ: u(undefined, 3.14) },
        ], false),
        "Sort": o([
            { json: "_direction", js: "_direction", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_path", js: "_path", typ: u(undefined, r("PuneHedgehog")) },
            { json: "direction", js: "direction", typ: u(undefined, r("Direction")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "path", js: "path", typ: u(undefined, "") },
        ], false),
        "ValueDuration": o([
            { json: "_code", js: "_code", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_comparator", js: "_comparator", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_system", js: "_system", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_unit", js: "_unit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_value", js: "_value", typ: u(undefined, r("PuneHedgehog")) },
            { json: "code", js: "code", typ: u(undefined, "") },
            { json: "comparator", js: "comparator", typ: u(undefined, r("Comparator")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "system", js: "system", typ: u(undefined, "") },
            { json: "unit", js: "unit", typ: u(undefined, "") },
            { json: "value", js: "value", typ: u(undefined, 3.14) },
        ], false),
        "DateFilter": o([
            { json: "_path", js: "_path", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_searchParam", js: "_searchParam", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueDateTime", js: "_valueDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "path", js: "path", typ: u(undefined, "") },
            { json: "searchParam", js: "searchParam", typ: u(undefined, "") },
            { json: "valueDateTime", js: "valueDateTime", typ: u(undefined, "") },
            { json: "valueDuration", js: "valueDuration", typ: u(undefined, r("ValueDuration")) },
            { json: "valuePeriod", js: "valuePeriod", typ: u(undefined, r("Period")) },
        ], false),
        "CodeFilter": o([
            { json: "_path", js: "_path", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_searchParam", js: "_searchParam", typ: u(undefined, r("PuneHedgehog")) },
            { json: "code", js: "code", typ: u(undefined, a(r("Coding"))) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "path", js: "path", typ: u(undefined, "") },
            { json: "searchParam", js: "searchParam", typ: u(undefined, "") },
            { json: "valueSet", js: "valueSet", typ: u(undefined, "") },
        ], false),
        "ValueDataRequirement": o([
            { json: "_limit", js: "_limit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_mustSupport", js: "_mustSupport", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "codeFilter", js: "codeFilter", typ: u(undefined, a(r("CodeFilter"))) },
            { json: "dateFilter", js: "dateFilter", typ: u(undefined, a(r("DateFilter"))) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "limit", js: "limit", typ: u(undefined, 3.14) },
            { json: "mustSupport", js: "mustSupport", typ: u(undefined, a("")) },
            { json: "profile", js: "profile", typ: u(undefined, a("")) },
            { json: "sort", js: "sort", typ: u(undefined, a(r("Sort"))) },
            { json: "subjectCodeableConcept", js: "subjectCodeableConcept", typ: u(undefined, r("PurpleType")) },
            { json: "subjectReference", js: "subjectReference", typ: u(undefined, r("AuthorReference")) },
            { json: "type", js: "type", typ: u(undefined, "") },
        ], false),
        "ValueCount": o([
            { json: "_code", js: "_code", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_comparator", js: "_comparator", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_system", js: "_system", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_unit", js: "_unit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_value", js: "_value", typ: u(undefined, r("PuneHedgehog")) },
            { json: "code", js: "code", typ: u(undefined, "") },
            { json: "comparator", js: "comparator", typ: u(undefined, r("Comparator")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "system", js: "system", typ: u(undefined, "") },
            { json: "unit", js: "unit", typ: u(undefined, "") },
            { json: "value", js: "value", typ: u(undefined, 3.14) },
        ], false),
        "ValueContributor": o([
            { json: "_name", js: "_name", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "contact", js: "contact", typ: u(undefined, a(r("ValueContactDetail"))) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "type", js: "type", typ: u(undefined, r("ValueContributorType")) },
        ], false),
        "ValueContactPoint": o([
            { json: "_rank", js: "_rank", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_system", js: "_system", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_use", js: "_use", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_value", js: "_value", typ: u(undefined, r("PuneHedgehog")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "period", js: "period", typ: u(undefined, r("Period")) },
            { json: "rank", js: "rank", typ: u(undefined, 3.14) },
            { json: "system", js: "system", typ: u(undefined, r("System")) },
            { json: "use", js: "use", typ: u(undefined, r("ValueContactPointUse")) },
            { json: "value", js: "value", typ: u(undefined, "") },
        ], false),
        "ValueContactDetail": o([
            { json: "_name", js: "_name", typ: u(undefined, r("PuneHedgehog")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "telecom", js: "telecom", typ: u(undefined, a(r("ValueContactPoint"))) },
        ], false),
        "ValueAttachment": o([
            { json: "_contentType", js: "_contentType", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_creation", js: "_creation", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_data", js: "_data", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_hash", js: "_hash", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_language", js: "_language", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_size", js: "_size", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_title", js: "_title", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_url", js: "_url", typ: u(undefined, r("PuneHedgehog")) },
            { json: "contentType", js: "contentType", typ: u(undefined, "") },
            { json: "creation", js: "creation", typ: u(undefined, "") },
            { json: "data", js: "data", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "hash", js: "hash", typ: u(undefined, "") },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "language", js: "language", typ: u(undefined, "") },
            { json: "size", js: "size", typ: u(undefined, 3.14) },
            { json: "title", js: "title", typ: u(undefined, "") },
            { json: "url", js: "url", typ: u(undefined, "") },
        ], false),
        "Coding": o([
            { json: "_code", js: "_code", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_display", js: "_display", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_system", js: "_system", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_userSelected", js: "_userSelected", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_version", js: "_version", typ: u(undefined, r("PuneHedgehog")) },
            { json: "code", js: "code", typ: u(undefined, "") },
            { json: "display", js: "display", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "system", js: "system", typ: u(undefined, "") },
            { json: "userSelected", js: "userSelected", typ: u(undefined, true) },
            { json: "version", js: "version", typ: u(undefined, "") },
        ], false),
        "PurpleType": o([
            { json: "_text", js: "_text", typ: u(undefined, r("PuneHedgehog")) },
            { json: "coding", js: "coding", typ: u(undefined, a(r("Coding"))) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "text", js: "text", typ: u(undefined, "") },
        ], false),
        "Identifier": o([
            { json: "_system", js: "_system", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_use", js: "_use", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_value", js: "_value", typ: u(undefined, r("PuneHedgehog")) },
            { json: "assigner", js: "assigner", typ: u(undefined, r("AuthorReference")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "period", js: "period", typ: u(undefined, r("Period")) },
            { json: "system", js: "system", typ: u(undefined, "") },
            { json: "type", js: "type", typ: u(undefined, r("PurpleType")) },
            { json: "use", js: "use", typ: u(undefined, r("IdentifierUse")) },
            { json: "value", js: "value", typ: u(undefined, "") },
        ], false),
        "AuthorReference": o([
            { json: "_display", js: "_display", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_reference", js: "_reference", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "display", js: "display", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "identifier", js: "identifier", typ: u(undefined, r("Identifier")) },
            { json: "reference", js: "reference", typ: u(undefined, "") },
            { json: "type", js: "type", typ: u(undefined, "") },
        ], false),
        "ValueAnnotation": o([
            { json: "_authorString", js: "_authorString", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_text", js: "_text", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_time", js: "_time", typ: u(undefined, r("PuneHedgehog")) },
            { json: "authorReference", js: "authorReference", typ: u(undefined, r("AuthorReference")) },
            { json: "authorString", js: "authorString", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "time", js: "time", typ: u(undefined, "") },
        ], false),
        "ValueAge": o([
            { json: "_code", js: "_code", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_comparator", js: "_comparator", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_system", js: "_system", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_unit", js: "_unit", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_value", js: "_value", typ: u(undefined, r("PuneHedgehog")) },
            { json: "code", js: "code", typ: u(undefined, "") },
            { json: "comparator", js: "comparator", typ: u(undefined, r("Comparator")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "system", js: "system", typ: u(undefined, "") },
            { json: "unit", js: "unit", typ: u(undefined, "") },
            { json: "value", js: "value", typ: u(undefined, 3.14) },
        ], false),
        "Period": o([
            { json: "_end", js: "_end", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_start", js: "_start", typ: u(undefined, r("PuneHedgehog")) },
            { json: "end", js: "end", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "start", js: "start", typ: u(undefined, "") },
        ], false),
        "ValueAddress": o([
            { json: "_city", js: "_city", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_country", js: "_country", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_district", js: "_district", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_line", js: "_line", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_postalCode", js: "_postalCode", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_state", js: "_state", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_text", js: "_text", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_use", js: "_use", typ: u(undefined, r("PuneHedgehog")) },
            { json: "city", js: "city", typ: u(undefined, "") },
            { json: "country", js: "country", typ: u(undefined, "") },
            { json: "district", js: "district", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "line", js: "line", typ: u(undefined, a("")) },
            { json: "period", js: "period", typ: u(undefined, r("Period")) },
            { json: "postalCode", js: "postalCode", typ: u(undefined, "") },
            { json: "state", js: "state", typ: u(undefined, "") },
            { json: "text", js: "text", typ: u(undefined, "") },
            { json: "type", js: "type", typ: u(undefined, r("ValueAddressType")) },
            { json: "use", js: "use", typ: u(undefined, r("ValueAddressUse")) },
        ], false),
        "Extension": o([
            { json: "_url", js: "_url", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueBase64Binary", js: "_valueBase64Binary", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueBoolean", js: "_valueBoolean", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueCanonical", js: "_valueCanonical", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueCode", js: "_valueCode", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueDate", js: "_valueDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueDateTime", js: "_valueDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueDecimal", js: "_valueDecimal", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueId", js: "_valueId", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueInstant", js: "_valueInstant", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueInteger", js: "_valueInteger", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueMarkdown", js: "_valueMarkdown", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueOid", js: "_valueOid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valuePositiveInt", js: "_valuePositiveInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueString", js: "_valueString", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueTime", js: "_valueTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueUnsignedInt", js: "_valueUnsignedInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueUri", js: "_valueUri", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueUrl", js: "_valueUrl", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueUuid", js: "_valueUuid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "url", js: "url", typ: u(undefined, "") },
            { json: "valueAddress", js: "valueAddress", typ: u(undefined, r("ValueAddress")) },
            { json: "valueAge", js: "valueAge", typ: u(undefined, r("ValueAge")) },
            { json: "valueAnnotation", js: "valueAnnotation", typ: u(undefined, r("ValueAnnotation")) },
            { json: "valueAttachment", js: "valueAttachment", typ: u(undefined, r("ValueAttachment")) },
            { json: "valueBase64Binary", js: "valueBase64Binary", typ: u(undefined, "") },
            { json: "valueBoolean", js: "valueBoolean", typ: u(undefined, true) },
            { json: "valueCanonical", js: "valueCanonical", typ: u(undefined, "") },
            { json: "valueCode", js: "valueCode", typ: u(undefined, "") },
            { json: "valueCodeableConcept", js: "valueCodeableConcept", typ: u(undefined, r("PurpleType")) },
            { json: "valueCoding", js: "valueCoding", typ: u(undefined, r("Coding")) },
            { json: "valueContactDetail", js: "valueContactDetail", typ: u(undefined, r("ValueContactDetail")) },
            { json: "valueContactPoint", js: "valueContactPoint", typ: u(undefined, r("ValueContactPoint")) },
            { json: "valueContributor", js: "valueContributor", typ: u(undefined, r("ValueContributor")) },
            { json: "valueCount", js: "valueCount", typ: u(undefined, r("ValueCount")) },
            { json: "valueDataRequirement", js: "valueDataRequirement", typ: u(undefined, r("ValueDataRequirement")) },
            { json: "valueDate", js: "valueDate", typ: u(undefined, "") },
            { json: "valueDateTime", js: "valueDateTime", typ: u(undefined, "") },
            { json: "valueDecimal", js: "valueDecimal", typ: u(undefined, 3.14) },
            { json: "valueDistance", js: "valueDistance", typ: u(undefined, r("ValueDistance")) },
            { json: "valueDosage", js: "valueDosage", typ: u(undefined, r("ValueDosage")) },
            { json: "valueDuration", js: "valueDuration", typ: u(undefined, r("ValueDuration")) },
            { json: "valueExpression", js: "valueExpression", typ: u(undefined, r("ValueExpression")) },
            { json: "valueHumanName", js: "valueHumanName", typ: u(undefined, r("ValueHumanName")) },
            { json: "valueId", js: "valueId", typ: u(undefined, "") },
            { json: "valueIdentifier", js: "valueIdentifier", typ: u(undefined, r("Identifier")) },
            { json: "valueInstant", js: "valueInstant", typ: u(undefined, "") },
            { json: "valueInteger", js: "valueInteger", typ: u(undefined, 3.14) },
            { json: "valueMarkdown", js: "valueMarkdown", typ: u(undefined, "") },
            { json: "valueMoney", js: "valueMoney", typ: u(undefined, r("ValueMoney")) },
            { json: "valueOid", js: "valueOid", typ: u(undefined, "") },
            { json: "valueParameterDefinition", js: "valueParameterDefinition", typ: u(undefined, r("ValueParameterDefinition")) },
            { json: "valuePeriod", js: "valuePeriod", typ: u(undefined, r("Period")) },
            { json: "valuePositiveInt", js: "valuePositiveInt", typ: u(undefined, 3.14) },
            { json: "valueQuantity", js: "valueQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "valueRange", js: "valueRange", typ: u(undefined, r("ValueRange")) },
            { json: "valueRatio", js: "valueRatio", typ: u(undefined, r("ValueRatio")) },
            { json: "valueReference", js: "valueReference", typ: u(undefined, r("AuthorReference")) },
            { json: "valueRelatedArtifact", js: "valueRelatedArtifact", typ: u(undefined, r("ValueRelatedArtifact")) },
            { json: "valueSampledData", js: "valueSampledData", typ: u(undefined, r("ValueSampledData")) },
            { json: "valueSignature", js: "valueSignature", typ: u(undefined, r("ValueSignature")) },
            { json: "valueString", js: "valueString", typ: u(undefined, "") },
            { json: "valueTime", js: "valueTime", typ: u(undefined, "") },
            { json: "valueTiming", js: "valueTiming", typ: u(undefined, r("ValueTiming")) },
            { json: "valueTriggerDefinition", js: "valueTriggerDefinition", typ: u(undefined, r("ValueTriggerDefinition")) },
            { json: "valueUnsignedInt", js: "valueUnsignedInt", typ: u(undefined, 3.14) },
            { json: "valueUri", js: "valueUri", typ: u(undefined, "") },
            { json: "valueUrl", js: "valueUrl", typ: u(undefined, "") },
            { json: "valueUsageContext", js: "valueUsageContext", typ: u(undefined, r("ValueUsageContext")) },
            { json: "valueUuid", js: "valueUuid", typ: u(undefined, "") },
        ], false),
        "PuneHedgehog": o([
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
        ], false),
        "Context": o([
            { json: "_expression", js: "_expression", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "expression", js: "expression", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "type", js: "type", typ: u(undefined, r("ContextType")) },
        ], false),
        "Differential": o([
            { json: "element", js: "element", typ: a(r("Element")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
        ], false),
        "Element": o([
            { json: "_alias", js: "_alias", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_comment", js: "_comment", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_condition", js: "_condition", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_contentReference", js: "_contentReference", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueBase64Binary", js: "_defaultValueBase64Binary", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueBoolean", js: "_defaultValueBoolean", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueCanonical", js: "_defaultValueCanonical", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueCode", js: "_defaultValueCode", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueDate", js: "_defaultValueDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueDateTime", js: "_defaultValueDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueDecimal", js: "_defaultValueDecimal", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueId", js: "_defaultValueId", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueInstant", js: "_defaultValueInstant", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueInteger", js: "_defaultValueInteger", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueMarkdown", js: "_defaultValueMarkdown", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueOid", js: "_defaultValueOid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValuePositiveInt", js: "_defaultValuePositiveInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueString", js: "_defaultValueString", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueTime", js: "_defaultValueTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueUnsignedInt", js: "_defaultValueUnsignedInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueUri", js: "_defaultValueUri", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueUrl", js: "_defaultValueUrl", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_defaultValueUuid", js: "_defaultValueUuid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_definition", js: "_definition", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedBase64Binary", js: "_fixedBase64Binary", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedBoolean", js: "_fixedBoolean", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedCanonical", js: "_fixedCanonical", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedCode", js: "_fixedCode", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedDate", js: "_fixedDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedDateTime", js: "_fixedDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedDecimal", js: "_fixedDecimal", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedId", js: "_fixedId", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedInstant", js: "_fixedInstant", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedInteger", js: "_fixedInteger", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedMarkdown", js: "_fixedMarkdown", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedOid", js: "_fixedOid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedPositiveInt", js: "_fixedPositiveInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedString", js: "_fixedString", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedTime", js: "_fixedTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedUnsignedInt", js: "_fixedUnsignedInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedUri", js: "_fixedUri", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedUrl", js: "_fixedUrl", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_fixedUuid", js: "_fixedUuid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_isModifier", js: "_isModifier", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_isModifierReason", js: "_isModifierReason", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_isSummary", js: "_isSummary", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_label", js: "_label", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_max", js: "_max", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_maxLength", js: "_maxLength", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_maxValueDate", js: "_maxValueDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_maxValueDateTime", js: "_maxValueDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_maxValueDecimal", js: "_maxValueDecimal", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_maxValueInstant", js: "_maxValueInstant", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_maxValueInteger", js: "_maxValueInteger", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_maxValuePositiveInt", js: "_maxValuePositiveInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_maxValueTime", js: "_maxValueTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_maxValueUnsignedInt", js: "_maxValueUnsignedInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_meaningWhenMissing", js: "_meaningWhenMissing", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_min", js: "_min", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_minValueDate", js: "_minValueDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_minValueDateTime", js: "_minValueDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_minValueDecimal", js: "_minValueDecimal", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_minValueInstant", js: "_minValueInstant", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_minValueInteger", js: "_minValueInteger", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_minValuePositiveInt", js: "_minValuePositiveInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_minValueTime", js: "_minValueTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_minValueUnsignedInt", js: "_minValueUnsignedInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_mustSupport", js: "_mustSupport", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_orderMeaning", js: "_orderMeaning", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_path", js: "_path", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternBase64Binary", js: "_patternBase64Binary", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternBoolean", js: "_patternBoolean", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternCanonical", js: "_patternCanonical", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternCode", js: "_patternCode", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternDate", js: "_patternDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternDateTime", js: "_patternDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternDecimal", js: "_patternDecimal", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternId", js: "_patternId", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternInstant", js: "_patternInstant", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternInteger", js: "_patternInteger", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternMarkdown", js: "_patternMarkdown", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternOid", js: "_patternOid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternPositiveInt", js: "_patternPositiveInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternString", js: "_patternString", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternTime", js: "_patternTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternUnsignedInt", js: "_patternUnsignedInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternUri", js: "_patternUri", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternUrl", js: "_patternUrl", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_patternUuid", js: "_patternUuid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_representation", js: "_representation", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_requirements", js: "_requirements", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_short", js: "_short", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_sliceIsConstraining", js: "_sliceIsConstraining", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_sliceName", js: "_sliceName", typ: u(undefined, r("PuneHedgehog")) },
            { json: "alias", js: "alias", typ: u(undefined, a("")) },
            { json: "base", js: "base", typ: u(undefined, r("Base")) },
            { json: "binding", js: "binding", typ: u(undefined, r("Binding")) },
            { json: "code", js: "code", typ: u(undefined, a(r("Coding"))) },
            { json: "comment", js: "comment", typ: u(undefined, "") },
            { json: "condition", js: "condition", typ: u(undefined, a("")) },
            { json: "constraint", js: "constraint", typ: u(undefined, a(r("Constraint"))) },
            { json: "contentReference", js: "contentReference", typ: u(undefined, "") },
            { json: "defaultValueAddress", js: "defaultValueAddress", typ: u(undefined, r("ValueAddress")) },
            { json: "defaultValueAge", js: "defaultValueAge", typ: u(undefined, r("ValueAge")) },
            { json: "defaultValueAnnotation", js: "defaultValueAnnotation", typ: u(undefined, r("ValueAnnotation")) },
            { json: "defaultValueAttachment", js: "defaultValueAttachment", typ: u(undefined, r("ValueAttachment")) },
            { json: "defaultValueBase64Binary", js: "defaultValueBase64Binary", typ: u(undefined, "") },
            { json: "defaultValueBoolean", js: "defaultValueBoolean", typ: u(undefined, true) },
            { json: "defaultValueCanonical", js: "defaultValueCanonical", typ: u(undefined, "") },
            { json: "defaultValueCode", js: "defaultValueCode", typ: u(undefined, "") },
            { json: "defaultValueCodeableConcept", js: "defaultValueCodeableConcept", typ: u(undefined, r("PurpleType")) },
            { json: "defaultValueCoding", js: "defaultValueCoding", typ: u(undefined, r("Coding")) },
            { json: "defaultValueContactDetail", js: "defaultValueContactDetail", typ: u(undefined, r("ValueContactDetail")) },
            { json: "defaultValueContactPoint", js: "defaultValueContactPoint", typ: u(undefined, r("ValueContactPoint")) },
            { json: "defaultValueContributor", js: "defaultValueContributor", typ: u(undefined, r("ValueContributor")) },
            { json: "defaultValueCount", js: "defaultValueCount", typ: u(undefined, r("ValueCount")) },
            { json: "defaultValueDataRequirement", js: "defaultValueDataRequirement", typ: u(undefined, r("ValueDataRequirement")) },
            { json: "defaultValueDate", js: "defaultValueDate", typ: u(undefined, "") },
            { json: "defaultValueDateTime", js: "defaultValueDateTime", typ: u(undefined, "") },
            { json: "defaultValueDecimal", js: "defaultValueDecimal", typ: u(undefined, 3.14) },
            { json: "defaultValueDistance", js: "defaultValueDistance", typ: u(undefined, r("ValueDistance")) },
            { json: "defaultValueDosage", js: "defaultValueDosage", typ: u(undefined, r("ValueDosage")) },
            { json: "defaultValueDuration", js: "defaultValueDuration", typ: u(undefined, r("ValueDuration")) },
            { json: "defaultValueExpression", js: "defaultValueExpression", typ: u(undefined, r("ValueExpression")) },
            { json: "defaultValueHumanName", js: "defaultValueHumanName", typ: u(undefined, r("ValueHumanName")) },
            { json: "defaultValueId", js: "defaultValueId", typ: u(undefined, "") },
            { json: "defaultValueIdentifier", js: "defaultValueIdentifier", typ: u(undefined, r("Identifier")) },
            { json: "defaultValueInstant", js: "defaultValueInstant", typ: u(undefined, "") },
            { json: "defaultValueInteger", js: "defaultValueInteger", typ: u(undefined, 3.14) },
            { json: "defaultValueMarkdown", js: "defaultValueMarkdown", typ: u(undefined, "") },
            { json: "defaultValueMoney", js: "defaultValueMoney", typ: u(undefined, r("ValueMoney")) },
            { json: "defaultValueOid", js: "defaultValueOid", typ: u(undefined, "") },
            { json: "defaultValueParameterDefinition", js: "defaultValueParameterDefinition", typ: u(undefined, r("ValueParameterDefinition")) },
            { json: "defaultValuePeriod", js: "defaultValuePeriod", typ: u(undefined, r("Period")) },
            { json: "defaultValuePositiveInt", js: "defaultValuePositiveInt", typ: u(undefined, 3.14) },
            { json: "defaultValueQuantity", js: "defaultValueQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "defaultValueRange", js: "defaultValueRange", typ: u(undefined, r("ValueRange")) },
            { json: "defaultValueRatio", js: "defaultValueRatio", typ: u(undefined, r("ValueRatio")) },
            { json: "defaultValueReference", js: "defaultValueReference", typ: u(undefined, r("AuthorReference")) },
            { json: "defaultValueRelatedArtifact", js: "defaultValueRelatedArtifact", typ: u(undefined, r("ValueRelatedArtifact")) },
            { json: "defaultValueSampledData", js: "defaultValueSampledData", typ: u(undefined, r("ValueSampledData")) },
            { json: "defaultValueSignature", js: "defaultValueSignature", typ: u(undefined, r("ValueSignature")) },
            { json: "defaultValueString", js: "defaultValueString", typ: u(undefined, "") },
            { json: "defaultValueTime", js: "defaultValueTime", typ: u(undefined, "") },
            { json: "defaultValueTiming", js: "defaultValueTiming", typ: u(undefined, r("ValueTiming")) },
            { json: "defaultValueTriggerDefinition", js: "defaultValueTriggerDefinition", typ: u(undefined, r("ValueTriggerDefinition")) },
            { json: "defaultValueUnsignedInt", js: "defaultValueUnsignedInt", typ: u(undefined, 3.14) },
            { json: "defaultValueUri", js: "defaultValueUri", typ: u(undefined, "") },
            { json: "defaultValueUrl", js: "defaultValueUrl", typ: u(undefined, "") },
            { json: "defaultValueUsageContext", js: "defaultValueUsageContext", typ: u(undefined, r("ValueUsageContext")) },
            { json: "defaultValueUuid", js: "defaultValueUuid", typ: u(undefined, "") },
            { json: "definition", js: "definition", typ: u(undefined, "") },
            { json: "example", js: "example", typ: u(undefined, a(r("Example"))) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "fixedAddress", js: "fixedAddress", typ: u(undefined, r("ValueAddress")) },
            { json: "fixedAge", js: "fixedAge", typ: u(undefined, r("ValueAge")) },
            { json: "fixedAnnotation", js: "fixedAnnotation", typ: u(undefined, r("ValueAnnotation")) },
            { json: "fixedAttachment", js: "fixedAttachment", typ: u(undefined, r("ValueAttachment")) },
            { json: "fixedBase64Binary", js: "fixedBase64Binary", typ: u(undefined, "") },
            { json: "fixedBoolean", js: "fixedBoolean", typ: u(undefined, true) },
            { json: "fixedCanonical", js: "fixedCanonical", typ: u(undefined, "") },
            { json: "fixedCode", js: "fixedCode", typ: u(undefined, "") },
            { json: "fixedCodeableConcept", js: "fixedCodeableConcept", typ: u(undefined, r("PurpleType")) },
            { json: "fixedCoding", js: "fixedCoding", typ: u(undefined, r("Coding")) },
            { json: "fixedContactDetail", js: "fixedContactDetail", typ: u(undefined, r("ValueContactDetail")) },
            { json: "fixedContactPoint", js: "fixedContactPoint", typ: u(undefined, r("ValueContactPoint")) },
            { json: "fixedContributor", js: "fixedContributor", typ: u(undefined, r("ValueContributor")) },
            { json: "fixedCount", js: "fixedCount", typ: u(undefined, r("ValueCount")) },
            { json: "fixedDataRequirement", js: "fixedDataRequirement", typ: u(undefined, r("ValueDataRequirement")) },
            { json: "fixedDate", js: "fixedDate", typ: u(undefined, "") },
            { json: "fixedDateTime", js: "fixedDateTime", typ: u(undefined, "") },
            { json: "fixedDecimal", js: "fixedDecimal", typ: u(undefined, 3.14) },
            { json: "fixedDistance", js: "fixedDistance", typ: u(undefined, r("ValueDistance")) },
            { json: "fixedDosage", js: "fixedDosage", typ: u(undefined, r("ValueDosage")) },
            { json: "fixedDuration", js: "fixedDuration", typ: u(undefined, r("ValueDuration")) },
            { json: "fixedExpression", js: "fixedExpression", typ: u(undefined, r("ValueExpression")) },
            { json: "fixedHumanName", js: "fixedHumanName", typ: u(undefined, r("ValueHumanName")) },
            { json: "fixedId", js: "fixedId", typ: u(undefined, "") },
            { json: "fixedIdentifier", js: "fixedIdentifier", typ: u(undefined, r("Identifier")) },
            { json: "fixedInstant", js: "fixedInstant", typ: u(undefined, "") },
            { json: "fixedInteger", js: "fixedInteger", typ: u(undefined, 3.14) },
            { json: "fixedMarkdown", js: "fixedMarkdown", typ: u(undefined, "") },
            { json: "fixedMoney", js: "fixedMoney", typ: u(undefined, r("ValueMoney")) },
            { json: "fixedOid", js: "fixedOid", typ: u(undefined, "") },
            { json: "fixedParameterDefinition", js: "fixedParameterDefinition", typ: u(undefined, r("ValueParameterDefinition")) },
            { json: "fixedPeriod", js: "fixedPeriod", typ: u(undefined, r("Period")) },
            { json: "fixedPositiveInt", js: "fixedPositiveInt", typ: u(undefined, 3.14) },
            { json: "fixedQuantity", js: "fixedQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "fixedRange", js: "fixedRange", typ: u(undefined, r("ValueRange")) },
            { json: "fixedRatio", js: "fixedRatio", typ: u(undefined, r("ValueRatio")) },
            { json: "fixedReference", js: "fixedReference", typ: u(undefined, r("AuthorReference")) },
            { json: "fixedRelatedArtifact", js: "fixedRelatedArtifact", typ: u(undefined, r("ValueRelatedArtifact")) },
            { json: "fixedSampledData", js: "fixedSampledData", typ: u(undefined, r("ValueSampledData")) },
            { json: "fixedSignature", js: "fixedSignature", typ: u(undefined, r("ValueSignature")) },
            { json: "fixedString", js: "fixedString", typ: u(undefined, "") },
            { json: "fixedTime", js: "fixedTime", typ: u(undefined, "") },
            { json: "fixedTiming", js: "fixedTiming", typ: u(undefined, r("ValueTiming")) },
            { json: "fixedTriggerDefinition", js: "fixedTriggerDefinition", typ: u(undefined, r("ValueTriggerDefinition")) },
            { json: "fixedUnsignedInt", js: "fixedUnsignedInt", typ: u(undefined, 3.14) },
            { json: "fixedUri", js: "fixedUri", typ: u(undefined, "") },
            { json: "fixedUrl", js: "fixedUrl", typ: u(undefined, "") },
            { json: "fixedUsageContext", js: "fixedUsageContext", typ: u(undefined, r("ValueUsageContext")) },
            { json: "fixedUuid", js: "fixedUuid", typ: u(undefined, "") },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "isModifier", js: "isModifier", typ: u(undefined, true) },
            { json: "isModifierReason", js: "isModifierReason", typ: u(undefined, "") },
            { json: "isSummary", js: "isSummary", typ: u(undefined, true) },
            { json: "label", js: "label", typ: u(undefined, "") },
            { json: "mapping", js: "mapping", typ: u(undefined, a(r("ElementMapping"))) },
            { json: "max", js: "max", typ: u(undefined, "") },
            { json: "maxLength", js: "maxLength", typ: u(undefined, 3.14) },
            { json: "maxValueDate", js: "maxValueDate", typ: u(undefined, "") },
            { json: "maxValueDateTime", js: "maxValueDateTime", typ: u(undefined, "") },
            { json: "maxValueDecimal", js: "maxValueDecimal", typ: u(undefined, 3.14) },
            { json: "maxValueInstant", js: "maxValueInstant", typ: u(undefined, "") },
            { json: "maxValueInteger", js: "maxValueInteger", typ: u(undefined, 3.14) },
            { json: "maxValuePositiveInt", js: "maxValuePositiveInt", typ: u(undefined, 3.14) },
            { json: "maxValueQuantity", js: "maxValueQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "maxValueTime", js: "maxValueTime", typ: u(undefined, "") },
            { json: "maxValueUnsignedInt", js: "maxValueUnsignedInt", typ: u(undefined, 3.14) },
            { json: "meaningWhenMissing", js: "meaningWhenMissing", typ: u(undefined, "") },
            { json: "min", js: "min", typ: u(undefined, 3.14) },
            { json: "minValueDate", js: "minValueDate", typ: u(undefined, "") },
            { json: "minValueDateTime", js: "minValueDateTime", typ: u(undefined, "") },
            { json: "minValueDecimal", js: "minValueDecimal", typ: u(undefined, 3.14) },
            { json: "minValueInstant", js: "minValueInstant", typ: u(undefined, "") },
            { json: "minValueInteger", js: "minValueInteger", typ: u(undefined, 3.14) },
            { json: "minValuePositiveInt", js: "minValuePositiveInt", typ: u(undefined, 3.14) },
            { json: "minValueQuantity", js: "minValueQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "minValueTime", js: "minValueTime", typ: u(undefined, "") },
            { json: "minValueUnsignedInt", js: "minValueUnsignedInt", typ: u(undefined, 3.14) },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "mustSupport", js: "mustSupport", typ: u(undefined, true) },
            { json: "orderMeaning", js: "orderMeaning", typ: u(undefined, "") },
            { json: "path", js: "path", typ: u(undefined, "") },
            { json: "patternAddress", js: "patternAddress", typ: u(undefined, r("ValueAddress")) },
            { json: "patternAge", js: "patternAge", typ: u(undefined, r("ValueAge")) },
            { json: "patternAnnotation", js: "patternAnnotation", typ: u(undefined, r("ValueAnnotation")) },
            { json: "patternAttachment", js: "patternAttachment", typ: u(undefined, r("ValueAttachment")) },
            { json: "patternBase64Binary", js: "patternBase64Binary", typ: u(undefined, "") },
            { json: "patternBoolean", js: "patternBoolean", typ: u(undefined, true) },
            { json: "patternCanonical", js: "patternCanonical", typ: u(undefined, "") },
            { json: "patternCode", js: "patternCode", typ: u(undefined, "") },
            { json: "patternCodeableConcept", js: "patternCodeableConcept", typ: u(undefined, r("PurpleType")) },
            { json: "patternCoding", js: "patternCoding", typ: u(undefined, r("Coding")) },
            { json: "patternContactDetail", js: "patternContactDetail", typ: u(undefined, r("ValueContactDetail")) },
            { json: "patternContactPoint", js: "patternContactPoint", typ: u(undefined, r("ValueContactPoint")) },
            { json: "patternContributor", js: "patternContributor", typ: u(undefined, r("ValueContributor")) },
            { json: "patternCount", js: "patternCount", typ: u(undefined, r("ValueCount")) },
            { json: "patternDataRequirement", js: "patternDataRequirement", typ: u(undefined, r("ValueDataRequirement")) },
            { json: "patternDate", js: "patternDate", typ: u(undefined, "") },
            { json: "patternDateTime", js: "patternDateTime", typ: u(undefined, "") },
            { json: "patternDecimal", js: "patternDecimal", typ: u(undefined, 3.14) },
            { json: "patternDistance", js: "patternDistance", typ: u(undefined, r("ValueDistance")) },
            { json: "patternDosage", js: "patternDosage", typ: u(undefined, r("ValueDosage")) },
            { json: "patternDuration", js: "patternDuration", typ: u(undefined, r("ValueDuration")) },
            { json: "patternExpression", js: "patternExpression", typ: u(undefined, r("ValueExpression")) },
            { json: "patternHumanName", js: "patternHumanName", typ: u(undefined, r("ValueHumanName")) },
            { json: "patternId", js: "patternId", typ: u(undefined, "") },
            { json: "patternIdentifier", js: "patternIdentifier", typ: u(undefined, r("Identifier")) },
            { json: "patternInstant", js: "patternInstant", typ: u(undefined, "") },
            { json: "patternInteger", js: "patternInteger", typ: u(undefined, 3.14) },
            { json: "patternMarkdown", js: "patternMarkdown", typ: u(undefined, "") },
            { json: "patternMoney", js: "patternMoney", typ: u(undefined, r("ValueMoney")) },
            { json: "patternOid", js: "patternOid", typ: u(undefined, "") },
            { json: "patternParameterDefinition", js: "patternParameterDefinition", typ: u(undefined, r("ValueParameterDefinition")) },
            { json: "patternPeriod", js: "patternPeriod", typ: u(undefined, r("Period")) },
            { json: "patternPositiveInt", js: "patternPositiveInt", typ: u(undefined, 3.14) },
            { json: "patternQuantity", js: "patternQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "patternRange", js: "patternRange", typ: u(undefined, r("ValueRange")) },
            { json: "patternRatio", js: "patternRatio", typ: u(undefined, r("ValueRatio")) },
            { json: "patternReference", js: "patternReference", typ: u(undefined, r("AuthorReference")) },
            { json: "patternRelatedArtifact", js: "patternRelatedArtifact", typ: u(undefined, r("ValueRelatedArtifact")) },
            { json: "patternSampledData", js: "patternSampledData", typ: u(undefined, r("ValueSampledData")) },
            { json: "patternSignature", js: "patternSignature", typ: u(undefined, r("ValueSignature")) },
            { json: "patternString", js: "patternString", typ: u(undefined, "") },
            { json: "patternTime", js: "patternTime", typ: u(undefined, "") },
            { json: "patternTiming", js: "patternTiming", typ: u(undefined, r("ValueTiming")) },
            { json: "patternTriggerDefinition", js: "patternTriggerDefinition", typ: u(undefined, r("ValueTriggerDefinition")) },
            { json: "patternUnsignedInt", js: "patternUnsignedInt", typ: u(undefined, 3.14) },
            { json: "patternUri", js: "patternUri", typ: u(undefined, "") },
            { json: "patternUrl", js: "patternUrl", typ: u(undefined, "") },
            { json: "patternUsageContext", js: "patternUsageContext", typ: u(undefined, r("ValueUsageContext")) },
            { json: "patternUuid", js: "patternUuid", typ: u(undefined, "") },
            { json: "representation", js: "representation", typ: u(undefined, a(r("Representation"))) },
            { json: "requirements", js: "requirements", typ: u(undefined, "") },
            { json: "short", js: "short", typ: u(undefined, "") },
            { json: "sliceIsConstraining", js: "sliceIsConstraining", typ: u(undefined, true) },
            { json: "sliceName", js: "sliceName", typ: u(undefined, "") },
            { json: "slicing", js: "slicing", typ: u(undefined, r("Slicing")) },
            { json: "type", js: "type", typ: u(undefined, a(r("TypeElement"))) },
        ], false),
        "Base": o([
            { json: "_max", js: "_max", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_min", js: "_min", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_path", js: "_path", typ: u(undefined, r("PuneHedgehog")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "max", js: "max", typ: u(undefined, "") },
            { json: "min", js: "min", typ: u(undefined, 3.14) },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "path", js: "path", typ: u(undefined, "") },
        ], false),
        "Binding": o([
            { json: "_description", js: "_description", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_strength", js: "_strength", typ: u(undefined, r("PuneHedgehog")) },
            { json: "description", js: "description", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "strength", js: "strength", typ: u(undefined, r("Strength")) },
            { json: "valueSet", js: "valueSet", typ: u(undefined, "") },
        ], false),
        "Constraint": o([
            { json: "_expression", js: "_expression", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_human", js: "_human", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_key", js: "_key", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_requirements", js: "_requirements", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_severity", js: "_severity", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_xpath", js: "_xpath", typ: u(undefined, r("PuneHedgehog")) },
            { json: "expression", js: "expression", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "human", js: "human", typ: u(undefined, "") },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "key", js: "key", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "requirements", js: "requirements", typ: u(undefined, "") },
            { json: "severity", js: "severity", typ: u(undefined, r("Severity")) },
            { json: "source", js: "source", typ: u(undefined, "") },
            { json: "xpath", js: "xpath", typ: u(undefined, "") },
        ], false),
        "Example": o([
            { json: "_label", js: "_label", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueBase64Binary", js: "_valueBase64Binary", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueBoolean", js: "_valueBoolean", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueCanonical", js: "_valueCanonical", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueCode", js: "_valueCode", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueDate", js: "_valueDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueDateTime", js: "_valueDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueDecimal", js: "_valueDecimal", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueId", js: "_valueId", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueInstant", js: "_valueInstant", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueInteger", js: "_valueInteger", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueMarkdown", js: "_valueMarkdown", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueOid", js: "_valueOid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valuePositiveInt", js: "_valuePositiveInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueString", js: "_valueString", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueTime", js: "_valueTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueUnsignedInt", js: "_valueUnsignedInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueUri", js: "_valueUri", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueUrl", js: "_valueUrl", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_valueUuid", js: "_valueUuid", typ: u(undefined, r("PuneHedgehog")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "label", js: "label", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "valueAddress", js: "valueAddress", typ: u(undefined, r("ValueAddress")) },
            { json: "valueAge", js: "valueAge", typ: u(undefined, r("ValueAge")) },
            { json: "valueAnnotation", js: "valueAnnotation", typ: u(undefined, r("ValueAnnotation")) },
            { json: "valueAttachment", js: "valueAttachment", typ: u(undefined, r("ValueAttachment")) },
            { json: "valueBase64Binary", js: "valueBase64Binary", typ: u(undefined, "") },
            { json: "valueBoolean", js: "valueBoolean", typ: u(undefined, true) },
            { json: "valueCanonical", js: "valueCanonical", typ: u(undefined, "") },
            { json: "valueCode", js: "valueCode", typ: u(undefined, "") },
            { json: "valueCodeableConcept", js: "valueCodeableConcept", typ: u(undefined, r("PurpleType")) },
            { json: "valueCoding", js: "valueCoding", typ: u(undefined, r("Coding")) },
            { json: "valueContactDetail", js: "valueContactDetail", typ: u(undefined, r("ValueContactDetail")) },
            { json: "valueContactPoint", js: "valueContactPoint", typ: u(undefined, r("ValueContactPoint")) },
            { json: "valueContributor", js: "valueContributor", typ: u(undefined, r("ValueContributor")) },
            { json: "valueCount", js: "valueCount", typ: u(undefined, r("ValueCount")) },
            { json: "valueDataRequirement", js: "valueDataRequirement", typ: u(undefined, r("ValueDataRequirement")) },
            { json: "valueDate", js: "valueDate", typ: u(undefined, "") },
            { json: "valueDateTime", js: "valueDateTime", typ: u(undefined, "") },
            { json: "valueDecimal", js: "valueDecimal", typ: u(undefined, 3.14) },
            { json: "valueDistance", js: "valueDistance", typ: u(undefined, r("ValueDistance")) },
            { json: "valueDosage", js: "valueDosage", typ: u(undefined, r("ValueDosage")) },
            { json: "valueDuration", js: "valueDuration", typ: u(undefined, r("ValueDuration")) },
            { json: "valueExpression", js: "valueExpression", typ: u(undefined, r("ValueExpression")) },
            { json: "valueHumanName", js: "valueHumanName", typ: u(undefined, r("ValueHumanName")) },
            { json: "valueId", js: "valueId", typ: u(undefined, "") },
            { json: "valueIdentifier", js: "valueIdentifier", typ: u(undefined, r("Identifier")) },
            { json: "valueInstant", js: "valueInstant", typ: u(undefined, "") },
            { json: "valueInteger", js: "valueInteger", typ: u(undefined, 3.14) },
            { json: "valueMarkdown", js: "valueMarkdown", typ: u(undefined, "") },
            { json: "valueMoney", js: "valueMoney", typ: u(undefined, r("ValueMoney")) },
            { json: "valueOid", js: "valueOid", typ: u(undefined, "") },
            { json: "valueParameterDefinition", js: "valueParameterDefinition", typ: u(undefined, r("ValueParameterDefinition")) },
            { json: "valuePeriod", js: "valuePeriod", typ: u(undefined, r("Period")) },
            { json: "valuePositiveInt", js: "valuePositiveInt", typ: u(undefined, 3.14) },
            { json: "valueQuantity", js: "valueQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "valueRange", js: "valueRange", typ: u(undefined, r("ValueRange")) },
            { json: "valueRatio", js: "valueRatio", typ: u(undefined, r("ValueRatio")) },
            { json: "valueReference", js: "valueReference", typ: u(undefined, r("AuthorReference")) },
            { json: "valueRelatedArtifact", js: "valueRelatedArtifact", typ: u(undefined, r("ValueRelatedArtifact")) },
            { json: "valueSampledData", js: "valueSampledData", typ: u(undefined, r("ValueSampledData")) },
            { json: "valueSignature", js: "valueSignature", typ: u(undefined, r("ValueSignature")) },
            { json: "valueString", js: "valueString", typ: u(undefined, "") },
            { json: "valueTime", js: "valueTime", typ: u(undefined, "") },
            { json: "valueTiming", js: "valueTiming", typ: u(undefined, r("ValueTiming")) },
            { json: "valueTriggerDefinition", js: "valueTriggerDefinition", typ: u(undefined, r("ValueTriggerDefinition")) },
            { json: "valueUnsignedInt", js: "valueUnsignedInt", typ: u(undefined, 3.14) },
            { json: "valueUri", js: "valueUri", typ: u(undefined, "") },
            { json: "valueUrl", js: "valueUrl", typ: u(undefined, "") },
            { json: "valueUsageContext", js: "valueUsageContext", typ: u(undefined, r("ValueUsageContext")) },
            { json: "valueUuid", js: "valueUuid", typ: u(undefined, "") },
        ], false),
        "ElementMapping": o([
            { json: "_comment", js: "_comment", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_identity", js: "_identity", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_language", js: "_language", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_map", js: "_map", typ: u(undefined, r("PuneHedgehog")) },
            { json: "comment", js: "comment", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "identity", js: "identity", typ: u(undefined, "") },
            { json: "language", js: "language", typ: u(undefined, "") },
            { json: "map", js: "map", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
        ], false),
        "Slicing": o([
            { json: "_description", js: "_description", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_ordered", js: "_ordered", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_rules", js: "_rules", typ: u(undefined, r("PuneHedgehog")) },
            { json: "description", js: "description", typ: u(undefined, "") },
            { json: "discriminator", js: "discriminator", typ: u(undefined, a(r("Discriminator"))) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "ordered", js: "ordered", typ: u(undefined, true) },
            { json: "rules", js: "rules", typ: u(undefined, r("Rules")) },
        ], false),
        "Discriminator": o([
            { json: "_path", js: "_path", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_type", js: "_type", typ: u(undefined, r("PuneHedgehog")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "path", js: "path", typ: u(undefined, "") },
            { json: "type", js: "type", typ: u(undefined, r("DiscriminatorType")) },
        ], false),
        "TypeElement": o([
            { json: "_aggregation", js: "_aggregation", typ: u(undefined, a(r("PuneHedgehog"))) },
            { json: "_code", js: "_code", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_versioning", js: "_versioning", typ: u(undefined, r("PuneHedgehog")) },
            { json: "aggregation", js: "aggregation", typ: u(undefined, a(r("Aggregation"))) },
            { json: "code", js: "code", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "profile", js: "profile", typ: u(undefined, a("")) },
            { json: "targetProfile", js: "targetProfile", typ: u(undefined, a("")) },
            { json: "versioning", js: "versioning", typ: u(undefined, r("Versioning")) },
        ], false),
        "StructureDefinitionMapping": o([
            { json: "_comment", js: "_comment", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_identity", js: "_identity", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_name", js: "_name", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_uri", js: "_uri", typ: u(undefined, r("PuneHedgehog")) },
            { json: "comment", js: "comment", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "identity", js: "identity", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "name", js: "name", typ: u(undefined, "") },
            { json: "uri", js: "uri", typ: u(undefined, "") },
        ], false),
        "Meta": o([
            { json: "_lastUpdated", js: "_lastUpdated", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_source", js: "_source", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_versionId", js: "_versionId", typ: u(undefined, r("PuneHedgehog")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "lastUpdated", js: "lastUpdated", typ: u(undefined, "") },
            { json: "profile", js: "profile", typ: u(undefined, a("")) },
            { json: "security", js: "security", typ: u(undefined, a(r("Coding"))) },
            { json: "source", js: "source", typ: u(undefined, "") },
            { json: "tag", js: "tag", typ: u(undefined, a(r("Coding"))) },
            { json: "versionId", js: "versionId", typ: u(undefined, "") },
        ], false),
        "Snapshot": o([
            { json: "element", js: "element", typ: a(r("Element")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
        ], false),
        "Text": o([
            { json: "_status", js: "_status", typ: u(undefined, r("PuneHedgehog")) },
            { json: "div", js: "div", typ: m("any") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "status", js: "status", typ: u(undefined, r("TextStatus")) },
        ], false),
        "ValueTriggerDefinitionType": [
            "data-access-ended",
            "data-accessed",
            "data-added",
            "data-changed",
            "data-modified",
            "data-removed",
            "named-event",
            "periodic",
        ],
        "ValueRelatedArtifactType": [
            "citation",
            "composed-of",
            "depends-on",
            "derived-from",
            "documentation",
            "justification",
            "predecessor",
            "successor",
        ],
        "ValueHumanNameUse": [
            "anonymous",
            "maiden",
            "nickname",
            "official",
            "old",
            "temp",
            "usual",
        ],
        "Language": [
            "application/x-fhir-query",
            "text/cql",
            "text/fhirpath",
        ],
        "Unit": [
            "a",
            "d",
            "h",
            "min",
            "mo",
            "s",
            "wk",
        ],
        "When": [
            "AC",
            "ACD",
            "ACM",
            "AFT.early",
            "AFT.late",
            "ACV",
            "AFT",
            "C",
            "CD",
            "CM",
            "CV",
            "EVE.early",
            "EVE.late",
            "EVE",
            "HS",
            "MORN.early",
            "MORN.late",
            "MORN",
            "NIGHT",
            "NOON",
            "PC",
            "PCM",
            "PCD",
            "PCV",
            "PHS",
            "WAKE",
        ],
        "Comparator": [
            "<=",
            "<",
            ">",
            ">=",
        ],
        "Direction": [
            "ascending",
            "descending",
        ],
        "ValueContributorType": [
            "author",
            "editor",
            "endorser",
            "reviewer",
        ],
        "System": [
            "email",
            "fax",
            "other",
            "pager",
            "phone",
            "sms",
            "url",
        ],
        "ValueContactPointUse": [
            "home",
            "mobile",
            "old",
            "temp",
            "work",
        ],
        "IdentifierUse": [
            "official",
            "old",
            "secondary",
            "temp",
            "usual",
        ],
        "ValueAddressType": [
            "both",
            "physical",
            "postal",
        ],
        "ValueAddressUse": [
            "billing",
            "home",
            "old",
            "temp",
            "work",
        ],
        "ContextType": [
            "element",
            "extension",
            "fhirpath",
        ],
        "Derivation": [
            "constraint",
            "specialization",
        ],
        "Strength": [
            "example",
            "extensible",
            "preferred",
            "required",
        ],
        "Severity": [
            "error",
            "warning",
        ],
        "Representation": [
            "cdaText",
            "typeAttr",
            "xhtml",
            "xmlAttr",
            "xmlText",
        ],
        "DiscriminatorType": [
            "exists",
            "pattern",
            "profile",
            "type",
            "value",
        ],
        "Rules": [
            "closed",
            "open",
            "openAtEnd",
        ],
        "Aggregation": [
            "bundled",
            "contained",
            "referenced",
        ],
        "Versioning": [
            "either",
            "independent",
            "specific",
        ],
        "FhirVersion": [
            "0.01",
            "0.05",
            "0.06",
            "0.0.80",
            "0.0.81",
            "0.0.82",
            "0.11",
            "0.4.0",
            "0.5.0",
            "1.0.0",
            "1.0.1",
            "1.0.2",
            "1.1.0",
            "1.4.0",
            "1.6.0",
            "1.8.0",
            "3.0.0",
            "3.0.1",
            "3.3.0",
            "3.5.0",
            "4.0.0",
        ],
        "Kind": [
            "complex-type",
            "logical",
            "primitive-type",
            "resource",
        ],
        "StructureDefinitionStatus": [
            "active",
            "draft",
            "retired",
            "unknown",
        ],
        "TextStatus": [
            "additional",
            "empty",
            "extensions",
            "generated",
        ],
    };
}
