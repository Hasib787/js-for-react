let money = 150;
let active = false;
// let food;
// if (money > 100) {
//     food = 'biryani';
// }
// else {
//     food = 'dim vaji';
// }

//ternary
//condition ? true value : false value
let food = money > 100 ? 'biryani' : 'alur vorta';
// console.log(food);

const cssClass = active ? 'active' : 'inactive';
// console.log(cssClass);

// active ? displayUser() : hideUser();

// 
const x = active && 5;
const y = active || 10;

// console.log(x);


//convert string to number
const number = +'45';
console.log(number);

//convert number to string
const number2 = 55 + '';
console.log(number2);

//default parameter 
function add(num1, num2) {
    num2 = num2 || 5;
    return num1 + num2;
}
console.log(add(5, 15));






