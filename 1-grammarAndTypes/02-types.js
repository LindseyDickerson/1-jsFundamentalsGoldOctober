//Boolean
//boolean can represent: true/false, yes/no, on/off
//no quotations when using booleans

let i = true;
let j = false;
console.log(i);
//output: true

//Null
//the data container is empty
//null = empty value. It is not "0" or undefined.
//empty container, nothing is in it, but it still exists as a space to fill.

let empty = null;
console.log(empty);
//output: null

//Undefined
//undefined = no value assigned, not even empty container
//undefined is NOT an error. Get this when variable hasn't been set or created yet

let undef = undefined; //never do this
console.log(undef);
// output: undefined

let grass;
console.log(grass);
//output: undefined 

//Numbers
let degrees = 90;
console.log(degrees);
//output: 90

let precise = 999999999999999;
console.log(precise);
//output: 99999999999999
let rounded = 9999999999999999;
console.log(rounded);
//output 10000000000000000 because can only do 15 digits, after that rounds up

let notQuite = 0.2 + 0.1;
console.log(notQuite)
//output: 0.30000000000000004

let numbersAreHard = (0.2 * 10 + 0.1 * 10) / 10;
console.log(numbersAreHard);
//output: 0.3

//Strings
//Strings are datatypes that are used to represent text and wrapped in either single or double quotes

let stringOne = "double quotes";
let stringTwo = 'single quotes';
console.log(stringOne, stringTwo);
//output: double quotes single quotes

let first = 1050 + 100;
let second = '1050' + '100';
console.log(first, second);
//output 1150 '1050100'

console.log(typeof first);
console.log(typeof second);
//output number; string

let third = 1050 + '100';
console.log(third);
//output: 1050100
console.log(typeof third);
//output: string

//Objects
//containers that can hold multiple kinds of data types using curly braces
let car = {
    color: 'red',
    tires: 4,
    extras: 'A/C and Radio',
    cool: true
}
//key value pair = color: 'red' (separated by a comma)
console.log(car);
//output: { color: 'red', tires: 4, extras: 'A/C and Radio', cool: true }
console.log(typeof car);
//output: object

//Arrays
//Arrays are containers that hold lists of items;

let list = [ 'item1', 'item2', 'item3' ];
//   (1)  (2)  (3)
// (1) - name of array
// (2) - square brackets = array
// (3) - each item, regardless of datatype, is separated by commas.

let grocerylist = [ 'milk', 'apples', 'cereal' ];
console.log(grocerylist);
//output: [ 'milk', 'apples', 'cereal' ]
console.log(typeof grocerylist);
//output: object - because array is a type of an object

//addition vs concatenation
/* Check out JS coersion when you have time */

/*Challenge*/

let firstName = "Lindsey";
let lastName = "Dickerson";
let houseNumber = 1201;
let street = "Golfview Drive";
let aptNumber = "Apt C";
let city = "Carmel";
let state = "Indiana";
let zipcode = 46032;

console.log(firstName, lastName + ",", + houseNumber, street + ",", aptNumber + ",", city + ", " + state, zipcode);

//output: Lindsey Dickerson, 1201 Golfview Drive, Apt C, Carmel, Indiana 46032

//Strings - Properties
/*
Properties are qualities associated with a datatype.
Strings have properties associated with that string.
e.g. the length of a string is a property.
*/

let myName = 'Lindsey';
console.log(myName.length);
//output = 7

//Methods
//methods are tools that can help us manipulate data
// property = no parentheses .property
// methods = parentheses ex: .map()

let myNameIs = "Lindsey";
console.log(myNameIs.toUpperCase());
//output: LINDSEY

let home = 'My home is Indianapolis.';
console.log(home.includes('Indianapolis'));
//output: true (boolean)

//Challenge

let sent = 'This sentence will be split into individual parts';

//console.log(sent.split());
//output: [ 'This sentence will be split into individual parts' ]
//console.log(sent.split(''));
/*output: 
[ 'T',
  'h',
  'i',
  's',
  ' ',
  's',
  'e',
  'n',
  't',
  'e',
  'n',
  'c',
  'e',
  ' ',
  'w',
  'i',
  'l',
  'l',
  ' ',
  'b',
  'e',
  ' ',
  's',
  'p',
  'l',
  'i',
  't',
  ' ',
  'i',
  'n',
  't',
  'o',
  ' ',
  'i',
  'n',
  'd',
  'i',
  'v',
  'i',
  'd',
  'u',
  'a',
  'l',
  ' ',
  'p',
  'a',
  'r',
  't',
  's' ]
*/
console.log(sent.split(' '));
/*output:
[ 'This',
  'sentence',
  'will',
  'be',
  'split',
  'into',
  'individual',
  'parts' ] -- basically breaks the sentence up after each space
*/