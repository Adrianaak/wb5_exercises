"use strict";

let products = [
    { product: "Gummy Worms", price: 5.79 },
    { product: "Plain M&Ms", price: 2.89 },
    { product: "Peanut M&Ms", price: 2.89 },
    { product: "Swedish Fish", price: 3.79 },
    { product: "Giant Chewy Nerds", price: 6.00 },
    { product: "Snickers Bar", price: 1.89 },
    { product: "Mounds Bar", price: 1.50 },
    { product: "Sour Patch Kids", price: 3.79 },
    { product: "Everlasting Gobstopper", price: .99 },
    { product: "Ring Pop", price: 1.79 }
];

let under4 = products.filter((product) => {
    return product.price < 4;
});

console.log(under4);

let mmCandy = products.filter((product) => {

    if (product.product.indexOf("M&M") !== -1) {
        return true;
    } else {
        return false;
    }
});

console.log(mmCandy);

let carryFish = products.find( (fish) => {

return fish.product === "Swedish Fish";

} )

console.log(carryFish);