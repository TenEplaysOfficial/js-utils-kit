/**
 * Checks if a number is even.
 *
 * @param value - The number to check.
 * @returns True if the number is even, false otherwise.
 *
 * @example
 * isEven(4); // true
 * isEven(3); // false
 */
export function isEven(value: number): boolean {
  return value % 2 === 0;
}

/**
 * Checks if a number is odd.
 *
 * @param value - The number to check.
 * @returns True if the number is odd, false otherwise.
 *
 * @example
 * isOdd(3); // true
 * isOdd(4); // false
 */
export function isOdd(value: number): boolean {
  return value % 2 !== 0;
}
