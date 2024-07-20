import { assertEquals, assertInstanceOf } from 'https://deno.land/std@0.224.0/assert/mod.ts';

import { curry } from '../src/curry.ts';

Deno.test('curry()', () => {
  const sum = curry((a: number, b: number) => a + b)

  assertInstanceOf(sum(1), Function)
  assertEquals(sum(1).length, 1)
  assertEquals(sum(1)(2), 3)
})
