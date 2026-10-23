import { describe, it, expect } from "vitest";
import { authErrorPt, brl, parseReferral } from "./format";

describe("parseReferral", () => {
  it("accepts a raw code", () => expect(parseReferral(" ab12cd34 ")).toBe("AB12CD34"));
  it("accepts an invite link", () =>
    expect(parseReferral("https://site.app/auth?ref=ab12cd34")).toBe("AB12CD34"));
});

describe("brl", () => {
  it("formats with comma decimals", () => expect(brl(6)).toBe("R$\u00a06,00"));
  it("groups thousands", () => expect(brl("1234567.5")).toBe("R$\u00a01.234.567,50"));
  it("handles null and negatives", () => {
    expect(brl(null)).toBe("R$\u00a00,00");
    expect(brl(-10.1)).toBe("-R$\u00a010,10");
  });
});

describe("authErrorPt", () => {
  it("translates weak password", () =>
    expect(authErrorPt({ message: "Password is known to be weak and easy to guess" })).toMatch(/Senha fraca/));
  it("translates invalid credentials", () =>
    expect(authErrorPt({ code: "invalid_credentials", message: "Invalid login credentials" })).toBe("E-mail ou senha inválidos."));
});
