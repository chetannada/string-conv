import { ensureString } from "./internal";

/**
 * Truncates a string to a maximum length and appends a suffix if truncated
 * @param str - The input string
 * @param maxLength - Maximum allowed length (including suffix)
 * @param suffix - The suffix to append when truncated (default: "...")
 * @returns The truncated string
 * @example
 * truncate("Hello, World!", 8)         // => "Hello..."
 * truncate("Hello, World!", 8, " →")  // => "Hello →"
 */
export function truncate(
  str: string,
  maxLength: number,
  suffix = "...",
): string {
  const input = ensureString(str);
  if (typeof maxLength !== "number" || maxLength < 1) {
    throw new RangeError("maxLength must be a positive number");
  }
  if (input.length <= maxLength) return input;
  return input.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Counts the number of words in a string
 * @param str - The input string
 * @returns The word count
 * @example
 * wordCount("hello world foo") // => 3
 */
export function wordCount(str: string): number {
  return ensureString(str).trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Counts the number of characters in a string, optionally excluding whitespace
 * @param str - The input string
 * @param excludeWhitespace - Whether to exclude whitespace characters (default: false)
 * @returns The character count
 * @example
 * charCount("hello world")       // => 11
 * charCount("hello world", true) // => 10
 */
export function charCount(str: string, excludeWhitespace = false): number {
  const input = ensureString(str);
  return excludeWhitespace ? input.replace(/\s/g, "").length : input.length;
}

/**
 * Counts the number of times a substring appears in a string
 * @param str - The input string
 * @param substring - The substring to search for
 * @param caseSensitive - Whether the search is case-sensitive (default: true)
 * @returns The occurrence count
 * @example
 * countOccurrences("hello world hello", "hello")        // => 2
 * countOccurrences("Hello World Hello", "hello", false) // => 2
 */
export function countOccurrences(
  str: string,
  substring: string,
  caseSensitive = true,
): number {
  const haystack = ensureString(str);
  const needle = ensureString(substring);
  if (!needle) return 0;
  const h = caseSensitive ? haystack : haystack.toLowerCase();
  const n = caseSensitive ? needle : needle.toLowerCase();
  let count = 0;
  let pos = 0;
  while ((pos = h.indexOf(n, pos)) !== -1) {
    count++;
    pos += n.length;
  }
  return count;
}

/**
 * Reverses the order of words in a string
 * @param str - The input string
 * @returns The string with word order reversed
 * @example
 * reverseWords("hello world foo") // => "foo world hello"
 */
export function reverseWords(str: string): string {
  return ensureString(str)
    .trim()
    .split(/\s+/)
    .filter(Boolean)
    .reverse()
    .join(" ");
}

/**
 * Normalizes all whitespace in a string — trims edges and collapses internal
 * runs of whitespace (spaces, tabs, newlines) to a single space
 * @param str - The input string
 * @returns The whitespace-normalized string
 * @example
 * trimWords("  hello    world  ") // => "hello world"
 */
export function trimWords(str: string): string {
  return ensureString(str).trim().replace(/\s+/g, " ");
}

/**
 * Pads the start of a string to a target length with a fill character
 * @param str - The input string
 * @param targetLength - The desired total length
 * @param fillChar - The character to pad with (default: " ")
 * @returns The padded string
 * @example
 * padStart("42", 5)      // => "   42"
 * padStart("42", 5, "0") // => "00042"
 */
export function padStart(
  str: string,
  targetLength: number,
  fillChar = " ",
): string {
  return ensureString(str).padStart(targetLength, fillChar);
}

/**
 * Pads the end of a string to a target length with a fill character
 * @param str - The input string
 * @param targetLength - The desired total length
 * @param fillChar - The character to pad with (default: " ")
 * @returns The padded string
 * @example
 * padEnd("hi", 5)      // => "hi   "
 * padEnd("hi", 5, ".") // => "hi..."
 */
export function padEnd(
  str: string,
  targetLength: number,
  fillChar = " ",
): string {
  return ensureString(str).padEnd(targetLength, fillChar);
}

/**
 * Removes all HTML tags from a string
 * @example stripHtml("<p>Hello <b>World</b></p>") // => "Hello World"
 */
export function stripHtml(str: string): string {
  return ensureString(str).replace(/<[^>]*>/g, "");
}

/**
 * Checks if a string is a palindrome
 * @param str - The input string
 * @param ignoreSpaces - Whether to ignore spaces (default: true)
 * @example isPalindrome("racecar") // => true
 */
export function isPalindrome(str: string, ignoreSpaces = true): boolean {
  let input = ensureString(str).toLowerCase();
  if (ignoreSpaces) input = input.replace(/\s+/g, "");
  return input === input.split("").reverse().join("");
}

/**
 * Escapes characters for use in HTML
 * @example escapeHtml("<b>Hi</b>") // => "&lt;b&gt;Hi&lt;/b&gt;"
 */
export function escapeHtml(str: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return ensureString(str).replace(/[&<>"']/g, (m) => map[m]);
}
