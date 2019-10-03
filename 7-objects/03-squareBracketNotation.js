// Square Bracket Notation
/***************************************************************************************/
let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower', 
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};
//console.log(garden.vegetable); //output: zucchini
//let x = 'vegetable';
//console.log(garden.x, garden[x]);//output: undefined 'zucchini' - it is looking for x the property, not x the value. So we use square bracket notation!
//dot notation doesn't check to see if there is a 'branch' to enter into. SBN does check!
let baking = {};
//baking.zucchini = 'better make some bread';
//console.log(baking); //output: { zucchini: 'better make some bread' } adds the key value pair!
baking['zucchini'] = 'better make some bread';
//console.log(baking); //output: { zucchini: 'better make some bread' } adds the key value pair!
/* use dot notation when you know for sure there is a key value pair, use bracket notation so you can set it then make the key value pair.*/

//console.log(baking.garden.vegetable);//this will not work because baking is not within the garden object!
//console.log(baking); //output: { zucchini: 'better make some bread' }
//console.log(garden['vegetable']); //output: 'zucchini'
//console.log(baking[garden['vegetable']]);//output: 'better make some bread'
//console.log(baking['zucchini']); //output: 'better make some bread'


let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower', 
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

let key = 'water';
//loop thorugh each item in object
Object.keys(garden).forEach(g => {
    console.log(g);
})
/*output: 
vegetable
flower
fruit
water
sun
size 
the loop is grabbing each key in the key value pair*/

let garden = {
    vegetable: 'zucchini',
    flower: 'sunflower', 
    fruit: 'grape',
    water: true,
    sun: true,
    size: 10
};

let key = 'water';
//loop thorugh each item in object
Object.keys(garden).forEach(g => {
   // console.log(g);
   if (g === key) {
       console.log(garden[key]);
   }
})
//output: true (because key is water and as it is looping through to find water, and it finds water so water is true!) if the key was equal to fruit, the output woutl be grape.