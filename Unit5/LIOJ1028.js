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

function toNumber(lines) {
  let n = lines[0].split(" ");
  let str = "";
  for (i = 0; i < n.length; i++) {
    str += n[i];
  }
  return Number(str);
}

function sum(n) {
  let s = 0;
  while (n != 0) {
    s += n % 10;
    n = Math.floor(n / 10);
  }
  return s;
}

function solve(lines) {
  let n = toNumber(lines);
  let m = sum(n);
  while (m >= 10) {
    m = sum(m);
  }
  console.log(m);
}
