const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  if (age >= 1 && age <= 17) {
    output.innerText = "You are a teen";
  } else if (age > 17) {
    output.innerText = "You are not a teen";
  } else {
    output.innerText = "Please try again, you did not enter your age!";
  }

  // Exercise:
  // Use conditions and the logical AND operator to write
  // "You are a teen." or "You are not a teen." into the output.
});
