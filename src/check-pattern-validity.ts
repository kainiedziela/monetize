import { Monetization } from './monetization';

export const checkPatternValidity = (options: Monetization): void => {
  const { pattern, negativePattern } = options;
  if (!pattern) throw new Error('Pattern is required!');
  if (!negativePattern) throw new Error('Negative pattern is required!');
  if (!pattern.includes('#'))
    throw new Error(`Desired pattern has to include '#' representing numbers`);
  if (!pattern.includes('!'))
    throw new Error(
      `Desired pattern has to include '!' representing the currency symbol`
    );
  if (!negativePattern.includes('#'))
    throw new Error(
      `Desired negative pattern has to include '#' representing numbers`
    );
  if (!negativePattern.includes('!'))
    throw new Error(
      `Desired negative pattern has to include '!' representing the currency symbol`
    );
};
