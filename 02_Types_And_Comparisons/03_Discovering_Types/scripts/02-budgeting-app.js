var budget = 1200;
var savingsPriority = "high";


var rent = 450;
var utilities = 150;
var totalCosts = rent + utilities;

var newLaptop = 600;
var budgetLeft = budget - totalCosts;

var buyLaptop = budgetLeft >= newLaptop;

console.log("Can we buy the laptop?");
console.log(buyLaptop);
console.log("Do we need to save?");
console.log(savingsPriority === "high");