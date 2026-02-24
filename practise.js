// const user1 = {
//   name: "Aman",
//   age: 22,
//   id: 401,
// };
// const user2 = {
//   name: "Anand",
//   age: 21,
//   id: 406,
// };
// const userMethods = {
//   about: function () {
//     console.log(`Hello i'm ${this.name} and i'm ${this.age} years old.`);
//   },
//   is18: function () {
//     return this.age >= 18;
//   },
//   sing: function () {
//     console.log(`User is singning..`);
//   },
// };

function createUser(name, age, id) {
  // const user = Object.create(createUser.prototype);
  this.name = name;
  this.age = age;
  this.id = id;
}

createUser.prototype.about = function () {
  console.log(`Hello i'm ${this.name}.`);
};

createUser.prototype.is18 = function () {
  return this.age >= 18;
};
createUser.prototype.sing = function () {
  console.log(`User is singning..`);
};

let user1 = new createUser("Aman", 22, 401);
// console.log(user1);
user1.about();
console.log(user1.is18());
user1.sing();
