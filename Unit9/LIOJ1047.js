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
  let [n, m] = lines[0].split(" ");
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Number(lines[i + 1]);
  }

  n = Number(n);

  for (let i = n + 1; i < lines.length; i++) {
    let q = Number(lines[i]);
    console.log(search(arr, q));
  }
}

function search(arr, q) {
  let L = 0;
  let R = arr.length - 1;
  while (L <= R) {
    let M = Math.floor((L + R) / 2);
    if (arr[M] === q) {
      return M;
    } else if (arr[M] > q) {
      R = M - 1;
    } else {
      L = M + 1;
    }
  }
  return -1;
}
