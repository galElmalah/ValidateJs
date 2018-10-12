import { exists } from "./index";

describe("general validation functions", () => {
  test("should return false only for undifiend and null", () => {
    const _undifiend = undefined;
    const _null = null;
    const shouldReturnTrueForTheFollowing = [[], {}, "", 0, "0"];
    expect(exists(_undifiend)).toBeFalsy();
    expect(exists(_null)).toBeFalsy();
    shouldReturnTrueForTheFollowing.forEach(element => {
      expect(exists(element)).toBeTruthy();
    });
  });
});
