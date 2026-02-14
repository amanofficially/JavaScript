/*
==========================================================
04. Arrays & Objects in JavaScript
File Name : 04_arrays_objects.js
Level     : Beginner
==========================================================

Arrays & Objects are Non-Primitive Data Types.
They store multiple values and are mutable.

----------------------------------------------------------
Topics Covered:
1. Arrays
2. Array Methods
   - Mutating Methods
   - Non-Mutating Methods
3. Objects
4. Object Methods
==========================================================
*/

// ==========================================================
// 1. ARRAYS
// ==========================================================

/*
Array:
- Ordered collection of values
- Index starts from 0
*/

let numbers = [10, 20, 30, 40];
let mixed = ["Aman", 22, true, null];

console.log(numbers);
console.log(mixed);

// Accessing elements
console.log(numbers[0]);
console.log(numbers[2]);

// Updating elements
numbers[1] = 25;
console.log(numbers);

// ==========================================================
// 2. ARRAY METHODS
// ==========================================================

/*
Array Methods are used to:
- Add elements
- Remove elements
- Modify elements
- Create new arrays
*/

// ----------------------------------------------------------
// 2.1 MUTATING ARRAY METHODS
// (Original array changes)
// ----------------------------------------------------------

let arr = [1, 2, 3, 4];

console.log("\n--- Mutating Methods ---");

// push() → add at end
arr.push(5);
console.log("push:", arr);

// pop() → remove from end
arr.pop();
console.log("pop:", arr);

// unshift() → add at start
arr.unshift(0);
console.log("unshift:", arr);

// shift() → remove from start
arr.shift();
console.log("shift:", arr);

// splice() → add / remove / replace
arr.splice(1, 1, 99);
console.log("splice:", arr);

// sort()
let names = ["Rahul", "Aman", "Zoya"];
names.sort();
console.log("sort:", names);

// reverse()
names.reverse();
console.log("reverse:", names);

// ----------------------------------------------------------
// 2.2 NON-MUTATING ARRAY METHODS
// (Original array remains same)
// ----------------------------------------------------------

let nums = [10, 20, 30, 40];

console.log("\n--- Non-Mutating Methods ---");

// map()
let doubled = nums.map((n) => n * 2);
console.log("map:", doubled);

// filter()
let greaterThan20 = nums.filter((n) => n > 20);
console.log("filter:", greaterThan20);

// reduce()
let total = nums.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log("reduce (sum):", total);

// reduce parameter names:
// accumulator → stores result
// currentValue → current element

// concat()
let moreNums = nums.concat([50, 60]);
console.log("concat:", moreNums);

// slice()
let sliced = nums.slice(1, 3);
console.log("slice:", sliced);

// includes()
console.log("includes 20:", nums.includes(20));

// indexOf()
console.log("indexOf 30:", nums.indexOf(30));

// ==========================================================
// 3. OBJECTS
// ==========================================================

/*
Object:
- Stores data in key-value pairs
*/

let student = {
  name: "Aman",
  age: 22,
  course: "B.Tech",
  isActive: true,
};

console.log("\n--- Object ---");
console.log(student);

// Access object values
console.log(student.name);
console.log(student["course"]);

// Modify object
student.age = 23;
student.city = "Indore";

console.log("Updated Object:", student);

// Delete property
delete student.isActive;
console.log("After delete:", student);

// ==========================================================
// 4. OBJECT METHODS
// ==========================================================

/*
Object Methods help to work with object data
*/

// Object.keys()
console.log("Keys:", Object.keys(student));

// Object.values()
console.log("Values:", Object.values(student));

// Object.entries()
console.log("Entries:", Object.entries(student));

// hasOwnProperty()
console.log("Has age:", student.hasOwnProperty("age"));

// ==========================================================
// 5. LOOPING THROUGH ARRAYS & OBJECTS
// ==========================================================

// for loop
console.log("\n--- for loop ---");
for (let i = 0; i < nums.length; i++) {
  console.log(nums[i]);
}

// forEach()
console.log("\n--- forEach ---");
nums.forEach((value, index) => {
  console.log(index, value);
});

// for...of (arrays)
console.log("\n--- for...of ---");
for (let value of nums) {
  console.log(value);
}

// for...in (objects)
console.log("\n--- for...in ---");
for (let key in student) {
  console.log(key, ":", student[key]);
}

/*
==========================================================
SUMMARY
==========================================================

Arrays:
- Ordered list
- Index based
- Mutable

Mutating Methods:
- push(), pop(), shift(), unshift()
- splice(), sort(), reverse()

Non-Mutating Methods:
- map(), filter(), reduce()
- slice(), concat(), includes()

Objects:
- Key-value pairs

Object Methods:
- Object.keys()
- Object.values()
- Object.entries()

Loops:
- for, forEach, for...of, for...in

==========================================================
END OF CHAPTER 04
==========================================================
*/
