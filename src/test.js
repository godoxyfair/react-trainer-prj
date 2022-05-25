function searchFruit(fruitOne, fruitTwo) {
    let text = `My favorite fruit is grapes. Because with grapes, you always
    get another chance. 'Cause, you know, if you have a crappy apple or a peach,
    you're stuck with that crappy piece of fruit.
    But if you have a crappy grape, no problem - just move on to the next.
    'Grapes: The Fruit of Hope.'`;

    console.log(text.includes(fruitOne, 0));
    console.log(text.includes(fruitTwo, 50));
}

let fruitOne = "apple";
let fruitTwo = "grapes";
searchFruit(fruitOne,fruitTwo );
// Call the function here with the arguments

const box = {
    length: 20,
    width: 30,
    height: 15,
    getVolume: function() {
        console.log(this.length * this.width * this.height);
    }
}

box.getVolume();

let box1 = {
    length: 20,
    width: 30,
    height: 15,
    getVolume() {
        return this.length * this.width * this.height;
    }
};

console.log(box1.getVolume());

let numbers = [0, 1, 2, 3, 4, 5, 8];
function find5(numbers) {
    // change it
    for (n in numbers) {
        if (numbers[n] === 5){
            break;
        }
    }
    return n;
}

find5();