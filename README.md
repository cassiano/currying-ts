# 100% type-safe `curry()` function written in TS

> [Currying](https://en.wikipedia.org/wiki/Currying) is the technique of translating a function that takes multiple arguments into a sequence of families of functions, each taking a single argument. Source: Wikipedia.
>
> It is essentially a programming style which favors reuse, by creating reusable functions from previous function (partial) calls.
>
> This package provides a simple way to transform functions into their curried versions using a [Higher-Order Function](https://en.wikipedia.org/wiki/Higher-order_function) (HOF) called "curry()", while keeping the original function's signature, expecting the same parameters as the original function, but 1 parameter at a time (i.e. per call), until all parameters are finally supplied.

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

Simply supply the function to be curried as the 1st parameter of the `curry()` HOF.

```ts
import { curry } from '@cdandrea/currying-ts'

const sum = curry((a: number, b: number) => a + b)

// `sum()` expects a number, corresponding to the
// original function's 1st parameter (`a`).
const sum10 = sum(10)
const sum20 = sum(20)

// `sum10()` also expects a number, corresponding
// to the original function's 2nd parameter (`b`).
console.log(sum10(5)) // Prints 15.
console.log(sum10(100)) // Prints 110.

// And so does `sum20()`, which also expects a number.
console.log(sum20(5)) // Prints 25.
console.log(sum20(100)) // Prints 120.
```

Notice that the curried function returned by `curry()` gets fully typed, expecting the same parameters as the original function, and in the same order, but in successive function calls.
