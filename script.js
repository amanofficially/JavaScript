// ============================================================
//        JavaScript: Beginning to Mastery
//        Complete Notes with Code Examples
//        Theory + Code — Hinglish mein samjhaya gaya
// ============================================================

// ============================================================
// CHAPTER 1: BASICS OF PROGRAMMING IN JAVASCRIPT
// ============================================================

/**
 * 1.1 JavaScript kya hai?
 * JavaScript ek programming language hai jo web pages ko interactive banati hai.
 * HTML = Structure | CSS = Design | JavaScript = Behavior (page ko zinda karta hai!)
 *
 * JavaScript vs ECMAScript:
 * ECMAScript ek standard/specification hai.
 * JavaScript us standard ki implementation hai.
 * ES6, ES2015 — yeh sab versions hain.
 */

// ============================================================
// 1.2 Variables — var, let, const
// ============================================================

// var — purana tarika (avoid karo, bugs create kar sakta hai, globally/function-scoped)
var varName = "Rahul";
var varAge = 25;
console.log(varName); // Rahul

// let — modern, recommended (block-scoped, value change ho sakti hai)
let city = "Delhi";
city = "Mumbai"; // Change kar sakte hain
console.log(city); // Mumbai

// const — constant (value change nahi hoti, hamesha prefer karo)
const PI = 3.14159;
// PI = 3.14; // ❌ Error aayega!
console.log(PI); // 3.14159

// ✅ Rule: Jab bhi possible ho 'const' use karo. Jab value change karni ho tab 'let'. 'var' bhool jao!

// ============================================================
// 1.3 Data Types
// ============================================================

let strName = "Rahul"; // String
let greeting = "Namaste";
let age = 25; // Number
let price = 99.99;
let isLoggedIn = true; // Boolean
let hasAccount = false;
let user = null; // Null — intentionally empty
let address; // Undefined — value assign nahi ki
console.log(address); // undefined
let bigNum = 9007199254740991n; // BigInt — bahut bade numbers ke liye

// typeof operator — type check karne ke liye
console.log(typeof strName); // "string"
console.log(typeof age); // "number"
console.log(typeof isLoggedIn); // "boolean"
console.log(typeof null); // "object" ← JS ka famous bug!

// ============================================================
// 1.4 Strings aur String Methods
// ============================================================

let str = "Hello World";

// String Indexing — index 0 se start hota hai
console.log(str[0]); // H
console.log(str[6]); // W
console.log(str.length); // 11

// Common Methods
console.log(str.toUpperCase()); // HELLO WORLD
console.log(str.toLowerCase()); // hello world
console.log(str.includes("World")); // true
console.log(str.includes("xyz")); // false
console.log(str.slice(0, 5)); // Hello
console.log(str.slice(6)); // World
console.log(str.replace("World", "India")); // Hello India

// split — string ko array mein todna
let words = str.split(" ");
console.log(words); // ["Hello", "World"]

// trim — extra spaces hatao
let padded = "  Namaste  ";
console.log(padded.trim()); // "Namaste"

// Template Literals (backtick use karo — modern way)
let tName = "Priya";
let tAge = 22;

// Purana tarika (avoid)
let msg1 = "Mera naam " + tName + " hai aur main " + tAge + " saal ki hoon.";

// Naya tarika — Template Literal ✅
let msg2 = `Mera naam ${tName} hai aur main ${tAge} saal ki hoon.`;
console.log(msg2); // Mera naam Priya hai aur main 22 saal ki hoon.

// Expression bhi likh sakte ho
console.log(`5 + 3 = ${5 + 3}`); // 5 + 3 = 8

// ============================================================
// 1.5 Operators aur Conditionals
// ============================================================

// == vs === — HAMESHA === use karo!
console.log(5 == "5"); // true  (loose equality — type convert karta hai ❌)
console.log(5 === "5"); // false (strict equality — value + type dono same chahiye ✅)
console.log(10 > 5); // true
console.log(10 < 5); // false
console.log(10 >= 10); // true
console.log(10 !== 5); // true

// Truthy aur Falsy Values
// Falsy: false, 0, "", null, undefined, NaN
// Truthy: koi bhi non-zero number, non-empty string, object, array

if (0) {
  console.log("Nahi chalega");
} // skip (falsy)
if ("") {
  console.log("Yeh bhi nahi");
} // skip (falsy)
if ("Hello") {
  console.log("Yeh chalega!");
} // ✅ runs
if (42) {
  console.log("Number bhi chalega!");
} // ✅ runs

// if-else, else if
let marks = 75;
if (marks >= 90) {
  console.log("A Grade");
} else if (marks >= 75) {
  console.log("B Grade"); // ← yeh chalega
} else if (marks >= 60) {
  console.log("C Grade");
} else {
  console.log("Fail");
}

// Ternary Operator — ek line mein if-else
let result = marks >= 60 ? "Pass" : "Fail";
console.log(result); // Pass

// Logical Operators — && (AND), || (OR)
let tAge2 = 20;
let hasID = true;
if (tAge2 >= 18 && hasID) {
  console.log("Entry allowed"); // ✅
}

let isStudent = false;
let isEmployee = true;
if (isStudent || isEmployee) {
  console.log("Discount milega"); // ✅
}

// ============================================================
// 1.6 Switch Statement
// ============================================================

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("Aaj somvar hai, kaam shuru!");
    break; // ← 'break' lagana mat bhoolna! Warna fall-through hoga
  case "Friday":
    console.log("Weekend aane wala hai!");
    break;
  case "Sunday":
    console.log("Aaj holiday!");
    break;
  default:
    console.log("Ek normal din hai.");
}

