/*
==========================================================
05. Strings & Numbers in JavaScript
File Name : 05_strings_numbers.js
Level     : Beginner
==========================================================

Strings and Numbers are PRIMITIVE data types in JavaScript.

----------------------------------------------------------
Topics Covered:
1. Strings
2. String Methods
3. Template Literals
4. Numbers
5. Number Methods
==========================================================
*/

// ==========================================================
// 1. STRINGS – BASICS
// ==========================================================

/*
String:
- Collection of characters
- Immutable (cannot be changed directly)
*/

let str1 = "JavaScript";
let str2 = "Programming";

console.log(str1);
console.log(str2);

// Length of string
console.log("Length:", str1.length);

// Access characters
console.log("First char:", str1[0]);
console.log("Last char:", str1[str1.length - 1]);

// ==========================================================
// 2. STRING METHODS
// ==========================================================

let text = "  Hello JavaScript World  ";

console.log("\n--- String Methods ---");

// toUpperCase()
console.log("toUpperCase:", text.toUpperCase());

// toLowerCase()
console.log("toLowerCase:", text.toLowerCase());

// trim()
console.log("trim:", text.trim());

// trimStart()
console.log("trimStart:", text.trimStart());

// trimEnd()
console.log("trimEnd:", text.trimEnd());

// includes()
console.log("includes 'JavaScript':", text.includes("JavaScript"));

// indexOf()
console.log("indexOf 'World':", text.indexOf("World"));

// slice(start, end)
console.log("slice:", text.slice(2, 7));

// substring(start, end)
console.log("substring:", text.substring(2, 7));

// replace()
console.log("replace:", text.replace("JavaScript", "JS"));

// replaceAll()
console.log("replaceAll:", text.replaceAll(" ", "-"));

// split()
let words = text.trim().split(" ");
console.log("split:", words);

// charAt()
console.log("charAt(1):", text.charAt(1));

// startsWith()
console.log("startsWith '  Hello':", text.startsWith("  Hello"));

// endsWith()
console.log("endsWith 'World  ':", text.endsWith("World  "));

// ==========================================================
// 3. TEMPLATE LITERALS
// ==========================================================

/*
Template Literals:
- Use backticks (` `)
- Allow variable interpolation
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
Name   : ${name}
Age    : ${age}
Course : B.Tech
`;

console.log(multiLine);

// ==========================================================
// 4. NUMBERS – BASICS
// ==========================================================

/*
Numbers:
- Integer
- Floating point
*/

let num1 = 100;
let num2 = 10.567;

console.log("num1:", num1);
console.log("num2:", num2);

// Arithmetic operations
console.log("Add:", num1 + num2);
console.log("Subtract:", num1 - num2);
console.log("Multiply:", num1 * num2);
console.log("Divide:", num1 / num2);

// ==========================================================
// 5. NUMBER METHODS
// ==========================================================

console.log("\n--- Number Methods ---");

// toFixed()
console.log("toFixed(2):", num2.toFixed(2)); // string

// parseInt()
let n1 = "50px";
console.log("parseInt:", parseInt(n1));

// parseFloat()
let n2 = "12.75";
console.log("parseFloat:", parseFloat(n2));

// isNaN()
console.log("isNaN('abc'):", isNaN("abc"));
console.log("isNaN(10):", isNaN(10));

// Number.isInteger()
console.log("isInteger(10):", Number.isInteger(10));
console.log("isInteger(10.5):", Number.isInteger(10.5));

// Number.MAX_VALUE
console.log("MAX_VALUE:", Number.MAX_VALUE);

// Number.MIN_VALUE
console.log("MIN_VALUE:", Number.MIN_VALUE);

// ==========================================================
// 6. MATH METHODS
// ==========================================================

console.log("\n--- Math Methods ---");

console.log("Math.round:", Math.round(10.6));
console.log("Math.floor:", Math.floor(10.9));
console.log("Math.ceil:", Math.ceil(10.1));
console.log("Math.random (1–10):", Math.floor(Math.random() * 10) + 1);

/*
==========================================================
SUMMARY
==========================================================

Strings:
- Primitive
- Immutable

String Methods:
- toUpperCase(), toLowerCase()
- trim(), includes(), indexOf()
- slice(), substring()
- replace(), replaceAll()
- split(), charAt()

Template Literals:
- Backticks (` `)
- ${variable} interpolation

Numbers:
- Primitive

Number Methods:
- toFixed()
- parseInt(), parseFloat()
- isNaN(), Number.isInteger()
- Math methods

==========================================================
END OF CHAPTER 05
==========================================================
*/
