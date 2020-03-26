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
  let dots = [];
  for (let i = 1; i <= n; i++) {
    let dot = lines[i].split(" ");
    dots.push({
      x: Number(dot[0]),
      y: Number(dot[1])
    });
  }
  let min = Infinity;
  let ans = null;
  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      let distance = countDistance(dots[i].x, dots[i].y, dots[j].x, dots[j].y);
      if (distance < min) {
        min = distance;
        ans = {
          x1: dots[i].x,
          y1: dots[i].y,
          x2: dots[j].x,
          y2: dots[j].y
        };
      }
    }
  }
  if (ans.x1 > ans.x2) {
    console.log(ans.x2 + " " + ans.y2);
    console.log(ans.x1 + " " + ans.y1);
  } else if (ans.x1 < ans.x2) {
    console.log(ans.x1 + " " + ans.y1);
    console.log(ans.x2 + " " + ans.y2);
  } else if (ans.y1 > ans.y2) {
    console.log(ans.x2 + " " + ans.y2);
    console.log(ans.x1 + " " + ans.y1);
  } else {
    console.log(ans.x1 + " " + ans.y1);
    console.log(ans.x2 + " " + ans.y2);
  }
}

function countDistance(x1, y1, x2, y2) {
  let sum = (x2 - x1) ** 2 + (y2 - y1) ** 2;
  let ans = Math.sqrt(sum);
  return ans;
}
