import { isUrlValid, isEmailValid } from "./index";

describe("patterns validation functions", () => {
  test("should validate URL", () => {
    expect(isUrlValid("https://www.wix.com/")).toBeTruthy();
    expect(isUrlValid("htp://wix.co")).toBeFalsy();
    expect(isUrlValid("")).toBeFalsy();
  });

  test("should validate email", () => {
    expect(isEmailValid("test@test.com")).toBeTruthy();
    expect(isEmailValid("asd ")).toBeFalsy();
    expect(isEmailValid("")).toBeFalsy();
  });
});
