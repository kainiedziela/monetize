export interface Monetization {
  symbol?: string;
  groups?: number;
  separator?: string;
  decimal?: string;
  precision?: number;
  pattern?: string;
  negativePattern?: string;
}

export const DEFAULT_OPTIONS = {
  symbol: "$",
  groups: 3,
  separator: ",",
  decimal: ".",
  precision: 2,
  pattern: "!#",
  negativePattern: "-!#",
};
