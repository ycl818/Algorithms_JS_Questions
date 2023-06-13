// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//   for (let row = 1; row <= n; row++) {
//     let str = "";
//     for (let column = 1; column <= n; column++) {
//       if (column <= row) {
//         str += "#";
//       } else {
//         str += " ";
//       }
//     }
//     console.log(str);
//   }
// }

// if (row === n) then we have hit the end of out problem
// if the 'stair' string has a length === n then we are at the end of a row
// if the length of the stair string is less than or equal to the row number
// we're working on, we add a '#', otherwise add a space

function steps(n, row = 0, stair = "") {
  if (n === row) return;

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1); // new stair default ""
  }

  if (stair.length <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  steps(n, row, stair);
}
module.exports = steps;
