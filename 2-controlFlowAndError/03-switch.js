/* *******************
Switch
*********************/

let friend = 'Bob';

switch(friend) {
    case "Autumn": 
        console.log("Hey Autumn, when are we going rock wall climbing?");
        break;
    case "Danielle":
        console.log("Hey Danielle, how is Finn?");
        break;
    case "Josh": 
        console.log("Hey Josh, let's go to Target!");
        break;
    default: 
    console.log(`I'm sorry, ${friend}, but do I know you?`);
}
//the last console.log uses string interpolation to put the variable inside. Watch the backticks!
// a default is not needed, but helpful to see what went wrong/right.

let dessert = 'cookie';

switch(dessert) {
    case "pie":
        console.log('Pie, pie, me oh my!');
        break;
    case "cake":
        console.log('Cake is great!');
        break;
    case "ice cream":
        console.log('I scream for ice cream!');
        break;
    default: 
    console.log('Not on the menu.');
}

let yep = -8;
switch (true) {
    case (yep < 0 && yep > -10):
    console.log('worked');    
    break;
    case (yep > 0):
        console.log('worked!');
    break;
    default:
        console.log('didn\'t work');
}

switch (key) {
    case value:
        console.log( );
    break;
    case value:
        console.log( );
    break;
    default:
        console.log( );
        }