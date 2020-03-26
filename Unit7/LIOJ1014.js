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
  let n = lines[0];
  console.log(countNumber(n));
}

function countNumber(number) {
  let arr = number.split("");
  let sum = 0;
  for (i = arr.length - 1; i >= 0; i--) {
    sum += Math.pow(9, i) * Number(arr[arr.length - 1 - i]);
  }
  return sum;
}
