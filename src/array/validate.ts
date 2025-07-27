import { isDefined } from '../checks';

/**
 * Checks if a value is a defined array.
 * @param value - The value to check.
 * @returns True if the value is a defined array, false otherwise.
 * @example
 * ```ts
 * console.log(isArray([1, 2, 3])); // true
 * console.log(isArray([])); // true
 * console.log(isArray({})); // false
 * console.log(isArray(null)); // false
 * console.log(isArray(undefined)); // false
 * console.log(isArray("hello")); // false
 * ```
 */
export function isArray<T>(value: T) {
  return isDefined(value) && Array.isArray(value);
}
