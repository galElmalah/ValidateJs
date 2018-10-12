import { Predicate } from "../../interfaces&types/types";
import { PredicatsToBoolean } from "../../interfaces&types/interfaces";


/**
 * 
 * TODO: need to think of a beeter name and more variations
 */
export const oneOrMore: PredicatsToBoolean = (...validators: (Predicate)[]) => (
  value: string | number
): boolean => {
  return validators.some(validator => validator(value));
};

export const oneOrMoreFalse: PredicatsToBoolean = (...validators: (Predicate)[]) => (
  value: string | number
): boolean => {
  return validators.some(validator => !validator(value));
};

