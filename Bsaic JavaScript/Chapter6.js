/*
==========================================================
06. DOM Manipulation in JavaScript
File Name : 06_dom_manipulation.js
Level     : Beginner
==========================================================

DOM = Document Object Model

DOM allows JavaScript to:
- Access HTML elements
- Modify content
- Handle events
- Change styles
- Work with forms

----------------------------------------------------------
Topics Covered:
1. DOM Selectors
2. Event Handling
3. Style & Class Manipulation
4. Form Handling
==========================================================
*/

// ==========================================================
// IMPORTANT NOTE
// ==========================================================
/*
DOM works ONLY in browser environment.
This file is for learning/reference.
To test this code:
- Link it with an HTML file
- Open in browser
*/

// ==========================================================
// 1. DOM SELECTORS
// ==========================================================

/*
DOM Selectors are used to access HTML elements.
*/

// getElementById()
let title = document.getElementById("title");
console.log(title.textContent);

// getElementsByClassName()
let paragraphs = document.getElementsByClassName("text");
console.log(paragraphs[0].textContent);

// getElementsByTagName()
let allParas = document.getElementsByTagName("p");
console.log(allParas.length);

// querySelector()
let firstPara = document.querySelector(".text");
console.log(firstPara.textContent);

// querySelectorAll()
let allTextParas = document.querySelectorAll(".text");
allTextParas.forEach((p) => {
  console.log(p.textContent);
});

// ==========================================================
// 2. EVENT HANDLING
// ==========================================================

/*
Events are actions performed by user:
- click
- input
- submit
- mouseover
*/

let button = document.getElementById("btn");

button.addEventListener("click", function () {
  console.log("Button clicked");
  title.textContent = "Button was clicked";
});

// ==========================================================
// 3. STYLE & CLASS MANIPULATION
// ==========================================================

/*
JavaScript can dynamically change CSS.
*/

// Change style directly
title.style.color = "blue";
title.style.fontSize = "28px";

// Class manipulation
title.classList.add("heading");
title.classList.remove("heading");

// Toggle class
button.addEventListener("click", function () {
  title.classList.toggle("active");
});

// ==========================================================
// 4. FORM HANDLING
// ==========================================================

/*
Form handling includes:
- Reading input values
- Preventing page reload
- Validation
*/

let form = document.getElementById("userForm");
let output = document.getElementById("output");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop page refresh

  let username = document.getElementById("username").value;
  let age = document.getElementById("age").value;

  if (username === "" || age === "") {
    output.textContent = "Please fill all fields";
    output.style.color = "red";
    return;
  }

  output.textContent = `Name: ${username}, Age: ${age}`;
  output.style.color = "green";

  form.reset();
});

/*
==========================================================
IMPORTANT POINTS
==========================================================

- DOM works only in browser
- JavaScript runs after HTML is loaded
- Events make pages interactive
- Form validation is necessary

==========================================================
SUMMARY
==========================================================

DOM Selectors:
- getElementById()
- getElementsByClassName()
- getElementsByTagName()
- querySelector()
- querySelectorAll()

Event Handling:
- addEventListener()

Style & Class:
- element.style
- classList.add(), remove(), toggle()

Form Handling:
- submit event
- event.preventDefault()
- input.value

==========================================================
END OF CHAPTER 06
==========================================================
*/
