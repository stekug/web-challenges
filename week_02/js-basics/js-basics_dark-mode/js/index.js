console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const butDarkMode = document.querySelector('[data-js="dark-mode-button"]');
const butLightMode = document.querySelector('[data-js="light-mode-button"]');
const butToggle = document.querySelector('[data-js="toggle-button"]');

butDarkMode.addEventListener("click", () => {
  bodyElement.classList.add("dark");
});

butLightMode.addEventListener("click", () => {
  bodyElement.classList.remove("dark");
});

butToggle.addEventListener("click", () => {
  bodyElement.classList.toggle("dark");
});
