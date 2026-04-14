import { ensureString } from "./internal";

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
  ensureString(str);
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
  ensureString(str);
  return /^[a-z][a-zA-Z0-9]*$/.test(str) && /[A-Z]/.test(str);
}

/**
 * Returns true if the string is PascalCase
 * @example isPascalCase("HelloWorld") // => true
 */
export function isPascalCase(str: string): boolean {
  ensureString(str);
  return /^[A-Z][a-zA-Z0-9]*$/.test(str) && /[a-z]/.test(str);
}

/**
 * Returns true if the string is snake_case
 * @example isSnakeCase("hello_world") // => true
 */
export function isSnakeCase(str: string): boolean {
  ensureString(str);
  return /^[a-z][a-z0-9]*(?:_[a-z0-9]+)*$/.test(str);
}

/**
 * Returns true if the string is kebab-case
 * @example isKebabCase("hello-world") // => true
 */
export function isKebabCase(str: string): boolean {
  ensureString(str);
  return /^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(str);
}

/**
 * Returns true if the string is CONSTANT_CASE
 * @example isConstantCase("HELLO_WORLD") // => true
 */
export function isConstantCase(str: string): boolean {
  ensureString(str);
  return /^[A-Z][A-Z0-9]*(?:_[A-Z0-9]+)*$/.test(str);
}

/**
 * Returns true if the string is dot.case
 * @example isDotCase("hello.world") // => true
 */
export function isDotCase(str: string): boolean {
  ensureString(str);
  return /^[a-z][a-z0-9]*(?:\.[a-z0-9]+)*$/.test(str);
}
