/*
==========================================================
03. Functions in JavaScript
File Name : 03_functions.js
Level     : Beginner
==========================================================

Function:
A function is a reusable block of code
that performs a specific task.

----------------------------------------------------------
Topics Covered:
1. Function Declaration
2. Function Expression
3. Arrow Functions
4. Scope (Global & Local)
==========================================================
*/

// ==========================================================
// 1. FUNCTION DECLARATION
// ==========================================================

/*
Function Declaration:
- Defined using function keyword
- Can be called before definition (hoisting)
*/

function greet(name) {
  return "Hello " + name;
}

console.log(greet("Aman"));
console.log(greet("Rahul"));

// Example: Addition function
function add(a, b) {
  return a + b;
}

console.log("Sum:", add(10, 20));

// ==========================================================
// 2. FUNCTION EXPRESSION
// ==========================================================

/*
Function Expression:
- Function stored in a variable
- Not hoisted
*/

const multiply = function (a, b) {
  return a * b;
};

console.log("Multiply:", multiply(5, 4));

// ==========================================================
// 3. ARROW FUNCTIONS
// ==========================================================

/*
Arrow Function:
- Shorter syntax
- Does not have its own 'this'
*/

// Basic arrow function
const square = (num) => {
  return num * num;
};

console.log("Square:", square(5));

// Short arrow function (implicit return)
const cube = (num) => num * num * num;

console.log("Cube:", cube(3));

// Arrow function with multiple parameters
const subtract = (a, b) => a - b;
console.log("Subtract:", subtract(10, 4));

// ==========================================================
// 4. PARAMETERS & ARGUMENTS
// ==========================================================

/*
Parameters:
- Variables used in function definition

Arguments:
- Values passed while calling function
*/

function welcome(user, city) {
  return "Welcome " + user + " from " + city;
}

console.log(welcome("Aman", "Indore"));

// Default Parameters
function greetUser(name = "Guest") {
  console.log("Hello", name);
}

greetUser("Aman");
greetUser(); // Guest

// ==========================================================
// 5. CALLBACK FUNCTIONS
// ==========================================================

/*
Callback:
A function passed as an argument
to another function
*/

function greetPerson(name, callback) {
  console.log("Hello " + name);

  if (typeof callback === "function") {
    callback();
  }
}

function afterGreeting() {
  console.log("Greeting completed");
}

greetPerson("Aman", afterGreeting);

// ==========================================================
// 6. RETURN STATEMENT
// ==========================================================

/*
return:
- Sends value back from function
- Stops execution
*/

function checkEven(num) {
  if (num % 2 === 0) {
    return "Even Number";
  }
  return "Odd Number";
}

console.log(checkEven(10));
console.log(checkEven(7));

// ==========================================================
// 7. SCOPE (GLOBAL & LOCAL)
// ==========================================================

/*
Scope:
Defines where a variable can be accessed
*/

// --------------------
// GLOBAL SCOPE
// --------------------

let globalVar = "I am Global";

function showGlobal() {
  console.log(globalVar);
}

showGlobal();

// --------------------
// LOCAL SCOPE
// --------------------

function showLocal() {
  let localVar = "I am Local";
  console.log(localVar);
}

showLocal();
// console.log(localVar); // Error

// --------------------
// BLOCK SCOPE
// --------------------

if (true) {
  let blockVar = "Block Scoped";
  const blockConst = "Also Block Scoped";
  console.log(blockVar, blockConst);
}

// ==========================================================
// PRACTICE EXAMPLES
// ==========================================================

// Example 1: Find largest number
function findMax(a, b) {
  return a > b ? a : b;
}

console.log("Max:", findMax(10, 20));

// Example 2: Factorial
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}

console.log("Factorial:", factorial(5));

/*
==========================================================
SUMMARY
==========================================================

Function Types:
- Function Declaration
- Function Expression
- Arrow Function

Concepts:
- Parameters & Arguments
- Default Parameters
- Callback Functions
- Return Statement

Scope:
- Global Scope
- Local Scope
- Block Scope

==========================================================
END OF CHAPTER 03
==========================================================
*/
