console.log("Hello World !");

/* Data Types in JavaScript

1. Primitive Data Types
   - Number      → 10, 3.14
   - String      → "Hello", 'JS'
   - Undefined   → variable declared but no value
   - Null        → intentional empty value
   - Boolean     → true / false
   - Symbol      → unique identifier
   - BigInt      → very large integers

2. Non-Primitive (Reference) Data Types
   - Object      → { name: "Aman", age: 22 }
   - Array       → [1, 2, 3]
   - Function    → function greet() {}
*/

// variables_sum.js

/* 
JavaScript me variables data store karne ke liye use hote hain.
Types of declaring a variable:-
var   → old method, reassign ho sakta hai
let   → modern method, value change ho sakti hai
const → fixed value, change nahi hoti
*/

// ----- using var -----
var a = 10; // first number
var b = 20; // second number
var sum1 = a + b; // addition
console.log(sum1); // 30

// ----- using let -----
let x = 15; // first number
let y = 25; // second number
let sum2 = x + y;
console.log(sum2); // 40

// ----- using const -----
const p = 5; // first number
const q = 10; // second number
const sum3 = p + q;
console.log(sum3); // 15
