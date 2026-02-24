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

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello i'm ${this.name}.`);
  }
}

class User extends Person {
  constructor(name, age, city) {
    super(name, age);
    this.city = city;
  }
  get greet() {
    //getter
    console.log(`Hello i'm ${this.name} from ${this.city}.`);
  }
  set updateCity(newCity) {
    this.city = newCity;
  }
}

let p1 = new Person("Aman", 21);
let p2 = new User("Aman", 21, "Indore");
console.log(p2);
p2.updateCity = "Pune";
console.log(p2);
