import { Predicate } from "../../interfaces&types/types";

export const isNumeric: Predicate = number => {
  return !isNaN(parseFloat(number)) && isFinite(number);
};

export const isBigger = (limit: number): Predicate => (number: number) =>
  Number(number) > Number(limit);

export const isBiggerOrEqual = (limit: number): Predicate => (number: number) =>
  Number(number) >= Number(limit);

export const isInteger: Predicate = (value: string | number) =>
  Number.isInteger(Number(value));

export const isBetween = (
  lowerBound: number,
  upperBound: number
): Predicate => (value: number) => {
  return value > Number(lowerBound) && value < Number(upperBound);
};

export const isBetweenIncluded = (
  lowerBound: number,
  upperBound: number
): Predicate => (value: number) => {
  return value >= Number(lowerBound) && value <= Number(upperBound);
};

export const isPrecentageValid: Predicate = isBetweenIncluded(0, 100);

