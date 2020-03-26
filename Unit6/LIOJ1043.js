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
  console.log(endsWith(lines[0], lines[1]));
}

function endsWith(str, searchString) {
  let n = searchString.length;
  let target = "";
  for (i = str.length - 1; i > str.length - 1 - n; i--) {
    target = str[i] + target;
  }
  if (target === searchString) {
    return true;
  } else {
    return false;
  }
}
