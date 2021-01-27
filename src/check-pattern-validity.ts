import { Monetization } from "./monetization";

export const checkPatternValidity = (options: Monetization): void => {
  const { pattern, negativePattern } = options;

  if (!pattern) throw new Error("Pattern is required!");
  if (!negativePattern) throw new Error("Negative pattern is required!");

  if (!pattern.includes("#"))
    throw new Error(
      `Pattern has to include '#' representing the numerical value!`
    );
  if (!negativePattern.includes("#"))
    throw new Error(
      `Negative pattern has to include '#' representing the numerical value!`
    );
};
