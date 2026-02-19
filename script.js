function sayHello() {
  console.log("Hello !");
}

let knowOddEven = (num) => {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

sayHello();
console.log(knowOddEven(2));
