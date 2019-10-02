/*************
 * Calling Functions
************* */

// A function will not run unless the function is called/invoked

function hi() {
    console.log('Hi');
}
// running function as is produces nothing in the output.
hi();
//output: Hi

function hi() {
    console.log('Hello');
    return "Heeeeyyy";
}
console.log('second console.log', hi());
//output: Hello /line break/ second console.log Heeeeyyy

/* challenge
create a function that when invoked, lists out the numbers 1-10
*/

function count() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    } 
}
count();
//output (each on another line) 1 2 3 4 5 6 7 8 9 10

//Challenge: 
//given the array, create a function that lists out the values individually

let arr = ['This', 'is', 'really', 'cool'];

function awesome() {
 for (item of arr) {
     console.log(item);
 }
}
awesome();
/* output:
This
is
really
cool  */