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
  for (let i = 0; i < lines.length; i++) {
    let targetNum = Number(lines[i]);
    let findPairResult = countAmicableNumber(targetNum);
    if (targetNum === 0) {
      return;
    }
    console.log(findMatch(targetNum, findPairResult));
  }
}

function findMatch(t, n) {
  if (countAmicableNumber(n) === t) {
    return n;
  } else {
    return "QQ";
  }
}

function countAmicableNumber(n) {
  let sum = 1;
  for (let i = 2; i <= n / 2; i++) {
    if (n % i == 0) {
      sum += i;
    }
  }
  return sum;
}

// countAmicableNumber(10);

solve(["284", "221", "222", "220", "0"]);
