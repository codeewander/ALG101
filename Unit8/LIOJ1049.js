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
  let min = Infinity;
  let arr1 = lines[1].split(" ").map(Number);
  let arr2 = lines[2].split(" ").map(Number);
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < arr2.length; j++) {
      let dis = Math.abs(arr1[i] - arr2[j]);
      if (dis < min) {
        min = dis;
      }
    }
  }
  console.log(min);
}

solve(["3 3", "0 5 13", "3 7 10"]);
