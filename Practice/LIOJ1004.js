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
  let n = Number(lines[0]);
  for (i = 1; i <= n; i++) {
    let a = BigInt(lines[i].split(" ")[0]);

    let b = BigInt(lines[i].split(" ")[1]);

    let res = lines[i].split(" ").map(Number)[2];
    if (res === -1) {
      if (a > b) {
        console.log("B");
      } else if (a < b) {
        console.log("A");
      } else {
        console.log("DRAW");
      }
    } else {
      if (a > b) {
        console.log("A");
      } else if (a < b) {
        console.log("B");
      } else {
        console.log("DRAW");
      }
    }
  }
}

solve(["2", "1033 100 -1", "10 9 1"]);
