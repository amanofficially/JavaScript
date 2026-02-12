/*
==========================================================
02. Control Flow in JavaScript
File Name : 02_control_flow.js
Level     : Beginner
==========================================================

Control Flow decides:
- Which code will run
- When code will run
- How many times code will run

----------------------------------------------------------
Topics Covered:
1. if / else
2. else if
3. switch case
4. Loops
   - for
   - while
   - do-while
==========================================================
*/

// ==========================================================
// 1. IF STATEMENT
// ==========================================================

/*
if statement:
Runs code only if condition is TRUE
*/

let age = 20;

if (age >= 18) {
  console.log("You are eligible to vote");
}

// ==========================================================
// 2. IF - ELSE STATEMENT
// ==========================================================

/*
if-else:
One block runs if condition is true
Else block runs if condition is false
*/

let number = 7;

if (number % 2 === 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

// ==========================================================
// 3. ELSE IF STATEMENT
// ==========================================================

/*
else if:
Used when multiple conditions are checked
*/

let marks = 75;

if (marks >= 90) {
  console.log("Grade A");
} else if (marks >= 75) {
  console.log("Grade B");
} else if (marks >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}

// ==========================================================
// 4. SWITCH CASE
// ==========================================================

/*
switch:
Used when one variable is compared
with multiple fixed values
*/

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  default:
    console.log("Invalid Day");
}

// ==========================================================
// 5. LOOPS
// ==========================================================

/*
Loops are used to repeat code
*/

// ----------------------------------------------------------
// 5.1 FOR LOOP
// ----------------------------------------------------------

/*
for loop:
Used when number of iterations is known
*/

console.log("\n--- For Loop ---");

for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// Example: Sum of numbers
let sum = 0;

for (let i = 1; i <= 5; i++) {
  sum = sum + i;
}

console.log("Sum =", sum);

// ----------------------------------------------------------
// 5.2 WHILE LOOP
// ----------------------------------------------------------

/*
while loop:
Runs while condition is true
*/

console.log("\n--- While Loop ---");

let i = 1;

while (i <= 5) {
  console.log("Value:", i);
  i++;
}

// ----------------------------------------------------------
// 5.3 DO-WHILE LOOP
// ----------------------------------------------------------

/*
do-while loop:
Executes at least once
Condition is checked later
*/

console.log("\n--- Do-While Loop ---");

let j = 1;

do {
  console.log("Number:", j);
  j++;
} while (j <= 5);

// ==========================================================
// PRACTICE EXAMPLES
// ==========================================================

// Example 1: Check positive or negative
let num = -10;

if (num > 0) {
  console.log("Positive Number");
} else if (num < 0) {
  console.log("Negative Number");
} else {
  console.log("Zero");
}

// Example 2: Table of 2
console.log("\n--- Table of 2 ---");

for (let i = 1; i <= 10; i++) {
  console.log("2 x " + i + " = " + 2 * i);
}

/*
==========================================================
SUMMARY
==========================================================

Conditional Statements:
- if
- if-else
- else if
- switch

Loops:
- for (known iterations)
- while (condition based)
- do-while (runs at least once)

Control Flow helps in:
- Decision making
- Repeating tasks
- Logical execution

==========================================================
END OF CHAPTER 02
==========================================================
*/
