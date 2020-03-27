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
  let target = lines[0].split(" ").map(Number)[1];
  let arr = lines[1].split(" ").map(Number);
  let result;
  for (i = 0; i < arr.length; i++) {
    for (j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result = `${i} ${j}`;
        return;
      }
    }
  }
  console.log(result);
}

solve(["5 3", "1 7 9 8 2"]);
