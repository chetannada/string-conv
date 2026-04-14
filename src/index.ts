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

/**
 * Converts a string to Sentence case (first letter of the first word capitalized)
 * @param str - The input string
 * @returns The string in sentence case
 * @example
 * toSentenceCase("hello world. how are you") // => "Hello world. how are you"
 */
export function toSentenceCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  const trimmed = str.trim();
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

/**
 * Converts a string to camelCase
 * @param str - The input string
 * @returns The string in camelCase
 * @example
 * toCamelCase("hello world") // => "helloWorld"
 */
export function toCamelCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word, index) =>
      index === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1),
    )
    .join("");
}

/**
 * Converts a string to PascalCase
 * @param str - The input string
 * @returns The string in PascalCase
 * @example
 * toPascalCase("hello world") // => "HelloWorld"
 */
export function toPascalCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .trim()
    .toLowerCase()
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join("");
}

/**
 * Converts a string to snake_case
 * @param str - The input string
 * @returns The string in snake_case
 * @example
 * toSnakeCase("hello world") // => "hello_world"
 */
export function toSnakeCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toLowerCase();
}

/**
 * Converts a string to kebab-case
 * @param str - The input string
 * @returns The string in kebab-case
 * @example
 * toKebabCase("hello world") // => "hello-world"
 */
export function toKebabCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

/**
 * Converts a string to CONSTANT_CASE (screaming snake case)
 * @param str - The input string
 * @returns The string in CONSTANT_CASE
 * @example
 * toConstantCase("hello world") // => "HELLO_WORLD"
 * toConstantCase("helloWorld")  // => "HELLO_WORLD"
 */
export function toConstantCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1_$2")
    .replace(/[\s-]+/g, "_")
    .toUpperCase();
}

/**
 * Converts a string to dot.case
 * @param str - The input string
 * @returns The string in dot.case
 * @example
 * toDotCase("hello world") // => "hello.world"
 * toDotCase("helloWorld")  // => "hello.world"
 */
export function toDotCase(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1.$2")
    .replace(/[\s_-]+/g, ".")
    .toLowerCase();
}

/**
 * Converts a string to a URL-friendly slug
 * @param str - The input string
 * @returns The slugified string
 * @example
 * toSlug("Hello World!") // => "hello-world"
 */
export function toSlug(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Converts a slug back into a readable string (Title Case by default)
 * @param str - The slug string
 * @param titleCase - Whether to apply title case (default: true)
 * @returns The human-readable string
 * @example
 * fromSlug("hello-world")       // => "Hello World"
 * fromSlug("hello-world", false) // => "hello world"
 */
export function fromSlug(str: string, titleCase = true): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  const words = str.trim().replace(/-+/g, " ");
  return titleCase ? toTitleCase(words) : words;
}

// ─── Inspection ──────────────────────────────────────────────────────────────

export type CaseType =
  | "camelCase"
  | "PascalCase"
  | "snake_case"
  | "kebab-case"
  | "CONSTANT_CASE"
  | "dot.case"
  | "Title Case"
  | "UPPERCASE"
  | "lowercase"
  | "unknown";

/**
 * Detects the case style of a given string
 * @param str - The input string
 * @returns The detected case type as a string label
 * @example
 * detectCase("helloWorld")  // => "camelCase"
 * detectCase("hello_world") // => "snake_case"
 */
export function detectCase(str: string): CaseType {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  // Check plain single-word forms first — before separator-based cases,
  // since isConstantCase/isSnakeCase/isKebabCase/isDotCase all match single words too.
  if (/^[A-Z0-9]+$/.test(str)) return "UPPERCASE";
  if (/^[a-z0-9]+$/.test(str)) return "lowercase";
  if (isCamelCase(str)) return "camelCase";
  if (isPascalCase(str)) return "PascalCase";
  if (isConstantCase(str)) return "CONSTANT_CASE";
  if (isSnakeCase(str)) return "snake_case";
  if (isKebabCase(str)) return "kebab-case";
  if (isDotCase(str)) return "dot.case";
  if (/^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/.test(str)) return "Title Case";
  return "unknown";
}

