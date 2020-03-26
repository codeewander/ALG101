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
  console.log(reverse(lines[0]));
}

function reverse(str) {
  let result = "";
  for (i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
