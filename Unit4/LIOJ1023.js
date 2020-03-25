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
    printStar(i, n);
  }

  for (i = 1; i <= n - 1; i++) {
    printRoot(n);
  }
}

function printStar(i, n) {
  let str = repeat(" ", n - i) + repeat("*", 2 * i - 1);
  console.log(str);
}

function printRoot(n) {
  let root = repeat(" ", n - 1) + "|";
  console.log(root);
}

function repeat(str, n) {
  let s = "";
  for (let i = 1; i <= n; i++) {
    s += str;
  }
  return s;
}
