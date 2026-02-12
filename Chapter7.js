/*
==========================================================
07. Asynchronous JavaScript
File Name : 07_async_javascript.js
Level     : Beginner
==========================================================

JavaScript is SINGLE-THREADED.
It executes ONE task at a time.

Asynchronous JavaScript allows:
- Long tasks to run in background
- Non-blocking execution
- Better performance & user experience

----------------------------------------------------------
Topics Covered:
1. Callbacks
2. Promises
3. Async / Await
4. setTimeout()
5. setInterval()
==========================================================
*/

// ==========================================================
// 1. CALLBACKS
// ==========================================================

/*
Callback:
A function passed as an argument to another function
and executed after the main task is completed.
*/

// Basic callback example
function greet(name, callback) {
  console.log("Hello " + name);

  if (typeof callback === "function") {
    callback();
  }
}

function afterGreeting() {
  console.log("Greeting completed");
}

greet("Aman", afterGreeting);

// ----------------------------------------------------------
// Callback with asynchronous task
// ----------------------------------------------------------

/*
setTimeout():
Executes code after a delay
Time is in milliseconds
*/

setTimeout(function () {
  console.log("This message appears after 2 seconds");
}, 2000);

/*
Problem: Callback Hell
Nested callbacks make code:
- Hard to read
- Hard to maintain
*/

// ==========================================================
// 2. PROMISES
// ==========================================================

/*
Promise:
Represents the result of an asynchronous operation.

Promise States:
1. Pending
2. Fulfilled
3. Rejected
*/

let myPromise = new Promise(function (resolve, reject) {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("Promise resolved successfully");
    } else {
      reject("Promise rejected");
    }
  }, 2000);
});

// Consuming a promise
myPromise
  .then(function (result) {
    console.log(result);
  })
  .catch(function (error) {
    console.log(error);
  });

// ----------------------------------------------------------
// Promise Chaining
// ----------------------------------------------------------

let chainPromise = new Promise((resolve) => {
  resolve(10);
});

chainPromise
  .then((num) => num + 5)
  .then((num) => num * 2)
  .then((finalResult) => {
    console.log("Final Result:", finalResult);
  });

// ==========================================================
// 3. ASYNC / AWAIT
// ==========================================================

/*
Async / Await:
Modern and clean way to handle promises.

Rules:
- async keyword before function
- await used inside async function
*/

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data fetched successfully");
    }, 2000);
  });
}

async function getData() {
  let result = await fetchData();
  console.log(result);
}

getData();

// ----------------------------------------------------------
// Error Handling using try / catch
// ----------------------------------------------------------

async function getDataWithErrorHandling() {
  try {
    let data = await fetchData();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

getDataWithErrorHandling();

// ==========================================================
// 4. setTimeout()
// ==========================================================

/*
setTimeout():
Runs a function ONCE after delay
*/

let timeoutId = setTimeout(() => {
  console.log("Executed after 3 seconds");
}, 3000);

// clearTimeout()
clearTimeout(timeoutId);

// ==========================================================
// 5. setInterval()
// ==========================================================

/*
setInterval():
Runs a function repeatedly after fixed time
*/

let count = 0;

let intervalId = setInterval(() => {
  count++;
  console.log("Interval count:", count);

  if (count === 5) {
    clearInterval(intervalId);
    console.log("Interval stopped");
  }
}, 1000);

/*
==========================================================
SUMMARY
==========================================================

Callbacks:
- Function passed as argument
- Can cause callback hell

Promises:
- Handle async operations cleanly
- Uses then() and catch()

Async / Await:
- Modern syntax
- Easier to read
- try/catch for errors

setTimeout():
- Runs once after delay

setInterval():
- Runs repeatedly
- clearInterval() stops it

==========================================================
END OF CHAPTER 07
==========================================================
*/
