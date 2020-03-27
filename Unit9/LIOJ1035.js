var readline = require("readline");
var rl = readline.createInterface({
  input: process.stdin
});
var lines = [];

rl.on("line", function(line) {
  lines.push(line);
});

rl.on("close", function() {
  solve(lines);
});

function solve(lines) {
  let arr = [];
  for (let i = 1; i <= 100; i++) {
    arr[i] = 0;
  }

  for (let i = 1; i < lines.length; i++) {
    let n = Number(lines[i]);
    arr[n]++;
  }
  for (let i = 1; i <= 100; i++) {
    for (let j = 1; j <= arr[i]; j++) {
      console.log(i);
    }
  }
}

solve(["5", "1", "7", "4", "9", "5"]);
