//Hoisting

console.log(scissors);

scissors = 'blue';

console.log(scissors);
var scissors;

//output: undefined; blue
//code is being read 2x - first time looking for variables and keywords, second time matching those keywords to the variables.

// JS reads code 2x. The first time it looks for the left hand side of variables and functions (the declarations). The second pass, it reads through the right side (the initialization) and assigns values and expressions. 
// We call it hoisting because JS keeps those variable names stored in memory for quicker reference later.
//let does not respect the hoisting. get back an error.