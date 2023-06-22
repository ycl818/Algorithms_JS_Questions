// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3
//   fib(3) ==

// 4 = 3 2

// function fib(n) {
//   if (n == 0) return 0;
//   if (n == 1) return 1;
//   if (n == 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

function memoize(fn) {
  let cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    let result = fn.apply(this, args);
    cache[args] = result;

    return result;
  };
}

function fib(n) {
  if (n < 2) return n;

  return fib(n - 1) + fib(n - 2);
}

fib = memoize(fib);

// function fib(n) {
//   let result = [0, 1];

//   for (let i = 2; i <= n; i++) {
//     let a = result[i - 1];
//     let b = result[i - 2];

//     result.push(a + b);
//   }

//   return result[n];
// }

module.exports = fib;
