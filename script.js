"use strict";

/*
====================================================================
 JAVASCRIPT FULL COURSE
 Beginner → Advanced → Interview Ready
 Theory + Code in ONE JS FILE
====================================================================
*/

/* ******************************************************************
  SECTION 1: INTRODUCTION TO JAVASCRIPT
******************************************************************* */

/*
JavaScript is a programming language used to make web pages interactive.

HTML  -> Structure
CSS   -> Styling
JS    -> Logic / Behavior

JavaScript is:
- Lightweight
- Interpreted
- Dynamically typed
- Single-threaded
- Event-driven

JavaScript runs:
- In Browser (Frontend)
- On Server (Node.js)
*/

console.log("JavaScript Full Course Started");

/* ******************************************************************
  SECTION 2: ECMASCRIPT
******************************************************************* */

/*
ECMAScript is a STANDARD.
JavaScript is an IMPLEMENTATION.

ECMAScript defines:
- syntax
- rules
- features

ES6 (2015) was a major update:
- let, const
- arrow functions
- promises
*/

let standard = "ECMAScript";
const version = "ES6";
console.log(standard, version);

/* ******************************************************************
  SECTION 3: VARIABLES
******************************************************************* */

/*
Variables store data.

var:
- function scoped
- can redeclare
- causes bugs (avoid)

let:
- block scoped
- value can change

const:
- block scoped
- cannot reassign reference
*/

var x = 10;
let y = 20;
const z = 30;

console.log(x, y, z);

/* ******************************************************************
  SECTION 4: DATA TYPES
******************************************************************* */

/*
JavaScript is dynamically typed.

Primitive Types:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol

Non-Primitive:
- Object
- Array
- Function
*/

let str = "Aman";
let num = 25;
let bool = true;
let undef;
let nul = null;

console.log(typeof str, typeof num, typeof bool);
console.log(undef, nul);

/* ******************************************************************
  SECTION 5: UNDEFINED vs NULL
******************************************************************* */

/*
undefined:
- variable declared but value not assigned

null:
- intentional empty value
*/

let a;
let b = null;

/* ******************************************************************
  SECTION 6: OPERATORS
******************************************************************* */

/*
Arithmetic: + - * / %
Comparison: == === != !== > <
Logical: && || !
*/

console.log(5 + 5);
console.log(5 === "5"); // false

/* ******************************************************************
  SECTION 7: STRINGS
******************************************************************* */

/*
Strings are immutable (cannot change original string)
*/

let language = "  JavaScript  ";

console.log(language.trim());
console.log(language.toUpperCase());
console.log(language.slice(0, 4));

/* ******************************************************************
  SECTION 8: TEMPLATE LITERALS
******************************************************************* */

/*
Use backticks ``
Allows variable embedding
*/

let name = "Aman";
let age = 21;
console.log(`My name is ${name} and age is ${age}`);

/* ******************************************************************
  SECTION 9: CONDITIONAL STATEMENTS
******************************************************************* */

/*
if-else -> decision making
switch  -> fixed values
*/

let number = 10;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/* ******************************************************************
  SECTION 10: LOOPS
******************************************************************* */

/*
Loops repeat code
*/

for (let i = 1; i <= 3; i++) {
  console.log("Loop", i);
}

/* ******************************************************************
  SECTION 11: ARRAYS
******************************************************************* */

/*
Array = ordered collection
Reference type
*/

let arr = [1, 2, 3, 4];

arr.push(5);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

/* ******************************************************************
  SECTION 12: ARRAY METHODS (VERY IMPORTANT)
******************************************************************* */

/*
forEach -> iterate
map     -> transform
filter  -> condition
reduce  -> single value
*/

arr.forEach((x) => console.log(x));

let squared = arr.map((x) => x * x);
let filtered = arr.filter((x) => x > 1);
let sum = arr.reduce((acc, cur) => acc + cur, 0);

console.log(squared, filtered, sum);

/* ******************************************************************
  SECTION 13: OBJECTS
******************************************************************* */

/*
Objects store data in key-value pairs
*/

let student = {
  name: "Aman",
  age: 21,
  skills: ["JS", "C++"],
};

console.log(student.name);

/* ******************************************************************
  SECTION 14: FUNCTIONS
******************************************************************* */

/*
Functions are reusable blocks of code
*/

function add(a, b) {
  return a + b;
}

console.log(add(2, 3));

/* ******************************************************************
  SECTION 15: ARROW FUNCTIONS
******************************************************************* */

/*
Arrow functions are shorter
No own 'this'
*/

const multiply = (a, b) => a * b;
console.log(multiply(2, 4));

/* ******************************************************************
  SECTION 16: SCOPE
******************************************************************* */

/*
Global Scope
Function Scope
Block Scope
*/

let globalVar = "Global";

function testScope() {
  let localVar = "Local";
  console.log(globalVar);
}
testScope();

/* ******************************************************************
  SECTION 17: HOISTING
******************************************************************* */

/*
var -> hoisted with undefined
let/const -> hoisted but in TDZ
*/

console.log(h);
var h = 10;

/* ******************************************************************
  SECTION 18: CLOSURE (INTERVIEW FAVORITE)
******************************************************************* */

/*
Closure = function remembers outer variables
*/

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter();
counter();

/* ******************************************************************
  SECTION 19: CALLBACK FUNCTIONS
******************************************************************* */

/*
Callback = function passed as argument
*/

function loadData(callback) {
  console.log("Loading...");
  callback();
}

loadData(() => console.log("Done"));

/* ******************************************************************
  SECTION 20: PROMISES
******************************************************************* */

/*
Promise states:
- pending
- fulfilled
- rejected
*/

let promise = new Promise((resolve, reject) => {
  resolve("Promise resolved");
});

promise.then(console.log);

/* ******************************************************************
  SECTION 21: ASYNC / AWAIT
******************************************************************* */

/*
Async/Await makes async code readable
*/

async function getData() {
  return "Async Data";
}

getData().then(console.log);

/* ******************************************************************
  SECTION 22: EVENT LOOP (INTERVIEW GOLD)
******************************************************************* */

/*
JavaScript is single-threaded.

Components:
- Call Stack
- Web APIs
- Callback Queue
- Microtask Queue
- Event Loop

Promise callbacks go to Microtask Queue
setTimeout goes to Callback Queue
*/

/* ******************************************************************
  SECTION 23: DOM (BROWSER JS)
******************************************************************* */

/*
DOM allows JS to interact with HTML
*/

/*
document.querySelector("button")
  .addEventListener("click", () => {
    console.log("Button clicked");
  });
*/

/* ******************************************************************
  END OF JAVASCRIPT FULL COURSE
******************************************************************* */
