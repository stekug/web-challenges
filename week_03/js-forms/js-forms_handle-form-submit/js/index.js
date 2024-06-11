console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  const formElements = event.target.elements;
  let age = parseInt(data.age);
  let badness = parseInt(data.badness);
  let ageBadness = age + badness;
  console.log(data);
  console.log(`The age-badness-sum of ${data.firstName} is ${ageBadness}`);
  formElements.firstName.focus();
  event.target.reset();
});
