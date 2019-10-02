// Literals

//in JS there are 2 types of variables
// javascript defines 2 types of values: fixed values and variable values
// Fixed values: literals (hard coded)
// variable values: variables (used for things like an API)

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday']; //a literal
//when console.log(days), you get each day
console.log(days.toString()); //toString() is a method
console.log(days.length); //.length is a property

let tired = true; // true is a boolean

let soup = { //this is an object because it holds data, which are key value pairs
    a: 'chicken noodle',
    b: 'tomato',
    c: 'beef and barley'
}

console.log(soup.a); //using dot notation, go into the soup object, and selecting the option desired.
//output: chicken noodle
console.log(soup.c);
//output: beef and barley
console.log(soup.c.length);
//output: 15
console.log(soup.c.toUpperCase());
//output: BEEF AND BARLEY

let car = 'Honda';
let dec = 10.2;
//can declare and hardcode the value of a variable.