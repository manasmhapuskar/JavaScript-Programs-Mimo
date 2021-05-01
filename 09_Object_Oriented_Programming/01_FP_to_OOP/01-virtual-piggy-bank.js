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