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
} from "./index";

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
