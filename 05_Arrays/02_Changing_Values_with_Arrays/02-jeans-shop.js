/*
Problem:
Let's use our knowledge of arrays to manage
the stock of an online jeans shop.


Task:
The variable 'stock' stores the number of items in stocks for sizes 's', 'm', 'l'.
Using indices, we'll update the stock values for purchases and returns.
*/


var s = 20;
var m = 30;
var l = 40;
var stock = [s, m, l];

stock[0] -= 2;
stock[1] -= 4;

console.log("S: " + stock[0]);
console.log("M: " + stock[1]);
console.log("L: " + stock[2]);