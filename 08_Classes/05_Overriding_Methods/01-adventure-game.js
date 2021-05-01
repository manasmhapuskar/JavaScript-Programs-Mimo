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