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