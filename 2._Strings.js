// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const numberOneFloat = parseFloat(numberOne);
const numberTwoFloat = parseFloat(numberTwo);
const resultFloat = numberOneFloat + numberTwoFloat;

console.log(resultFloat);

// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherNumberOneFloat = parseFloat(anotherNumberOne);
const anotherNumberTwoFloat = parseFloat(anotherNumberTwo);

const resultAnotherFloat = (anotherNumberOneFloat + anotherNumberTwoFloat).toFixed(2);

console.log(resultAnotherFloat);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const resultWithFiveDecimals = parseFloat( (one + two + three) / 3 ).toFixed(5);

console.log(resultWithFiveDecimals);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const findTheC = letters.lastIndexOf("c");

console.log(findTheC);




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const findIndexOfJToBigify = fact.lastIndexOf("j");
const bigFact = fact.slice(0, findIndexOfJToBigify) + fact.charAt(findIndexOfJToBigify).toUpperCase() + fact.slice(findIndexOfJToBigify + 1);

console.log(bigFact);

// --------------------------------------



