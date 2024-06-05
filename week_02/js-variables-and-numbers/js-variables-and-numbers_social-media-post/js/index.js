console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/
// --v-- write your code here --v--
const postTitle = "Just found the coolest book!";
const postText =
  "I stumbled upon this gem and couldn't put it down. It's packed with fascinating facts, intriguing stories, and incredible insights. Perfect for a cozy afternoon or an adventurous weekend read. If you're looking for something new and exciting, this book is a must-read! #BookLovers #NewRead #BookRecommendation";
let postLikes = 666;
const userName = "John Doe";
const isReported = true;

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log(postTitle);
console.log(postText);
console.log(postLikes);
postLikes++;
console.log(postLikes);
console.log(isReported);
// --^-- write your code here --^--
