import { ensureString } from "./internal";

/**
 * Converts a string to UPPERCASE
 * @param str - The input string
 * @returns The string in uppercase
 * @example
 * toUpperCase("hello world") // => "HELLO WORLD"
 */
export function toUpperCase(str: string): string {
  return ensureString(str).toUpperCase();
}

/**
 * Converts a string to lowercase
 * @param str - The input string
 * @returns The string in lowercase
 * @example
 * toLowerCase("HELLO WORLD") // => "hello world"
 */
export function toLowerCase(str: string): string {
  return ensureString(str).toLowerCase();
}

/**
 * Converts a string to Title Case (first letter of each word capitalized)
 * @param str - The input string
 * @returns The string in title case
 * @example
 * toTitleCase("hello world") // => "Hello World"
 */
export function toTitleCase(str: string): string {
  return ensureString(str)
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
  const trimmed = ensureString(str).trim();
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
  return ensureString(str)
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
  return ensureString(str)
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
  return ensureString(str)
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
  return ensureString(str)
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
  return ensureString(str)
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
  return ensureString(str)
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
  return ensureString(str)
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
  const words = ensureString(str).trim().replace(/-+/g, " ");
  return titleCase ? toTitleCase(words) : words;
}
