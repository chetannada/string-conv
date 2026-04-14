# string-conv

![npm](https://img.shields.io/npm/v/string-conv)
![npm downloads](https://img.shields.io/npm/dm/string-conv)
![license](https://img.shields.io/npm/l/string-conv)
![types](https://img.shields.io/npm/types/string-conv)

A lightweight, zero-dependency TypeScript utility for string case conversion, inspection, and manipulation. Convert strings between 11+ formats, detect case styles with validation guards, and use robust utilities for everyday string tasks. Works in both JavaScript and TypeScript projects.

📦 [View on npm](https://www.npmjs.com/package/string-conv)

## Features

- ✅ **Zero dependencies** — Extremely lightweight.
- ✅ **Full TypeScript Support** — Built-in type declarations included.
- ✅ **Hybrid Package** — Works seamlessly with ESM (`import`) and CommonJS (`require`).
- ✅ **Robust Case Handling** — Handles edge cases like multiple spaces, special characters, and mixed-case inputs.
- ✅ **Case Detection** — Identify case styles programmatically.
- ✅ **Advanced Utilities** — Built-in support for truncation, word counting, padding, and more.

## Installation

```bash
npm install string-conv
```

## Usage

### TypeScript / ESM

```typescript
import {
  // Case transforms
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toSentenceCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toConstantCase,
  toDotCase,
  toSlug,
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
} from "string-conv";
```

### JavaScript (CommonJS)

```javascript
const {
  // Case transforms
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toSentenceCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toConstantCase,
  toDotCase,
  toSlug,
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
} = require("string-conv");
```

---

## API — Case Transforms

### `toUpperCase(str: string): string`

Converts a string to UPPERCASE.

```typescript
toUpperCase("hello world"); // => "HELLO WORLD"
```

### `toLowerCase(str: string): string`

Converts a string to lowercase.

```typescript
toLowerCase("HELLO WORLD"); // => "hello world"
```

### `toTitleCase(str: string): string`

Converts a string to Title Case — first letter of each word capitalized.

```typescript
toTitleCase("hello world"); // => "Hello World"
toTitleCase("  hello   world  "); // => "Hello World"
```

### `toSentenceCase(str: string): string`

Capitalizes only the first character and lowercases the rest.

```typescript
toSentenceCase("hello world"); // => "Hello world"
```

### `toCamelCase(str: string): string`

Converts a string to camelCase.

```typescript
toCamelCase("hello world"); // => "helloWorld"
```

### `toPascalCase(str: string): string`

Converts a string to PascalCase (UpperCamelCase).

```typescript
toPascalCase("hello world"); // => "HelloWorld"
```

### `toSnakeCase(str: string): string`

Converts a string to snake_case.

```typescript
toSnakeCase("hello world"); // => "hello_world"
```

### `toKebabCase(str: string): string`

Converts a string to kebab-case.

```typescript
toKebabCase("hello world"); // => "hello-world"
```

### `toConstantCase(str: string): string`

Converts a string to CONSTANT_CASE (screaming snake case).

```typescript
toConstantCase("hello world"); // => "HELLO_WORLD"
```

### `toDotCase(str: string): string`

Converts a string to dot.case.

```typescript
toDotCase("hello world"); // => "hello.world"
```

### `toSlug(str: string): string`

Converts a string to a URL-friendly slug.

```typescript
toSlug("Hello World!"); // => "hello-world"
```

### `fromSlug(str: string, titleCase?: boolean): string`

Converts a slug back into a readable string. Applies Title Case by default.

```typescript
fromSlug("hello-world"); // => "Hello World"
fromSlug("hello-world", false); // => "hello world"
```

---

## API — Inspection

### `detectCase(str: string): CaseType`

Detects the case style of a string and returns a label.

```typescript
detectCase("helloWorld"); // => "camelCase"
detectCase("hello_world"); // => "snake_case"
```

Possible return values (`CaseType`):
`"camelCase"`, `"PascalCase"`, `"snake_case"`, `"kebab-case"`, `"CONSTANT_CASE"`, `"dot.case"`, `"Title Case"`, `"UPPERCASE"`, `"lowercase"`, `"unknown"`.

### Validation guards

Six boolean guards to check a specific case style:
`isCamelCase`, `isPascalCase`, `isSnakeCase`, `isKebabCase`, `isConstantCase`, `isDotCase`.

```typescript
isCamelCase("helloWorld"); // => true
isSnakeCase("helloWorld"); // => false
```

---

## API — Utilities

### `truncate(str: string, maxLength: number, suffix?: string): string`

Truncates a string. The suffix (default `"..."`) counts toward the `maxLength`.

```typescript
truncate("Hello, World!", 8); // => "Hello..."
```

### `wordCount(str: string): number`

Counts the number of words in a string.

```typescript
wordCount("hello world foo"); // => 3
```

### `charCount(str: string, excludeWhitespace?: boolean): number`

Counts characters, optionally excluding whitespace.

```typescript
charCount("hello world", true); // => 10
```

### `countOccurrences(str: string, substring: string, caseSensitive?: boolean): number`

Counts how many times a substring appears.

```typescript
countOccurrences("banana", "a"); // => 3
```

### `reverseWords(str: string): string`

Reverses the order of words in a string.

```typescript
reverseWords("hello world"); // => "world hello"
```

### `trimWords(str: string): string`

Trims edges and collapses internal whitespace to a single space.

```typescript
trimWords("  hello   world  "); // => "hello world"
```

### `padStart(str: string, targetLength: number, fillChar?: string): string`

Pads the start of a string to a target length.

```typescript
padStart("42", 5); // => "   42"
padStart("42", 5, "0"); // => "00042"
```

### `padEnd(str: string, targetLength: number, fillChar?: string): string`

Pads the end of a string to a target length.

```typescript
padEnd("hi", 5); // => "hi   "
padEnd("hi", 5, "."); // => "hi..."
```

---

## Error Handling

All functions throw a `TypeError` if the input is not a string. `truncate` additionally throws a `RangeError` if `maxLength` is less than 1.

---

## TypeScript Support

This package is written in TypeScript and ships with built-in type declarations. No need to install `@types/string-conv`.

---

## Quick Reference

### Case transforms

| Function         | Input            | Output          |
| ---------------- | ---------------- | --------------- |
| `toUpperCase`    | `"hello world"`  | `"HELLO WORLD"` |
| `toLowerCase`    | `"HELLO WORLD"`  | `"hello world"` |
| `toTitleCase`    | `"hello world"`  | `"Hello World"` |
| `toSentenceCase` | `"hello world"`  | `"Hello world"` |
| `toCamelCase`    | `"hello world"`  | `"helloWorld"`  |
| `toPascalCase`   | `"hello world"`  | `"HelloWorld"`  |
| `toSnakeCase`    | `"hello world"`  | `"hello_world"` |
| `toKebabCase`    | `"hello world"`  | `"hello-world"` |
| `toConstantCase` | `"hello world"`  | `"HELLO_WORLD"` |
| `toDotCase`      | `"hello world"`  | `"hello.world"` |
| `toSlug`         | `"Hello World!"` | `"hello-world"` |
| `fromSlug`       | `"hello-world"`  | `"Hello World"` |

### Utilities

| Function           | Input                 | Output          |
| ------------------ | --------------------- | --------------- |
| `truncate`         | `"Hello, World!", 8`  | `"Hello..."`    |
| `wordCount`        | `"hello world foo"`   | `3`             |
| `charCount`        | `"hello world"`       | `11`            |
| `countOccurrences` | `"banana", "a"`       | `3`             |
| `reverseWords`     | `"hello world"`       | `"world hello"` |
| `trimWords`        | `"  hello   world  "` | `"hello world"` |
| `padStart`         | `"42", 5, "0"`        | `"00042"`       |
| `padEnd`           | `"hi", 5, "."`        | `"hi..."`       |

---

## License

MIT © [Chetan Nada](https://github.com/chetannada)
