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
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    if (isSquare(i)) {
      sum += i;
    }
  }
  console.log(sum);
}

function isSquare(n) {
  let r = Math.floor(Math.sqrt(n));
  return r * r === n;
}
