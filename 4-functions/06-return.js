//Return

let hi = () => {
    return 'hello';
//    1
}
let newName = hi();
//   2          3

console.log(newName);
//Output: hello

//return makes that value available outside of the scope (makes it global, not just local)
/*
1 - The return keyword brings our data out of our function
2 - We need a new variable to hold the value of the return
3 - When called, the function becomes the value of the return */

function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName) //output: Autumn
    return capName;
}
const myName = capitalizeName('autumn');
console.log(myName + ' how are you doing?'); //output: Autumn how are you doing?
