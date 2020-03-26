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

function removeDash(str) {
  let arr = str.split("-");
  let s = "";
  for (i = 0; i < arr.length; i++) {
    s += arr[i].split(",");
  }
  return s;
}

function evenDigits(card) {
  let sum = 0;
  for (let i = 1; i <= 13; i += 2) {
    sum += Number(card[i]);
  }
  return sum;
}

function oddDigits(card) {
  let sum = 0;
  for (let i = 0; i <= 15; i += 2) {
    let p = Number(card[i]) * 2;
    if (p >= 10) {
      p -= 9;
    }
    sum += p;
  }
  return sum;
}
function solve(lines) {
  let card = removeDash(lines[0]);
  let sum = evenDigits(card) + oddDigits(card);
  let confirmNum = sum % 10;

  if (confirmNum !== 0) {
    confirmNum = 10 - confirmNum;
  }

  if (confirmNum !== Number(card[15])) {
    console.log("INVALID");
  } else {
    if (card[0] === "5") {
      console.log("MASTER_CARD");
    } else {
      console.log("VISA");
    }
  }
}
