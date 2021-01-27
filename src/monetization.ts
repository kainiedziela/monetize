/** `monetize` and `demonetize` configuration options interface. */
export interface Monetization {
  symbol?: string;
  groups?: number;
  separator?: string;
  decimal?: string;
  precision?: number;
  pattern?: string;
  negativePattern?: string;
}

/** An object of sensible defaults for `monetize` and `demonetize`. */
export const DEFAULT_OPTIONS = {
  symbol: "$",
  groups: 3,
  separator: ",",
  decimal: ".",
  precision: 2,
  pattern: "!#",
  negativePattern: "-!#",
};
