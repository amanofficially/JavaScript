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
const user1 = {
  fname: "Aman",
  city: "Indore",
  about: function (state, age) {
    return `Hello my name is ${this.fname}, i'm ${age} years old. I'm from ${this.city}, ${state}.`;
  },
};

const user2 = {
  fname: "Anand",
  city: "Pune",
};

console.log(user1.about.call(user2, "Maharashtra"));
console.log(user1.about.apply(user1, ["Madhya Pradesh", 22]));
let result = user1.about.bind(user1, "Madhya Pradesh");
result();
