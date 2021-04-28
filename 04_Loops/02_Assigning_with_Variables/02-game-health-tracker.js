var powerUpFound = "health";
var health = 56;

console.log("Health: " + health);

if (powerUpFound === "health") {
    health++;
} else if (powerUpFound === "damage") {
    health--;
}

console.log("Health left: " + health);