// ============================================================
// 1.7 Loops
// ============================================================

// While Loop
let i = 1;
while (i <= 5) {
  console.log(`Count: ${i}`);
  i++;
}

// For Loop — for(start; condition; increment)
for (let j = 1; j <= 5; j++) {
  console.log(`Table of 2: 2 x ${j} = ${2 * j}`);
}

// break — loop se niklo
for (let k = 1; k <= 10; k++) {
  if (k === 5) break;
  console.log(k); // 1, 2, 3, 4
}

// continue — current iteration skip karo
for (let m = 1; m <= 5; m++) {
  if (m === 3) continue; // 3 skip
  console.log(m); // 1, 2, 4, 5
}

// Do-While Loop — pehle execute, phir check (kam se kam ek baar zaroor chalega!)
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 3);

// ============================================================
// CHAPTER 2: ARRAYS IN JAVASCRIPT
// ============================================================

/**
 * 2.1 Arrays kya hain?
 * Array ek ordered list hai jisme multiple values store kar sakte hain.
 * Jaise ek basket mein alag-alag fruits — waise hi array mein alag-alag values.
 * Arrays index se access hote hain (0 se start).
 */

let fruits = ["Apple", "Banana", "Mango", "Orange"];
console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango
console.log(fruits.length); // 4

// Mixed types array
let mixed = [1, "Hello", true, null, { name: "Rahul" }];

// ============================================================
// 2.2 Array Methods — push, pop, shift, unshift
// ============================================================

let arr = ["A", "B", "C"];

arr.push("D"); // end mein add
console.log(arr); // ["A", "B", "C", "D"]

let removed = arr.pop(); // end se remove
console.log(removed); // "D"
console.log(arr); // ["A", "B", "C"]

arr.unshift("Z"); // beginning mein add
console.log(arr); // ["Z", "A", "B", "C"]

let first = arr.shift(); // beginning se remove
console.log(first); // "Z"
console.log(arr); // ["A", "B", "C"]

// Trick: Push/Pop = end se kaam (STACK jaisa — Last In, First Out)
//        Shift/Unshift = beginning se kaam

// ============================================================
// 2.3 Primitive vs Reference Data Types
// ============================================================

// Primitive — copy by value
let a = 10;
let b = a; // b ko a ki VALUE copy hoti hai
b = 20;
console.log(a); // 10 — a change nahi hua ✅
console.log(b); // 20

// Reference — copy by reference (same memory address share hota hai!)
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 same memory point karta hai!
arr2.push(4);
console.log(arr1); // [1, 2, 3, 4] ← arr1 bhi change hua! ⚠️
console.log(arr2); // [1, 2, 3, 4]

// ✅ Solution: Spread Operator se clone karo
let original = [1, 2, 3];
let copy = [...original]; // Naya array — alag memory
copy.push(4);
console.log(original); // [1, 2, 3] — safe! ✅
console.log(copy); // [1, 2, 3, 4]

// Arrays merge karna
let arrX = [1, 2, 3];
let arrY = [4, 5, 6];
let merged = [...arrX, ...arrY];
console.log(merged); // [1, 2, 3, 4, 5, 6]

// ============================================================
// 2.4 Array Loops
// ============================================================

let colors = ["Red", "Green", "Blue"];

// Regular for loop
for (let idx = 0; idx < colors.length; idx++) {
  console.log(colors[idx]);
}

// for...of — sirf values chahiye toh yeh use karo (clean!)
for (let color of colors) {
  console.log(color);
}

// for...in — index chahiye toh
for (let index in colors) {
  console.log(`${index}: ${colors[index]}`);
}

colors.forEach((value, index) => {
  console.log(`Index ${index} : ${value},`);
});

// ============================================================
// 2.5 Array Destructuring
// ============================================================

let fArr = ["Apple", "Banana", "Mango", "Orange"];

// Purana tarika
let f1 = fArr[0];
let f2 = fArr[1];

// Destructuring — naya aur clean tarika ✅
let [fFirst, fSecond, fThird] = fArr;
console.log(fFirst); // Apple
console.log(fSecond); // Banana
console.log(fThird); // Mango

// Skip karna
let [, , fSkip, fFourth] = fArr;
console.log(fSkip); // Mango
console.log(fFourth); // Orange

// Rest operator
let [head, ...rest] = fArr;
console.log(head); // Apple
console.log(rest); // ["Banana", "Mango", "Orange"]

// Swap variables
let x = 1,
  y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1

// ============================================================
// CHAPTER 3: OBJECTS IN JAVASCRIPT
// ============================================================

/**
 * 3.1 Objects kya hain?
 * Object ek collection hai key-value pairs ka.
 * Real world ki cheez ko represent karta hai.
 * Arrays index se access hote hain, objects keys se.
 */

let person = {
  name: "Amit",
  age: 28,
  city: "Mumbai",
  isEmployed: true,
};

// Dot notation
console.log(person.name); // Amit
console.log(person.age); // 28

// Bracket notation (jab key mein space ho ya key variable mein ho)
console.log(person["city"]); // Mumbai
let keyName = "name";
console.log(person[keyName]); // Amit

// Value change karna
person.age = 29;
person["city"] = "Pune";

// Naya property add karna
person.email = "amit@gmail.com";

// ============================================================
// 3.2 Computed Properties
// ============================================================

let propKey = "color";
let propValue = "Red";

let car = {
  brand: "Maruti",
  [propKey]: propValue, // computed property — variable ka value key banega
};
console.log(car); // {brand: "Maruti", color: "Red"}

// ============================================================
// 3.3 Object Iteration
// ============================================================

