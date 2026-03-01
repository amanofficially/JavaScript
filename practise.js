// // const user1 = {
// //   name: "Aman",
// //   age: 22,
// //   id: 401,
// // };
// // const user2 = {
// //   name: "Anand",
// //   age: 21,
// //   id: 406,
// // };
// // const userMethods = {
// //   about: function () {
// //     console.log(`Hello i'm ${this.name} and i'm ${this.age} years old.`);
// //   },
// //   is18: function () {
// //     return this.age >= 18;
// //   },
// //   sing: function () {
// //     console.log(`User is singning..`);
// //   },
// // };

// class CreateUser {
//   constructor(name, age, id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//   }
//   about() {
//     console.log(`Hello i'm ${this.name}.`);
//   }

//   is18() {
//     return this.age >= 18;
//   }
//   sing() {
//     console.log(`User is singning..`);
//   }
// }

// let user1 = new CreateUser("Aman", 22, 401);
// console.log(user1);
// user1.about();
// // function CreateUser(name, age, id) {
// //   // const user = Object.create(createUser.prototype);
// //   this.name = name;
// //   this.age = age;
// //   this.id = id;
// // }

// // CreateUser.prototype.about = function () {
// //   console.log(`Hello i'm ${this.name}.`);
// // };

// // CreateUser.prototype.is18 = function () {
// //   return this.age >= 18;
// // };
// // CreateUser.prototype.sing = function () {
// //   console.log(`User is singning..`);
// // };

// // let user1 = new CreateUser("Aman", 16, 401);
// // // console.log(user1);
// // console.log(CreateUser.prototype === user1.__proto__);
// // for (let key in user1) {
// //   console.log(key);
// // }
// // user1.about();
// // console.log(user1.is18());
// // user1.sing();

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   greet() {
//     console.log(`Hello i'm ${this.name}.`);
//   }
// }

// class User extends Person {
//   constructor(name, age, city) {
//     super(name, age);
//     this.city = city;
//   }
//   get greet() {
//     //getter
//     console.log(`Hello i'm ${this.name} from ${this.city}.`);
//   }
//   set updateCity(newCity) {
//     this.city = newCity;
//   }
// }

// let p1 = new Person("Aman", 21);
// let p2 = new User("Aman", 21, "Indore");
// console.log(p2);
// p2.updateCity = "Pune";
// console.log(p2);

// function func() {
//   let count = 0;
//   return function () {
//     if (count < 1) {
//       console.log(`Hi you called me !`);
//       count++;
//     } else {
//       console.log(`Main already call ho chuka hun !`);
//     }
//   };
// }

// const myFun = func();
// myFun();
// myFun();

// const usr1 = {
//   name: "Aman",
//   age: 22,
//   id: 401,
// };

// const usr2 = {
//   name: "Anand",
//   age: 21,
//   id: 406,
// };

// const userMethods = {
//   about: function () {
//     return `Hello i'm ${this.name} and i'm ${this.age} years old.`;
//   },
//   is18: function () {
//     return age >= 18;
//   },
//   address: function () {
//     console.log(`Hello i'm from ${this.city}.`);
//   },
// };
// class Person {
//   constructor(name, age, id) {
//     this.name = name;
//     this.age = age;
//     this.id = id;
//   }
//   about() {
//     console.log(`Hello i'm ${this.name}`);
//   }
// }

// class User extends Person {
//   constructor(name, age, id, city) {
//     super(name, age, id);
//     this.city = city;
//   }

//   static greet() {
//     console.log(`Hello & Welcome ${this.name}`);
//   }

//   get about() {
//     return `Hello i'm ${this.name} form ${this.city}.`;
//   }
// }

// let p1 = new Person("Aman", 22, 401);
// let p2 = new User("Anand", 0, 406, "Indore");
// console.log(p1);
// p1.about();
// console.log(p2);
// console.log(p2.about);
// p2.upadteAge = 22;
// console.log(p2);
// User.greet();

// function createBank() {
//   let balance = 0;

//   return {
//     deposit(amount) {
//       balance += amount;
//       console.log(`Deposited: ${amount}\nBalance: ${balance}`);
//     },
//     withdraw(amount) {
//       if (amount > balance) {
//         console.log("Insufficient funds!");
//       } else {
//         balance -= amount;
//         console.log(`Withdrawn: ${amount}\nBalance: ${balance}`);
//       }
//     },
//     getBalance() {
//       return balance;
//     },
//   };
// }

// let myBank = createBank();
// // myBank.deposit(20000);
// // myBank.withdraw(10000);
// myBank.deposit(50000);
// console.log(myBank.getBalance());

//Asynchronous JavaScript
// console.log(`Script Started.`);

// const id = setTimeout(() => {
//   console.log(`Hello World I'm setTimeout.`);
// }, 1000);

// console.log(`Clearning SetTimeout`);
// clearTimeout(id);
// console.log(`Script Ended.`);

// console.log(`Script Started.`);

// const id = setInterval(() => {
//   console.log(`${Math.floor(Math.random(100) * 10)}`);
// }, 1floor
// // console.log(`Clearning SetTimeout`);
// // clearTimeout(id);
// console.log(`Script Ended.`);

// const body = document.body;
// const button = document.querySelector(".btn");

// const id = setInterval(() => {
//   const red = Math.floor(Math.random() * 126);
//   const green = Math.floor(Math.random() * 126);
//   const blue = Math.floor(Math.random() * 126);
//   const rgb = `rgb(${red},${green},${blue})`;
//   body.style.backgroundColor = rgb;
// }, 1000);

// button.addEventListener("click", () => {
//   clearInterval(id);
//   button.textContent = body.style.background;
// });

function getNumber(a, b, callback) {
  console.log(`Numbers are :- ${a} ${b}`);
  callback(a, b);
}
getNumber(10, 20, (a, b) => {
  console.log(`Sum :- ${a + b}`);
});
