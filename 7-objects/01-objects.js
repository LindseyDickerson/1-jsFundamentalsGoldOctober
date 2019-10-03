// Objects
// An object is a data type that consists of key value pairs.

/*

let name = {
      1.   2.

      key   :   value,
      3.    4.   5. 
}

1. Name of the object, how it's identified
2. All of the data is contained in curly braces
3. This is the name of the specific data inside of the object
4. The data name and value are separated by a colon
5. The value of the data. Each key value pair ends with a comma
*/

let netflix = {
    id: 9,
    likes: 932,
    name: "The Good Place", 
    seasonInfo: {
      season1: {
        numberOfEpisodes: 5,
        episodeInfo : [
          { episode: 1, episodeName: "Pilot"},
          { episode: 2, episodeName: "Flying"},
          { episode: 3, episodeName: "Tahani Al-Jamil"},
          { episode: 4, episodeName: "Jason Mendoza"},
          { episode: 5, episodeName: "Category 55 Emergency Doomsday Crisis"}
        ]
      },
      season2: {
        numberOfEpisodes: 6,
        episodeInfo : [
          { episode: 1, episodeName: "Everything is Great!"},
          { episode: 2, episodeName: "Dance Dance Resolution"},
          { episode: 3, episodeName: "Team Cockroach"},
          { episode: 4, episodeName: "Existential Crisis"},
          { episode: 5, episodeName: "The Trolley Problem"},
          { episode: 6, episodeName: "Janet and Michael"}
        ]
      },
      season3: {
        numberOfEpisodes: 5,
        episodeInfo : [
          { episode: 1, episodeName: "Everything Is Bonzer!"},
          { episode: 2, episodeName: "The Brainy Bunch"},
          { episode: 3, episodeName: "The Snowplow"},
          { episode: 4, episodeName: "Jeremy Bearimy"},
          { episode: 5, episodeName: "The Ballad of Donkey Doug"}
        ]
      }
    },
    description: "Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good."
  };
//to just get the name of the show for the object 'Netflix' 
//console.log(netflix.name) //output: The Good Place
//all of the info for season 1
//console.log(netflix.seasonInfo.season1) //output: the object that contains the season 1 info

/* Challenge: 
pick an episode to show.
Using dot notation, walk through the Netflix object and print off both the episode and the episode name. */
//console.log(netflix.seasonInfo.season3.episodeInfo[2]) //output: { episode: 3, episodeName: 'The Snowplow' }

//loop through the season 1 objects.

// let season = netflix.seasonInfo.season1.episodeInfo
// for (e of season) {
//     console.log(e)
// }
// OR
// season.forEach(episode => console.log(episode));

//To add info: (adding # of seasons)
//netflix.seasonInfo.totalSeasons = 3; //this is an assignment operator! It is creating a new key value pair. Similar to a .push method in an array
//console.log(netflix.seasonInfo);
//But Wait! They just released a new episode in season 2!
let newEpisode = netflix.seasonInfo.season2.episodeInfo.push({episode: 7, episodeName: "Derek"});
console.log(netflix.seasonInfo.season2)//adds { episode: 7, episodeName: 'Derek' } to the end of the objects in the array