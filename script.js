"use strict";

/*
========================================================
 COMPLETE JAVASCRIPT SCRIPT (BEGINNER → ADVANCED)
 Theory + Code in ONE FILE
========================================================
*/

/* ======================================================
  1. JAVASCRIPT INTRO
====================================================== */
// JavaScript ek programming language hai
// Jo websites ko interactive banati hai
// Browser ke andar run hoti hai

console.log("JavaScript Started");

/* ======================================================
  2. ECMASCRIPT
====================================================== */
// ECMAScript rules define karta hai
// JavaScript un rules ko follow karti hai

let esVersion = "ES6";
const releaseYear = 2015;
console.log(esVersion, releaseYear);

/* ======================================================
  3. VARIABLES
====================================================== */
// var → old (function scoped)
// let → block scoped
// const → block scoped + fixed reference

var a = 10;
let b = 20;
const c = 30;

console.log(a, b, c);

/* ======================================================
  4. DATA TYPES
====================================================== */
let str = "Aman";      // String
let num = 25;          // Number
let bool = true;       // Boolean
let undef;             // Undefined
let nul = null;        // Null
let big = 10n;         // BigInt
let sym = Symbol("id");// Symbol

console.log(typeof str, typeof num, typeof bool);
console.log(typeof undef, nul);

/* ======================================================
  5. STRING METHODS
====================================================== */
let name = "  javascript  ";

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());
console.log(name.slice(0, 4));

/* ======================================================
  6. TEMPLATE STRING
====================================================== */
let user = "Aman";
let age = 21;
console.log(`My name is ${user} and age is ${age}`);

/* ======================================================
  7. OPERATORS
====================================================== */
console.log(5 + 5);
console.log(10 - 5);
console.log(5 * 2);
console.log(10 / 2);
console.log(10 % 3);

/* ======================================================
  8. COMPARISON
====================================================== */
console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 != 6);
console.log(5 > 3);

/* ======================================================
  9. LOGICAL OPERATORS
====================================================== */
console.log(true && false);
console.log(true || false);
console.log(!true);

/* ======================================================
  10. IF ELSE
====================================================== */
let number = 7;

if (number % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

/* ======================================================
  11. SWITCH
====================================================== */
let day = 2;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Invalid");
}

/* ======================================================
  12. LOOPS
====================================================== */
for (let i = 1; i <= 3; i++) {
  console.log("For loop", i);
}

let j = 1;
while (j <= 3) {
  console.log("While loop", j);
  j++;
}

/* ======================================================
  13. ARRAYS
====================================================== */
let arr = [1, 2, 3, 4, 5];

console.log(arr[0]);
arr.push(6);
arr.pop();
arr.shift();
arr.unshift(0);

/* ======================================================
  14. ARRAY METHODS
====================================================== */
arr.forEach((x) => console.log(x));

let doubled = arr.map((x) => x * 2);
console.log(doubled);

let filtered = arr.filter((x) => x > 2);
console.log(filtered);

let sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

/* ======================================================
  15. OBJECTS
====================================================== */
let student = {
  name: "Aman",
  age: 21,
  skills: ["JS", "C++"],
};

console.log(student.name);
console.log(student.skills[0]);

/* ======================================================
  16. OBJECT METHODS
====================================================== */
let person = {
  firstName: "Aman",
  greet: function () {
    console.log("Hello", this.firstName);
  },
};

person.greet();

/* ======================================================
  17. FUNCTIONS
====================================================== */
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

/* ======================================================
  18. ARROW FUNCTION
====================================================== */
const multiply = (a, b) => a * b;
console.log(multiply(2, 4));

/* ======================================================
  19. HOISTING
====================================================== */
// Variable hoisting (var)
console.log(x);
var x = 10;

// let / const hoist hote hain but TDZ me rehte hain

/* ======================================================
  20. SCOPE
====================================================== */
let globalVar = "Global";

function testScope() {
  let localVar = "Local";
  console.log(globalVar);
}
testScope();

/* ======================================================
  21. CLOSURE
====================================================== */
function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}

let counter = outer();
counter();
counter();

/* ======================================================
  22. CALLBACK
====================================================== */
function fetchData(callback) {
  console.log("Fetching...");
  callback();
}

fetchData(() => console.log("Done"));

/* ======================================================
  23. PROMISE
====================================================== */
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) resolve("Success");
  else reject("Error");
});

promise
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

/* ======================================================
  24. ASYNC / AWAIT
====================================================== */
async function asyncFunc() {
  return "Async Result";
}

asyncFunc().then((res) => console.log(res));

/* ======================================================
  25. setTimeout & setInterval
====================================================== */
setTimeout(() => {
  console.log("Timeout executed");
}, 1000);

let interval = setInterval(() => {
  console.log("Interval running");
  clearInterval(interval);
}, 2000);

/* ======================================================
  26. EVENT LOOP (NOTE)
====================================================== */
// JS is single-threaded
// Call Stack
// Web APIs
// Callback Queue
// Microtask Queue
// Event Loop decides execution

/* ======================================================
  27. DOM (BASIC)
====================================================== */
// document.querySelector()
// addEventListener()

/*
document.querySelector("button").addEventListener("click", () => {
  console.log("Button clicked");
});
*/

/* ======================================================
  END OF COMPLETE JAVASCRIPT SCRIPT
====================================================== */
