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
  it('throws error for non-string input', () => {
    expect(() => toTitleCase(123 as any)).toThrow(TypeError);
  });
});