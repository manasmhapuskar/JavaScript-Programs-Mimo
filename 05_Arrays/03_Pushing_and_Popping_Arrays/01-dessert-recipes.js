/*
Problem:
Let's use push() and pop() to manage 
the ingredient lists for a dessert recipe.


Task:
We'll store the ingredients in the array 'dessert'.
Then, use pop() to remove an ingredient and push() to add a ingredient.
*/


var dessert = ["Chocolate", " Banana", " Cherry"];

var poppedItem = dessert.pop();
console.log(poppedItem);
console.log(dessert);

dessert.push("Mango");
console.log(dessert);