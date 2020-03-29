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
  let arr = lines[1].split(" ").map(Number);
  let number = arr.length;
  let sum = 0;
  for (let i = 0; i < number; i++) {
    sum += arr[i];
  }
  let average = sum / number;
  console.log(average);
  if (average >= 183) {
    console.log("real");
  } else {
    console.log("fake");
  }
}

solve(["5", "180 181 182 183 184"]);
