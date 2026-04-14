import { describe, it, expect } from "vitest";
import {
  detectCase,
  isCamelCase,
  isPascalCase,
  isSnakeCase,
  isKebabCase,
  isConstantCase,
  isDotCase,
} from "../index";

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
