var readline = require("readline");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin
});

rl.on("line", function(line) {
  lines.push(line);
});

rl.on("close", function() {
  solve(lines);
});

function solve(lines) {
  let n = Number(lines[0]);
  console.log(fib(n));
}

function fib(n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  return fib(n - 1) + fib(n - 2);
}
