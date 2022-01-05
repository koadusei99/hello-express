const fibonacci = (n) => {
  let acc = 0;
  for (let i = 0; i < n; i++) {
    acc += i;
  }
  return acc;
};
const fibonacciR = (n) => {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  return fibonacciR(n - 1) + fibonacciR(n - 2);
};

module.exports = { fibonacci, fibonacciR };
