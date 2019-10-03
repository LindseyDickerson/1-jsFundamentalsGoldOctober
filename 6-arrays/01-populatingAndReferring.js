let list  = ['orange', 'banana', 'oreos']
console.log(list[1]);
//output: banana

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['John', 'Eric', 'Sam']]
//console.log(typeof students)
//output: object
//console.log(students instanceof Array);
//output: true - because it is checking if it is an instance of an array
//console.log(students[1]);
//output: Marshall
//console.log(students[3]);
//output: Ray

/* Challenge
Go into the nested array and get 'Sam'
print out "Hello Sam, how are you today?"
*/
let challenge = students[6] [2];
console.log(`Hello ${challenge}, how are you today?`);
//output: Hello Sam, how are you today? 

// let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
/*food.push('Cool Beans'); //.push() is the name of the METHOD, 'pushes a new word int he array
for (f of food) {
    console.log(f);
}
output: Pecan pie Shrimp Quesadilla Cheese Cake Hotdog Cool Beans (all on seperate lines)*/
/*
food.splice(1, 1, 'Cookies') //first 1 is the position where it will start at, 2nd 1 is #items we take out. 
for (f of food) {
    console.log(f)
}
output: Pecan pie Cookies Quesadilla Cheese Cake Hot Dog */

/*food.pop(); //.pop() is a method that removes the last item in the array
for (f of food) {
    console.log(f)
}
//output: Pecan Pie Shrimp Quesadilla Cheese Cake (on separate lines)
food.shift()
for (f of food) {
    console.log(f)
}
output: Shrimp Quesadilla Cheese Cake Hotdog */

// food.unshift('Pasta', 'Hamburger') //unshift puts items at the beginning
// for (f of food) {
//     console.log(f)
// }
//output: Pasta Hamburger Pecan Pie Shrimp Quesadilla Cheese Cake Hotdog

// for (f in food) {
//     console.log(f)
// }
//output: the index numbers of each item
// for (f in food) {
//     console.log(f)
//     console.log(food[f])
// }
/* output
0
Pecan pie
1
Shrimp
2
Quesadilla
3
Cheese Cake
4
Hotdog
*/

//let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

//food.forEach(f => {console.log(f)})
//output: Pecan Pie Shrimp Quesadilla cheese Cake hotdog
//food.forEach((f, number) => {console.log(f); console.log(number)})
/*output: 
Pecan pie
0
Shrimp
1
Quesadilla
2
Cheese Cake
3
Hotdog
4*/
//food.forEach((f, number, array) =>{console.log(f); console.log(number); console.log(array)})
/* output: 
Pecan pie
0
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]
Shrimp
1
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]
Quesadilla
2
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]
Cheese Cake
3
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]
Hotdog
4
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]
*/
let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];
let foodFunction = () => {
    for (f in food) {
        console.log(f),
        console.log(food[f]),
        console.log(food)
    }
}
foodFunction()
/* output: 
0
Pecan pie
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]
1
Shrimp
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]
2
Quesadilla
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]
3
Cheese Cake
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]
4
Hotdog
[ 'Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog' ]*/

/*
*****************************************************************************************
Challenge:
Create a list (with an array) of movies.
Use .forEach() to list your movies
Add antoher movie at the end
Replace one of your existing movies with another one
*/

let movies = ['Wiz of Oz', 'Legally Blonde', 'Addams Family Values', 'Shrek', 'The Princess Bride'];
movies.forEach(m => {console.log(m)})
/*output: 
Wiz of Oz
Legally Blonde
Addams Family Values
Shrek
The Princess Bride*/
movies.push('Frozen');
for (m of movies) {
    console.log(m);
}
/*
output: 
Wiz of Oz
Legally Blonde
Addams Family Values
Shrek
The Princess Bride
Frozen
*/
movies.splice(2, 1, 'Aladdin');
for (m of movies) {
    console.log(m);
}
/*output: 
Wiz of Oz
Legally Blonde
Aladdin
Shrek
The Princess Bride */

/**********************************/

let long = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(long.length) //output: 10

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']
console.log(colors.length) //output: 6
console.log(colors.toString()) //output: blue,green,yellow,red,orange,purple

console.log(typeof colors) //output: object
console.log(colors instanceof Array) //output: true
console.log(typeof colors.toString()) //output: string

colors.forEach(c => console.log(c))//output: blue green yellow red orange purple (on separate lines)

/* Challenge: 
first check if you are working with an array
Then flip the values within the array (what was index 4 is 0, 3 to 1, etc)
Using a method only, print the values of the newly arranged array. */
let arr = [1, 2, 3, 4, 5]
console.log(arr instanceof Array) //output: true 

if (arr instanceof Array === true) {
    let revArr = arr.reverse();
    console.log(revArr)
}                                   //output: [ 5, 4, 3, 2, 1 ]