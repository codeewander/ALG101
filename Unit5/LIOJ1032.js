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
  for (i = 0; i < n; i++) {
    let x1 = Number(lines[1 + 4 * i]);
    let y1 = Number(lines[2 + 4 * i]);
    let x2 = Number(lines[3 + 4 * i]);
    let y2 = Number(lines[4 + 4 * i]);
    console.log(countDistance(x1, y1, x2, y2));
  }
}

function countDistance(x1, y1, x2, y2) {
  let sum = (x2 - x1) ** 2 + (y2 - y1) ** 2;
  let ans = Math.sqrt(sum).toFixed(2);
  return ans;
}
