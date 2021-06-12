/*
Problem:
Let's practice our knowledge of arrays and indices
by helping an event set up a battle of the bands.


Task:
The event managed to store the bands in an array 
but failed to arrange who's to battle whom.

We'll give them a hand by updating 'show1' with bands at even indices 
and 'show2' with bands at odd indices.


Available Code:
var show1 = "TBA";
var show2 = "TBA";

var act = ["DC/AC", "King", "Stagnant Boulders", "The Pupae"];
*/


var show1 = "TBA";
var show2 = "TBA";

var act = ["Linkin Park", "Coldplay", "OneRepublic", "Nickelback"];

show1 = act[0] + " vs " + act[2];
show2 = act[1] + " vs " + act[3];

console.log("Battle of the Bands");

console.log(show1);
console.log(show2);