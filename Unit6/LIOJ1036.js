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
  reverse(lines);
}

function reverse(lines) {
  for (i = lines.length - 1; i >= 1; i--) {
    console.log(Number(lines[i]));
  }
}