let student = { name: "Sneha", marks: 85, grade: "A" };

// for...in — keys ke upar iterate karo
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// Object.keys() — keys ki array
console.log(Object.keys(student)); // ["name", "marks", "grade"]

// Object.values() — values ki array
console.log(Object.values(student)); // ["Sneha", 85, "A"]

// Object.entries() — [key, value] pairs
console.log(Object.entries(student)); // [["name","Sneha"], ["marks",85], ["grade","A"]]

// ============================================================
// 3.4 Spread Operator in Objects
// ============================================================

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

// Merge karna
let mergedObj = { ...obj1, ...obj2 };
console.log(mergedObj); // {a:1, b:2, c:3, d:4}

// Shallow copy
let origObj = { name: "Raj", age: 25 };
let copyObj = { ...origObj };
copyObj.name = "Vivek";
console.log(origObj.name); // "Raj" — safe! ✅

// Override karna
let updated = { ...origObj, age: 26 };
console.log(updated); // {name: "Raj", age: 26}

// ============================================================
// 3.5 Object Destructuring
// ============================================================

let personObj = { name: "Kavita", age: 30, city: "Delhi", job: "Engineer" };

// Destructuring
let { name: pName, age: pAge, city: pCity } = personObj;
console.log(pName); // Kavita
console.log(pAge); // 30

// Default values
let { country = "India" } = personObj;
console.log(country); // India (object mein nahi tha, default use hua)

// Function parameter mein destructuring
function greetPerson({ name, city }) {
  console.log(`Hello ${name} from ${city}!`);
}
greetPerson(personObj); // Hello Kavita from Delhi!

// ============================================================
// 3.6 Objects inside Array & Nested Destructuring
// ============================================================

// Array of objects — real-world mein sabse zyada use hota hai! (API responses)
let students = [
  { name: "Ravi", marks: 90 },
  { name: "Priya", marks: 85 },
  { name: "Ankit", marks: 78 },
];

console.log(students[0].name); // Ravi
console.log(students[1].marks); // 85

for (let stu of students) {
  console.log(`${stu.name} ke ${stu.marks} marks aaye`);
}

// Nested Destructuring
let {
  name: vName,
  address: { city: vCity, pin: vPin },
} = {
  name: "Vikram",
  address: { city: "Jaipur", pin: "302001" },
};
console.log(vName); // Vikram
console.log(vCity); // Jaipur

// ============================================================
// CHAPTER 4: FUNCTIONS IN JAVASCRIPT
// ============================================================

/**
 * 4.1 Functions kya hain?
 * Function ek reusable block of code hai.
 * Ek baar likho, baar baar use karo.
 * Function Declaration hoisted hoti hai — pehle call, phir declare kar sakte ho.
 */

// Function Declaration
function greet(pName2) {
  console.log(`Namaste, ${pName2}!`);
}
greet("Rahul"); // Namaste, Rahul!
greet("Priya"); // Namaste, Priya!

// Return value wala function
function add(a, b) {
  return a + b;
}
let addResult = add(5, 3);
console.log(addResult); // 8

// ============================================================
// 4.2 Function Expression
// ============================================================

// Function Expression — variable mein function store karna
// Note: Function expression hoisted NAHI hoti — pehle define karo, phir call karo
const greetExpr = function (name2) {
  return `Hello, ${name2}!`;
};
console.log(greetExpr("Amit")); // Hello, Amit!

// ============================================================
// 4.3 Arrow Functions (Modern JS — ES6)
// ============================================================

// Regular function
function multiply(a, b) {
  return a * b;
}

// Arrow Function
const multiply2 = (a, b) => {
  return a * b;
};

// Short (implicit return — ek line mein)
const multiply3 = (a, b) => a * b;

// Single parameter — parentheses optional
const square = (n) => n * n;

// No parameters — empty parentheses zaruri
const sayHello = () => console.log("Hello!");

console.log(multiply3(4, 5)); // 20
console.log(square(6)); // 36
sayHello(); // Hello!

// ============================================================
// 4.4 Scope — Block Scope vs Function Scope
// ============================================================

// Function Scope — var andar accessible, bahar nahi
function testScope() {
  var scopeX = 10;
  console.log(scopeX); // 10 ✅
}
// console.log(scopeX); // ❌ Error

// Block Scope — let/const sirf us block mein accessible
{
  let blockVar = "Block scoped";
  const blockConst = "Me too";
  console.log(blockVar); // ✅
}
// console.log(blockVar); // ❌ Error

// Lexical Scope — andar wala function bahar ka variable dekh sakta hai
function outerFn() {
  let outerVar = "Main bahar hun";
  function innerFn() {
    console.log(outerVar); // ✅ Lexical scope
  }
  innerFn();
}
outerFn();

// ============================================================
// 4.5 Default, Rest Parameters & Destructuring
// ============================================================

// Default Parameters
function greetLang(name3 = "Guest", lang = "Hindi") {
  return `Namaste ${name3}! Language: ${lang}`;
}
console.log(greetLang("Raj")); // Namaste Raj! Language: Hindi
console.log(greetLang("Ali", "Urdu")); // Namaste Ali! Language: Urdu

// Rest Parameters — ...args (multiple arguments collect karta hai)
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(10, 20, 30, 40)); // 100

// Parameter Destructuring
function displayUser({ name4, age4, city4 = "Unknown" }) {
  console.log(`${name4}, ${age4} years, ${city4}`);
}
displayUser({ name4: "Sita", age4: 25, city4: "Lucknow" });

// ============================================================
// 4.6 Higher-Order Functions — Callbacks & Functions returning Functions
// ============================================================

