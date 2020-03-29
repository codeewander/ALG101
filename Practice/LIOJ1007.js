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
  let result;
  let max = -Infinity;
  for (let i = 1; i < lines.length; i++) {
    let score = lines[i].split(" ")[1];
    let name = lines[i].split(" ")[0];
    // console.log(score);
    // console.log(name);
    if (score > max) {
      max = Number(score);
    }
  }
  for (let i = 1; i < lines.length; i++) {
    let score = Number(lines[i].split(" ")[1]);
    if (score === max) {
      console.log(lines[i].split(" ")[0]);
    }
  }

  // console.log(result);
}

solve(["4", "Nick 8", "Peter 5", "Nic 100", "Bob 100"]);
