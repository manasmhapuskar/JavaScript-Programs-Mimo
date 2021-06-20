/*
Problem:
The following code keeps track of a team roster.
Let's create some objects to keep the information organized.


Available Code:
var playerName = "Leo";
var goalsScored = 4;
var gamesPlayed = 2;

var teamName = "Lions";
var numberOfPlayers = 18;
var varsity = true;
*/


var player = {
    playerName: "Leo",
    goalsScored: 4,
    gamesPlayed: 2
}; 

var team = {
    teamName: "Lions",
    numberOfPlayers: 18,
    varsity: true,
    member: player
};

console.log(team);