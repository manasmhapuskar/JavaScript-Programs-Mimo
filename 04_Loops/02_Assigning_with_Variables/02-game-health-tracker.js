/*
Problem:
Let's write a short program that changes the health of a player in a video game.
The games offers power-ups the user can pick-up to raise their health level.
Some power-ups though are traps in disguise that cause damage.


Task:
We'll store the player's health and powerup in variables,
then use conditionals to update 'health'.
*/


var powerUpFound = "health";
var health = 56;

console.log("Health: " + health);

if (powerUpFound === "health") {
    health++;
} else if (powerUpFound === "damage") {
    health--;
}

console.log("Health left: " + health);