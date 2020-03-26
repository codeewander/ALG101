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
  let input = lines[0];
  let output = reverse(input);
  if (input === output) {
    console.log("True");
  } else {
    console.log("False");
  }
}

function reverse(str) {
  let s = "";
  for (i = str.length - 1; i >= 0; i--) {
    s += str[i];
  }
  return s;
}
