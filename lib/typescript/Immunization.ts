// To parse this data:
//
//   import { Convert, Immunization } from "./file";
//
//   const immunization = Convert.toImmunization(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * Describes the event of a patient being administered a vaccine or a record of an
 * immunization as reported by a patient, a clinician or another party.
 */
export interface Immunization {
    /**
     * Extensions for expirationDate
     */
    _expirationDate?: PuneHedgehog;
    /**
     * Extensions for implicitRules
     */
    _implicitRules?: PuneHedgehog;
    /**
     * Extensions for isSubpotent
     */
    _isSubpotent?: PuneHedgehog;
    /**
     * Extensions for language
     */
    _language?: PuneHedgehog;
    /**
     * Extensions for lotNumber
     */
    _lotNumber?: PuneHedgehog;
    /**
     * Extensions for occurrenceDateTime
     */
    _occurrenceDateTime?: PuneHedgehog;
    /**
     * Extensions for occurrenceString
     */
    _occurrenceString?: PuneHedgehog;
    /**
     * Extensions for primarySource
     */
    _primarySource?: PuneHedgehog;
    /**
     * Extensions for recorded
     */
    _recorded?: PuneHedgehog;
    /**
     * Extensions for status
     */
    _status?: PuneHedgehog;
    /**
     * The quantity of vaccine product that was administered.
     */
    doseQuantity?: ValueQuantity;
    /**
     * Educational material presented to the patient (or guardian) at the time of vaccine
     * administration.
     */
    education?: Education[];
    /**
     * The visit or admission or other contact between patient and health care provider the
     * immunization was performed as part of.
     */
    encounter?: AuthorReference;
    /**
     * Date vaccine batch expires.
     */
    expirationDate?: string;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the resource. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Indicates the source of the vaccine actually administered. This may be different than the
     * patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine
     * but due to inventory issues, vaccine purchased with private funds was actually
     * administered).
     */
    fundingSource?: PurpleType;
    /**
     * The logical id of the resource, as used in the URL for the resource. Once assigned, this
     * value never changes.
     */
    id?: string;
    /**
     * A unique identifier assigned to this immunization record.
     */
    identifier?: Identifier[];
    /**
     * A reference to a set of rules that were followed when the resource was constructed, and
     * which must be understood when processing the content. Often, this is a reference to an
     * implementation guide that defines the special rules along with other profiles etc.
     */
    implicitRules?: string;
    /**
     * Indication if a dose is considered to be subpotent. By default, a dose should be
     * considered to be potent.
     */
    isSubpotent?: boolean;
    /**
     * The base language in which the resource is written.
     */
    language?: string;
    /**
     * The service delivery location where the vaccine administration occurred.
     */
    location?: AuthorReference;
    /**
     * Lot number of the  vaccine product.
     */
    lotNumber?: string;
    /**
     * Name of vaccine manufacturer.
     */
    manufacturer?: AuthorReference;
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
     * Extra information about the immunization that is not conveyed by the other attributes.
     */
    note?: ValueAnnotation[];
    /**
     * Date vaccine administered or was to be administered.
     */
    occurrenceDateTime?: string;
    /**
     * Date vaccine administered or was to be administered.
     */
    occurrenceString?: string;
    /**
     * The patient who either received or did not receive the immunization.
     */
    patient?: AuthorReference;
    /**
     * Indicates who performed the immunization event.
     */
    performer?: Performer[];
    /**
     * An indication that the content of the record is based on information from the person who
     * administered the vaccine. This reflects the context under which the data was originally
     * recorded.
     */
    primarySource?: boolean;
    /**
     * Indicates a patient's eligibility for a funding program.
     */
    programEligibility?: PurpleType[];
    /**
     * The protocol (set of recommendations) being followed by the provider who administered the
     * dose.
     */
    protocolApplied?: ProtocolApplied[];
    /**
     * Categorical data indicating that an adverse event is associated in time to an
     * immunization.
     */
    reaction?: Reaction[];
    /**
     * Reasons why the vaccine was administered.
     */
    reasonCode?: PurpleType[];
    /**
     * Condition, Observation or DiagnosticReport that supports why the immunization was
     * administered.
     */
    reasonReference?: AuthorReference[];
    /**
     * The date the occurrence of the immunization was first captured in the record -
     * potentially significantly after the occurrence of the event.
     */
    recorded?: string;
    /**
     * The source of the data when the report of the immunization event is not based on
     * information from the person who administered the vaccine.
     */
    reportOrigin?: PurpleType;
    /**
     * The path by which the vaccine product is taken into the body.
     */
    route?: PurpleType;
    /**
     * Body site where vaccine was administered.
     */
    site?: PurpleType;
    /**
     * Indicates the current status of the immunization event.
     */
    status?: string;
    /**
     * Indicates the reason the immunization event was not performed.
     */
    statusReason?: PurpleType;
    /**
     * Reason why a dose is considered to be subpotent.
     */
    subpotentReason?: PurpleType[];
    /**
     * A human-readable narrative that contains a summary of the resource and can be used to
     * represent the content of the resource to a human. The narrative need not encode all the
     * structured data, but is required to contain sufficient detail to make it "clinically
     * safe" for a human to just read the narrative. Resource definitions may define what
     * content should be represented in the narrative to ensure clinical safety.
     */
    text?: Text;
    /**
     * Vaccine that was administered or was to be administered.
     */
    vaccineCode?: PurpleType;
}

