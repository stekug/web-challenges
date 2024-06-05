console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

if (SUPER_SECRET_PASSWORD === receivedPassword) {
  console.log("Welcome! You are logged in as Brunhilde1984.");
} else {
  console.log("Access denied!");
}

// Part 2: Even / Odd
const number = 6;

if (number % 2 === 0) {
  console.log("even number");
} else {
  console.log("odd number");
}

// Part 3: Hotdogs
const numberOfHotdogs = 50;
let hotdogPrice = 0;

if (numberOfHotdogs < 5) {
  hotdogPrice = 2;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
  hotdogPrice = 1.5;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
  hotdogPrice = 1;
} else if (numberOfHotdogs >= 1000000) {
  hotdogPrice = 0.1;
}

if (numberOfHotdogs >= 1) {
  const payAmount = numberOfHotdogs * hotdogPrice;
  console.log(`You have to pay ${payAmount} € for your Hotdogs!`);
} else {
  console.log("Please buy a Hotdog!");
}

// Part 4: Daytime
const currentHour = 12;
const msgLearn = "Still need to learn";
const msgParty = "Partytime!";

let statement = currentHour < 17 ? msgLearn : msgParty;

console.log(statement);

// Part 5: Greeting
const userName = "Jimmy";

const greeting =
  "Hello " + (userName === "Archibald" ? "Coach" : userName) + "!";

console.log(greeting);
