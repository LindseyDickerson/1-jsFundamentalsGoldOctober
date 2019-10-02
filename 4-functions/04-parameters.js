/****************
 * Parameters
*****************/


function hi(name) {
    //        1
    console.log(`Hi ${name}!`); //string interpolation
    //                 2
}
hi('John'); // Hi John!
hi('Danielle'); // Hi Danielle!
hi('Kiana'); // Hi Kiana!
hi('Eli'); // Hi Eli!
//   3

/*
1 - the parameter(s) we need to take into the function
2 - using string interpolation, we can refer to the parameter that was passed 
3 - define the parameter's value
*/

function pet(animal) {
    console.log(`My pet's name is ${animal}!`);
}
pet('Georgie');
pet('Luna');
pet('Finn');

/*
output:
My pet's name is Georgie!
My pet's name is Luna!
My pet's name is Finn! */

/* Challenge
Write a function that takes in two parameters;
One parameter is for a first name,
The other parameter is for the last name;
Have them come together in a variable inside the function. 
console.log(`Hello, my name is <YOUR NAME>`);
call your function.
*/


function challenge(firstName, lastName) {
    let fullName = firstName + ' ' + lastName;
 console.log(`Hello, my name is ${fullName}.`);
}
challenge('Lindsey', 'Dickerson');
challenge('Inigo', 'Montoya');
//output: Hello, my name is Lindsey Dickerson.
//output: Hello, my name is Inigo Montoya.