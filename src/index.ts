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
 * Converts a string to a URL-friendly slug
 * @param str - The input string
 * @returns The slugified string
 * @example
 * toSlug("Hello World!")        // => "hello-world"
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

export default {
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toSlug,
};
