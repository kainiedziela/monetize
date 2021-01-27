import { DEFAULT_OPTIONS, Monetization } from "./monetization";
import { monetize } from "./monetize";

export const demonetize = (
  value: string,
  options: Monetization = DEFAULT_OPTIONS
): number => {
  const mergedOptions = { ...DEFAULT_OPTIONS, ...options };
  const { decimal } = mergedOptions;

  const parsed = Number(
    value
      .replace(new RegExp(`[^\\d${decimal}]`, "g"), "") // replace non-numeric values
      .replace(new RegExp(`\\${decimal}`, "g"), ".") // convert decimal values
  );

  const isNegative = monetize(-parsed, mergedOptions) === value;

  return isNegative ? -parsed : parsed;
};
