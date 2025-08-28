// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif

console.log(`My firstname is ${firstName} and my lastname is ${lastName}`);

// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2024";
const increment = 1;

// Add the year plus the increment
// The result should be 2025
// You cannot touch the first or the second line

const currentYear1 = Number(year) + increment; // ikke typecasting i js, men at parse
const currentYear2 = parseInt(year) + increment;
const currentYear3 = +year + increment;

console.log(currentYear1); // ikke regne i console ...
console.log(currentYear2);
console.log(currentYear3);

const possibleNumber = "323f432fef";
console.log(Number(possibleNumber)); // NotaNumber NaN
console.log(parseInt(possibleNumber)); // Tager tal til første bogstav

// --------------------------------------