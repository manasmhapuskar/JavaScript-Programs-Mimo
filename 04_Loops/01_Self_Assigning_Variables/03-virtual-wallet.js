/*
Problem:
A group of developers wrote buggy code for a debit account
that should track money added and removed over time.


Task:
Unfortunately, the money in the account doesn't update correctly
to $23 so we need to fix it using self-assignment.


Available:
console.log("$101 deposited");
account = 101;

console.log("$13 latte purchased");
account = account;

console.log("$65 TV purchased");

console.log("Account: $" + account);
*/


var account = 0;

console.log("$101 deposited");
account = account + 101;

console.log("$13 latte purchased");
account = account - 13;

console.log("$65 TV purchased");
account = account - 65; 

console.log("Account: $" + account);