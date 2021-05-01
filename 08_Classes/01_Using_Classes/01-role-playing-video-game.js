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