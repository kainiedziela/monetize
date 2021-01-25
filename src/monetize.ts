import { checkPatternValidity } from './check-pattern-validity';
import { DEFAULT_OPTIONS } from './monetization';

export const monetize = (value: number, options = DEFAULT_OPTIONS): string => {
  checkPatternValidity(options);

  const {
    pattern,
    negativePattern,
    symbol,
    groups,
    seperator,
    decimal,
    precision,
  } = options;

  const split = value.toFixed(precision).split('.');
  const integral = split[0];
  const fractional = split[1];

  const groupPattern = new RegExp(`\\B(?=(\\d{${groups}})+(?!\\d))`, 'g');
  const getCurrencyFractional = (f: string, d: string) => (f ? d + f : '');

  return (value >= 0 ? pattern : negativePattern)
    .replace('!', symbol)
    .replace(
      '#',
      integral.replace(groupPattern, seperator) +
        getCurrencyFractional(fractional, decimal)
    );
};
