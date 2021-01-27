const { monetize } = require("../dist");

describe("monetize", () => {
  it("should have sensible defaults", () => {
    expect(monetize(1000.233)).toBe("$1,000.23");
    expect(monetize(-0.1)).toBe("-$0.10");
  });

  it("should allow setting a custom currency symbol", () => {
    const options = { symbol: "€" };
    expect(monetize(1.23, options)).toBe("€1.23");
  });

  it("should allow setting how many digits are considered a group", () => {
    const options = { groups: 2 };
    expect(monetize(1000.23, options)).toBe("$10,00.23");
  });

  it("should allow setting a custom separator symbol", () => {
    const options = { separator: " " };
    expect(monetize(1000.23, options)).toBe("$1 000.23");
  });

  it("should allow setting a custom decimal symbol", () => {
    const options = { decimal: "," };
    expect(monetize(1.23, options)).toBe("$1,23");
  });

  it("should allow setting custom fractional precision", () => {
    let options = { precision: 3 };
    expect(monetize(1.23, options)).toBe("$1.230");
    expect(monetize(1.233, options)).toBe("$1.233");

    options = { precision: 0 };
    expect(monetize(1.233, options)).toBe("$1");
  });

  it("should allow setting a custom pattern", () => {
    let options = { pattern: "# !" };
    expect(monetize(1.23, options)).toBe("1.23 $");

    options = { pattern: "#" };
    expect(monetize(1.23, options)).toBe("1.23");
  });

  it("should allow setting a custom negative pattern", () => {
    let options = { negativePattern: "(!#)" };
    expect(monetize(-1.23, options)).toBe("($1.23)");

    options = { negativePattern: "-#" };
    expect(monetize(-1.23, options)).toBe("-1.23");
  });

  it("should throw if an invalid pattern is passed in", () => {
    ["!", ""].map((pattern) =>
      expect(() => {
        monetize(0, { pattern });
      }).toThrow()
    );
  });

  it("should throw if an invalid negative pattern is passed in", () => {
    ["!", ""].map((negativePattern) =>
      expect(() => {
        monetize(0, { negativePattern });
      }).toThrow()
    );
  });
});