/**
 * Value of extension - must be one of a constrained set of the data types (see
 * [Extensibility](extensibility.html) for a list).
 *
 * Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or
 * categorize an artifact. This metadata can either be specific to the applicable population
 * (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting,
 * provider of care).
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
 * The quantity of vaccine product that was administered.
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
 * Indicates the source of the vaccine actually administered. This may be different than the
 * patient eligibility (e.g. the patient may be eligible for a publically purchased vaccine
 * but due to inventory issues, vaccine purchased with private funds was actually
 * administered).
 *
 * Describes the type of performance (e.g. ordering provider, administering provider,
 * etc.).
 *
 * The source of the data when the report of the immunization event is not based on
 * information from the person who administered the vaccine.
 *
 * The path by which the vaccine product is taken into the body.
 *
 * Body site where vaccine was administered.
 *
 * Indicates the reason the immunization event was not performed.
 *
 * Vaccine that was administered or was to be administered.
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
 * The visit or admission or other contact between patient and health care provider the
 * immunization was performed as part of.
 *
 * The service delivery location where the vaccine administration occurred.
 *
 * Name of vaccine manufacturer.
 *
 * The patient who either received or did not receive the immunization.
 *
 * The practitioner or organization who performed the action.
 *
 * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
 *
 * Details of the reaction.
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
 * Extensions for expirationDate
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
 * Extensions for implicitRules
 *
 * Extensions for isSubpotent
 *
 * Extensions for lotNumber
 *
 * Extensions for occurrenceDateTime
 *
 * Extensions for occurrenceString
 *
 * Extensions for primarySource
 *
 * Extensions for recorded
 *
 * Extensions for status
 *
 * Extensions for documentType
 *
 * Extensions for presentationDate
 *
 * Extensions for publicationDate
 *
 * Extensions for lastUpdated
 *
 * Extensions for source
 *
 * Extensions for versionId
 *
 * Extensions for doseNumberPositiveInt
 *
 * Extensions for doseNumberString
 *
 * Extensions for series
 *
 * Extensions for seriesDosesPositiveInt
 *
 * Extensions for seriesDosesString
 *
 * Extensions for date
 *
 * Extensions for reported
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
 * Describes the event of a patient being administered a vaccine or a record of an
 * immunization as reported by a patient, a clinician or another party.
 */
