# 100% type-safe `curry()` function written in TS

> [Currying](https://pt.wikipedia.org/wiki/Currying)

## Features

- 100% type-safe
- Supports functions that have up to 30 parameters
- Fully compatible with JavaScript
- Very small (only 457 bytes gzipped after bundling)
- No external dependencies

## Installation

Install from `npm` using your favorite package manager:

```
npm install @cdandrea/currying-ts
```

```
yarn add @cdandrea/currying-ts
```

```
pnpm install @cdandrea/currying-ts
```

## Usage

Simply supply the function to be memoized as the 1st parameter of the `curry()` HOF.

```ts
import { curry } from '@cdandrea/currying-ts'

const sum = curry((a: number, b: number) => a + b)

const sum999 = sum(999)

console.log(sum999(1)) // Prints 1000.
```

Notice that the curried function returned by `curry()` gets fully typed, expecting the same parameters as the original function, but 1 parameter per call, until all are finally supplied.
