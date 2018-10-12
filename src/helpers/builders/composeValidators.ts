import { Predicate } from "../../interfaces&types/types";
import { PredicatsToBoolean } from "../../interfaces&types/interfaces";

export const composeValidators: PredicatsToBoolean =
  /**
   * @param { () => boolean } validators the functions you want your input to be validate with
   * @returns {boolean} return true if all of the functions returne true and false if one of them dont
   */
  (...validators: (Predicate)[]) => (value: string | number): boolean => {
    return validators.reduce(
      (accm, validator) => accm && validator(value),
      true
    );
  };
