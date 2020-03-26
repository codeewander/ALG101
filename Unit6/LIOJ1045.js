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
  console.log(slice(lines[0], lines[1], lines[2]));
}

function slice(str, beginIndex, endIndex) {
  let result = "";
  for (i = beginIndex; i < endIndex; i++) {
    result += str[i];
  }
  return result;
}
