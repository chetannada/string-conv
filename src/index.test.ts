import { describe, it, expect } from "vitest";
import {
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toSlug,
  // New case transforms
  toSentenceCase,
  toConstantCase,
  toDotCase,
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
} from "./index";

// ─── Existing tests ───────────────────────────────────────────────────────────

describe("toUpperCase", () => {
  it("converts lowercase to uppercase", () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
  });
  it("handles already uppercase", () => {
    expect(toUpperCase("HELLO")).toBe("HELLO");
  });
  it("handles empty string", () => {
    expect(toUpperCase("")).toBe("");
  });
  it("preserves leading and trailing spaces", () => {
    expect(toUpperCase("  hello  ")).toBe("  HELLO  ");
  });
  it("preserves spaces in the middle", () => {
    expect(toUpperCase("hello  world")).toBe("HELLO  WORLD");
  });
  it("throws error for non-string input", () => {
    expect(() => toUpperCase(123 as any)).toThrow(TypeError);
  });
});

describe("toLowerCase", () => {
  it("converts uppercase to lowercase", () => {
    expect(toLowerCase("HELLO WORLD")).toBe("hello world");
  });
  it("handles mixed case", () => {
    expect(toLowerCase("HeLLo WoRLd")).toBe("hello world");
  });
  it("handles empty string", () => {
    expect(toLowerCase("")).toBe("");
  });
  it("preserves leading and trailing spaces", () => {
    expect(toLowerCase("  HELLO  ")).toBe("  hello  ");
  });
  it("preserves spaces in the middle", () => {
    expect(toLowerCase("HELLO  WORLD")).toBe("hello  world");
  });
  it("throws error for non-string input", () => {
    expect(() => toLowerCase(123 as any)).toThrow(TypeError);
  });
});

