// Ternary

// Ternary is a shorthand statement of an if/else statement.

let w = 6;

if (w > 0) {
    console.log('yes');
} else {
    console.log('no');
}

(w > 0) ? console.log('yes') : console.log('no');

if (w == 0) {
    console.log("Hello");
} else if (w < 0) {
    console.log('hi');
} else {
    console.log('Goodbye');
}

(w == 0) ? console.log('hello') : (w < 0) ? console.log('hi') : console.log('goodbye');

/* rewrite the age challenge in the ifElse file to a ternary
*/
let age = 30;
let car = 'Yay! You can rent a car!';
let drink = 'Yay! You can drink!';
let vote = 'Yay! You can vote!';
let noFun = 'Sorry, you\'re too young to do anything fun.'

(age >= 25) ? console.log(car) : (age >= 21) ? console.log(drink) : (age >= 18) ? console.log(vote) : console.log(noFun);