// Callback Functions — function ko argument ke roop mein pass karna
function doOperation(a, b, callback) {
  return callback(a, b);
}
const addFn = (x, y) => x + y;
const multiplyFn = (x, y) => x * y;

console.log(doOperation(5, 3, addFn)); // 8
console.log(doOperation(5, 3, multiplyFn)); // 15

// Functions returning Functions (Closures ka foundation!)
function createMultiplier(factor) {
  return function (number) {
    return number * factor;
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double(5)); // 10
console.log(triple(5)); // 15
console.log(double(8)); // 16

// ============================================================
// CHAPTER 5: VERY IMPORTANT ARRAY METHODS
// ============================================================

// ============================================================
// 5.1 forEach — har element pe kuch karo (return nahi karta)
// ============================================================

let fruitsArr = ["Apple", "Banana", "Mango"];

fruitsArr.forEach(function (fruit, index) {
  console.log(`${index + 1}. ${fruit}`);
});

fruitsArr.forEach((fruit) => console.log(fruit.toUpperCase()));

// ============================================================
// 5.2 map — transform karo, naya array banao (original unchanged!)
// ============================================================

let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((n) => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] — original unchanged! ✅

// Strings uppercase
let names = ["ram", "shyam", "mohan"];
let upperNames = names.map((name5) => name5.toUpperCase());
console.log(upperNames); // ["RAM", "SHYAM", "MOHAN"]

// Objects array se specific field nikalna
let studentsArr = [
  { name: "Ravi", marks: 90 },
  { name: "Priya", marks: 85 },
];
let stuNames = studentsArr.map((stu) => stu.name);
console.log(stuNames); // ["Ravi", "Priya"]

// forEach vs map:
// forEach = side effects ke liye (no return)
// map = transformation ke liye (new array return karta hai) ✅

// ============================================================
// 5.3 filter — condition ke basis pe filter karo
// ============================================================

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evens = nums.filter((n) => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

let bigNums2 = nums.filter((n) => n > 5);
console.log(bigNums2); // [6, 7, 8, 9, 10]

// Objects filter
let products = [
  { name: "Phone", price: 15000, inStock: true },
  { name: "Laptop", price: 60000, inStock: false },
  { name: "Tablet", price: 25000, inStock: true },
];

let available = products.filter((p) => p.inStock);
console.log(available); // Phone aur Tablet

let affordable = products.filter((p) => p.price < 30000 && p.inStock);
console.log(affordable.map((p) => p.name)); // ["Phone", "Tablet"]

// ============================================================
// 5.4 reduce — sab kuch ek value mein reduce karo
// ============================================================

let numArr = [1, 2, 3, 4, 5];

// Sum
let sumVal = numArr.reduce((accumulator, current) => {
  return accumulator + current;
}, 0); // 0 = initial value (zaroor dena!)
console.log(sumVal); // 15

// Product
let productVal = numArr.reduce((acc, curr) => acc * curr, 1);
console.log(productVal); // 120

// Maximum find karna
let maxVal = numArr.reduce((acc, curr) => (curr > acc ? curr : acc), numArr[0]);
console.log(maxVal); // 5

// Count occurrences — advanced use case
let fruitsCount = ["apple", "banana", "apple", "mango", "banana", "apple"];
let countMap = fruitsCount.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log(countMap); // {apple: 3, banana: 2, mango: 1}

// ============================================================
// 5.5 find, some, every, sort, fill, splice
// ============================================================

let mixedNums = [3, 1, 4, 1, 5, 9, 2, 6];

// find — pehla match return karta hai
let found = mixedNums.find((n) => n > 4);
console.log(found); // 5

// some — koi ek bhi condition satisfy kare toh true
let hasLarge = mixedNums.some((n) => n > 8);
console.log(hasLarge); // true (9 hai)

// every — sab condition satisfy kare toh true
let allPositive = mixedNums.every((n) => n > 0);
console.log(allPositive); // true

// sort — ⚠️ numbers ke saath comparator zaroor do!
let fruitsSort = ["Banana", "Apple", "Mango"];
fruitsSort.sort();
console.log(fruitsSort); // ["Apple", "Banana", "Mango"]

let numsSort = [10, 2, 5, 1, 8];
numsSort.sort((a, b) => a - b); // Ascending
console.log(numsSort); // [1, 2, 5, 8, 10]

numsSort.sort((a, b) => b - a); // Descending
console.log(numsSort); // [10, 8, 5, 2, 1]

// fill — sab elements ek value se fill karo
let filledArr = new Array(5).fill(0);
console.log(filledArr); // [0, 0, 0, 0, 0]

// splice — elements add/remove karo (original array modify hota hai!)
let colorsArr = ["Red", "Green", "Blue"];
colorsArr.splice(1, 1, "Yellow"); // index 1 se, 1 remove, "Yellow" insert
console.log(colorsArr); // ["Red", "Yellow", "Blue"]

// ============================================================
// CHAPTER 6: SETS, MAPS, ITERABLES
// ============================================================

/**
 * 6.1 Iterables
 * Iterable woh object hai jiske upar for...of loop chala sakte hain.
 * Arrays, Strings, Sets, Maps — sab iterables hain.
 */

for (let char of "Hello") {
  console.log(char); // H, e, l, l, o
}

// ============================================================
// 6.2 Sets — unique values ki collection (no duplicates!)
// ============================================================

let mySet = new Set([1, 2, 3, 2, 1, 3, 4]);
console.log(mySet); // Set {1, 2, 3, 4}

mySet.add(5);
mySet.delete(1);
console.log(mySet.has(2)); // true
console.log(mySet.size); // 4

// ✅ Set ka best use case: Array se duplicates hatana
let dupArr = [1, 2, 2, 3, 3, 3, 4];
let unique = [...new Set(dupArr)];
console.log(unique); // [1, 2, 3, 4]

// Iterate karna
for (let item of mySet) {
  console.log(item);
}

// ============================================================
// 6.3 Maps — key-value pairs (any type key support karta hai!)
// ============================================================

let myMap = new Map();

// set() se add karo
myMap.set("name", "Rahul");
myMap.set(1, "Number key");
myMap.set(true, "Boolean key");

// get() se value lo
console.log(myMap.get("name")); // Rahul
console.log(myMap.get(1)); // Number key
console.log(myMap.size); // 3

console.log(myMap.has("name")); // true
myMap.delete(true);

// Iterate karna
for (let [key, value] of myMap) {
  console.log(`${key} => ${value}`);
}

// Map vs Object:
// Map: any type keys, .size property, better iteration performance
// Object: only string/symbol keys, JSON.stringify support

// ============================================================
// 6.4 Optional Chaining (?.) aur Object.assign()
// ============================================================

let userObj = {
  name: "Priya",
  address: { city: "Pune" },
};

// Optional Chaining — safely access karo, no crash if undefined
let pin = userObj?.address?.pin; // undefined (no error!) ✅
let country2 = userObj?.country?.name; // undefined (no error!) ✅
console.log(pin); // undefined
console.log(country2); // undefined

// Object.assign — objects merge karna
let target = { a: 1, b: 2 };
let source = { b: 4, c: 5 };
let assignResult = Object.assign(target, source);
console.log(assignResult); // {a: 1, b: 4, c: 5}

// ============================================================
// CHAPTER 7: OBJECT ORIENTED JAVASCRIPT & PROTOTYPAL INHERITANCE
// ============================================================

/**
 * 7.1 this keyword aur Methods
 * 'this' ka matlab depends karta hai context pe.
 * Object method mein 'this' us object ko refer karta hai.
 * Global scope mein 'this' window object hai.
 */

let personOOP = {
  name: "Arjun",
  age: 25,
  greet: function () {
    console.log(`Hello, main ${this.name} hun!`);
  },
  // Short method syntax (ES6)
  introduce() {
    console.log(`Meri age ${this.age} hai.`);
  },
};
personOOP.greet(); // Hello, main Arjun hun!
personOOP.introduce(); // Meri age 25 hai.

// ============================================================
// 7.2 Constructor Functions aur new Keyword
// ============================================================

/**
 * 'new' kya karta hai:
 * 1. Naya empty object banata hai
 * 2. 'this' us object ko point karta hai
 * 3. Function run karta hai
 * 4. Object automatically return karta hai
 */

function Person(pName3, pAge3) {
  this.name = pName3;
  this.age = pAge3;
  this.greet = function () {
    console.log(`Hi, I am ${this.name}`);
  };
}

let p1 = new Person("Manish", 30);
let p2 = new Person("Shalini", 25);
p1.greet(); // Hi, I am Manish
p2.greet(); // Hi, I am Shalini
console.log(p1 instanceof Person); // true

// ============================================================
// 7.3 Prototype — Memory Efficient Pattern
// ============================================================

/**
 * Prototype ek blueprint hai.
 * Jab object mein property/method nahi milti, JavaScript prototype mein dhundti hai.
 * Yeh 'prototype chain' hai!
 * Prototype pe methods add karne se memory efficient hota hai —
 * sab instances ek hi method share karte hain.
 */

function Animal(aName, aSound) {
  this.name = aName;
  this.sound = aSound;
}

// Prototype pe method add karna
Animal.prototype.speak = function () {
  console.log(`${this.name} says ${this.sound}!`);
};

let dog = new Animal("Dog", "Woof");
let cat = new Animal("Cat", "Meow");
dog.speak(); // Dog says Woof!
cat.speak(); // Cat says Meow!

console.log(dog.__proto__ === Animal.prototype); // true

// ============================================================
// 7.4 Class Keyword (Modern ES6 Syntax)
// ============================================================

class PersonClass {
  // Constructor — naya object banate waqt chalta hai
  constructor(name6, age6) {
    this.name = name6;
    this.age = age6;
  }

  // Method — automatically prototype pe add hota hai
  greet() {
    console.log(`Namaste, main ${this.name} hun!`);
  }

  // Getter
  get info() {
    return `${this.name} (${this.age})`;
  }

  // Setter
  set updateAge(newAge) {
    if (newAge > 0) this.age = newAge;
  }

  // Static method — instance nahi, class pe directly call hoti hai
  static create(name7, age7) {
    return new PersonClass(name7, age7);
  }
}

let pClass = new PersonClass("Ritu", 28);
pClass.greet(); // Namaste, main Ritu hun!
console.log(pClass.info); // Ritu (28)
pClass.updateAge = 29;
console.log(pClass.age); // 29

let pClass2 = PersonClass.create("Ajay", 35);
pClass2.greet(); // Namaste, main Ajay hun!

// Inheritance — extends aur super
class AnimalClass {
  constructor(name8) {
    this.name = name8;
  }
  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class DogClass extends AnimalClass {
  constructor(name9, breed) {
    super(name9); // ← Parent class ka constructor call karna ZARURI hai 'this' se pehle!
    this.breed = breed;
  }

  // Method Overriding
  speak() {
    console.log(`${this.name} barks! Breed: ${this.breed}`);
  }

  fetch() {
    console.log(`${this.name} fetches the ball!`);
  }
}

let myDog = new DogClass("Buddy", "Labrador");
myDog.speak(); // Buddy barks! Breed: Labrador
myDog.fetch(); // Buddy fetches the ball!
console.log(myDog instanceof DogClass); // true
console.log(myDog instanceof AnimalClass); // true

// ============================================================
// CHAPTER 8: HOW JAVASCRIPT WORKS
// ============================================================

/**
 * 8.1 Global Execution Context (GEC)
 * Jab JavaScript code run hota hai, sabse pehle GEC banta hai.
 * Do phases:
 *   1. Creation Phase — memory allocate hoti hai (variables: undefined, functions: stored)
 *   2. Execution Phase — code line by line execute hota hai
 */

// Creation Phase mein:
// x → undefined (hoisted)
// greetHoist → [Function] (poori function stored)

console.log(greetHoist); // [Function: greetHoist] — function hoisting!
function greetHoist() {
  console.log("Hello hoisted!");
}

// ============================================================
// 8.2 Hoisting
// ============================================================

// Function Declaration — fully hoisted (pehle call, phir declare — works!)
sayHelloHoist();
function sayHelloHoist() {
  console.log("Hello from hoisted function!");
}

// var — declaration hoist hoti hai, value nahi (undefined milta hai)
console.log(hoistAge); // undefined — no error but no value either
var hoistAge = 25;
console.log(hoistAge); // 25

// let/const — Temporal Dead Zone (TDZ) — access karo toh ReferenceError!
// console.log(hoistName); // ❌ ReferenceError!
let hoistName = "Rohan";
console.log(hoistName); // Rohan

// ============================================================
// 8.3 Scope Chain aur Lexical Environment
// ============================================================

let globalVar = "Main global hun";

function outerScope() {
  let outerVar = "Main outer hun";
  function innerScope() {
    let innerVar = "Main inner hun";
    // Scope chain: inner → outer → global (andar se bahar)
    console.log(innerVar); // ✅ apna
    console.log(outerVar); // ✅ parent ka
    console.log(globalVar); // ✅ global
  }
  // console.log(innerVar); // ❌ bahar wala andar nahi dekh sakta
  innerScope();
}
outerScope();

// ============================================================
// CHAPTER 9: CLOSURES
// ============================================================

/**
 * 9.1 Closures kya hain?
 * Closure ek function hai jo apne outer scope ke variables ko 'remember' karta hai
 * even after outer function return ho chuki ho.
 * Yeh JavaScript ka ek powerful aur unique concept hai!
 */

function makeCounter() {
  let count = 0; // yeh variable closure mein captured/closed ho jaata hai
  return function () {
    count++;
    console.log(`Count: ${count}`);
  };
}

let counter = makeCounter();
counter(); // Count: 1
counter(); // Count: 2
counter(); // Count: 3

// Alag counter — alag closure, alag independent state
let counter2 = makeCounter();
counter2(); // Count: 1 (fresh start!)

// ============================================================
// 9.2 Closure Examples — Practical Use Cases
// ============================================================

// Example 1: Private Counter — Data Encapsulation (OOP pattern)
function createBank() {
  let balance = 0; // Private — bahar se direct access nahi ✅

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited: ${amount}. Balance: ${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
      } else {
        balance -= amount;
        console.log(`Withdrawn: ${amount}. Balance: ${balance}`);
      }
    },
    getBalance() {
      return balance;
    },
  };
}

let myBank = createBank();
myBank.deposit(1000); // Deposited: 1000. Balance: 1000
myBank.withdraw(300); // Withdrawn: 300. Balance: 700
console.log(myBank.getBalance()); // 700
// myBank.balance → undefined (private hai!) ✅

// Example 2: Function Factory using Closures
function createMultiplierClosure(factor) {
  return (n) => n * factor; // factor closure mein captured
}

const doubleC = createMultiplierClosure(2);
const tripleC = createMultiplierClosure(3);
const tenXC = createMultiplierClosure(10);

console.log(doubleC(5)); // 10
console.log(tripleC(5)); // 15
console.log(tenXC(5)); // 50

// ============================================================
// CHAPTER 10: DOM TUTORIAL
// ============================================================

/**
 * 10.1 DOM (Document Object Model) kya hai?
 * DOM ek tree structure hai jo HTML page ko represent karta hai.
 * JavaScript ke through hum HTML elements ko read, change, add ya delete kar sakte hain.
 *
 * NOTE: Yeh code browser mein chalega, Node.js mein nahi.
 * In a browser environment:
 */

// Elements select karna
// let heading = document.getElementById("title");
// let para = document.querySelector(".para");         // CSS selector (pehla match)
// let allParas = document.querySelectorAll("p");      // sabhi matches (NodeList)

// Text change karna
// heading.textContent = "Namaste Duniya!";            // Safe (no HTML parsing)
// heading.innerHTML = "<strong>Bold Text</strong>";   // HTML parse karta hai (XSS risk! ⚠️)

// Styles change karna (inline styles)
// heading.style.color = "red";
// heading.style.fontSize = "2rem";
// heading.style.backgroundColor = "yellow";

// Attributes
// let link = document.querySelector("a");
// console.log(link.getAttribute("href"));
// link.setAttribute("href", "https://google.com");

// classList — CSS classes manage karna
// heading.classList.add("active");
// heading.classList.remove("old");
// heading.classList.toggle("visible");
// console.log(heading.classList.contains("active")); // true

// ============================================================
// 10.2 Elements Create aur Add karna
// ============================================================

// let newPara = document.createElement("p");
// newPara.textContent = "Yeh naya paragraph hai!";
// newPara.style.color = "blue";
// document.body.appendChild(newPara);                // end mein add

// insertAdjacentHTML — flexible insertion
// let container = document.querySelector(".container");
// container.insertAdjacentHTML("beforeend", `
//   <div class="card">
//     <h3>New Card</h3>
//     <p>Card content</p>
//   </div>
// `);

// Clone karna
// let original = document.querySelector(".item");
// let cloneEl = original.cloneNode(true);            // true = deep clone
// document.body.appendChild(cloneEl);

// Remove karna
// let toDelete = document.querySelector(".old-element");
// toDelete.remove();

// ⚠️ innerHTML use karte waqt user input kabhi directly mat daalo — XSS attack ho sakta hai!
// Hamesha textContent use karo ya input sanitize karo.

// ============================================================
// CHAPTER 11: EVENTS IN JAVASCRIPT
// ============================================================

/**
 * 11.1 Events kya hain?
 * Event woh action hai jo page pe hoti hai — click, keypress, scroll, submit etc.
 * JavaScript in events ko 'listen' kar ke response de sakta hai.
 */

// let btn = document.querySelector("#myBtn");

// addEventListener — recommended way
// btn.addEventListener("click", function(event) {
//   console.log("Button click hua!");
//   console.log(event.target);   // kaunsa element click hua
//   console.log(event.type);     // "click"
// });

// Arrow function ke saath
// btn.addEventListener("click", (e) => {
//   e.target.style.backgroundColor = "red";
// });

// Common Events:
// click, dblclick, mouseover, mouseout, mousemove
// keydown, keyup, keypress
// submit, change, input, focus, blur
// load, DOMContentLoaded, resize, scroll

// Remove event listener (named function zaruri hai)
// function handleClick() { console.log("clicked!"); }
// btn.addEventListener("click", handleClick);
// btn.removeEventListener("click", handleClick);

// ============================================================
// 11.2 Event Bubbling aur Capturing
// ============================================================

/**
 * Bubbling (default): event andar se bahar jata hai — child → parent → document
 * Capturing: event bahar se andar aata hai — document → parent → child
 *
 * Structure:
 * <div id="outer">
 *   <div id="inner">
 *     <button id="btn">Click me</button>
 *   </div>
 * </div>
 */

// Bubbling (default behavior)
// document.getElementById("outer").addEventListener("click", () => {
//   console.log("Outer clicked!");
// });
// document.getElementById("btn").addEventListener("click", (e) => {
//   console.log("Button clicked!");
//   // e.stopPropagation(); // Bubble rokna ho toh yeh karo
// });
// Button click karo: "Button clicked!" → "Inner clicked!" → "Outer clicked!"

// Capturing (third parameter = true)
// document.getElementById("outer").addEventListener("click", () => {
//   console.log("Outer captured first!");
// }, true);

// ============================================================
// 11.3 Event Delegation — Smart Event Handling
// ============================================================

/**
 * Event Delegation: Parent pe ek listener lagao, sab children handle ho jayenge.
 * Dynamic elements ke liye perfect — naye elements automatically handle honge!
 * Performance bhi better — bahut saare listeners ki jagah ek.
 */

// ❌ Galat tarika — har element pe alag listener
// let items = document.querySelectorAll(".item");
// items.forEach(item => item.addEventListener("click", handler));
// Problem: dynamically added new items ko listener nahi milega!

// ✅ Sahi tarika — Event Delegation
// let list = document.querySelector("#myList");
// list.addEventListener("click", function(e) {
//   if (e.target.classList.contains("item")) {
//     console.log(`Item clicked: ${e.target.textContent}`);
//     e.target.classList.toggle("selected");
//   }
//   if (e.target.classList.contains("delete-btn")) {
//     e.target.parentElement.remove();
//   }
// });

// ============================================================
// CHAPTER 12: ASYNCHRONOUS JAVASCRIPT
// ============================================================

/**
 * 12.1 Synchronous vs Asynchronous
 * JavaScript ek single-threaded language hai — ek time pe ek hi kaam.
 * Async operations (network requests, timers) use hote hain jab wait karna pade
 * bina baaki code ruke.
 */

// Synchronous — ek ek karke
console.log("1. Pehle");
console.log("2. Doosra");
console.log("3. Teesra");

// Asynchronous — setTimeout
console.log("Start");
setTimeout(() => {
  console.log("2 second baad!"); // Yeh baad mein aayega
}, 2000);
console.log("End");
// Output: Start → End → (2 sec baad) 2 second baad!

// setTimeout(fn, 0) bhi baaki synchronous code ke BAAD chalega — Event Loop!

// ============================================================
// 12.2 Callback Hell — Problem
// ============================================================

/**
 * Callback Hell (Pyramid of Doom) — deeply nested callbacks
 * Ek ke andar ek callbacks — unreadable, difficult to debug!
 *
 * getUser(id, function(user) {
 *   getPosts(user.id, function(posts) {
 *     getComments(posts[0].id, function(comments) {
 *       getLikes(comments[0].id, function(likes) {
 *         // 4 levels deep — bahut confusing!
 *       });
 *     });
 *   });
 * });
 *
 * Solution: Promises!
 */

// ============================================================
// CHAPTER 13: PROMISES & NETWORK REQUESTS
// ============================================================

/**
 * 13.1 Promises kya hain?
 * Promise ek object hai jo future mein kisi async operation ka result represent karta hai.
 * Jaise restaurant mein token mila — ya order aayega (fulfilled) ya nahi (rejected).
 *
 * Promise States:
 * pending   — still waiting
 * fulfilled — resolve() call hui (success)
 * rejected  — reject() call hui (failure)
 */

let myPromise = new Promise((resolve, reject) => {
  let success = true;
  setTimeout(() => {
    if (success) {
      resolve("Kaam ho gaya!");
    } else {
      reject("Kuch galat hua!");
    }
  }, 2000);
});

myPromise
  .then((result) => {
    console.log("Success:", result); // Success: Kaam ho gaya!
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Promise settled! (hamesha chalega)");
  });

// ============================================================
// 13.2 Promise Chaining — Callback Hell ka Solution
// ============================================================

// fetch("https://api.example.com/user/1")
//   .then(response => response.json())
//   .then(user => fetch(`/api/posts/${user.id}`))
//   .then(response => response.json())
//   .then(posts => console.log(posts))
//   .catch(error => console.log("Error:", error));

// Promise.all — sab parallel chalao (koi ek fail toh sab fail)
// Promise.all([
//   fetch("/api/users").then(r => r.json()),
//   fetch("/api/posts").then(r => r.json()),
//   fetch("/api/comments").then(r => r.json())
// ])
// .then(([users, posts, comments]) => {
//   console.log(users, posts, comments);
// })
// .catch(error => console.log("Koi ek fail hua:", error));

// ============================================================
// 13.3 Fetch API — Network Requests
// ============================================================

// GET Request
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP Error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then(users => console.log(users))
//   .catch(error => console.log("Network Error:", error));

// POST Request
// fetch("https://api.example.com/users", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify({ name: "Rajesh Kumar", email: "rajesh@example.com" })
// })
// .then(res => res.json())
// .then(data => console.log("Created:", data));

// ============================================================
// 13.4 Async/Await — Sabse Clean Syntax
// ============================================================

/**
 * async/await — promises ko synchronous jaisa dikhata hai (readable + maintainable)
 * Internally Promises hi use hote hain — sirf syntactic sugar hai.
 */

async function fetchUser(id) {
  try {
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    if (!response.ok) {
      throw new Error("User not found!");
    }
    let userData = await response.json();
    return userData;
  } catch (error) {
    console.log("Error:", error.message);
    throw error; // Re-throw if needed
  }
}

// Use karna (browser ya Node.js 18+ mein)
async function main() {
  // let userData = await fetchUser(1);
  // console.log(userData.name);
  // Parallel requests — Promise.all ke saath
  // let [users, posts] = await Promise.all([
  //   fetch("/api/users").then(r => r.json()),
  //   fetch("/api/posts").then(r => r.json())
  // ]);
  // console.log(users, posts);
}

main();

// ============================================================
// CHAPTER 14: ES6 MODULES
// ============================================================

/**
 * 14.1 Modules kya hain?
 * ES6 Modules se hum code ko alag-alag files mein split kar sakte hain.
 * Ek file doosri file se functions, variables, classes import kar sakti hai.
 *
 * Benefits:
 * 1. Code organization — alag alag files
 * 2. Reusability — ek baar likho, kahin bhi use karo
 * 3. No global scope pollution
 * 4. Better dependency management
 *
 * NOTE: Modules tabhi chalte hain jab file server se serve ho.
 * HTML mein: <script type="module" src="main.js"></script>
 */

// ---------- math.js (export file) ----------
// export function add(a, b) { return a + b; }
// export function multiply(a, b) { return a * b; }
// export const PI = 3.14159;
// export default function greet(name) { return `Hello, ${name}!`; }   // default export

// ---------- main.js (import file) ----------
// Named imports
// import { add, multiply, PI } from "./math.js";

// Default import (naam kuch bhi rakho)
// import greet from "./math.js";

// Sab kuch ek naam se import karo (namespace import)
// import * as MathUtils from "./math.js";

// console.log(add(5, 3));            // 8
// console.log(multiply(4, 5));       // 20
// console.log(PI);                   // 3.14159
// console.log(greet("Rahul"));       // Hello, Rahul!
// console.log(MathUtils.add(2, 3));  // 5

// ============================================================
//              JOURNEY COMPLETE! 🎉
// ============================================================

/**
 * Aapki JavaScript Mastery Journey:
 *
 * ✅ Chapter 1  — Basics: Variables, Data Types, Loops, Conditionals
 * ✅ Chapter 2  — Arrays: CRUD, Methods, Spread, Destructuring
 * ✅ Chapter 3  — Objects: Properties, Iteration, Destructuring
 * ✅ Chapter 4  — Functions: Arrow, HOF, Scope, Callbacks
 * ✅ Chapter 5  — Array Methods: map, filter, reduce, find, sort
 * ✅ Chapter 6  — Sets, Maps, Optional Chaining, Iterables
 * ✅ Chapter 7  — OOP: Classes, Prototypes, Inheritance, this
 * ✅ Chapter 8  — How JS Works: Execution Context, Hoisting, Scope Chain
 * ✅ Chapter 9  — Closures: Private State, Function Factories
 * ✅ Chapter 10 — DOM: Select, Modify, Create, Remove Elements
 * ✅ Chapter 11 — Events: Listeners, Bubbling, Event Delegation
 * ✅ Chapter 12 — Async JS: Synchronous vs Async, Callback Hell
 * ✅ Chapter 13 — Promises & Fetch: async/await, Promise.all
 * ✅ Chapter 14 — ES6 Modules: import, export
 *
 * Aage kya seekhein?
 * → React / Vue   — Frontend Framework
 * → Node.js       — Backend JavaScript
 * → TypeScript    — Type-safe JavaScript
 * → Testing       — Jest, Mocha
 * → Web APIs      — localStorage, WebSocket, Service Workers
 *
 * TIP: Sirf padhna nahi, khud code likhna! Roz ek chhoti problem solve karo.
 * Practice se hi mastery aati hai!
 */

console.log("Bahut bahut badhai ho! JavaScript Mastery Complete! 🚀");
