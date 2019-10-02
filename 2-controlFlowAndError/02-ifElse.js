/* *************************
If Else conditional
***************************/

let weather = 75;
if (weather < 70) {
    console.log('Wear a jacket');
} else {
    console.log('No jacket necessary');
}
//output: No jacket necessary
// on if else statements, when the 'if' statement is true, it does not continue to the else statement and stops there

/* Challenge */
//Bronze
let name = 'Lindsey';
if (name == 'Lindsey') {
    console.log(name);
} else {
    console.log('Hello, what is your name?');
}
// output: Lindsey

/* Silver */
if (name == 'Lindsey') {
    console.log('Hello, my name is' + ' ' + name);
}
// output: Hello, my name is Lindsey

/* Gold */
if (name != 'Lindsey') {
    console.log('Hello, is your name' + ' ' + name);
}
// output: no output, name is Lindsey

/* Challenge 2 */

/*Bronze */

let name = 'aUTuMN';

if (name.charAt(0) == name.charAt(0).toUpperCase() ) {
    console.log(name);
} else {
    console.log("Hey, it's not written correctly.");
}
// could also write it as (name[0] == ...)

// Silver

// If the first letter of a string is uppercase, only console.log that letter
// if it is not, console.log the rest of the string Without the first letter, and change them to lowercase 

let name = 'aUTuMN';
if (name[0] == name.charAt(0).toUpperCase()) {
    firstLetter = name[0];
    console.log(firstLetter);
} else {
    let otherLetters = name.slice(1).toLowerCase();
    console.log(otherLetters);
}

//gold
//If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
//If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
let name = 'aUTuMN';
if (name[0] == name.charAt(0).toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase();
    console.log(firstLetter);
} else {
    let otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    console.log(otherLetters);
}

//My answer to the challenge
let age = 19;

if (age <= 17) {
    console.log("Sorry, you're too young to do anything.");
} else if (age >= 18 && age <= 20) {
    console.log("Yay! you can vote!");
} else if (age >= 21 && age <= 24) {
    console.log('Yay! You can drink!');
} else if (age >= 25) 
    console.log('Yay! you can rent a car!');

    // OR YOU COULD ALSO (answer given by Ing)

let age = 22;

if (age >= 25) {
    console.log('Yay! You can rent a car!');
} else if (age >= 21) {
    console.log('Yay! You can drink!');
} else if (age >= 18) {
    console.log('Yay! You can vote!');
} else { 
    console.log('Sorry, you\'re too young to do anything fun.'); 
}
//you could also set the statements we are console logging to variables and just put the varibale in the console log request. You can include each variable that is true this way.

/*
if (conditionOne) {
	//Do this
} else {
	if(conditionTwo) {
		//Do this instead
	} else {
		if (conditionThree) {
			//No do this
		} else {
			//Finally do this
		}
	}
}

*/