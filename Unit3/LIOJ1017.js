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
  let m = Number(lines[1]);
  let items = lines.splice(2).sort(function(a, b) {
    return b - a;
  });

  let sum = 0;
  if (n <= m) {
    for (i = 0; i < n; i++) {
      sum += Number(items[i]);
    }
  } else {
    for (i = 0; i < m; i++) {
      sum += Number(items[i]);
    }
  }

  console.log(sum);
}
