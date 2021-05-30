/*
Problem:
Let's create a login process for an administrator's dashboard.
We'll store the user's account details into variables 
and then use comparisons to check if they have admin rights.


Task:
Variables account and status store the account details,
while the other variables store the comparisons.
*/


var account = "admin";
var status = "active";

var isAdmin = account === "admin";
var isValid = status !== "inactive";

console.log("Admin: " + isAdmin);
console.log("Valid: " + isValid);