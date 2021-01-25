import { DEFAULT_OPTIONS } from './monetization';

export const parse = (value: string, options = DEFAULT_OPTIONS): number => {
  const { decimal } = options;

  const parsed = value
    .replace(new RegExp(`[^-\\d${decimal}]`, 'g'), '') // replace non-numeric values
    .replace(new RegExp(`\\${decimal}`, 'g'), '.'); // convert decimal values

  return Number(parsed);
};
