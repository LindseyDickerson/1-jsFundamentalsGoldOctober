/*****************
 * For In Loops
***************** */

/* Great for iterating over values in an object, but not for arrays
enumerable - access items directly through an ordering schema */

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (item in student) {
    // console.log('item =>', item);
    console.log('student[item] =>', student[item]);
}

/* output 
student[item] => Peter
student[item] => true
student[item] => JavaScript
student[item] => 1 
*/

let dogArray = ['collie', 'pitbull', 'newfie', 'dachshund', 'shiba inu'];
for (dog in dogArray) {
    console.log(dog);
}
/* output:
0
1
2
3
4 
in JS, the key of the key value pair is the index of the item in the array */

// to get the item in the array, have to specify the index of the array
console.log(dogArray[2]);

//Challenge: Write a for in loop that capitalizes the first letter of a student's name

let studentName = 'pAuL';
let newName = '';
for (letter in studentName) {
    if(letter == 0) {
        newName += studentName[letter].toUpperCase();
        // console.log(studentName[letter],newName);
    } else {
        newName += studentName[letter].toLowerCase();
        // console.log(studentName[letter],newName);
    }
}
console.log(newName);
//output: Paul
// think that the letter is being declared as a local scope within the brackets. To have a better understanding, replace letter in the {} with 0 

/* For better understanding, not how it is written
let studentName = 'pAuL';
let newName = '';
letter = 0 (and will change)
if (index 0 in studentName) {
    newName += studentName[0].toUpperCase();
} else {
    newName =+ studentName[1].toLowerCase();
}