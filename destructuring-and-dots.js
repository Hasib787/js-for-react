//array destructuring 
const numbers = [44, 18, 656, 12, 44, 5];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [54, 787];
const [x, y] = numbers;

// console.log(x, y);

function boxify(num1) {
    return [num1, num1 + 5];
}

const [box1, box2] = boxify(8);
// console.log(box1, box2);

// Object Destructuring 
const person = { id: 2, name: 'Hasib', money: 52, age: 25 };
const { money } = person;

// console.log(money);

// Create object shortcut
const one = 25;
const two = 35;
const obj = { one: one, two: two };
const obj2 = { one, two };
// console.log(obj2);

// array shortcuts with three dots


const number2 = [...numbers, 51];
console.log(number2);





