/**
 * Pads a string on the left with a specified character until it reaches the desired length.
 * @param str - The string to pad.
 * @param length - The target length of the padded string.
 * @param char - The character to use for padding (defaults to a space).
 * @returns The padded string, or the original string if its length is already greater than or equal to the target length.
 * @example
 * ```ts
 * console.log(padLeft("hello", 8)); // "   hello"
 * console.log(padLeft("hi", 5, "*")); // "***hi"
 * console.log(padLeft("hello", 3)); // "hello"
 * console.log(padLeft("", 3, "0")); // "000"
 * ```
 */
export function padLeft(
  str: string,
  length: number,
  char: string = ' ',
): string {
  return str.padStart(length, char);
}

/**
 * Pads a string on the right with a specified character until it reaches the desired length.
 * @param str - The string to pad.
 * @param length - The target length of the padded string.
 * @param char - The character to use for padding (defaults to a space).
 * @returns The padded string, or the original string if its length is already greater than or equal to the target length.
 * @example
 * ```ts
 * console.log(padRight("hello", 8)); // "hello   "
 * console.log(padRight("hi", 5, "*")); // "hi***"
 * console.log(padRight("hello", 3)); // "hello"
 * console.log(padRight("", 3, "0")); // "000"
 * ```
 */
export function padRight(
  str: string,
  length: number,
  char: string = ' ',
): string {
  return str.padEnd(length, char);
}

/**
 * Truncates a string to a specified length, appending a suffix if the string is too long.
 * @param str - The string to truncate.
 * @param length - The maximum length of the resulting string (including the suffix).
 * @param suffix - The suffix to append if truncation occurs (defaults to "...").
 * @returns The truncated string with the suffix if the original string exceeds the length, otherwise the original string.
 * @example
 * ```ts
 * console.log(truncate("hello world", 8)); // "hello..."
 * console.log(truncate("hi", 5)); // "hi"
 * console.log(truncate("hello", 5, "...")); // "he..."
 * console.log(truncate("", 3)); // ""
 * ```
 */
export function truncate(
  str: string,
  length: number,
  suffix: string = '...',
): string {
  return str.length > length
    ? str.slice(0, length - suffix.length) + suffix
    : str;
}

/**
 * Repeats a string a specified number of times.
 * @param str - The string to repeat.
 * @param count - The number of times to repeat the string (must be non-negative).
 * @returns The string repeated the specified number of times.
 * @example
 * ```ts
 * console.log(repeatString("hi", 3)); // "hihihi"
 * console.log(repeatString("a", 2)); // "aa"
 * console.log(repeatString("test", 0)); // ""
 * console.log(repeatString("", 5)); // ""
 * ```
 */
export function repeatString(str: string, count: number): string {
  return str.repeat(count);
}
