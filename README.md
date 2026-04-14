# string-conv

![npm](https://img.shields.io/npm/v/string-conv)
![npm downloads](https://img.shields.io/npm/dm/string-conv)
![license](https://img.shields.io/npm/l/string-conv)
![types](https://img.shields.io/npm/types/string-conv)

A lightweight, zero-dependency TypeScript utility for string case conversion, inspection, and manipulation. Convert strings between **18+ formats**, detect case styles with validation guards, and use robust utilities for everyday string tasks. Works in both JavaScript and TypeScript projects.

📦 [View on npm](https://www.npmjs.com/package/string-conv)

## Features

- ✅ **Zero dependencies** — Extremely lightweight.
- ✅ **Full TypeScript Support** — Built-in type declarations included.
- ✅ **Hybrid Package** — Works seamlessly with ESM (`import`) and CommonJS (`require`).
- ✅ **Robust Case Handling** — Handles edge cases like multiple spaces, special characters, and mixed-case inputs.
- ✅ **Case Detection** — Identify case styles programmatically.
- ✅ **Advanced Utilities** — Built-in support for HTML stripping, palindromes, truncation, and more.

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
  toInverseCase,
  toReverseCase,
  toTrainCase,
  toPathCase,
  toFlatCase,
  toHeaderCase,
  toSpongeCase,
  // Inspection
  detectCase,
  isCamelCase,
  isPascalCase,
  isSnakeCase,
  isKebabCase,
  isConstantCase,
  isDotCase,
  isTrainCase,
  isPathCase,
  // Utilities
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
} from "string-conv";
```

### JavaScript (CommonJS)

```javascript
const {
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
  toInverseCase,
  toReverseCase,
  toTrainCase,
  toPathCase,
  toFlatCase,
  toHeaderCase,
  toSpongeCase,
  detectCase,
  isCamelCase,
  isPascalCase,
  isSnakeCase,
  isKebabCase,
  isConstantCase,
  isDotCase,
  isTrainCase,
  isPathCase,
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

Converts to Title Case (first letter of each word capitalized).

```typescript
toTitleCase("hello world"); // => "Hello World"
```

### `toSentenceCase(str: string): string`

Capitalizes only the first character.

```typescript
toSentenceCase("hello world"); // => "Hello world"
```

### `toCamelCase(str: string): string`

```typescript
toCamelCase("hello world"); // => "helloWorld"
```

### `toPascalCase(str: string): string`

```typescript
toPascalCase("hello world"); // => "HelloWorld"
```

### `toSnakeCase(str: string): string`

```typescript
toSnakeCase("hello world"); // => "hello_world"
```

### `toKebabCase(str: string): string`

```typescript
toKebabCase("hello world"); // => "hello-world"
```

### `toConstantCase(str: string): string`

```typescript
toConstantCase("hello world"); // => "HELLO_WORLD"
```

### `toDotCase(str: string): string`

```typescript
toDotCase("hello world"); // => "hello.world"
```

### `toInverseCase(str: string): string`

Inverts character casing.

```typescript
toInverseCase("Hello World"); // => "hELLO wORLD"
```

### `toReverseCase(str: string): string`

Reverses characters.

```typescript
toReverseCase("hello"); // => "olleh"
```

### `toTrainCase(str: string): string`

```typescript
toTrainCase("hello world"); // => "Hello-World"
```

### `toPathCase(str: string): string`

```typescript
toPathCase("hello world"); // => "hello/world"
```

### `toFlatCase(str: string): string`

```typescript
toFlatCase("Hello World"); // => "helloworld"
```

### `toHeaderCase(str: string): string`

```typescript
toHeaderCase("content type"); // => "Content-Type"
```

### `toSpongeCase(str: string): string`

```typescript
toSpongeCase("hello"); // => "hElLo" (random)
```

---

## API — Inspection

### `detectCase(str: string): CaseType`

Detects the case style of a string.

```typescript
detectCase("helloWorld"); // => "camelCase"
```

Possible values: `"camelCase"`, `"PascalCase"`, `"snake_case"`, `"kebab-case"`, `"CONSTANT_CASE"`, `"dot.case"`, `"path/case"`, `"Train-Case"`, `"Title Case"`, `"UPPERCASE"`, `"lowercase"`, `"unknown"`.

### Validation guards

Boolean checks for specific styles: `isCamelCase`, `isPascalCase`, `isSnakeCase`, `isKebabCase`, `isConstantCase`, `isDotCase`, `isTrainCase`, `isPathCase`.

---

## API — Utilities

### `stripHtml(str: string): string`

Removes HTML tags.

```typescript
stripHtml("<p>Hello <b>World</b></p>"); // => "Hello World"
```

### `isPalindrome(str: string, ignoreSpaces?: boolean): boolean`

```typescript
isPalindrome("racecar"); // => true
```

### `escapeHtml(str: string): string`

```typescript
escapeHtml("<b>Hi</b>"); // => "&lt;b&gt;Hi&lt;/b&gt;"
```

### `truncate(str: string, maxLength: number, suffix?: string): string`

```typescript
truncate("Hello, World!", 8); // => "Hello..."
```

### `wordCount(str: string): number`

```typescript
wordCount("hello world"); // => 2
```

### `reverseWords(str: string): string`

```typescript
reverseWords("hello world"); // => "world hello"
```

### `trimWords(str: string): string`

Collapses internal whitespace.

```typescript
trimWords("  hello   world  "); // => "hello world"
```

---

## Quick Reference Table

| Function         | Input           | Output          |
| :--------------- | :-------------- | :-------------- |
| `toUpperCase`    | `"hello world"` | `"HELLO WORLD"` |
| `toLowerCase`    | `"HELLO WORLD"` | `"hello world"` |
| `toTitleCase`    | `"hello world"` | `"Hello World"` |
| `toSentenceCase` | `"hello world"` | `"Hello world"` |
| `toCamelCase`    | `"hello world"` | `"helloWorld"`  |
| `toPascalCase`   | `"hello world"` | `"HelloWorld"`  |
| `toSnakeCase`    | `"hello world"` | `"hello_world"` |
| `toKebabCase`    | `"hello world"` | `"hello-world"` |
| `toConstantCase` | `"hello world"` | `"HELLO_WORLD"` |
| `toDotCase`      | `"hello world"` | `"hello.world"` |
| `toInverseCase`  | `"Hello World"` | `"hELLO wORLD"` |
| `toTrainCase`    | `"hello world"` | `"Hello-World"` |
| `toPathCase`     | `"hello world"` | `"hello/world"` |
| `toFlatCase`     | `"Hello World"` | `"helloworld"`  |

---

## License

MIT © [Chetan Nada](https://github.com/chetannada)
