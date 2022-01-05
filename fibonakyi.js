const fibonacci = (n) => {
  if (n === 0) return 0;
  if (n <= 2) return 1;
  let acc1 = 0;
  let acc2 = 0;
  for (let i = 0; i <= n - 1; i++) {
    acc1 += i;
  }
  for (let i = 0; i <= n - 2; i++) {
    acc1 += i;
  }
  return acc1 + acc2;
};
const fibonacciR = (n) => {
  if (n <= 1) return n;
  return fibonacciR(n - 1) + fibonacciR(n - 2);
};

module.exports = { fibonacci, fibonacciR };
