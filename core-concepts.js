// variable: let, const
let money = 50;
money = 60000;
const age = 22;
const name = 'Hasib';

let isGoing = true;

const person = {
    name: 'Surovi',
    age: 22,
    city: 'Barishal'
}
const statement = `This person ${name} Love ${person.name}`;
console.log(statement);

//condition
if (money > 50000 && age <= 25) {
    console.log('Get marred');
} else {
    console.log('Tor Kopale biye nai');
}

// array
let Number = [25, 22, 58, 33, 30];
let friendsName = ['Hasan', 'Rabbi', 'Sam'];
let items = [{ name: 'laptop', price: 500 }, { name: 'Mobile', price: 100 }, { name: 'watch', price: 50 }];


// loop: For loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
}

//function: regular and arrow
function add(num1, num2) {
    return num1 + num2;
}

const result = add(45, 50);

//arrow
const fiveTimes = num => num * 5;
const add2 = (num1, num2) => num1 + num2;
const doMath = (x, y) => {
    const sum = x + y;
    return sum * 2;
}
