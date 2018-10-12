import { Predicate } from "../../interfaces&types/types";

export const startsWith = (pattern: string): Predicate => (
  text: string
): boolean => text.startsWith(pattern, 0);
