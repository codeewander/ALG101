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
  let arr = lines[0].split(" ");
  let num1 = Number(arr[0]);
  let symbol = arr[1];
  let num2 = Number(arr[2]);

  if (arr[1] === "+") {
    console.log(num1 + num2);
  } else if (arr[1] === "*") {
    console.log(num1 * num2);
  } else if (arr[1] === "-") {
    console.log(num1 - num2);
  } else {
    console.log(num1 / num2);
  }
}
