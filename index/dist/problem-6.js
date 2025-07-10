"use strict";
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    var mostExpensive = products[0];
    for (var i = 1; i < products.length; i++) {
        if (products[i].price > mostExpensive.price) {
            mostExpensive = products[i];
        }
    }
    return mostExpensive;
}
var products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
];
console.log(getMostExpensiveProduct(products));
