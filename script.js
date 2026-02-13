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

let str = "javascript";
let count = 0;

for (let i = 0; i < str.length; i++) {
  let ch = str[i].toLowerCase();
  if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") {
    count++;
  }
}

console.log(count);
