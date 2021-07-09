/*
Problem:
Let's use Interacting with Webpages to set up an interactive
webpage for an online store.


Task:
We'll code a basic sales page and write a function
that updates the item on sale dynamically.
*/


var saleItem = "Shirt";

function updateSale() {
    var sale = document.getElementById("sale").innerHTML;
    var update = saleItem + " " + sale;
    document.getElementById("sale").innerHTML = update;
}

updateSale();