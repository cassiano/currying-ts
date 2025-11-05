type CurriedFunction<Fn extends FnType> =
  Parameters<Fn> extends [
    // At least 2 args were supplied?
    infer FirstArg,
    infer SecondArg,
    ...infer RemainingArgs,
  ]
    ? (
        arg: FirstArg,
      ) => CurriedFunctionSequence<
        [SecondArg, ...RemainingArgs],
        ReturnType<Fn>
      >
    : never

// Alternative way of cheking if a function has at least 2 arguments:
//
// type CurriedFunction<Fn extends FnType> = Parameters<Fn> extends [infer FirstArg, ...infer RemainingArgs] // At least 1 arg was supplied?
//   ? RemainingArgs extends [infer _SecondArg, ...infer _OtherArgs] // `RemainingFns` has at least 1 more arg?
//     ? (arg: FirstArg) => CurriedFunctionSequence<RemainingArgs, ReturnType<Fn>>
//     : never
//   : never

/* eslint-disable @typescript-eslint/no-explicit-any */
// deno-lint-ignore no-explicit-any
type FnType = (...args: any[]) => unknown

type CurriedFunctionSequence<Args extends unknown[], RetType> = Args extends [
  infer FirstArg,
  ...infer RemainingArgs,
]
  ? (arg: FirstArg) => CurriedFunctionSequence<RemainingArgs, RetType>
  : RetType

/**
 * A function that curries the given function `fn`
 *
 * @template Fn - The signature of the curried function (always inferred automatically by TS).
 * @param {Fn} fn - The function to be curried.
 * @returns {CurriedFunction<Fn>} - The curried function.
 */

export const curry = <Fn extends FnType>(
  fn: Fn,
  arity = fn.length,
): CurriedFunction<Fn> => {
  const curriedFn = (...currentArgs: unknown[]) =>
    currentArgs.length >= arity // Note: excessive arguments will be discarded.
      ? fn(...currentArgs)
      : (nextArg: unknown) => curriedFn(...currentArgs, nextArg)

  return curriedFn as CurriedFunction<Fn>
}
