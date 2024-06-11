console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

tosCheckbox.addEventListener("input", (event) => {
  if (tosCheckbox.checked === true) {
    tosError.setAttribute("hidden", "");
  } else {
    tosError.removeAttribute("hidden");
  }
});

hideTosError();

form.addEventListener("submit", (event) => {
  event.preventDefault();
  // --v-- write your code here --v--
  if (tosCheckbox.checked === true) {
    hideTosError();
  } else {
    showTosError();
    return false;
  }
  console.log("test");
  alert("Form submitted");
});

// --^-- write your code here --^--

// eslint-disable-next-line no-alert

// function TosError() {
//   if (tosCheckbox.checked === true) {
//     tosError.setAttribute("hidden", "");
//   } else {
//     tosError.removeAttribute("hidden");
//   }
// }
// tosCheckbox.addEventListener("input", (event) => {
//   TosError(event);
// });
