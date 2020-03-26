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
  let target = Number(lines[0]);
  let arr = [];
  for (i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }
  console.log(indexOf(arr, target));
}

function indexOf(arr, searchElement) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === searchElement) {
      return i;
    }
  }
  return -1;
}
