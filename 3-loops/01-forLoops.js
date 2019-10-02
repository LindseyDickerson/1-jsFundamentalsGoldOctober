/************
 * For Loops
************ 
For loop is a programming tool that repeats a set of instructions until a specified contition, called a stopping condition, is reached. */

const vacationSpots = ['Florence', 'Copenhagen', 'Istanbul'];
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

//also can be said to iterate (iterative)

/* there are many different kinds of loops but they all do roughly the same thing: 
For Stmt
Do While
While
Labeled
Break
Continue
For in
For of */

for (let i = 0; i < 10; i++) {   /*
1        2       3       4 */
    console.log(i);
}
//output: 0 1 2 3 4 5 6 7 8 9
/* 
1- The 'for' keyword
2- A variable initialization and declaration
3- The condition that needs to be met in order to end the loop. 
4- This is where the number is going to update. This one is sayin each time the loop runs, update i by one.
*/
//Challenge: using a for loop, cout to 20, by 2's.

for (let i = 0; i <=20; i += 2 ) {
    console.log(i);
}
//output: 0 2 4 6 8 10 12 14 16 18 20

// Challenge: using a for loop, count from 10 to 0, going down by 1's

for (let i = 10; i >= 0; i--) {
    console.log(i);
}
//output: 10 9 8 7 6 5  4 3 2 1

//Challenge: using a for loop, count from 0, going down by 2's to -24

for (let i = 0; i >=-24; i -= 2) {
    console.log(i);
}
//output: 0 -2 -4 -6 -8 -10 -12 -14 -16 -18 -20 -22 -24

//Challenge: using a for loop, go through a name and display each letter individually

let name = 'Lindsey';
for (let i = 0; i < name.length; i++) {
    console.log(name[i]);
}
// output: l i n d s e y (all on seperate lines)
// () are for a method, charAt() is a method. The name[1] is square bracket notation

//Challenge: make a for loop where you add up all the numberd from 1 to 50. (should equal 1275)

let sum = 0;
for (let i = 1; i <= 50; i++) {
    sum += i;
} console.log(sum);
//output 1275