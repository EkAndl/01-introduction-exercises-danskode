// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const greetings = { message: "Hello, earthling! I bring peace." };

// Log the message 

console.log(greetings.message);
console.log(greetings["message"]);

// --------------------------------------
// Exercise 2 - Defining an object.

// Create an object that has your name and age. 

const me = {
    myName : "Nicolai",
    myAge : 42
}

console.log(`Hello, my name is ${me.myName} and my age is ${me.myAge}!`);

// --------------------------------------
// Exercise 3 - Add a key-value pair

const stackOverflow = {
    myCode : "System.out.println('Hello World!')"
};

// make a rule called isAllowed and let the value be true // rule = ny property ...

stackOverflow.isAllowed = true;

console.log('myCode: "' + stackOverflow.myCode + '" and isAllowed: "' + stackOverflow.isAllowed +'"' );

// --------------------------------------
// Exercise 4 - Remove a property

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description;

thisSong.about = "Just a tribute.";

console.log(thisSong);

// --------------------------------------


