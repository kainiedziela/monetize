import { DEFAULT_OPTIONS, Monetization } from "./monetization";
import { monetize } from "./monetize";

/**
 * Returns a number parsed from a numerical currency-type string (probably created with `monetize`).
 * @param {string} value The numerical currency-type string to perform parsing on.
 * @param {Monetization} options Configuration of the formatting options.
 *
 * @see `monetize`
 */
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
