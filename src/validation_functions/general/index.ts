import { Predicate } from "../../interfaces&types/types";
import { composeValidators } from "../../helpers/builders/composeValidators";
import { oneOrMore } from "../../helpers/builders/oneOrMore";

const isTypeOf = (type: string): Predicate => value => typeof value === type;

const isUndifiend = isTypeOf("undefined");
const isNull = (value: any) => value === null;
/**
 * @param value check if that value exists, meaning not undifiend or null.
 * For empty string, arrays etc the return value will be true
 */

export const exists = (value: any) => {
  return !oneOrMore(isUndifiend, isNull)(value) ? true : false;
};
