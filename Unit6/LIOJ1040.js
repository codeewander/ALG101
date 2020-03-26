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
  let separator = lines[0];
  let arr = [];
  for (i = 2; i < lines.length; i++) {
    arr.push(Number(lines[i]));
  }
  let str = join(arr, separator);
  console.log(str);
}

function join(arr, separator) {
  let str = "";
  for (i = 0; i < arr.length; i++) {
    str += arr[i];
    if (i < arr.length - 1) {
      str += separator;
    }
  }
  return str;
}
