import { ensureString } from "./internal";

/**
 * Converts a string to UPPERCASE
 * @example toUpperCase("hello world") // => "HELLO WORLD"
 */
export function toUpperCase(str: string): string {
  return ensureString(str).toUpperCase();
}

/**
 * Converts a string to lowercase
 * @example toLowerCase("HELLO WORLD") // => "hello world"
 */
export function toLowerCase(str: string): string {
  return ensureString(str).toLowerCase();
}

/**
 * Converts a string to Title Case (first letter of each word capitalized)
 * @example toTitleCase("hello world") // => "Hello World"
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
 * @example toSentenceCase("hello world. how are you") // => "Hello world. how are you"
 */
export function toSentenceCase(str: string): string {
  const trimmed = ensureString(str).trim();
  if (!trimmed) return trimmed;
  return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
}

/**
 * Converts a string to camelCase
 * @example toCamelCase("hello world") // => "helloWorld"
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
 * @example toPascalCase("hello world") // => "HelloWorld"
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
 * @example toSnakeCase("hello world") // => "hello_world"
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
 * @example toKebabCase("hello world") // => "hello-world"
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
 * @example toConstantCase("hello world") // => "HELLO_WORLD"
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
 * @example toDotCase("hello world") // => "hello.world"
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
 * @example toSlug("Hello World!") // => "hello-world"
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
 * @example fromSlug("hello-world")       // => "Hello World"
 */
export function fromSlug(str: string, titleCase = true): string {
  const words = ensureString(str).trim().replace(/-+/g, " ");
  return titleCase ? toTitleCase(words) : words;
}

/**
 * Inverts the case of every character in the string
 * @example toInverseCase("Hello World") // => "hELLO wORLD"
 */
export function toInverseCase(str: string): string {
  return ensureString(str)
    .split("")
    .map((c) => (c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()))
    .join("");
}

/**
 * Reverses the entire string (character by character)
 * @example toReverseCase("hello") // => "olleh"
 */
export function toReverseCase(str: string): string {
  return ensureString(str).split("").reverse().join("");
}

/**
 * Converts a string to Train-Case (Capitalized-Words-With-Hyphens)
 * @example toTrainCase("hello world") // => "Hello-World"
 */
export function toTrainCase(str: string): string {
  return ensureString(str)
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .split(/[\s_-]+/)
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join("-");
}

/**
 * Converts a string to path/case
 * @example toPathCase("hello world") // => "hello/world"
 */
export function toPathCase(str: string): string {
  return ensureString(str)
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1/$2")
    .replace(/[\s_-]+/g, "/")
    .toLowerCase();
}

/**
 * Converts a string to flatcase (lowercase without separators)
 * @example toFlatCase("Hello World") // => "helloworld"
 */
export function toFlatCase(str: string): string {
  return ensureString(str)
    .replace(/[\s/_-]+/g, "")
    .toLowerCase();
}

/**
 * Converts a string to Header-Case (Similar to Train-Case, often used in HTTP)
 * @example toHeaderCase("content type") // => "Content-Type"
 */
export function toHeaderCase(str: string): string {
  return toTrainCase(str);
}

/**
 * Randomizes the case of each character
 * @example toSpongeCase("hello world") // => "hElLo WoRlD"
 */
export function toSpongeCase(str: string): string {
  return ensureString(str)
    .split("")
    .map((c) => (Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()))
    .join("");
}
