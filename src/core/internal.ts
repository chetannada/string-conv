/**
 * Internal helper to ensure the input is a valid string.
 * @internal
 */
export function ensureString(str: unknown): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str;
}
