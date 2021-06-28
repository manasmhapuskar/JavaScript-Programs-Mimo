/*
Problem:
A less experienced programmer created a virtial piggy bank in FP,
making it hard to keep track of the 'value' variable.


Task:
Let's fix this by writing the code in the OOP style.


Available Code:
function addMoney(value, amount) {
    return value + amount;
}

var value = 0;

var value = addMoney(value, 100);
value = addMoney(value, 50);
value = addMoney(value, 22);

console.log(value);
*/


var myPiggy = {
    value: 0,
    addMoney: function(amount) {
        myPiggy.value += amount;
    }
};

myPiggy.addMoney(100);
myPiggy.addMoney(50);
myPiggy.addMoney(20);

console.log("Current Value: " + myPiggy.value);