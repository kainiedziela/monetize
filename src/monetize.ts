import { checkPatternValidity } from "./check-pattern-validity";
import { DEFAULT_OPTIONS, Monetization } from "./monetization";

export const monetize = (
  value: number,
  options: Monetization = DEFAULT_OPTIONS
): string => {
  const {
    symbol,
    groups,
    separator,
    decimal,
    precision,
    pattern,
    negativePattern,
  } = { ...DEFAULT_OPTIONS, ...options };
  checkPatternValidity({ pattern, negativePattern });

  const split = value.toFixed(precision).split(".");
  const integral = split[0].replace(/\-/g, "");
  const fractional = split[1];

  const groupPattern = new RegExp(`\\B(?=(\\d{${groups}})+(?!\\d))`, "g");
  const getCurrencyFractional = (f: string, d: string) => (f ? d + f : "");

  return (value >= 0 ? pattern : negativePattern)
    .replace("!", symbol)
    .replace(
      "#",
      integral.replace(groupPattern, separator) +
        getCurrencyFractional(fractional, decimal)
    );
};
