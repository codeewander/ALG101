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
  let arr = [];
  for (i = 0; i < lines.length; i++) {
    arr.push(lines[i].split(""));
  }

  console.log(win(arr));
}

function win(arr) {
  for (i = 0; i < 3; i++) {
    if (arr[i][0] === arr[i][1] && arr[i][1] === arr[i][2]) {
      return arr[i][0];
    }
  }
  for (i = 0; i < 3; i++) {
    if (arr[0][i] === arr[1][i] && arr[1][i] === arr[2][i]) {
      return arr[0][i];
    }
  }

  if (arr[0][0] === arr[1][1] && arr[1][1] === arr[2][2]) {
    return arr[0][0];
  }

  if (arr[0][2] === arr[1][1] && arr[1][1] === arr[2][0]) {
    return arr[0][2];
  }
  return "DRAW";
}
