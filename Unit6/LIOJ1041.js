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
  console.log(trim(lines[0]));
}

function trim(str) {
  let result = "";
  let frontWhiteSpaceEnd = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " " || frontWhiteSpaceEnd) {
      frontWhiteSpaceEnd = true;
      result += str[i];
    }
  }
  let ans = "";
  let backWhiteSpaceEnd = false;
  for (let i = result.length - 1; i >= 0; i--) {
    if (result[i] !== " " || backWhiteSpaceEnd) {
      backWhiteSpaceEnd = true;
      ans = result[i] + ans;
    }
  }
  return ans;
}
