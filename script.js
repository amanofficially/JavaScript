function createUser(firstName, lastName, age, city) {
  const user = {};
  user.firstName = firstName;
  user.lastName = lastName;
  user.age = age;
  user.city = city;
  user.about = function () {
    return `Username is ${this.firstName} ${this.lastName} and he is ${this.age} year's old.`;
  };
  user.is18 = function () {
    return this.age >= 18;
  };

  return user;
}
const user2 = createUser("Anand", "Parmar", 22, "Indore");
// const user1 = createUser("Aman", "Patel", 22, "Indore");
console.log(user2);
const user2Detail = user2.about();
console.log(user2Detail);
const is18 = user2.is18();
console.log(is18);
