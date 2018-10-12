import { Predicate } from "./types";

export interface PredicatsToBoolean {
  (...validators: (Predicate)[]): (value: string | number) => boolean;
}
