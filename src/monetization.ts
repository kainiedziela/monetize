export interface Monetization {
  symbol: string;
  groups: number;
  seperator: string;
  decimal: string;
  precision: number;
  pattern: string;
  negativePattern: string;
}

export const DEFAULT_OPTIONS: Monetization = {
  symbol: '$',
  groups: 3,
  seperator: ',',
  decimal: '.',
  precision: 2,
  pattern: '!#',
  negativePattern: '-!#',
};