/**
 * Returns true if the string is camelCase
 * @example isCamelCase("helloWorld") // => true
 */
export function isCamelCase(str: string): boolean {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  return /^[a-z][a-zA-Z0-9]*$/.test(str) && /[A-Z]/.test(str);
}

/**
 * Returns true if the string is PascalCase
 * @example isPascalCase("HelloWorld") // => true
 */
export function isPascalCase(str: string): boolean {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  return /^[A-Z][a-zA-Z0-9]*$/.test(str) && /[a-z]/.test(str);
}

/**
 * Returns true if the string is snake_case
 * @example isSnakeCase("hello_world") // => true
 */
export function isSnakeCase(str: string): boolean {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  return /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/.test(str);
}

/**
 * Returns true if the string is kebab-case
 * @example isKebabCase("hello-world") // => true
 */
export function isKebabCase(str: string): boolean {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  return /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(str);
}

/**
 * Returns true if the string is CONSTANT_CASE
 * @example isConstantCase("HELLO_WORLD") // => true
 */
export function isConstantCase(str: string): boolean {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  return /^[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*$/.test(str);
}

/**
 * Returns true if the string is dot.case
 * @example isDotCase("hello.world") // => true
 */
export function isDotCase(str: string): boolean {
  if (typeof str !== "string") throw new TypeError("Input must be a string");
  return /^[a-z][a-z0-9]*(?:\.[a-z0-9]+)*$/.test(str);
}

// ─── Utilities ───────────────────────────────────────────────────────────────

/**
 * Truncates a string to a maximum length and appends a suffix if truncated
 * @param str - The input string
 * @param maxLength - Maximum allowed length (including suffix)
 * @param suffix - The suffix to append when truncated (default: "...")
 * @returns The truncated string
 * @example
 * truncate("Hello, World!", 8)        // => "Hello..."
 * truncate("Hello, World!", 8, " →")  // => "Hello →"
 */
export function truncate(str: string, maxLength: number, suffix = "..."): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  if (typeof maxLength !== "number" || maxLength < 1) {
    throw new RangeError("maxLength must be a positive number");
  }
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - suffix.length) + suffix;
}

/**
 * Counts the number of words in a string
 * @param str - The input string
 * @returns The word count
 * @example
 * wordCount("hello world foo") // => 3
 */
export function wordCount(str: string): number {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.trim().split(/\s+/).filter(Boolean).length;
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
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return excludeWhitespace ? str.replace(/\s/g, "").length : str.length;
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
  if (typeof str !== "string" || typeof substring !== "string") {
    throw new TypeError("Inputs must be strings");
  }
  if (!substring) return 0;
  const haystack = caseSensitive ? str : str.toLowerCase();
  const needle = caseSensitive ? substring : substring.toLowerCase();
  let count = 0;
  let pos = 0;
  while ((pos = haystack.indexOf(needle, pos)) !== -1) {
    count++;
    pos += needle.length;
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
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.trim().split(/\s+/).filter(Boolean).reverse().join(" ");
}

/**
 * Normalizes all whitespace in a string — trims edges and collapses internal
 * runs of whitespace (spaces, tabs, newlines) to a single space
 * @param str - The input string
 * @returns The whitespace-normalized string
 * @example
 * trimWords("  hello   world  ") // => "hello world"
 */
export function trimWords(str: string): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.trim().replace(/\s+/g, " ");
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
export function padStart(str: string, targetLength: number, fillChar = " "): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.padStart(targetLength, fillChar);
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
export function padEnd(str: string, targetLength: number, fillChar = " "): string {
  if (typeof str !== "string") {
    throw new TypeError("Input must be a string");
  }
  return str.padEnd(targetLength, fillChar);
}

export default {
  // Transforms — case
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toSentenceCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toConstantCase,
  toDotCase,
  // Transforms — other
  toSlug,
  fromSlug,
  // Inspection
  detectCase,
  isCamelCase,
  isPascalCase,
  isSnakeCase,
  isKebabCase,
  isConstantCase,
  isDotCase,
  // Utilities
  truncate,
  wordCount,
  charCount,
  countOccurrences,
  reverseWords,
  trimWords,
  padStart,
  padEnd,
};