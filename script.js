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
function firstFunction(callback) {
  console.log("Hello welcome user !");
  let result = callback("Aman");
  console.log(result);
}

firstFunction((name) => {
  return name;
});
