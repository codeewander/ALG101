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
  let arr = lines[0].split(" ");
  if (arr[0] === arr[1]) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
