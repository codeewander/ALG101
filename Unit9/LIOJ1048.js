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
  let arr = [];
  for (let i = 1; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }
  let max = -Infinity;
  let currentSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] + currentSum > arr[i]) {
      currentSum += arr[i];
    } else {
      currentSum = arr[i];
    }

    if (currentSum > max) {
      max = currentSum;
    }
  }
  console.log(max);
}
