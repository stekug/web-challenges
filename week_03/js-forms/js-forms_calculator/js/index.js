console.clear();

const form = document.querySelector('[data-js="form"]');
const resultOutput = document.querySelector('[data-js="result"]');

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let result;

  // --v-- write your code here --v--
  let numA = parseInt(form.numberA.value);
  let numB = parseInt(form.numberB.value);

  if (form.addition.checked) {
    result = add(numA, numB);
  } else if (form.subtraction.checked) {
    result = subtract(numA, numB);
  } else if (form.multiplication.checked) {
    result = multiply(numA, numB);
  } else {
    result = divide(numA, numB);
  }
  // --^-- write your code here --^--

  resultOutput.textContent = result;
});
