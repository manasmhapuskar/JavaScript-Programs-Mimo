/*
Problem:
Let's use return values 
to build a handy pounds to ounces converter.
*/


function poundsToOunces(pounds) {
    var conversion = 16;
    var ounces = pounds * conversion;
    return ounces + " ounces";
}

var result = poundsToOunces(5);
console.log(result);