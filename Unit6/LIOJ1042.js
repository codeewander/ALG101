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
  console.log(toLowerCase(lines[0]));
}

function toLowerCase(str) {
  let result = "";
  for (i = 0; i < str.length; i++) {
    // console.log(str.charCodeAt(i));
    if (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) {
      let newCha = str.charCodeAt(i) + 32;
      let c = String.fromCharCode(newCha);
      result += c;
    } else {
      result += str[i];
    }
  }
  return result;
}
