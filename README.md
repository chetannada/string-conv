# string-conv

A simple, lightweight TypeScript utility to convert strings — uppercase, lowercase, and title case. Works with both JavaScript and TypeScript projects.

## Installation

```bash
npm install string-conv
```

## Usage

### TypeScript / ESM
```typescript
import { toUpperCase, toLowerCase, toTitleCase } from 'string-conv';

console.log(toUpperCase("hello world"));   // "HELLO WORLD"
console.log(toLowerCase("HELLO WORLD"));   // "hello world"
console.log(toTitleCase("hello world"));   // "Hello World"
```

### JavaScript (CommonJS)
```javascript
const { toUpperCase, toLowerCase, toTitleCase } = require('string-conv');

console.log(toUpperCase("hello world"));   // "HELLO WORLD"
console.log(toLowerCase("HELLO WORLD"));   // "hello world"
console.log(toTitleCase("hello world"));   // "Hello World"
```

## API

### `toUpperCase(str: string): string`
Converts a string to UPPERCASE.
```typescript
toUpperCase("hello world")   // "HELLO WORLD"
toUpperCase("Hello World")   // "HELLO WORLD"
toUpperCase("hello 123")     // "HELLO 123"
```

### `toLowerCase(str: string): string`
Converts a string to lowercase.
```typescript
toLowerCase("HELLO WORLD")   // "hello world"
toLowerCase("Hello World")   // "hello world"
toLowerCase("HELLO 123")     // "hello 123"
```

### `toTitleCase(str: string): string`
Converts a string to Title Case (first letter of each word capitalized).
```typescript
toTitleCase("hello world")   // "Hello World"
toTitleCase("HELLO WORLD")   // "Hello World"
toTitleCase("the quick brown fox")  // "The Quick Brown Fox"
```

## Error Handling

All functions throw a `TypeError` if the input is not a string.

```typescript
toUpperCase(123)   // TypeError: Input must be a string
toLowerCase(null)  // TypeError: Input must be a string
```

## TypeScript Support

This package is written in TypeScript and includes type declarations out of the box. No need to install `@types/string-conv`.

```typescript
import { toUpperCase } from 'string-conv';

const result: string = toUpperCase("hello");  // fully typed ✅
```

## License

MIT © [Chetan Nada](https://github.com/chetannada)