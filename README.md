# string-conv

![npm](https://img.shields.io/npm/v/string-conv)
![npm downloads](https://img.shields.io/npm/dm/string-conv)
![license](https://img.shields.io/npm/l/string-conv)
![types](https://img.shields.io/npm/types/string-conv)

A lightweight, zero-dependency TypeScript utility for string case conversion. Convert strings to camelCase, PascalCase, snake_case, kebab-case, slug, uppercase, lowercase, and title case — works in both JavaScript and TypeScript projects.

📦 [View on npm](https://www.npmjs.com/package/string-conv)

## Features

- ✅ Zero dependencies
- ✅ TypeScript support with built-in type declarations
- ✅ Works with ESM and CommonJS
- ✅ Handles edge cases — spaces, mixed case, special characters
- ✅ Supports 8 conversion formats

## Installation

```bash
npm install string-conv
```

## Usage

### TypeScript / ESM
```typescript
import {
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toSlug,
} from 'string-conv';
```

### JavaScript (CommonJS)
```javascript
const {
  toUpperCase,
  toLowerCase,
  toTitleCase,
  toCamelCase,
  toPascalCase,
  toSnakeCase,
  toKebabCase,
  toSlug,
} = require('string-conv');
```

## API

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

### `toSlug(str: string): string`
Converts a string to a URL-friendly slug. Removes special characters, collapses spaces, and lowercases everything.
```typescript
toSlug("Hello World!")        // => "hello-world"
toSlug("My Blog Post 2024")   // => "my-blog-post-2024"
toSlug("hello & world")       // => "hello-world"
toSlug("  My Blog Post  ")    // => "my-blog-post"
```

## Error Handling

All functions throw a `TypeError` if the input is not a string.

```typescript
toUpperCase(123)    // TypeError: Input must be a string
toCamelCase(null)   // TypeError: Input must be a string
```

## TypeScript Support

This package is written in TypeScript and ships with built-in type declarations. No need to install `@types/string-conv`.

```typescript
import { toCamelCase } from 'string-conv';

const result: string = toCamelCase("hello world");  // fully typed ✅
```

## Quick Reference

| Function | Input | Output |
|---|---|---|
| `toUpperCase` | `"hello world"` | `"HELLO WORLD"` |
| `toLowerCase` | `"HELLO WORLD"` | `"hello world"` |
| `toTitleCase` | `"hello world"` | `"Hello World"` |
| `toCamelCase` | `"hello world"` | `"helloWorld"` |
| `toPascalCase` | `"hello world"` | `"HelloWorld"` |
| `toSnakeCase` | `"hello world"` | `"hello_world"` |
| `toKebabCase` | `"hello world"` | `"hello-world"` |
| `toSlug` | `"Hello World!"` | `"hello-world"` |

## License

MIT © [Chetan Nada](https://github.com/chetannada)