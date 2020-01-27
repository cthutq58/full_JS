'use strict';

/* a = 5; // "script.js:3 Uncaught ReferenceError: a is not defined"
console.log(a); */

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4 / 0);
console.log("ggg" * 9);

let something;
console.log(something);

let persone = {
  name: "John",
  age: 25,
  isMarried: false
};

console.log(persone.name);
console.log(persone["name"]);

let arr = ['1.jpg', '2.jpg', '3.jpg'];
console.log(arr[1]);

// alert("Hi!");
// console.log(confirm("What?"));
let answer = "Yes";
// answer = prompt("Have you been 18 years old?", answer);
console.log(answer); 

console.log(typeof(answer)); // "string"
console.log(typeof(arr)); // "object"
console.log(typeof(null)); // oficial JS-language error : "object"
console.log(typeof(undefined)); // "undefined"

console.log("arr" + " - object");
console.log(4 +  " - object");
console.log(4 +  +" - object");

let incr = 10, 
    decr = 10;

incr++;
decr--;

console.log(++incr);
console.log(incr);
console.log(incr++);
console.log(incr);
console.log(--decr);
console.log(decr);
console.log(decr--);
console.log(decr);

console.log(5%2);
console.log();
console.log();
console.log();
console.log();
console.log();





