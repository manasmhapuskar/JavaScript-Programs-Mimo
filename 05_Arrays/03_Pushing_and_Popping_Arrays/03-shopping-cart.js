var book = 40;
var gardeningTools = 30;
var headphones = 50;
var mat = 25;

var wishlist = [book, gardeningTools, headphones, mat];
console.log("Wishlist: " + wishlist);

var cart = [];

var item1 = wishlist.pop();
var item2 = wishlist.pop();

cart.push(item1, item2);
console.log("Cart: " + cart);

var total = item1 + item2;
console.log("Total price: " + total);