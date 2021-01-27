const { demonetize } = require("../dist");
const { monetize } = require("../dist");

describe("demonetize", () => {
  it("should parse monetized values based on default configuration", () => {
    expect(demonetize(monetize(1.23))).toBe(1.23);
    expect(demonetize(monetize(-1.23))).toBe(-1.23);
  });

  it("should parse monetized values with a custom pattern", () => {
    const options = { decimal: "," };
    expect(demonetize("1 000,23 €", options)).toBe(1000.23);
  });

  it("should parse monetized values with a custom negative pattern", () => {
    let options = { negativePattern: "(!#)" };
    expect(demonetize("($1.23)", options)).toBe(-1.23);

    options = { negativePattern: "!#-" };
    expect(demonetize("$1.23-", options)).toBe(-1.23);
  });

  it("should ignore non-numerical characters", () => {
    expect(demonetize("$a1.b2cd3ef")).toBe(1.23);
  });
});
