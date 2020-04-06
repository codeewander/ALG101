var readline = require("readline");

var lines = [];
var rl = readline.createInterface({
  input: process.stdin,
});

rl.on("line", function(line) {
  lines.push(line);
});

rl.on("close", function() {
  solve(lines);
});

// function solve(lines) {
//   let n = Number(lines[0]);
//   let removeNum = [];
//   if (Number(lines[1]) === 0) {
//     console.log(totalOptions(n));
//   } else {
//     for (let i = 2; i < lines.length; i++) {
//       removeNum.push(Number(lines[i]));
//     }
//     console.log(removeOccupied(removeNum, n));
//   }
// }

// function removeOccupied(arr, n) {
//   let total = totalOptions(n);
//   let sortedArr = arr.sort((a, b) => a - b);
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (total === 1) {
//       if (arr[i] === 1 || arr[i] === 2) {
//         total -= 1;
//       }
//     } else {
//       if (arr[i] === 1 || arr[i] === 2 || arr[i] === n - 1 || arr[i] === n) {
//         total -= 2;
//         // console.log(arr[i], -2);
//       } else {
//         total -= 3;
//         // console.log(arr[i], -3);
//       }
//     }

//     if (arr[i] % 2 === 0) {
//       if (arr[i + 1] === arr[i] + 2 || arr[i + 2] === arr[i] + 2) {
//         total += 1;
//         // console.log(arr[i], "偶數滿 +1");
//       }
//     } else {
//       if (
//         arr[i + 1] === arr[i] + 1 ||
//         arr[i + 1] === arr[i] + 2 ||
//         arr[i + 2] === arr[i] + 2
//       ) {
//         total += 1;
//         // console.log(arr[i], "奇數滿 +1");
//       }
//     }
//   }
//   return total;
// }

// function totalOptions(n) {
//   let result = 1 + (n / 2 - 1) * 3;
//   return result;
// }

function solve(lines) {
  let seats = Number(lines[0]);
  let occ = lines.slice(2).map(Number);
  let sum = 0;
  for (let i = 1; i <= seats - 3; i = i + 2) {
    let seat = Number(i);
    console.log(occ.indexOf(seat), seat, "奇");
    if (occ.indexOf(seat) === -1 && occ.indexOf(seat + 2) === -1) {
      sum += 1;
    }
  }
  for (let i = 1; i <= seats - 1; i = i + 2) {
    let seat = Number(i);
    console.log(occ.indexOf(seat), seat, "橫");
    if (occ.indexOf(seat) === -1 && occ.indexOf(seat + 1) === -1) {
      sum += 1;
    }
  }
  for (let i = 2; i <= seats - 2; i = i + 2) {
    let seat = Number(i);
    console.log(occ.indexOf(seat), seat, "偶");
    if (occ.indexOf(seat) === -1 && occ.indexOf(seat + 2) === -1) {
      sum += 1;
    }
  }
  console.log(sum);
}

solve(["8", "2", "4", "3"]);
// solve(["4", "1", "1"]);
// solve(["10", "2", "1", "2", "4"]);
