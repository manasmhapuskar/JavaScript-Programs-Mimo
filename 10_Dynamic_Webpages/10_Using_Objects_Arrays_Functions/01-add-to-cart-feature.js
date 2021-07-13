/*
Problem:
In this project, we'll use objects, arrays, and functions
to add items to a cart to build the online store.


Part IV
With the HTML and CSS making our page look great,
let's add items to the cart and update the item counter with JavaScript.

Part V
Great job making the item counter update with each click of an "Add to Cart" button.
Now, let's show the total cost of all items in the cart
when users click on the cart image.

Part VI
Let's create a function that adds a shipping cost based on the 'total'.
If the customer's 'total' is high enough, we'll apply a discount.
*/


var cartItems = [];
var isTotalHidden = true;

var backpack = {
    name: "Backpack",
    price: 400
};

var camera = {
    name: "Camera",
    price: 200
};

function addToCart(item) {
    cartItems.push(item);
    document.getElementById("item-counter").innerHTML = cartItems.length;   
}

function removeFromCart(item) {
    cartItems.pop(item);
    document.getElementById("item-counter").innerHTML = cartItems.length;
}

function clickCart() {
    isTotalHidden = !isTotalHidden;
    showTotal();
}

function showTotal() {
    var orderTotal = document.getElementById("order-total");
    orderTotal.innerHTML = "";

    if(isTotalHidden === false) {
        var total = 0;
        for(var i = 0; i < cartItems.length; i++) {
            total = cartItems.length * backpack.price;
        }
        orderTotal.innerHTML = "Total: $" + total;
    }
    
}