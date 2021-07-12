/*
Problem:
In this project, we'll update the incoming orders of a pizza delivery
service when the page refreshes.
Other than adding new orders, 
our code should move pizzas ready for delivery for the Ready list.

 
Task:
Part I
We'll manage the order list by creating HTML elements with JavaScript
    
Part II
To move an element between the Order and Ready lists,
we delete the element from the first list and then add it to the second.
*/


var orderList = document.getElementById("orders");

var marinara = document.createElement("li");
marinara.innerHTML = "1 Pizza Marinara";
orderList.appendChild(marinara);

var romana = document.createElement("li");
romana.innerHTML = "1 Pizza Romana, extra anchovies";
orderList.appendChild(romana);

var readyList = document.getElementById("ready");
var margherita = document.getElementById("margherita");
orderList.removeChild(margherita);
readyList.appendChild(margherita);