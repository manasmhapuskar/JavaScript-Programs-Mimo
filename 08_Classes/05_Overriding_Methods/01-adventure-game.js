/*
Problem:
Joe is involved in developing an adventure game.
He's in charge of the human and pirate characters.


Task:
We'll give him a hand in customizing the character's behaviors.
*/


class Human {
    constructor(name) {
        this.name = name;
    }

    say(stuff) {
        console.log(this.name + ": " + stuff);
    }
}
class Pirate extends Human {
    say(stuff) {
        super.say(stuff);
        console.log(this.name + ": " + "Yarr!");
    }
}

var human = new Human("Frances");
var pirate = new Pirate("Long John");

human.say("G'day, sir!");
pirate.say("Ahoy!");