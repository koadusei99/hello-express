const express = require("express");
const Math = require("mathjs");
const { pow, rem, subtract, add } = require("./math");
const fibonakyi = require("./fibonakyi");
const app = express();
const port = 3001;

app.use(express.json());

app.get("/", (req, res) => {
  let ran = parseInt(Math.random() * 10);
  let ran2 = parseInt(Math.random() * 10);
  let result = pow(ran, ran2);
  res.send("Hello World!" + result);
});

// Fibonacci
app.post("/fibonacci", (req, res) => {
  let ran = parseInt(Math.random() * 10);
  if (req.body.number) {
    ran = req.body.number;
  }
  let result = fibonakyi.fibonacciR(ran);
  let resp = `Fibonacci Sequence\nFibonacci for ${ran} = ${result}`;
  res.send(resp);
});

// Math operations
// expects operation e.g.'add'/'sub'/'mul'/'pow' ,num1 and num2
app.post("/math", (req, res) => {
  let { num1, num2, operation } = req.body;
  num1 = parseInt(num1);
  num2 = parseInt(num2);
  // validate
  if (!(num1 || num2 || operation)) {
    res.send("expects operation e.g.'add'/'sub'/'mul'/'pow' ,num1 and num2");
  }

  let result = -1;
  switch (operation) {
    case "sub":
      result = subtract(num1, num2);
      break;
    case "rem":
      result = rem(num1, num2);
      break;
    case "pow":
      result = pow(num1, num2);
      break;
    case "add":
      result = add(num1, num2);
      break;
    default:
      res.send("Invalid operation");
      break;
  }
  res.send(`${operation}(${num1},${num2})=${result}`);
});

app.post("/", (req, res) => {
  let isDaverose =
    req.body.name.toLowerCase() === "daverose"
      ? ", this is Daverose"
      : `I'm ${req.body.name}`;
  res.send("Hello Everyone" + isDaverose);
});

// LCM
app.post("/lcm", (req, res) => {
  // get numbers array from request
  if (!req.body.numbers) {
    res.send("Expecting numbers array");
  }
  let numbers = req.body.numbers;
  let result = Math.lcm(...numbers);
  res.send(`LCM = ${result}`);
});

// HCF
app.post("/hcf", (req, res) => {
  // get numbers array from request
  if (!req.body.numbers) {
    res.send("Expecting numbers array");
  }
  let numbers = req.body.numbers;
  let result = Math.gcd(...numbers);
  res.send(`HCF = ${result}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
