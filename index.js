import getPosts, { getPostlength } from "./postController.js";

// const {generateRandomNumber, celciusToFahrenheit} = require("./utils");

// console.log(`Random Number: ${generateRandomNumber()}`);
// console.log(`Celcius to Fahrenheit: ${celciusToFahrenheit(0)}`);
console.log(getPosts());
console.log(`Post Length: ${getPostlength()}`);