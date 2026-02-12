// /**
//  * ==========================================================
//  * JavaScript Basics – Complete Detailed File
//  * File Name : 01_javascript_basics.js
//  * Level     : Beginner
//  * ==========================================================
//  *
//  * Topics Covered:
//  * 1. Variables (var, let, const)
//  * 2. Data Types
//  *    - Primitive
//  *    - Non-Primitive
//  * 3. Operators
//  * 4. Input & Output
//  */

// /* ==========================================================
//    1. VARIABLES
// ========================================================== */

// /**
//  * Variable: container to store data
//  */

// // var (old way)
// var userName = "Aman";
// var userName = "Rahul"; // re-declare allowed
// userName = "Patel"; // re-assign allowed
// console.log("var userName:", userName);

// // let (modern way)
// let age = 22;
// age = 23; // re-assign allowed
// console.log("let age:", age);

// // const (fixed value)
// const COUNTRY = "India";
// console.log("const COUNTRY:", COUNTRY);

// /* ==========================================================
//    2. DATA TYPES
// ========================================================== */

// /**
//  * JavaScript has two main categories:
//  * 1. Primitive Data Types
//  * 2. Non-Primitive Data Types
//  */

// /* ----------------------------------------------------------
//    2.1 PRIMITIVE DATA TYPES
// ---------------------------------------------------------- */

// // Number
// let marks = 85;
// let price = 99.5;

// // String
// let firstName = "Aman";

// // Boolean
// let isLoggedIn = true;

// // Undefined
// let result;

// // Null
// let emptyValue = null;

// console.log("\n--- Primitive Data Types ---");
// console.log(marks, typeof marks);
// console.log(price, typeof price);
// console.log(firstName, typeof firstName);
// console.log(isLoggedIn, typeof isLoggedIn);
// console.log(result, typeof result);
// console.log(emptyValue, typeof emptyValue); // object (JS bug)

// /* ----------------------------------------------------------
//    2.2 NON-PRIMITIVE DATA TYPES
// ---------------------------------------------------------- */

// /**
//  * Non-Primitive Data Types:
//  * - Store data by reference
//  * - Mutable (changeable)
//  * - Can store multiple values
//  *
//  * Types:
//  * - Object
//  * - Array
//  * - Function
//  */

// /* --------------------
//    OBJECT
// -------------------- */

// let student = {
//   name: "Aman",
//   age: 22,
//   course: "B.Tech",
//   isActive: true,
// };

// console.log("\n--- Object ---");
// console.log(student);

// // Accessing object values
// console.log(student.name); // Dot notation
// console.log(student["course"]); // Bracket notation

// // Modifying object
// student.age = 23;
// student.city = "Indore"; // Add new property

// console.log("Updated Object:", student);

// /* --------------------
//    ARRAY
// -------------------- */

// /**
//  * Array:
//  * - Ordered collection
//  * - Index starts from 0
//  */

// let numbers = [10, 20, 30, 40];
// let mixedArray = ["Aman", 22, true, null];

// console.log("\n--- Array ---");
// console.log(numbers);
// console.log(mixedArray);

// // Accessing array
// console.log(numbers[0]); // first element

// // Modifying array
// numbers.push(50); // add at end
// numbers.pop(); // remove last

// console.log("Updated Array:", numbers);
// console.log("Array Length:", numbers.length);

// /* --------------------
//    FUNCTION
// -------------------- */

// /**
//  * Function:
//  * - Reusable block of code
//  * - Executes when called
//  */

// function greet(name) {
//   return "Hello " + name;
// }

// console.log("\n--- Function ---");
// console.log(greet("Aman"));
// console.log(greet("Rahul"));

// /* --------------------
//    REFERENCE BEHAVIOR
// -------------------- */

// /**
//  * Non-Primitive data types are copied by reference
//  */

// let arr1 = [1, 2, 3];
// let arr2 = arr1; // reference copy

// arr2.push(4);

// console.log("\n--- Reference Behavior ---");
// console.log("arr1:", arr1);
// console.log("arr2:", arr2);

// /* ==========================================================
//    3. OPERATORS
// ========================================================== */

// // Arithmetic Operators
// let a = 10;
// let b = 3;

// console.log("\n--- Arithmetic Operators ---");
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);

// // Assignment Operators
// let x = 5;
// x += 2;
// x *= 3;
// console.log("Assignment Result:", x);

// // Comparison Operators
// console.log("\n--- Comparison Operators ---");
// console.log(a == "10"); // true
// console.log(a === "10"); // false
// console.log(a > b);
// console.log(a <= b);

