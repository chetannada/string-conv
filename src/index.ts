/**
 * Converts a string to UPPERCASE
 * @param str - The input string
 * @returns The string in uppercase
 * @example
 * toUpperCase("hello world") // => "HELLO WORLD"
 */
export function toUpperCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.toUpperCase();
}

/**
 * Converts a string to lowercase
 * @param str - The input string
 * @returns The string in lowercase
 * @example
 * toLowerCase("HELLO WORLD") // => "hello world"
 */
export function toLowerCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.toLowerCase();
}

/**
 * Converts a string to Title Case (first letter of each word capitalized)
 * @param str - The input string
 * @returns The string in title case
 * @example
 * toTitleCase("hello world") // => "Hello World"
 */
export function toTitleCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .toLowerCase()
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default { toUpperCase, toLowerCase, toTitleCase };
