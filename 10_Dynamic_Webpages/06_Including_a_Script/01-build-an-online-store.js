var saleItem = "Shirt";

function updateSale() {
    var sale = document.getElementById("sale").innerHTML;
    var update = saleItem + " " + sale;
    document.getElementById("sale").innerHTML = update;
}

updateSale();