// // Logical Operators
// console.log("\n--- Logical Operators ---");
// console.log(a > b && b < 10);
// console.log(a < b || b < 10);
// console.log(!false);

// /* ==========================================================
//    4. INPUT & OUTPUT
// ========================================================== */

// // Output
// console.log("\nWelcome to JavaScript Basics");

// // Input (Browser only)
// let user = prompt("Enter your name:");
// let userAge = Number(prompt("Enter your age"));

// console.log("User Name:", user);
// console.log("User Age:", userAge);

// // Example: Sum
// let num1 = Number(prompt("Enter first number"));
// let num2 = Number(prompt("Enter second number"));

// let sum = num1 + num2;
// console.log("Sum =", sum);

/*
====================================================
03. Functions in JavaScript
====================================================

A function is a block of code that performs
a specific task and can be reused.

----------------------------------------------------
Topics Covered:
1. Function Declaration
2. Function Expression
3. Arrow Function
4. Scope (Global & Local)
====================================================
*/

// ==================================================
// 1. Function Declaration
// ==================================================

/*
- Defined using the `function` keyword
- Can be called BEFORE it is defined (Hoisting)
*/

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Aman"));

// ==================================================
// 2. Function Expression
// ==================================================

/*
- Function stored inside a variable
- NOT hoisted (must be defined before use)
*/

const add = function (a, b) {
  return a + b;
};

console.log("Sum:", add(10, 20));

// ==================================================
// 3. Arrow Functions (ES6)
// ==================================================

/*
- Shorter syntax
- No `this` binding of its own
- Mostly used in callbacks and modern JavaScript
*/

// Normal arrow function
const multiply = (a, b) => {
  return a * b;
};

console.log("Multiply:", multiply(5, 4));

// Single line arrow function
const square = (num) => num * num;

console.log("Square:", square(6));

// ==================================================
// 4. Scope in JavaScript
// ==================================================

/*
Scope means where a variable can be accessed.

Types:
1. Global Scope
2. Local Scope (Function Scope)
*/

// Global Scope
let globalVar = "I am Global";

function showGlobal() {
  console.log(globalVar);
}

showGlobal();
console.log(globalVar);

// Local Scope
function localExample() {
  let localVar = "I am Local";
  console.log(localVar);
}

localExample();
// console.log(localVar); // Error: localVar is not defined

// ==================================================
// Example: Global vs Local
// ==================================================

let x = 10;

function testScope() {
  let x = 20;
  console.log("Inside Function:", x);
}

testScope();
console.log("Outside Function:", x);

/*
====================================================
SUMMARY
====================================================

Function Declaration:
- Hoisted
- Uses function keyword

Function Expression:
- Stored in variable
- Not hoisted

Arrow Function:
- Short syntax
- Modern JavaScript
- No own `this`

Scope:
- Global: accessible everywhere
- Local: accessible inside function only
====================================================
*/

/*
====================================================
04. Arrays & Objects in JavaScript (IN FULL DETAIL)
====================================================

Arrays and Objects are NON-PRIMITIVE data types.
They store multiple values and are reference types.

----------------------------------------------------
Topics Covered:
1. Arrays (Basics)
2. Array Methods (Mutating & Non-Mutating)
3. Objects (Basics)
4. Object Methods
5. Array of Objects (Real-world use)
====================================================
*/

// ==================================================
// 1. ARRAYS – BASICS
// ==================================================

/*
An array is a collection of values stored
in a single variable.

- Index based (starts from 0)
- Can store multiple data types
*/

let arr = [10, 20, 30, 40, 50];

console.log("Array:", arr);
console.log("First Element:", arr[0]);
console.log("Last Element:", arr[arr.length - 1]);

// Arrays can store mixed data types
let mixedArray = [10, "Aman", true, null, undefined];
console.log("Mixed Array:", mixedArray);

// Change array value
arr[1] = 25;
console.log("Updated Array:", arr);

// Array length
console.log("Array Length:", arr.length);

/*
====================================================
JavaScript Array Methods
====================================================

Array methods are of two types:

1️⃣ Mutating Array Methods
→ These methods CHANGE the original array.

2️⃣ Non-Mutating Array Methods
→ These methods DO NOT change the original array.
   They return a new array or value.

----------------------------------------------------
*/

// ==================================================
// 1️⃣ MUTATING ARRAY METHODS (Original array changes)
// ==================================================

console.log("====== MUTATING METHODS ======");

let arr1 = [10, 20, 30, 40];
console.log("Original Array:", arr1);

// push() → add element at end
arr1.push(50);
console.log("After push():", arr1);

// pop() → remove last element
arr1.pop();
console.log("After pop():", arr1);

