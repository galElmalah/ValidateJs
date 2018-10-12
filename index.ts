import * as patternValidators from "./src/validation_functions/patterns";
import * as numberValidators from "./src/validation_functions/numbers";
import * as stringValidators from "./src/validation_functions/strings";
import { composeValidators } from "./src/helpers/builders/composeValidators";
import { oneOrMore, oneOrMoreFalse } from "./src/helpers/builders/oneOrMore";

export default {
  patterns: { ...patternValidators },
  numbers: { ...numberValidators },
  string: { ...stringValidators },
  /**
   * Collection of functions to build complex validators functions
   */
  build: {
    andGate: composeValidators,
    orGate: oneOrMore,
    norGate: oneOrMoreFalse,
    /**
     * Build a custom validator for a specifc data object.
     */
    customStructure: () => {}
  }
};
