// function createUser(firstName, lastName, age, city) {
//   const user = {};
//   user.firstName = firstName;
//   user.lastName = lastName;
//   user.age = age;
//   user.city = city;
//   user.about = function () {
//     return `Username is ${this.firstName} ${this.lastName} and he is ${this.age} year's old.`;
//   };
//   user.is18 = function () {
//     return this.age >= 18;
//   };

//   return user;
// }
// const user2 = createUser("Anand", "Parmar", 22, "Indore");
// const user1 = createUser("Aman", "Patel", 22, "Indore");
// console.log(user2);
// const user2Detail = user2.about();
// console.log(user2Detail);
// const is18 = user2.is18();
// console.log(is18);

// let num = 6;
// let fact = 1;
// for (let i = 1; i <= num; i++) {
//   fact *= i;
// }
// console.log(fact);

// let str = "naman";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   rev = rev + str[i];
// }

// if (str === rev) {
//   console.log("Palindrome");
// } else {
//   console.log("Not Palindrome");
// }

//Asychronus JavaScript

// console.log("Script Started");

// for (let i = 1; i <= 30; i++) {
//   console.log("Inside the loop...");
// }
// console.log("Script Ended");

// console.log("Script Started");

// const id = setTimeout(() => {
//   for (let i = 1; i <= 100; i++) {
//     console.log("Inside the loop...");
//   }
// }, 1000);

// console.log("Script Ended");
// clearTimeout(id);

// function first(callback) {
//   console.log(`Welcome!`);
//   const myobj = {
//     fname: "Aman",
//     lname: "Patel",
//     age: 22,
//     city: "Indore",
//   };
//   console.log(
//     `User ${myobj.fname} ${myobj.lname} and the age of the user is ${myobj.age} and he is from ${myobj.city}.`,
//   );
//   callback();
// }

// first(() => {
//   console.log(`Greeting ended !`);
// });

let count = 0;

let id = setInterval(() => {
  console.log("Hello World !");
  count++;
  if (count === 10) {
    clearInterval(id);
  }
}, 1000);
