//array destructuring 
const numbers = [44, 18, 656, 12, 44, 5];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [54, 787];
const [x, y] = numbers;

// console.log(x, y);

function boxify(num1){
    return [num1, num1+5];
}

const boxed = boxify(8);
console.log(boxed);

