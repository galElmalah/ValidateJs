import * as patternValidators from "./src/validation_functions/patterns";
import * as numberValidators from "./src/validation_functions/numbers";
import * as stringValidators from "./src/validation_functions/string";
import { composeValidators } from "./src/helpers/builders/composeValidators";

export default {
  patterns: { ...patternValidators },
  numbers: { ...numberValidators },
  string: { ...stringValidators },
  build: {
    andGate: composeValidators,
    orGate: () => {},
    norGate: () => {}
  }
};
