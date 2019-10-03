// Object.keys() and Object.values()

//Methods that return arrays of a specific object

//Object.keys() is a method that returns an array of a given object's own properties

//Object.values() is a method that returns an array of a given't object's own enumerable property values

//filtering one side or the other side!

let spaceJam = {
    toonSquad: {
      human: 'Michael Jordan',
      rabbit1: 'Bugs Bunny',
      rabbit2: 'Lola Bunny',
      duck: 'Daffy Duck',
      tDevil: 'Tasmanian Devil',
      bird: 'Tweety',
      cat: 'Sylvester',
      pig: 'Porky Pig'
    },
    monstars: {
      0: 'Bupkus',
      1: 'Bang',
      2: 'Nawt',
      3: 'Pound',
      4: 'Blanko'
    },
    nbaPlayers: {
      phoenixSuns: 'Charles Barkley',
      newJerseyNets: 'Shawn Bradley',
      newYorkNicks: 'Patrick Ewing',
      charlotteHornets1: 'Larry Johnson',
      charlotteHornets2: 'Muggsy Bogues'
    }
  }
//console.log(Object.keys(spaceJam.toonSquad));
/* output: 
[ 'human',
  'rabbit1',
  'rabbit2',
  'duck',
  'tDevil',
  'bird',
  'cat',
  'pig' ]*/
//console.log(Object.keys(spaceJam.toonSquad.duck)); //output: [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ] giving me the keys of the value daffy duck
//  console.log(Object.keys(spaceJam.toonSquad).toString());
 //output: human,rabbit1,rabbit2,duck,tDevil,bird,cat,pig 

 //console.log(Object.values(spaceJam.toonSquad));
 /* output: 
 [ 'Michael Jordan',
  'Bugs Bunny',
  'Lola Bunny',
  'Daffy Duck',
  'Tasmanian Devil',
  'Tweety',
  'Sylvester',
  'Porky Pig' ]
*/