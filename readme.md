# monetize

A lightweight library used to format a number to a currency format and parse such values back to numbers.

## Installation

```bash
npm install @kainiedziela/monetize --save
```

## Usage

```JS
import { monetize, demonetize } from "@kainiedziela/monetize"
monetize(1.23) // -> "$1.23"
demonetize("$1.23") // -> 1.23
```

When using `demonetize` on a monetized value that had custom options remember to pass those same options to as a param to `demonetize`, otherwise it may not parse such a value properly. This mainly concerns `decimal` and `negativePattern` options.

## Options

You can customize the formatting and parsing of `monetize` and `demonetie` with an optional options object. These values default to US centric currency values, but they can be overridden based on your locale.

### `symbol`, default: `"$"`

```JS
monetize(1.23) // -> "$1.23"
monetize(1.23, { symbol: '€' }) // -> "€1.23"
```

### `groups`, default: `3`

The number of digits to be grouped into a single grouping.

```JS
monetize(1000.23) // -> "$1,000.23"
monetize(1000.23, { groups: 2 }) // -> "$10,00.23"
```

### `separator`, default: `","`

Separator between the number groupings.

```JS
monetize(1000.23) // -> "$1,000.23"
monetize(1000.23, { separator: "" }) // -> "$1000.23"
monetize(1000.23, { separator: " " }) // -> "$1 000.23"
```

### `decimal`, default: `"."`

```JS
monetize(1.23) // -> "$1.23"
monetize(1.23, { decimal: "," }) // -> "$1,23"
```

### `precision`, default: `2`

Number of decimal places to store as the fractional.

```JS
monetize(1.23) // -> "$1.23"
monetize(1.23, { precision: 0 }) // -> "$1"
monetize(1.23, { precision: 3 }) // -> "$1.230"
```

### `pattern`, default: `"!#"`

Allows you to customize the format pattern using `!` as replacement for the currency symbol and `#` as replacement for the currency amount.

```JS
monetize(1.23) // -> "$1.23"
monetize(1.23, { pattern: "# !" }) // -> "1.23 $"
monetize(1.23, { pattern: "<!#>" }) // -> "<$1.23>"
monetize(1.23, { pattern: "#" }) // -> "1.23"
```

### `negativePattern`, default: `"-!#"`

Allows you to customize the negative format pattern using `!` as replacement for the currency symbol and `#` as replacement for the currency amount.

```JS
monetize(1.23) // -> "$1.23"
monetize(1.23, { negativePattern: "!-#" }) // -> "$-1.23"
monetize(1.23, { negativePattern: "-# !" }) // -> "-1.23 $"
monetize(1.23, { negativePattern: "(!#)" }) // -> "($1.23)"
monetize(1.23, { negativePattern: "-#" }) // -> "-1.23"
```