// unshift() → add element at start
arr1.unshift(5);
console.log("After unshift():", arr1);

// shift() → remove first element
arr1.shift();
console.log("After shift():", arr1);

// splice() → add/remove elements
// splice(startIndex, deleteCount, itemsToAdd)
arr1.splice(1, 1, 25);
console.log("After splice():", arr1);

// sort() → sort array (mutates original)
let arr2 = [40, 10, 80, 20];
arr2.sort();
console.log("After sort():", arr2);

// reverse() → reverse array
arr2.reverse();
console.log("After reverse():", arr2);

// ==================================================
// 2️⃣ NON-MUTATING ARRAY METHODS (Original array safe)
// ==================================================

console.log("\n====== NON-MUTATING METHODS ======");

let arr3 = [10, 20, 30, 40];
console.log("Original Array:", arr3);

// map() → transform each element
let mapResult = arr3.map((num) => num * 2);
console.log("map() Result:", mapResult);

// filter() → filter elements
let filterResult = arr3.filter((num) => num > 20);
console.log("filter() Result:", filterResult);

// reduce() → reduce array to single value
let reduceResult = arr3.reduce((sum, num) => sum + num, 0);
console.log("reduce() Result:", reduceResult);

// slice() → extract part of array
let sliceResult = arr3.slice(1, 3);
console.log("slice() Result:", sliceResult);

// concat() → merge arrays
let arr4 = [50, 60];
let concatResult = arr3.concat(arr4);
console.log("concat() Result:", concatResult);

// includes() → check value exists
console.log("includes(20):", arr3.includes(20));

// indexOf() → index of element
console.log("indexOf(30):", arr3.indexOf(30));

// join() → convert array to string
let joinResult = arr3.join(" - ");
console.log("join() Result:", joinResult);

/*
Mutating Methods:
- push()
- pop()
- shift()
- unshift()
- splice()
- sort()
- reverse()

Non-Mutating Methods:
- map()
- filter()
- reduce()
- slice()
- concat()
- includes()
- indexOf()
- join()
*/

// ==================================================
// 3. OBJECTS – BASICS
// ==================================================

/*
An object stores data in key-value pairs.
Keys are strings, values can be anything.
*/

let student = {
  name: "Aman",
  age: 22,
  course: "BCA",
  isActive: true,
};

console.log("Student Object:", student);

// Access properties
console.log("Name:", student.name);
console.log("Course:", student["course"]);

// Update property
student.age = 23;
console.log("Updated Age:", student.age);

// Add new property
student.city = "Indore";
console.log("After Adding City:", student);

// Delete property
delete student.isActive;
console.log("After Delete:", student);

// ==================================================
// 4. OBJECT METHODS
// ==================================================

/*
Object methods help us work with
keys and values of objects.
*/

// Object.keys() – returns keys
console.log("Object.keys():", Object.keys(student));

// Object.values() – returns values
console.log("Object.values():", Object.values(student));

// Object.entries() – returns key-value pairs
console.log("Object.entries():", Object.entries(student));

// hasOwnProperty() – check property exists
console.log("Has 'name' property:", student.hasOwnProperty("name"));

// ==================================================
// 5. ARRAY OF OBJECTS (REAL-WORLD EXAMPLE)
// ==================================================

/*
Used in:
- User lists
- Products
- API responses
*/

let users = [
  { id: 1, name: "Rahul", age: 21 },
  { id: 2, name: "Sneha", age: 23 },
  { id: 3, name: "Amit", age: 20 },
];

// Get all names
let names = users.map((user) => user.name);
console.log("User Names:", names);

// Filter users by age
let adults = users.filter((user) => user.age >= 21);
console.log("Adult Users:", adults);

// Find user by id
let userFound = users.find((user) => user.id === 2);
console.log("User Found:", userFound);

// ==================================================
// IMPORTANT CONCEPTS
// ==================================================

/*
Arrays and Objects are reference types.

If copied directly, both variables
point to the same memory.
*/

let a = [1, 2, 3];
let b = a;

b.push(4);
console.log("a:", a);
console.log("b:", b);

/*
====================================================
SUMMARY
====================================================

Arrays:
- Ordered
- Index based
- Can store multiple data types

Mutating Array Methods:
- push(), pop(), shift(), unshift()
- splice(), sort(), reverse()

Non-Mutating Array Methods:
- map(), filter(), reduce()
- slice(), concat(), includes()

Objects:
- Key-value pairs
- Represent real-world data

Object Methods:
- Object.keys()
- Object.values()
- Object.entries()
- hasOwnProperty()

Array of Objects:
- Used in real applications and APIs
====================================================
*/

