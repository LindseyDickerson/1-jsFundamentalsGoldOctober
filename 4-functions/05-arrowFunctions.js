// Arrow Functions

function coffee() {
    console.log('Coffee is good');
}
coffee();
// output: Coffee is good
let coffee = () => {
    console.log('I love coffee');
} 
//(fat arrow function are a type of expression so they DO NOT get hoisted.)
coffee();
//output: I love coffee

let cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`)
}
cats(1, 12);
//output: I have 1 cat(s) and 12 dog(s)

//Concise and block body:
// concise body does not need parentheses, unless you have more than one parameter.

let apples = x => console.log(`There are ${x} apples.`);
apples(10);
//output: There are 10 apples.
//More than 1 parameter requires a parentheses.
//Return (if one-line fat arrow function) is implied.

//Block body - used when running more than one parameter or complicated logic (no if statements)
let apples = (x, y) => {console.log(`There are ${x} apples and ${y} oranges.`)};
apples(20, 15);
//output: There are 20 apples and 15 oranges.

//sidenote: LINEBREAKS ARE BAD! Fat arrow functions DO take whitespace in account. The function must stay on one line. 

let func = () => console.log('hi'); //this will run.

let func = ()
=> console.log('hi'); //this will not run!