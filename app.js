const express = require("express");
const { pow } = require("./math");
const fibonakyi = require("./fibonakyi");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  let ran = parseInt(Math.random() * 10);
  let ran2 = parseInt(Math.random() * 10);
  let result = pow(ran, ran2);
  res.send("Hello World!" + result);
});
app.get("/fibonacci", (req, res) => {
  let ran = parseInt(Math.random() * 10);
  let result = fibonakyi.fibonacciR(ran);
  let resp = `Fibonacci Sequence\nFibonacci for ${ran} = ${result}`;
  res.send(resp);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
