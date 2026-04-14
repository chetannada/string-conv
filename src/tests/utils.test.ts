import { describe, it, expect } from "vitest";
import {
  truncate,
  wordCount,
  charCount,
  countOccurrences,
  reverseWords,
  trimWords,
  padStart,
  padEnd,
  stripHtml,
  isPalindrome,
  escapeHtml,
} from "../index";

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

describe("stripHtml", () => {
  it("removes basic tags", () => {
    expect(stripHtml("<p>Hello</p>")).toBe("Hello");
  });
  it("removes nested tags", () => {
    expect(stripHtml("<div><h1>Title</h1><p>Body</p></div>")).toBe("TitleBody");
  });
});

describe("isPalindrome", () => {
  it("identifies a simple palindrome", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });
  it("identifies a palindrome with spaces", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });
  it("returns false for non-palindromes", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});

describe("escapeHtml", () => {
  it("escapes special characters", () => {
    expect(escapeHtml('<b>"Me & You"</b>')).toBe(
      "&lt;b&gt;&quot;Me &amp; You&quot;&lt;/b&gt;",
    );
  });
});
