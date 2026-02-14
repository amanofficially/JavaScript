const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");

// callback hell
// setTimeout(() => {
//   heading1.textContent = "Aman";
//   heading1.style.color = "red";
//   setTimeout(() => {
//     heading2.textContent = "Aryan";
//     heading2.style.color = "orange";
//     setTimeout(() => {
//       heading3.textContent = "Sudha";
//       heading3.style.color = "pink";
//       setTimeout(() => {
//         heading4.textContent = "Nidhi";
//         heading4.style.color = "violet";
//         setTimeout(() => {
//           heading5.textContent = "Radha";
//           heading5.style.color = "lightblue";
//           setTimeout(() => {
//
//             setTimeout(() => {
//               heading7.textContent = "Neetu";
//               heading7.style.color = "lightpink";
//             }, 1000);
//           }, 3000);
//         }, 2000);
//       }, 1000);
//     }, 2000);
//   }, 2000);
// }, 1000);


// Callback Hell......
function changeText(
  element,
  text,
  color,
  time,
  onSuccessCallback,
  onFailureCallback,
) {
  setTimeout(() => {
    if (element) {
      element.textContent = text;
      element.style.color = color;

      if (onSuccessCallback) {
        onSuccessCallback();
      }
    } else {
      if (onFailureCallback) {
        onFailureCallback();
      }
    }
  }, time);
}

changeText(
  heading1,
  "Aman",
  "orange",
  1000,
  () => {
    changeText(
      heading2,
      "Aryan",
      "red",
      1000,
      () => {
        changeText(
          heading3,
          "Sudha",
          "pink",
          1000,
          () => {
            changeText(
              heading4,
              "Nidhi",
              "violet",
              1000,
              () => {
                changeText(
                  heading5,
                  "Ankit",
                  "blue",
                  1000,
                  () => {
                    changeText(
                      heading6,
                      "Radha",
                      "green",
                      1000,
                      () => {
                        changeText(
                          heading7,
                          "Neetu",
                          "lightgreen",
                          1000,
                          () => {},
                          () => {
                            console.log(`Heading7 Doen't exsit.`);
                          },
                        );
                      },
                      () => {
                        console.log(`Heading6 Doen't exsit.`);
                      },
                    );
                  },
                  () => {
                    console.log(`Heading5 Doen't exsit.`);
                  },
                );
              },
              () => {
                console.log(`Heading4 Doen't exsit.`);
              },
            );
          },
          () => {
            console.log(`Heading3 Doen't exsit.`);
          },
        );
      },
      () => {
        console.log(`Heading2 Doen't exsit.`);
      },
    );
  },
  () => {
    console.log(`Heading1 Doen't exsit.`);
  },
);
