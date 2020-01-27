"use strict";

/* let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

console.log(options.name);

options.bool = false;

options.colors = {
    border: "black",
    bg: "red"
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Property '" + key + "' has value: " + options[key]);
}
console.log(Object.keys(options).length); */

// let arr = [1, 2, 4, 3, 5];
/* console.log(arr.pop());
console.log(arr);
console.log(arr.push('5'));
console.log(arr);
console.log(arr.shift());
console.log(arr);
console.log(arr.unshift('1'));
console.log(arr); */
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr[99] = 99;
// console.log(arr); // [ 1, 2, 4, 3, 5, <94 empty items>, 99 ]
/* let arr = ["first", 2, 4, "fourth", 5];
arr.forEach((item, i, mass) => 
    console.log(i + ": " + item + " (arr: [" + mass + "])"));

console.log(arr);

let mass = [1,3,5,7,9];
for (const key in mass) {
    console.log(key);
}
console.log(mass);
for (const key of mass) {
    console.log(key);
} */

/* console.log(options);
for (const key in options) {
    console.log(key);
}
for (const key of options) { //TypeError: options is not iterable
    console.log(key);
} */

/* let ans = prompt(", "),
    arr = [];

arr = ans.split(",");
console.log(arr); */

/* let arr = ["wew", "reter", "df", "g"];

console.log(arr);           // [ 'wew', 'reter', 'df', 'g' ]
console.log(arr.join(",")); // wew,reter,df,g
console.log(arr);           // [ 'wew', 'reter', 'df', 'g' ]
console.log(arr.sort());    // [ 'df', 'g', 'reter', 'wew' ]
console.log(arr);           //  [ 'df', 'g', 'reter', 'wew' ] */

let arr = [1, 15, 4, 25, 9, 100];

console.log(arr.sort()); // [ 1, 100, 15, 25, 4, 9 ]
console.log(arr);        //  [ 1, 100, 15, 25, 4, 9 ]

console.log(arr.sort((a, b) => a - b)); // [ 1, 4, 9, 15, 25, 100 ]
console.log(arr);                       // [ 1, 4, 9, 15, 25, 100 ]

let soldier = {
    health: 400,
    armor: 200
};

let sldJohn = {
    health: 100
};

sldJohn.__proto__ = soldier;

console.log(sldJohn);
console.log(sldJohn.armor);