function isOver60(someValue) {
    if (someValue > 60) {
        return true;
    }
    else {
        return false;
    }
}

let numbersArray = [1, 5, 30, 58, 100, 60, 37];
let over60 = numbersArray.find(isOver60);

console.log(over60);


//instead of returning the value it returns the index of the match in the array
let over60Index = numbersArray.findIndex(isOver60)