describe("toTitleCase", () => {
  it("capitalizes first letter of each word", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });
  it("handles already title case", () => {
    expect(toTitleCase("Hello World")).toBe("Hello World");
  });
  it("handles single word", () => {
    expect(toTitleCase("hello")).toBe("Hello");
  });
  it("handles leading and trailing spaces", () => {
    expect(toTitleCase("  hello world  ")).toBe("Hello World");
  });
  it("handles multiple spaces between words", () => {
    expect(toTitleCase("hello   world")).toBe("Hello World");
  });
  it("handles all uppercase input", () => {
    expect(toTitleCase("HELLO WORLD")).toBe("Hello World");
  });
  it("handles mixed case input", () => {
    expect(toTitleCase("hElLo WoRLd")).toBe("Hello World");
  });
  it("handles empty string", () => {
    expect(toTitleCase("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => toTitleCase(123 as any)).toThrow(TypeError);
  });
});

describe("toCamelCase", () => {
  it("converts space-separated words", () => {
    expect(toCamelCase("hello world")).toBe("helloWorld");
  });
  it("converts kebab-case input", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld");
  });
  it("converts snake_case input", () => {
    expect(toCamelCase("hello_world")).toBe("helloWorld");
  });
  it("handles multiple words", () => {
    expect(toCamelCase("the quick brown fox")).toBe("theQuickBrownFox");
  });
  it("handles leading and trailing spaces", () => {
    expect(toCamelCase("  hello world  ")).toBe("helloWorld");
  });
  it("handles already camelCase", () => {
    expect(toCamelCase("helloWorld")).toBe("helloworld");
  });
  it("handles single word", () => {
    expect(toCamelCase("hello")).toBe("hello");
  });
  it("handles empty string", () => {
    expect(toCamelCase("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => toCamelCase(123 as any)).toThrow(TypeError);
  });
});

describe("toPascalCase", () => {
  it("converts space-separated words", () => {
    expect(toPascalCase("hello world")).toBe("HelloWorld");
  });
  it("converts kebab-case input", () => {
    expect(toPascalCase("hello-world")).toBe("HelloWorld");
  });
  it("converts snake_case input", () => {
    expect(toPascalCase("hello_world")).toBe("HelloWorld");
  });
  it("handles multiple words", () => {
    expect(toPascalCase("the quick brown fox")).toBe("TheQuickBrownFox");
  });
  it("handles leading and trailing spaces", () => {
    expect(toPascalCase("  hello world  ")).toBe("HelloWorld");
  });
  it("handles single word", () => {
    expect(toPascalCase("hello")).toBe("Hello");
  });
  it("handles empty string", () => {
    expect(toPascalCase("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => toPascalCase(123 as any)).toThrow(TypeError);
  });
});

describe("toSnakeCase", () => {
  it("converts space-separated words", () => {
    expect(toSnakeCase("hello world")).toBe("hello_world");
  });
  it("converts camelCase input", () => {
    expect(toSnakeCase("helloWorld")).toBe("hello_world");
  });
  it("converts PascalCase input", () => {
    expect(toSnakeCase("HelloWorld")).toBe("hello_world");
  });
  it("converts kebab-case input", () => {
    expect(toSnakeCase("hello-world")).toBe("hello_world");
  });
  it("handles multiple words", () => {
    expect(toSnakeCase("the quick brown fox")).toBe("the_quick_brown_fox");
  });
  it("handles leading and trailing spaces", () => {
    expect(toSnakeCase("  hello world  ")).toBe("hello_world");
  });
  it("handles single word", () => {
    expect(toSnakeCase("hello")).toBe("hello");
  });
  it("handles empty string", () => {
    expect(toSnakeCase("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => toSnakeCase(123 as any)).toThrow(TypeError);
  });
});

describe("toKebabCase", () => {
  it("converts space-separated words", () => {
    expect(toKebabCase("hello world")).toBe("hello-world");
  });
  it("converts camelCase input", () => {
    expect(toKebabCase("helloWorld")).toBe("hello-world");
  });
  it("converts PascalCase input", () => {
    expect(toKebabCase("HelloWorld")).toBe("hello-world");
  });
  it("converts snake_case input", () => {
    expect(toKebabCase("hello_world")).toBe("hello-world");
  });
  it("handles multiple words", () => {
    expect(toKebabCase("the quick brown fox")).toBe("the-quick-brown-fox");
  });
  it("handles leading and trailing spaces", () => {
    expect(toKebabCase("  hello world  ")).toBe("hello-world");
  });
  it("handles single word", () => {
    expect(toKebabCase("hello")).toBe("hello");
  });
  it("handles empty string", () => {
    expect(toKebabCase("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => toKebabCase(123 as any)).toThrow(TypeError);
  });
});

describe("toSlug", () => {
  it("converts space-separated words", () => {
    expect(toSlug("Hello World")).toBe("hello-world");
  });
  it("removes special characters", () => {
    expect(toSlug("Hello World!")).toBe("hello-world");
  });
  it("handles ampersand and symbols", () => {
    expect(toSlug("hello & world")).toBe("hello-world");
  });
  it("handles leading and trailing spaces", () => {
    expect(toSlug("  My Blog Post  ")).toBe("my-blog-post");
  });
  it("collapses multiple spaces/hyphens", () => {
    expect(toSlug("hello   world")).toBe("hello-world");
  });
  it("removes leading and trailing hyphens", () => {
    expect(toSlug("!hello world!")).toBe("hello-world");
  });
  it("handles numbers", () => {
    expect(toSlug("hello world 123")).toBe("hello-world-123");
  });
  it("handles single word", () => {
    expect(toSlug("hello")).toBe("hello");
  });
  it("handles empty string", () => {
    expect(toSlug("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => toSlug(123 as any)).toThrow(TypeError);
  });
});

// ─── New case transforms ──────────────────────────────────────────────────────

describe("toSentenceCase", () => {
  it("capitalizes only the first character", () => {
    expect(toSentenceCase("hello world")).toBe("Hello world");
  });
  it("lowercases the rest of the string", () => {
    expect(toSentenceCase("HELLO WORLD")).toBe("Hello world");
  });
  it("handles already sentence case", () => {
    expect(toSentenceCase("Hello world")).toBe("Hello world");
  });
  it("handles single word", () => {
    expect(toSentenceCase("hello")).toBe("Hello");
  });
  it("handles single character", () => {
    expect(toSentenceCase("h")).toBe("H");
  });
  it("handles leading and trailing spaces", () => {
    expect(toSentenceCase("  hello world  ")).toBe("Hello world");
  });
  it("handles empty string", () => {
    expect(toSentenceCase("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => toSentenceCase(123 as any)).toThrow(TypeError);
  });
});

describe("toConstantCase", () => {
  it("converts space-separated words", () => {
    expect(toConstantCase("hello world")).toBe("HELLO_WORLD");
  });
  it("converts camelCase input", () => {
    expect(toConstantCase("helloWorld")).toBe("HELLO_WORLD");
  });
  it("converts PascalCase input", () => {
    expect(toConstantCase("HelloWorld")).toBe("HELLO_WORLD");
  });
  it("converts kebab-case input", () => {
    expect(toConstantCase("hello-world")).toBe("HELLO_WORLD");
  });
  it("converts snake_case input", () => {
    expect(toConstantCase("hello_world")).toBe("HELLO_WORLD");
  });
  it("handles multiple words", () => {
    expect(toConstantCase("the quick brown fox")).toBe("THE_QUICK_BROWN_FOX");
  });
  it("handles already CONSTANT_CASE", () => {
    expect(toConstantCase("HELLO_WORLD")).toBe("HELLO_WORLD");
  });
  it("handles single word", () => {
    expect(toConstantCase("hello")).toBe("HELLO");
  });
  it("handles empty string", () => {
    expect(toConstantCase("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => toConstantCase(123 as any)).toThrow(TypeError);
  });
});

describe("toDotCase", () => {
  it("converts space-separated words", () => {
    expect(toDotCase("hello world")).toBe("hello.world");
  });
  it("converts camelCase input", () => {
    expect(toDotCase("helloWorld")).toBe("hello.world");
  });
  it("converts PascalCase input", () => {
    expect(toDotCase("HelloWorld")).toBe("hello.world");
  });
  it("converts snake_case input", () => {
    expect(toDotCase("hello_world")).toBe("hello.world");
  });
  it("converts kebab-case input", () => {
    expect(toDotCase("hello-world")).toBe("hello.world");
  });
  it("handles multiple words", () => {
    expect(toDotCase("the quick brown fox")).toBe("the.quick.brown.fox");
  });
  it("handles already dot.case", () => {
    expect(toDotCase("hello.world")).toBe("hello.world");
  });
  it("handles single word", () => {
    expect(toDotCase("hello")).toBe("hello");
  });
  it("handles empty string", () => {
    expect(toDotCase("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => toDotCase(123 as any)).toThrow(TypeError);
  });
});

describe("fromSlug", () => {
  it("converts slug to title case by default", () => {
    expect(fromSlug("hello-world")).toBe("Hello World");
  });
  it("converts slug to lowercase when titleCase is false", () => {
    expect(fromSlug("hello-world", false)).toBe("hello world");
  });
  it("handles multi-word slug", () => {
    expect(fromSlug("the-quick-brown-fox")).toBe("The Quick Brown Fox");
  });
  it("handles single word slug", () => {
    expect(fromSlug("hello")).toBe("Hello");
  });
  it("collapses multiple hyphens", () => {
    expect(fromSlug("hello--world")).toBe("Hello World");
  });
  it("handles leading and trailing spaces", () => {
    expect(fromSlug("  hello-world  ")).toBe("Hello World");
  });
  it("handles empty string", () => {
    expect(fromSlug("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => fromSlug(123 as any)).toThrow(TypeError);
  });
});

// ─── Inspection ──────────────────────────────────────────────────────────────

describe("detectCase", () => {
  it("detects camelCase", () => {
    expect(detectCase("helloWorld")).toBe("camelCase");
  });
  it("detects PascalCase", () => {
    expect(detectCase("HelloWorld")).toBe("PascalCase");
  });
  it("detects snake_case", () => {
    expect(detectCase("hello_world")).toBe("snake_case");
  });
  it("detects kebab-case", () => {
    expect(detectCase("hello-world")).toBe("kebab-case");
  });
  it("detects CONSTANT_CASE", () => {
    expect(detectCase("HELLO_WORLD")).toBe("CONSTANT_CASE");
  });
  it("detects dot.case", () => {
    expect(detectCase("hello.world")).toBe("dot.case");
  });
  it("detects UPPERCASE single word", () => {
    expect(detectCase("HELLO")).toBe("UPPERCASE");
  });
  it("detects lowercase single word", () => {
    expect(detectCase("hello")).toBe("lowercase");
  });
  it("detects Title Case", () => {
    expect(detectCase("Hello World")).toBe("Title Case");
  });
  it("returns unknown for unrecognized patterns", () => {
    expect(detectCase("hello World foo")).toBe("unknown");
  });
  it("throws error for non-string input", () => {
    expect(() => detectCase(123 as any)).toThrow(TypeError);
  });
});

describe("isCamelCase", () => {
  it("returns true for camelCase", () => {
    expect(isCamelCase("helloWorld")).toBe(true);
  });
  it("returns true for multi-word camelCase", () => {
    expect(isCamelCase("theQuickBrownFox")).toBe(true);
  });
  it("returns false for PascalCase", () => {
    expect(isCamelCase("HelloWorld")).toBe(false);
  });
  it("returns false for snake_case", () => {
    expect(isCamelCase("hello_world")).toBe(false);
  });
  it("returns false for single lowercase word (no uppercase)", () => {
    expect(isCamelCase("hello")).toBe(false);
  });
  it("returns false for empty string", () => {
    expect(isCamelCase("")).toBe(false);
  });
  it("throws error for non-string input", () => {
    expect(() => isCamelCase(123 as any)).toThrow(TypeError);
  });
});

describe("isPascalCase", () => {
  it("returns true for PascalCase", () => {
    expect(isPascalCase("HelloWorld")).toBe(true);
  });
  it("returns true for multi-word PascalCase", () => {
    expect(isPascalCase("TheQuickBrownFox")).toBe(true);
  });
  it("returns false for camelCase", () => {
    expect(isPascalCase("helloWorld")).toBe(false);
  });
  it("returns false for snake_case", () => {
    expect(isPascalCase("hello_world")).toBe(false);
  });
  it("returns false for single uppercase word (no lowercase)", () => {
    expect(isPascalCase("HELLO")).toBe(false);
  });
  it("returns false for empty string", () => {
    expect(isPascalCase("")).toBe(false);
  });
  it("throws error for non-string input", () => {
    expect(() => isPascalCase(123 as any)).toThrow(TypeError);
  });
});

describe("isSnakeCase", () => {
  it("returns true for snake_case", () => {
    expect(isSnakeCase("hello_world")).toBe(true);
  });
  it("returns true for single word", () => {
    expect(isSnakeCase("hello")).toBe(true);
  });
  it("returns true for multi-part snake_case", () => {
    expect(isSnakeCase("the_quick_brown_fox")).toBe(true);
  });
  it("returns false for camelCase", () => {
    expect(isSnakeCase("helloWorld")).toBe(false);
  });
  it("returns false for CONSTANT_CASE", () => {
    expect(isSnakeCase("HELLO_WORLD")).toBe(false);
  });
  it("returns false for kebab-case", () => {
    expect(isSnakeCase("hello-world")).toBe(false);
  });
  it("returns false for empty string", () => {
    expect(isSnakeCase("")).toBe(false);
  });
  it("throws error for non-string input", () => {
    expect(() => isSnakeCase(123 as any)).toThrow(TypeError);
  });
});

describe("isKebabCase", () => {
  it("returns true for kebab-case", () => {
    expect(isKebabCase("hello-world")).toBe(true);
  });
  it("returns true for single word", () => {
    expect(isKebabCase("hello")).toBe(true);
  });
  it("returns true for multi-part kebab-case", () => {
    expect(isKebabCase("the-quick-brown-fox")).toBe(true);
  });
  it("returns false for snake_case", () => {
    expect(isKebabCase("hello_world")).toBe(false);
  });
  it("returns false for camelCase", () => {
    expect(isKebabCase("helloWorld")).toBe(false);
  });
  it("returns false for uppercase", () => {
    expect(isKebabCase("HELLO-WORLD")).toBe(false);
  });
  it("returns false for empty string", () => {
    expect(isKebabCase("")).toBe(false);
  });
  it("throws error for non-string input", () => {
    expect(() => isKebabCase(123 as any)).toThrow(TypeError);
  });
});

describe("isConstantCase", () => {
  it("returns true for CONSTANT_CASE", () => {
    expect(isConstantCase("HELLO_WORLD")).toBe(true);
  });
  it("returns true for single uppercase word", () => {
    expect(isConstantCase("HELLO")).toBe(true);
  });
  it("returns true for multi-part CONSTANT_CASE", () => {
    expect(isConstantCase("THE_QUICK_BROWN_FOX")).toBe(true);
  });
  it("returns false for snake_case", () => {
    expect(isConstantCase("hello_world")).toBe(false);
  });
  it("returns false for camelCase", () => {
    expect(isConstantCase("helloWorld")).toBe(false);
  });
  it("returns false for mixed case", () => {
    expect(isConstantCase("Hello_World")).toBe(false);
  });
  it("returns false for empty string", () => {
    expect(isConstantCase("")).toBe(false);
  });
  it("throws error for non-string input", () => {
    expect(() => isConstantCase(123 as any)).toThrow(TypeError);
  });
});

describe("isDotCase", () => {
  it("returns true for dot.case", () => {
    expect(isDotCase("hello.world")).toBe(true);
  });
  it("returns true for single word", () => {
    expect(isDotCase("hello")).toBe(true);
  });
  it("returns true for multi-part dot.case", () => {
    expect(isDotCase("the.quick.brown.fox")).toBe(true);
  });
  it("returns false for snake_case", () => {
    expect(isDotCase("hello_world")).toBe(false);
  });
  it("returns false for kebab-case", () => {
    expect(isDotCase("hello-world")).toBe(false);
  });
  it("returns false for uppercase dot notation", () => {
    expect(isDotCase("HELLO.WORLD")).toBe(false);
  });
  it("returns false for empty string", () => {
    expect(isDotCase("")).toBe(false);
  });
  it("throws error for non-string input", () => {
    expect(() => isDotCase(123 as any)).toThrow(TypeError);
  });
});

// ─── Utilities ───────────────────────────────────────────────────────────────

describe("truncate", () => {
  it("truncates a string exceeding maxLength", () => {
    expect(truncate("Hello, World!", 8)).toBe("Hello...");
  });
  it("does not truncate when string fits exactly", () => {
    expect(truncate("Hello", 5)).toBe("Hello");
  });
  it("does not truncate when string is shorter than maxLength", () => {
    expect(truncate("Hi", 10)).toBe("Hi");
  });
  it("uses custom suffix", () => {
    expect(truncate("Hello, World!", 8, " →")).toBe("Hello, →");
  });
  it("uses empty suffix", () => {
    expect(truncate("Hello, World!", 5, "")).toBe("Hello");
  });
  it("handles empty string", () => {
    expect(truncate("", 5)).toBe("");
  });
  it("throws TypeError for non-string input", () => {
    expect(() => truncate(123 as any, 5)).toThrow(TypeError);
  });
  it("throws RangeError for maxLength less than 1", () => {
    expect(() => truncate("hello", 0)).toThrow(RangeError);
  });
});

describe("wordCount", () => {
  it("counts words in a normal sentence", () => {
    expect(wordCount("hello world foo")).toBe(3);
  });
  it("counts a single word", () => {
    expect(wordCount("hello")).toBe(1);
  });
  it("handles multiple spaces between words", () => {
    expect(wordCount("hello   world")).toBe(2);
  });
  it("handles leading and trailing spaces", () => {
    expect(wordCount("  hello world  ")).toBe(2);
  });
  it("returns 0 for empty string", () => {
    expect(wordCount("")).toBe(0);
  });
  it("returns 0 for whitespace-only string", () => {
    expect(wordCount("   ")).toBe(0);
  });
  it("throws error for non-string input", () => {
    expect(() => wordCount(123 as any)).toThrow(TypeError);
  });
});

describe("charCount", () => {
  it("counts all characters including spaces", () => {
    expect(charCount("hello world")).toBe(11);
  });
  it("excludes whitespace when flag is true", () => {
    expect(charCount("hello world", true)).toBe(10);
  });
  it("counts an empty string as 0", () => {
    expect(charCount("")).toBe(0);
  });
  it("counts whitespace-only string correctly", () => {
    expect(charCount("   ")).toBe(3);
  });
  it("excludes all whitespace in whitespace-only string", () => {
    expect(charCount("   ", true)).toBe(0);
  });
  it("counts tabs and newlines as whitespace when excluded", () => {
    expect(charCount("hi\tthere\n", true)).toBe(7);
  });
  it("throws error for non-string input", () => {
    expect(() => charCount(123 as any)).toThrow(TypeError);
  });
});

describe("countOccurrences", () => {
  it("counts non-overlapping occurrences", () => {
    expect(countOccurrences("hello world hello", "hello")).toBe(2);
  });
  it("returns 0 when substring is not found", () => {
    expect(countOccurrences("hello world", "foo")).toBe(0);
  });
  it("is case-sensitive by default", () => {
    expect(countOccurrences("Hello hello HELLO", "hello")).toBe(1);
  });
  it("is case-insensitive when flag is false", () => {
    expect(countOccurrences("Hello hello HELLO", "hello", false)).toBe(3);
  });
  it("returns 0 for empty substring", () => {
    expect(countOccurrences("hello", "")).toBe(0);
  });
  it("handles empty source string", () => {
    expect(countOccurrences("", "hello")).toBe(0);
  });
  it("counts single-character occurrences", () => {
    expect(countOccurrences("banana", "a")).toBe(3);
  });
  it("throws error for non-string inputs", () => {
    expect(() => countOccurrences(123 as any, "hello")).toThrow(TypeError);
    expect(() => countOccurrences("hello", 123 as any)).toThrow(TypeError);
  });
});

describe("reverseWords", () => {
  it("reverses word order", () => {
    expect(reverseWords("hello world foo")).toBe("foo world hello");
  });
  it("handles two words", () => {
    expect(reverseWords("hello world")).toBe("world hello");
  });
  it("handles single word", () => {
    expect(reverseWords("hello")).toBe("hello");
  });
  it("handles leading and trailing spaces", () => {
    expect(reverseWords("  hello world  ")).toBe("world hello");
  });
  it("handles multiple spaces between words", () => {
    expect(reverseWords("hello   world")).toBe("world hello");
  });
  it("handles empty string", () => {
    expect(reverseWords("")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => reverseWords(123 as any)).toThrow(TypeError);
  });
});

describe("trimWords", () => {
  it("trims leading and trailing spaces", () => {
    expect(trimWords("  hello world  ")).toBe("hello world");
  });
  it("collapses internal multiple spaces to one", () => {
    expect(trimWords("hello   world")).toBe("hello world");
  });
  it("collapses tabs and newlines to single space", () => {
    expect(trimWords("hello\t\tworld\nfoo")).toBe("hello world foo");
  });
  it("handles already clean string", () => {
    expect(trimWords("hello world")).toBe("hello world");
  });
  it("handles empty string", () => {
    expect(trimWords("")).toBe("");
  });
  it("returns empty string for whitespace-only input", () => {
    expect(trimWords("   ")).toBe("");
  });
  it("throws error for non-string input", () => {
    expect(() => trimWords(123 as any)).toThrow(TypeError);
  });
});

describe("padStart", () => {
  it("pads with spaces by default", () => {
    expect(padStart("42", 5)).toBe("   42");
  });
  it("pads with custom character", () => {
    expect(padStart("42", 5, "0")).toBe("00042");
  });
  it("does not pad when string already meets targetLength", () => {
    expect(padStart("hello", 5)).toBe("hello");
  });
  it("does not pad when string exceeds targetLength", () => {
    expect(padStart("hello world", 5)).toBe("hello world");
  });
  it("handles empty string", () => {
    expect(padStart("", 3, "-")).toBe("---");
  });
  it("handles targetLength of 0", () => {
    expect(padStart("hi", 0)).toBe("hi");
  });
  it("throws error for non-string input", () => {
    expect(() => padStart(123 as any, 5)).toThrow(TypeError);
  });
});

describe("padEnd", () => {
  it("pads with spaces by default", () => {
    expect(padEnd("hi", 5)).toBe("hi   ");
  });
  it("pads with custom character", () => {
    expect(padEnd("hi", 5, ".")).toBe("hi...");
  });
  it("does not pad when string already meets targetLength", () => {
    expect(padEnd("hello", 5)).toBe("hello");
  });
  it("does not pad when string exceeds targetLength", () => {
    expect(padEnd("hello world", 5)).toBe("hello world");
  });
  it("handles empty string", () => {
    expect(padEnd("", 3, "-")).toBe("---");
  });
  it("handles targetLength of 0", () => {
    expect(padEnd("hi", 0)).toBe("hi");
  });
  it("throws error for non-string input", () => {
    expect(() => padEnd(123 as any, 5)).toThrow(TypeError);
  });
});