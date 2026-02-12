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

//Array Methods
// let arr = [1, 2, 3, 4, 5];

// arr.forEach((num) => {
//   console.log(num * 5);
// });

// let arr = [1, 2, 3, 4, 5];

// let result = arr.map(function (number) {
//   return number * 2;
// });

// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// const result = arr.filter((num) => {
//   return num % 2 === 0;
// });

// console.log(result);

// let arr = [10, 20, 30, 40, 50, 60, 80, 100];
// const result = arr.reduce((accumlator, currentValue) => {
//   return accumlator + currentValue;
// }, 0);
// console.log(`Sum of all numbers present in the array : ${result}`);

const userCart = [
  { productId: 1, ProductName: "Mobiile", Price: 12000 },
  { productId: 2, ProductName: "Laptop", Price: 120000 },
  { productId: 3, ProductName: "Charger", Price: 2000 },
];

const totalAmount = userCart.reduce((total, currentProduct) => {
  return total + currentProduct.Price;
}, 0);

console.log(
  `Total Amount of products present in the user's cart is ${totalAmount} rupees.`,
);
