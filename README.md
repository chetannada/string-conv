# string-conv

![npm](https://img.shields.io/npm/v/string-conv)
![npm downloads](https://img.shields.io/npm/dm/string-conv)
![license](https://img.shields.io/npm/l/string-conv)
![types](https://img.shields.io/npm/types/string-conv)

A lightweight, zero-dependency TypeScript utility for string case conversion, inspection, and manipulation. Convert strings to camelCase, PascalCase, snake_case, kebab-case, CONSTANT_CASE, dot.case, slug, sentence case, and title case — detect and validate case styles, and use built-in string utilities like truncate, wordCount, padStart, and more. Works in both JavaScript and TypeScript projects.

📦 [View on npm](https://www.npmjs.com/package/string-conv)

## Features

- ✅ Zero dependencies
- ✅ TypeScript support with built-in type declarations
- ✅ Works with ESM and CommonJS
- ✅ Handles edge cases — spaces, mixed case, special characters
- ✅ Supports 11 conversion formats
- ✅ Case detection and validation guards
- ✅ String utility functions (truncate, wordCount, padStart, and more)

## Installation

```bash
npm install string-conv
```

## Usage

### TypeScript / ESM
```typescript
import {
  // Case transforms
  toUpperCase, toLowerCase, toTitleCase, toSentenceCase,
  toCamelCase, toPascalCase, toSnakeCase, toKebabCase,
  toConstantCase, toDotCase, toSlug, fromSlug,
  // Inspection
  detectCase,
  isCamelCase, isPascalCase, isSnakeCase,
  isKebabCase, isConstantCase, isDotCase,
  // Utilities
  truncate, wordCount, charCount, countOccurrences,
  reverseWords, trimWords, padStart, padEnd,
} from 'string-conv';
```

### JavaScript (CommonJS)
```javascript
const {
  // Case transforms
  toUpperCase, toLowerCase, toTitleCase, toSentenceCase,
  toCamelCase, toPascalCase, toSnakeCase, toKebabCase,
  toConstantCase, toDotCase, toSlug, fromSlug,
  // Inspection
  detectCase,
  isCamelCase, isPascalCase, isSnakeCase,
  isKebabCase, isConstantCase, isDotCase,
  // Utilities
  truncate, wordCount, charCount, countOccurrences,
  reverseWords, trimWords, padStart, padEnd,
} = require('string-conv');
```

---

## API — Case Transforms

### `toUpperCase(str: string): string`
Converts a string to UPPERCASE.
```typescript
toUpperCase("hello world")   // => "HELLO WORLD"
toUpperCase("Hello World")   // => "HELLO WORLD"
```

### `toLowerCase(str: string): string`
Converts a string to lowercase.
```typescript
toLowerCase("HELLO WORLD")   // => "hello world"
toLowerCase("Hello World")   // => "hello world"
```

### `toTitleCase(str: string): string`
Converts a string to Title Case — first letter of each word capitalized.
```typescript
toTitleCase("hello world")          // => "Hello World"
toTitleCase("the quick brown fox")  // => "The Quick Brown Fox"
toTitleCase("  hello   world  ")    // => "Hello World"
```

### `toSentenceCase(str: string): string`
Capitalizes only the first character and lowercases the rest.
```typescript
toSentenceCase("hello world")   // => "Hello world"
toSentenceCase("HELLO WORLD")   // => "Hello world"
```

### `toCamelCase(str: string): string`
Converts a string to camelCase. Supports space, hyphen, and underscore separated input.
```typescript
toCamelCase("hello world")   // => "helloWorld"
toCamelCase("hello-world")   // => "helloWorld"
toCamelCase("hello_world")   // => "helloWorld"
```

### `toPascalCase(str: string): string`
Converts a string to PascalCase (UpperCamelCase). Supports space, hyphen, and underscore separated input.
```typescript
toPascalCase("hello world")   // => "HelloWorld"
toPascalCase("hello-world")   // => "HelloWorld"
toPascalCase("hello_world")   // => "HelloWorld"
```

### `toSnakeCase(str: string): string`
Converts a string to snake_case. Also handles camelCase and PascalCase input.
```typescript
toSnakeCase("hello world")   // => "hello_world"
toSnakeCase("helloWorld")    // => "hello_world"
toSnakeCase("HelloWorld")    // => "hello_world"
toSnakeCase("hello-world")   // => "hello_world"
```

### `toKebabCase(str: string): string`
Converts a string to kebab-case. Also handles camelCase and PascalCase input.
```typescript
toKebabCase("hello world")   // => "hello-world"
toKebabCase("helloWorld")    // => "hello-world"
toKebabCase("HelloWorld")    // => "hello-world"
toKebabCase("hello_world")   // => "hello-world"
```

### `toConstantCase(str: string): string`
Converts a string to CONSTANT_CASE (screaming snake case). Useful for environment variables and config keys.
```typescript
toConstantCase("hello world")   // => "HELLO_WORLD"
toConstantCase("helloWorld")    // => "HELLO_WORLD"
toConstantCase("hello-world")   // => "HELLO_WORLD"
```

### `toDotCase(str: string): string`
Converts a string to dot.case. Useful for i18n keys and configuration paths.
```typescript
toDotCase("hello world")   // => "hello.world"
toDotCase("helloWorld")    // => "hello.world"
toDotCase("hello_world")   // => "hello.world"
```

### `toSlug(str: string): string`
Converts a string to a URL-friendly slug. Removes special characters, collapses spaces, and lowercases everything.
```typescript
toSlug("Hello World!")        // => "hello-world"
toSlug("My Blog Post 2024")   // => "my-blog-post-2024"
toSlug("hello & world")       // => "hello-world"
toSlug("  My Blog Post  ")    // => "my-blog-post"
```

### `fromSlug(str: string, titleCase?: boolean): string`
Converts a slug back into a readable string. Applies Title Case by default.
```typescript
fromSlug("hello-world")         // => "Hello World"
fromSlug("hello-world", false)  // => "hello world"
fromSlug("the-quick-brown-fox") // => "The Quick Brown Fox"
```

---

## API — Inspection

### `detectCase(str: string): CaseType`
Detects the case style of a string and returns a label. Useful for conditional transforms or validation.

```typescript
detectCase("helloWorld")    // => "camelCase"
detectCase("HelloWorld")    // => "PascalCase"
detectCase("hello_world")   // => "snake_case"
detectCase("hello-world")   // => "kebab-case"
detectCase("HELLO_WORLD")   // => "CONSTANT_CASE"
detectCase("hello.world")   // => "dot.case"
detectCase("HELLO")         // => "UPPERCASE"
detectCase("hello")         // => "lowercase"
detectCase("Hello World")   // => "Title Case"
detectCase("hello World")   // => "unknown"
```

Possible return values (`CaseType`):

```typescript
type CaseType =
  | "camelCase" | "PascalCase" | "snake_case" | "kebab-case"
  | "CONSTANT_CASE" | "dot.case" | "Title Case"
  | "UPPERCASE" | "lowercase" | "unknown";
```

### Validation guards

Six boolean guards to check a specific case style:

```typescript
isCamelCase("helloWorld")    // => true
isPascalCase("HelloWorld")   // => true
isSnakeCase("hello_world")   // => true
isKebabCase("hello-world")   // => true
isConstantCase("HELLO_WORLD") // => true
isDotCase("hello.world")     // => true
```

Each returns `false` for any non-matching input and throws `TypeError` for non-string input.

---

## API — Utilities

### `truncate(str: string, maxLength: number, suffix?: string): string`
Truncates a string to a maximum length and appends a suffix if truncated. The suffix (default `"..."`) counts toward the `maxLength`.
```typescript
truncate("Hello, World!", 8)         // => "Hello..."
truncate("Hello, World!", 8, " →")   // => "Hello, →"
truncate("Hello, World!", 5, "")     // => "Hello"
truncate("Hi", 10)                   // => "Hi"  (no truncation)
```

### `wordCount(str: string): number`
Counts the number of words in a string.
```typescript
wordCount("hello world foo")   // => 3
wordCount("  hello   world ")  // => 2
wordCount("")                  // => 0
```

### `charCount(str: string, excludeWhitespace?: boolean): number`
Counts characters, optionally excluding whitespace.
```typescript
charCount("hello world")        // => 11
charCount("hello world", true)  // => 10
charCount("hi\tthere\n", true)  // => 7
```

### `countOccurrences(str: string, substring: string, caseSensitive?: boolean): number`
Counts how many times a substring appears. Case-sensitive by default.
```typescript
countOccurrences("hello world hello", "hello")          // => 2
countOccurrences("Hello hello HELLO", "hello")          // => 1
countOccurrences("Hello hello HELLO", "hello", false)   // => 3
countOccurrences("banana", "a")                         // => 3
```

### `reverseWords(str: string): string`
Reverses the order of words in a string.
```typescript
reverseWords("hello world foo")   // => "foo world hello"
reverseWords("  hello world  ")   // => "world hello"
```

### `trimWords(str: string): string`
Trims leading/trailing whitespace and collapses internal runs of whitespace (spaces, tabs, newlines) to a single space.
```typescript
trimWords("  hello   world  ")      // => "hello world"
trimWords("hello\t\tworld\nfoo")    // => "hello world foo"
```

### `padStart(str: string, targetLength: number, fillChar?: string): string`
Pads the start of a string to a target length.
```typescript
padStart("42", 5)       // => "   42"
padStart("42", 5, "0")  // => "00042"
```

### `padEnd(str: string, targetLength: number, fillChar?: string): string`
Pads the end of a string to a target length.
```typescript
padEnd("hi", 5)         // => "hi   "
padEnd("hi", 5, ".")    // => "hi..."
```

---

## Error Handling

All functions throw a `TypeError` if the input is not a string. `truncate` additionally throws a `RangeError` if `maxLength` is less than 1.

```typescript
toUpperCase(123)       // TypeError: Input must be a string
toCamelCase(null)      // TypeError: Input must be a string
truncate("hi", 0)      // RangeError: maxLength must be a positive number
```

---

## TypeScript Support

This package is written in TypeScript and ships with built-in type declarations. No need to install `@types/string-conv`.

```typescript
import { toCamelCase, detectCase, CaseType } from 'string-conv';

const result: string = toCamelCase("hello world");  // fully typed ✅
const kind: CaseType = detectCase("helloWorld");    // => "camelCase" ✅
```

---

## Quick Reference

### Case transforms

| Function | Input | Output |
|---|---|---|
| `toUpperCase` | `"hello world"` | `"HELLO WORLD"` |
| `toLowerCase` | `"HELLO WORLD"` | `"hello world"` |
| `toTitleCase` | `"hello world"` | `"Hello World"` |
| `toSentenceCase` | `"hello world"` | `"Hello world"` |
| `toCamelCase` | `"hello world"` | `"helloWorld"` |
| `toPascalCase` | `"hello world"` | `"HelloWorld"` |
| `toSnakeCase` | `"hello world"` | `"hello_world"` |
| `toKebabCase` | `"hello world"` | `"hello-world"` |
| `toConstantCase` | `"hello world"` | `"HELLO_WORLD"` |
| `toDotCase` | `"hello world"` | `"hello.world"` |
| `toSlug` | `"Hello World!"` | `"hello-world"` |
| `fromSlug` | `"hello-world"` | `"Hello World"` |

### Inspection

| Function | Input | Output |
|---|---|---|
| `detectCase` | `"helloWorld"` | `"camelCase"` |
| `isCamelCase` | `"helloWorld"` | `true` |
| `isPascalCase` | `"HelloWorld"` | `true` |
| `isSnakeCase` | `"hello_world"` | `true` |
| `isKebabCase` | `"hello-world"` | `true` |
| `isConstantCase` | `"HELLO_WORLD"` | `true` |
| `isDotCase` | `"hello.world"` | `true` |

### Utilities

| Function | Input | Output |
|---|---|---|
| `truncate` | `"Hello, World!", 8` | `"Hello..."` |
| `wordCount` | `"hello world foo"` | `3` |
| `charCount` | `"hello world"` | `11` |
| `countOccurrences` | `"banana", "a"` | `3` |
| `reverseWords` | `"hello world"` | `"world hello"` |
| `trimWords` | `"  hello   world  "` | `"hello world"` |
| `padStart` | `"42", 5, "0"` | `"00042"` |
| `padEnd` | `"hi", 5, "."` | `"hi..."` |

---

## License

MIT © [Chetan Nada](https://github.com/chetannada)