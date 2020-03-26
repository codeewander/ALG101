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
  let arr = lines[1].split(" ");

  if (isValid(arr)) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

function isValid(arr) {
  let d = arr[1] / arr[0];

  if (arr.length === 2) {
    return true;
  }

  for (i = 1; i < arr.length; i++) {
    if (arr[i] / arr[i - 1] !== d) {
      return false;
    }
  }
  return true;
}
