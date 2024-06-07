console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');
const time = new Date().getHours();
const dayOfWeek = new Date().getDay();
// console.log(dayOfWeek);

function getGreeting() {
  if (time >= 6 && time <= 12) {
    return "Good Morning";
  } else if (time >= 13 && time <= 18) {
    return "Good Afternoon";
  } else if (time >= 19 && time <= 22) {
    return "Good Evening";
  } else {
    return "Good Night";
  }
}

function getDayColor() {
  if (dayOfWeek === 1) {
    return "darkgrey";
  } else if (dayOfWeek >= 2 && dayOfWeek <= 5) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
