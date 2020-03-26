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
  console.log(countNumber(n));
}

function countNumber(n) {
  let arr = [];
  for (i = 1; i <= 2 ** 31; i *= 2) {
    arr.push(i);
  }
  let sum = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] <= n) {
      n -= arr[i];
      sum++;
    }
  }
  return sum;
}
