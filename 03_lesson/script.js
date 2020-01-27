"use strict";

// let num = 20;

// function showFirstMessage(text) {
//   alert(text);
//   /* console.log(num); // Uncaught ReferenceError: Cannot access 'num' before initialization */
//   let num = 10;
//   console.log(num); // 10
// }

// showFirstMessage("Hello World!");
// console.log(num); // 20

// function calc(a, b) {
//   return a + b;
// }

// let calc = function (a, b) {
//   return a + b;
// };

let calc = (a, b) => a + b;

console.log(calc(3, 7));
console.log(calc(5, 8));

function retVal() {
  let num = 50;
  return num;
}

let anotherNum = retVal();
console.log(anotherNum);

let str = "Test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2";
console.log(Math.round(twelve));

twelve = "12.2px";
console.log(parseInt(twelve, 16));
console.log(parseFloat(twelve));