/*
====================================================
05. Strings & Numbers in JavaScript
====================================================

Strings and Numbers are PRIMITIVE data types.

----------------------------------------------------
Topics Covered:
1. Strings
2. String Methods
3. Template Literals
4. Numbers
5. Number Methods
====================================================
*/

// ==================================================
// 1. STRINGS – BASICS
// ==================================================

/*
A string is a sequence of characters.
It can be written using:
- Single quotes ('')
- Double quotes ("")
- Backticks (``)
*/

let str1 = "JavaScript";
let str2 = "Programming";

console.log(str1);
console.log(str2);

// String length
console.log("Length:", str1.length);

// Access characters
console.log("First character:", str1[0]);
console.log("Last character:", str1[str1.length - 1]);

// ==================================================
// 2. STRING METHODS
// ==================================================

let text = "  Hello JavaScript World  ";

// toUpperCase()
console.log("toUpperCase():", text.toUpperCase());

// toLowerCase()
console.log("toLowerCase():", text.toLowerCase());

// trim() – remove spaces from start and end
console.log("trim():", text.trim());

// trimStart()
console.log("trimStart():", text.trimStart());

// trimEnd()
console.log("trimEnd():", text.trimEnd());

// includes() – check substring exists
console.log("includes('JavaScript'):", text.includes("JavaScript"));

// indexOf()
console.log("indexOf('JavaScript'):", text.indexOf("JavaScript"));

// slice(start, end)
console.log("slice():", text.slice(2, 7));

// substring(start, end)
console.log("substring():", text.substring(2, 7));

// replace()
console.log("replace():", text.replace("JavaScript", "JS"));

// replaceAll()
console.log("replaceAll():", text.replaceAll(" ", "-"));

// split() – convert string to array
let words = text.trim().split(" ");
console.log("split():", words);

// charAt()
console.log("charAt(1):", text.charAt(2));

// startsWith()
console.log("startsWith('  Hello'):", text.startsWith("  Hello"));

// endsWith()
console.log("endsWith('World  '):", text.endsWith("World  "));

// ==================================================
// 3. TEMPLATE LITERALS
// ==================================================

/*
Template literals use backticks (`).
They allow:
- Variable interpolation
- Multi-line strings
*/

let name = "Aman";
let age = 22;

// Old way
let msg1 = "My name is " + name + " and I am " + age + " years old.";
console.log(msg1);

// Template literal
let msg2 = `My name is ${name} and I am ${age} years old.`;
console.log(msg2);

// Multi-line string
let multiLine = `
Name: ${name}
Age: ${age}
Course: BCA
`;

console.log(multiLine);

// ==================================================
// 4. NUMBERS – BASICS
// ==================================================

/*
Numbers can be:
- Integer
- Float
*/

let num1 = 100;
let num2 = 10.567;

console.log("num1:", num1);
console.log("num2:", num2);

// Arithmetic operations
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// ==================================================
// 5. NUMBER METHODS
// ==================================================

// toFixed() – round to fixed decimals (returns string)
console.log("toFixed(2):", num2.toFixed(2));

// parseInt() – convert to integer
let n1 = "50px";
console.log("parseInt():", parseInt(n1));

// parseFloat() – convert to float
let n2 = "12.75";
console.log("parseFloat():", parseFloat(n2));

// isNaN() – check Not-a-Number
console.log("isNaN('abc'):", isNaN("abc"));
console.log("isNaN(10):", isNaN(10));

// Number.isInteger()
console.log("isInteger(10):", Number.isInteger(10));
console.log("isInteger(10.5):", Number.isInteger(10.5));

// Number.MAX_VALUE
console.log("MAX_VALUE:", Number.MAX_VALUE);

// Number.MIN_VALUE
console.log("MIN_VALUE:", Number.MIN_VALUE);

// Math methods
console.log("Math.round():", Math.round(10.6));
console.log("Math.floor():", Math.floor(10.9));
console.log("Math.ceil():", Math.ceil(10.1));
console.log("Math.random():", Math.floor(Math.random(10) * 10) + 1);

/*
====================================================
SUMMARY
====================================================

Strings:
- Primitive data type
- Immutable

String Methods:
- toUpperCase(), toLowerCase()
- trim(), includes(), indexOf()
- slice(), substring()
- replace(), replaceAll()
- split(), charAt()
- startsWith(), endsWith()

Template Literals:
- Use backticks
- Variable interpolation using ${}

Numbers:
- Primitive data type

Number Methods:
- toFixed()
- parseInt(), parseFloat()
- isNaN(), Number.isInteger()
- Math methods
====================================================
*/
