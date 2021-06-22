/*
Problem:
We'll work on a role-playing video game where players can choose
what type of character they want to be.


Task:
Since there'll be a lot of players with similar but distinct attributes,
we'll create them as objects with the help of 'class'.
*/


class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

var hero = new Character("Tony Stark", "Iron Man");
var villain = new Character("Thanos", "Celestial");

console.log(hero);
console.log(villain);