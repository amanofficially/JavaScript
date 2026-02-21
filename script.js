// function sayHello() {
//   console.log("Hello !");
// }

// let knowOddEven = (num) => {
//   if (num % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// sayHello();
// console.log(knowOddEven(2));

//Arrow funtion
// let sayHello = () => {
//   return "Hello";
// };

// console.log(sayHello());

// Call,Apply,Bind
// const user1 = {
//   fname: "Aman",
//   city: "Indore",
//   about: function (state, age) {
//     return `Hello my name is ${this.fname}, i'm ${age} years old. I'm from ${this.city}, ${state}.`;
//   },
// };

// const user2 = {
//   fname: "Anand",
//   city: "Pune",
// };

// console.log(user1.about.call(user2, "Maharashtra"));
// console.log(user1.about.apply(user1, ["Madhya Pradesh", 22]));
// let result = user1.about.bind(user1, "Madhya Pradesh");
// result();

// console.log("Hello World !");

// by using var we can re-declare and re-assign the variable :: Function scoped
// var a = 10;
// a = 120;
// console.log(a);

// Let and const ::recommanded :: can't re-declare but we can re-assign the value in the same variable :: block scoped
// let a = 10;
// a = 30;
// console.log(a);

// can't redaclare or re-assign
// const country = "India";

// let str = "Indore";
// console.log(str[0]);
// console.log(str.length);j
// // String Methods :: trim(),touppercase(), tolowecase(),slice()
// let newStr = str.trim();
// console.log(newStr);
// console.log(newStr.length);

// function returning a function
// function sayHello() {
//   console.log("Hello");
//   return function sayNamste() {
//     console.log("Namste");
//   };
// }

// let result = sayHello();
// result();

// In fuction callback we can pass a function as a argument to another function and the function is known as a callback function and in which function we are passing callback fun. is knwon as High-order function/parent function
// function firstFunction(callback) {
//   console.log("Hello welcome user !");
//   let result = callback("Aman");
//   console.log(result);
// }

// firstFunction((name) => {
//   return name;
// });

// const arr = [10, 20, 30, 40, 50, 60, 70];
// arr.push(80);
// arr.pop(80);
// arr.shift(10);
// arr.unshift(10);

// arr.forEach((item) => item * 2);

// console.log(arr);

// // Parameter Destructuring
// function displayUser({ name, age, city = "Unknown" }) {
// console.log(`${name}, ${age} years, ${city}`);
// }
// displayUser({ name: "Sita", age: 25, city: "Lucknow" });
// // Sita, 25 years, Lucknow

// Rest Parameters — ...args (multiple arguments collect karta hai)
// const arr = [10, 20, 30, 40, 50, 60];
// arr.forEach((value, index) => {
//   console.log(`Index: ${index}, Value: ${value}`);
// });

// let names = ["Aman", "Sapna", "Priya", "Sahil", "Aashu"];
// names.map((name) => {
//   console.log(name.toUpperCase());
// });

// let numbers = [10, 20, 30, 40, 50, 60, 70];
// let result = numbers.map((num) => {
//   return num * 2;
// });

// console.log(result);
// console.log(numbers);

// let fruits = ["Apple", "Banana", "Mango"];
// // forEach — loop karta hai but return nahi karta
// fruits.forEach(function (fruit, index) {
//   console.log(`${index + 1}. ${fruit}`);
// });
// // 1. Apple
// // 2. Banana
// // 3. Mango
// // Arrow function ke saath
// fruits.forEach((fruit) => console.log(fruit.toUpperCase()));
// // APPLE BANANA MANGO

// Objects ka array transform karna
// let students = [
// { name: "Ravi", marks: 90 },
// { name: "Priya", marks: 85 }
// ];
// let names2 = students.map(student => student.name);
// console.log(names2); // ["Ravi", "Priya"]

// Count occurrences
// let fruits = ["apple", "banana", "apple", "mango", "banana", "apple"];
// let count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});
// console.log(count); // {apple: 3, banana: 2, mango: 1}

// let arr = new Array(5).fill(10);
// console.log(arr)

const cars = ["Audi", "Fortuner", "BMW"];
cars.splice(1, 1, "Tata");
console.log(cars);
