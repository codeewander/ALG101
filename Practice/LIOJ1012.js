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
  let prices = [Number(lines[0]), Number(lines[1])].sort((a, b) => b - a);

  let maxPrice = prices[0] * 2;
  let sum = prices[0] + prices[1];
  let loss = maxPrice - sum;
  console.log(maxPrice);
  console.log(loss);
}

solve(["2000", "25"]);