export interface Education {
    /**
     * Extensions for documentType
     */
    _documentType?: PuneHedgehog;
    /**
     * Extensions for presentationDate
     */
    _presentationDate?: PuneHedgehog;
    /**
     * Extensions for publicationDate
     */
    _publicationDate?: PuneHedgehog;
    /**
     * Extensions for reference
     */
    _reference?: PuneHedgehog;
    /**
     * Identifier of the material presented to the patient.
     */
    documentType?: string;
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
     * Date the educational material was given to the patient.
     */
    presentationDate?: string;
    /**
     * Date the educational material was published.
     */
    publicationDate?: string;
    /**
     * Reference pointer to the educational material given to the patient if the information was
     * on line.
     */
    reference?: string;
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
 * Describes the event of a patient being administered a vaccine or a record of an
 * immunization as reported by a patient, a clinician or another party.
 */
export interface Performer {
    /**
     * The practitioner or organization who performed the action.
     */
    actor: AuthorReference;
    /**
     * May be used to represent additional information that is not part of the basic definition
     * of the element. To make the use of extensions safe and manageable, there is a strict set
     * of governance  applied to the definition and use of extensions. Though any implementer
     * can define an extension, there is a set of requirements that SHALL be met as part of the
     * definition of the extension.
     */
    extension?: Extension[];
    /**
     * Describes the type of performance (e.g. ordering provider, administering provider, etc.).
     */
    function?: PurpleType;
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
 * Describes the event of a patient being administered a vaccine or a record of an
 * immunization as reported by a patient, a clinician or another party.
 */
export interface ProtocolApplied {
    /**
     * Extensions for doseNumberPositiveInt
     */
    _doseNumberPositiveInt?: PuneHedgehog;
    /**
     * Extensions for doseNumberString
     */
    _doseNumberString?: PuneHedgehog;
    /**
     * Extensions for series
     */
    _series?: PuneHedgehog;
    /**
     * Extensions for seriesDosesPositiveInt
     */
    _seriesDosesPositiveInt?: PuneHedgehog;
    /**
     * Extensions for seriesDosesString
     */
    _seriesDosesString?: PuneHedgehog;
    /**
     * Indicates the authority who published the protocol (e.g. ACIP) that is being followed.
     */
    authority?: AuthorReference;
    /**
     * Nominal position in a series.
     */
    doseNumberPositiveInt?: number;
    /**
     * Nominal position in a series.
     */
    doseNumberString?: string;
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
     * One possible path to achieve presumed immunity against a disease - within the context of
     * an authority.
     */
    series?: string;
    /**
     * The recommended number of doses to achieve immunity.
     */
    seriesDosesPositiveInt?: number;
    /**
     * The recommended number of doses to achieve immunity.
     */
    seriesDosesString?: string;
    /**
     * The vaccine preventable disease the dose is being administered against.
     */
    targetDisease?: PurpleType[];
}

/**
 * Describes the event of a patient being administered a vaccine or a record of an
 * immunization as reported by a patient, a clinician or another party.
 */
export interface Reaction {
    /**
     * Extensions for date
     */
    _date?: PuneHedgehog;
    /**
     * Extensions for reported
     */
    _reported?: PuneHedgehog;
    /**
     * Date of reaction to the immunization.
     */
    date?: string;
    /**
     * Details of the reaction.
     */
    detail?: AuthorReference;
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
     * Self-reported indicator.
     */
    reported?: boolean;
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
    status?: Status;
}

/**
 * The status of the narrative - whether it's entirely generated (from just the defined data
 * or the extensions too), or whether a human authored it and it may contain additional data.
 */
export enum Status {
    Additional = "additional",
    Empty = "empty",
    Extensions = "extensions",
    Generated = "generated",
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export namespace Convert {
    export function toImmunization(json: string): Immunization {
        return cast(JSON.parse(json), r("Immunization"));
    }

    export function immunizationToJson(value: Immunization): string {
        return JSON.stringify(uncast(value, r("Immunization")), null, 2);
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
        "Immunization": o([
            { json: "_expirationDate", js: "_expirationDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_implicitRules", js: "_implicitRules", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_isSubpotent", js: "_isSubpotent", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_language", js: "_language", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_lotNumber", js: "_lotNumber", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_occurrenceDateTime", js: "_occurrenceDateTime", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_occurrenceString", js: "_occurrenceString", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_primarySource", js: "_primarySource", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_recorded", js: "_recorded", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_status", js: "_status", typ: u(undefined, r("PuneHedgehog")) },
            { json: "doseQuantity", js: "doseQuantity", typ: u(undefined, r("ValueQuantity")) },
            { json: "education", js: "education", typ: u(undefined, a(r("Education"))) },
            { json: "encounter", js: "encounter", typ: u(undefined, r("AuthorReference")) },
            { json: "expirationDate", js: "expirationDate", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "fundingSource", js: "fundingSource", typ: u(undefined, r("PurpleType")) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "identifier", js: "identifier", typ: u(undefined, a(r("Identifier"))) },
            { json: "implicitRules", js: "implicitRules", typ: u(undefined, "") },
            { json: "isSubpotent", js: "isSubpotent", typ: u(undefined, true) },
            { json: "language", js: "language", typ: u(undefined, "") },
            { json: "location", js: "location", typ: u(undefined, r("AuthorReference")) },
            { json: "lotNumber", js: "lotNumber", typ: u(undefined, "") },
            { json: "manufacturer", js: "manufacturer", typ: u(undefined, r("AuthorReference")) },
            { json: "meta", js: "meta", typ: u(undefined, r("Meta")) },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "note", js: "note", typ: u(undefined, a(r("ValueAnnotation"))) },
            { json: "occurrenceDateTime", js: "occurrenceDateTime", typ: u(undefined, "") },
            { json: "occurrenceString", js: "occurrenceString", typ: u(undefined, "") },
            { json: "patient", js: "patient", typ: u(undefined, r("AuthorReference")) },
            { json: "performer", js: "performer", typ: u(undefined, a(r("Performer"))) },
            { json: "primarySource", js: "primarySource", typ: u(undefined, true) },
            { json: "programEligibility", js: "programEligibility", typ: u(undefined, a(r("PurpleType"))) },
            { json: "protocolApplied", js: "protocolApplied", typ: u(undefined, a(r("ProtocolApplied"))) },
            { json: "reaction", js: "reaction", typ: u(undefined, a(r("Reaction"))) },
            { json: "reasonCode", js: "reasonCode", typ: u(undefined, a(r("PurpleType"))) },
            { json: "reasonReference", js: "reasonReference", typ: u(undefined, a(r("AuthorReference"))) },
            { json: "recorded", js: "recorded", typ: u(undefined, "") },
            { json: "reportOrigin", js: "reportOrigin", typ: u(undefined, r("PurpleType")) },
            { json: "route", js: "route", typ: u(undefined, r("PurpleType")) },
            { json: "site", js: "site", typ: u(undefined, r("PurpleType")) },
            { json: "status", js: "status", typ: u(undefined, "") },
            { json: "statusReason", js: "statusReason", typ: u(undefined, r("PurpleType")) },
            { json: "subpotentReason", js: "subpotentReason", typ: u(undefined, a(r("PurpleType"))) },
            { json: "text", js: "text", typ: u(undefined, r("Text")) },
            { json: "vaccineCode", js: "vaccineCode", typ: u(undefined, r("PurpleType")) },
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
        "Education": o([
            { json: "_documentType", js: "_documentType", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_presentationDate", js: "_presentationDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_publicationDate", js: "_publicationDate", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_reference", js: "_reference", typ: u(undefined, r("PuneHedgehog")) },
            { json: "documentType", js: "documentType", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "presentationDate", js: "presentationDate", typ: u(undefined, "") },
            { json: "publicationDate", js: "publicationDate", typ: u(undefined, "") },
            { json: "reference", js: "reference", typ: u(undefined, "") },
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
        "Performer": o([
            { json: "actor", js: "actor", typ: r("AuthorReference") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "function", js: "function", typ: u(undefined, r("PurpleType")) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
        ], false),
        "ProtocolApplied": o([
            { json: "_doseNumberPositiveInt", js: "_doseNumberPositiveInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_doseNumberString", js: "_doseNumberString", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_series", js: "_series", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_seriesDosesPositiveInt", js: "_seriesDosesPositiveInt", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_seriesDosesString", js: "_seriesDosesString", typ: u(undefined, r("PuneHedgehog")) },
            { json: "authority", js: "authority", typ: u(undefined, r("AuthorReference")) },
            { json: "doseNumberPositiveInt", js: "doseNumberPositiveInt", typ: u(undefined, 3.14) },
            { json: "doseNumberString", js: "doseNumberString", typ: u(undefined, "") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "series", js: "series", typ: u(undefined, "") },
            { json: "seriesDosesPositiveInt", js: "seriesDosesPositiveInt", typ: u(undefined, 3.14) },
            { json: "seriesDosesString", js: "seriesDosesString", typ: u(undefined, "") },
            { json: "targetDisease", js: "targetDisease", typ: u(undefined, a(r("PurpleType"))) },
        ], false),
        "Reaction": o([
            { json: "_date", js: "_date", typ: u(undefined, r("PuneHedgehog")) },
            { json: "_reported", js: "_reported", typ: u(undefined, r("PuneHedgehog")) },
            { json: "date", js: "date", typ: u(undefined, "") },
            { json: "detail", js: "detail", typ: u(undefined, r("AuthorReference")) },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "modifierExtension", js: "modifierExtension", typ: u(undefined, a(r("Extension"))) },
            { json: "reported", js: "reported", typ: u(undefined, true) },
        ], false),
        "Text": o([
            { json: "_status", js: "_status", typ: u(undefined, r("PuneHedgehog")) },
            { json: "div", js: "div", typ: m("any") },
            { json: "extension", js: "extension", typ: u(undefined, a(r("Extension"))) },
            { json: "id", js: "id", typ: u(undefined, "") },
            { json: "status", js: "status", typ: u(undefined, r("Status")) },
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
        "Status": [
            "additional",
            "empty",
            "extensions",
            "generated",
        ],
    };
}
