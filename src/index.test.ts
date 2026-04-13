import { describe, it, expect } from 'vitest';
import { toUpperCase, toLowerCase, toTitleCase } from './index';

describe('toUpperCase', () => {
  it('converts lowercase to uppercase', () => {
    expect(toUpperCase("hello world")).toBe("HELLO WORLD");
  });
  it('handles already uppercase', () => {
    expect(toUpperCase("HELLO")).toBe("HELLO");
  });
  it('handles empty string', () => {
    expect(toUpperCase("")).toBe("");
  });
  it('preserves leading and trailing spaces', () => {
    expect(toUpperCase("  hello  ")).toBe("  HELLO  ");
  });
  it('preserves spaces in the middle', () => {
    expect(toUpperCase("hello  world")).toBe("HELLO  WORLD");
  });
  it('throws error for non-string input', () => {
    expect(() => toUpperCase(123 as any)).toThrow(TypeError);
  });
});

describe('toLowerCase', () => {
  it('converts uppercase to lowercase', () => {
    expect(toLowerCase("HELLO WORLD")).toBe("hello world");
  });
  it('handles mixed case', () => {
    expect(toLowerCase("HeLLo WoRLd")).toBe("hello world");
  });
  it('handles empty string', () => {
    expect(toLowerCase("")).toBe("");
  });
  it('preserves leading and trailing spaces', () => {
    expect(toLowerCase("  HELLO  ")).toBe("  hello  ");
  });
  it('preserves spaces in the middle', () => {
    expect(toLowerCase("HELLO  WORLD")).toBe("hello  world");
  });
  it('throws error for non-string input', () => {
    expect(() => toLowerCase(123 as any)).toThrow(TypeError);
  });
});

describe('toTitleCase', () => {
  it('capitalizes first letter of each word', () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
  });
  it('handles already title case', () => {
    expect(toTitleCase("Hello World")).toBe("Hello World");
  });
  it('handles single word', () => {
    expect(toTitleCase("hello")).toBe("Hello");
  });
  it('handles leading and trailing spaces', () => {
    expect(toTitleCase("  hello world  ")).toBe("Hello World");
  });
  it('handles multiple spaces between words', () => {
    expect(toTitleCase("hello   world")).toBe("Hello World");
  });
  it('handles all uppercase input', () => {
    expect(toTitleCase("HELLO WORLD")).toBe("Hello World");
  });
  it('handles mixed case input', () => {
    expect(toTitleCase("hElLo WoRLd")).toBe("Hello World");
  });
  it('handles empty string', () => {
    expect(toTitleCase("")).toBe("");
  });
  it('throws error for non-string input', () => {
    expect(() => toTitleCase(123 as any)).toThrow(TypeError);
  });
});