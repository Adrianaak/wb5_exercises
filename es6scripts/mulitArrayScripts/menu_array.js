"use strict"

let menu = [
    [
        { item: "Sausage and Egg Biscuit", price: 3.69 },
        { item: "Bacon and Egg Biscuit", price: 3.49 },
        { item: "Ham and Egg Biscuit", price: 3.29 }
    ],
    [
        { item: "Pepperoni Pizza", price: 13.69 },
        { item: "Philly Cheesesteak", price: 14.49 },
        { item: "Cheeseburger in Paradise", price: 12.29 },
        { item: "Korean Fried Chicken", price: 24.49 }
    ],
    [
        { item: "Orange Chicken", price: 10.69 },
        { item: "Chicken Alfredo", price: 12.49 },
        { item: "Chicken Pot Pie", price: 10.29 },
        { item: "Surf and Turf", price: 11.29 },
        { item: "Steak and Potatos", price: 16.29 }

    ],

]

let meal = 2;

if (meal === 0) {
    console.log("Breakfast Menu:")
    console.log("-----------")
}

if (meal === 1) {
    console.log("Lunch Menu:")
    console.log("-----------")

}

if (meal === 2) {
    console.log("Dinner Menu:")
    console.log("-----------")

} 

menu[meal].forEach( (menuItem) => {
console.log(`${menuItem.item} :${menuItem.price} `)

})