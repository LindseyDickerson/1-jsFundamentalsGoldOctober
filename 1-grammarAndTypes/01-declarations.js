// What is a variable? Variables are named containers for storing data values. We name the variables os that we can refer to this data again. 

let a = 2;

    let    b    =     1;
/*  (1)   (2)  (3)   (4)

1 - Keyword
2 - Variable Name
3 - assignment Operator
4 - Variable Value */

/*notes on variables:
//1)  A variable name must begin with a letter, underscore, or dollar sign
//2)  Numbers may follow the above characters, but cannot come first
//3)  JavaScript is case sensitive-- 'hello' and 'HeLlo' are different variables
//4)  variables must be identified with unique names
//5)  No spaces are allowed in variable names
//6)  camelCase is the best practice for naming variables. 
This is good practice because it helps keep variables readable--  var myName = 'Autumn'; 
*/

/* Declarationas are on the left side of a variable.
    it is simply the var x
    It is on the left side of the assignment operator (=)

Initializations are on the RIGHT SIDE of a variable
    It sets the value of the variable.
    It inocrporates the variable name (x), the assignment operator (=), and the value (10) => x = 10
    (=) assignment operator is NOT the same as the equal operator (== or ===) */

let x;
console.log('Declaration:', x);
/*Comes back undefined*/

x = 10;
console.log('Initializing 1:', x);
/* output Initializing 1: 10 */

x = 33;
console.log('Initializing 2:', x);
/* output Initializing 2: 33 */

let y = 'Hello';
console.log('Both:', x, y);
/* output: Both: 33 Hello */

let today = 'Great!';
const elevenFifty = 'Wonderful';
console.log(today, elevenFifty);
/* output Great! Wonderful  */

today = 'Lovely';
console.log(today, elevenFifty);
/* output Lovely Wonderful */

// elevenFifty = 'Superr';
// console.log(today, elevenFifty);
/* get error because we already declared elevenFifty a const, cannot change again */