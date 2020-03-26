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
  let numbers = [];
  for (let i = 2; i < lines.length; i++) {
    numbers.push(lines[i]);
  }
  let arr = filter(target, numbers);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function filter(target, arr) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    if (Number(arr[i]) !== target) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
