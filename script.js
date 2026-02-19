function sayHello() {
  console.log("Hello !");
}

let knowOddEven = function oddEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

sayHello();
console.log(knowOddEven(6));
