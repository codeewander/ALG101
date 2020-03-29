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
  let arr = lines[1].split(" ").map(Number);
  let sum = 1;
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      sum++;
    } else {
      result.push(sum);
      sum = 1;
    }
  }

  let max = result[0];
  for (let i = 1; i < result.length; i++) {
    if (result[i] > max) {
      max = result[i];
    }
  }
  console.log(max);
}

solve(["10", "1 1 2 2 2 3 3 3 4 4"]);
