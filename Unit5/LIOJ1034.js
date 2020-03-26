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
  let str = lines[1].split("");
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    let newCha = transformChar(str[i], n);
    newStr += String.fromCharCode(newCha);
  }
  console.log(newStr);
}

function transformChar(cha, n) {
  let code = cha.charCodeAt(0);
  let t = code + n;
  while (t > 122) {
    t = t - 26;
  }
  return t;
}
