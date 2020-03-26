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
  console.log(padEnd(lines[0], lines[1], lines[2]));
}

function padEnd(str, targetLength, padString) {
  if (str.length >= targetLength) {
    return str;
  }
  let result = str;
  while (result.length < targetLength) {
    result += padString;
  }
  let newResult = "";
  for (let i = 0; i < targetLength; i++) {
    newResult += result[i];
  }
  return newResult;
}
