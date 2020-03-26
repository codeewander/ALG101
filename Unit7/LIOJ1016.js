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
  let answer = findLess(lines);
  if (answer === "PEACE") {
    console.log("PEACE");
    return;
  }
  for (i = 0; i < answer.length; i++) {
    console.log(answer[i]);
  }
}

function findLess(lines) {
  let obj = {};
  let numA = 0;
  let numB = 0;
  let result;
  for (i = 1; i < lines.length; i++) {
    obj[i] = lines[i];
    if (lines[i] === "A") {
      numA++;
    } else {
      numB++;
    }
  }

  if (numA > numB) {
    if (numB !== 0) {
      result = Object.keys(obj).filter(key => obj[key] === "B");
    } else {
      result = Object.keys(obj).filter(key => obj[key] === "A");
    }
  } else if (numB > numA) {
    if (numA !== 0) {
      result = Object.keys(obj).filter(key => obj[key] === "A");
    } else {
      result = Object.keys(obj).filter(key => obj[key] === "B");
    }
  } else {
    result = "PEACE";
  }
  return result;
}
