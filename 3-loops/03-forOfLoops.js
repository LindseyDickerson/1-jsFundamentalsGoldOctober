/*************
 * For Of Loops
************* */

// For use with arrays

let student = {
    name: "peter",
    awesone: true,
    degree: "javaScript",
    week: 1
}

for (item of student) {
    console.log(item);
}

//output: get error, because for of loops don't loop through objects, you use a for in loop!

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat of catArray) {
    console.log(cat, 'says meow')
}
/* output: 
tabby says meow
british shorthair says meow
burmese says meow
maine coon says meow
rag doll says meow 

cat is selecting each index in the array
*/

