function userInfo() {
  console.log(
    `Username name is ${this.firstName} and he/she is ${this.age} year's old and he/she is from ${this.city}`,
  );
}

const user1 = {
  firstName: "Aman",
  age: 22,
  city: "Indore",
  about: userInfo,
};
const user2 = {
  firstName: "Anand",
  age: 21,
  city: "Mumbai",
  about: userInfo,
};
const user3 = {
  firstName: "Aashu",
  age: 21,
  city: "Pune",
  about: userInfo,
};

user1.about();
