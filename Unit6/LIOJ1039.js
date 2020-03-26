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
  let value = Number(lines[0]);
  let arr = [];
  for (i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }
  let newArr = fill(arr, value);
  for (i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
}

function fill(arr, value) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(value);
  }
  return newArr;
}
