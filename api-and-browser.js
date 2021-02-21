//
const person = {
    id: 2,
    name: 'Surovi',
    age: 22
};

//JSON convert back and forth
// const data = JSON.stringify(person);
// const dataParsed = JSON.parse(data);
// console.log(dataParsed.name);

//fetch
// fetch(url);
// .then(data=> )

//local storage
// localStorage.setItem('UserId', 4574);
const userId = localStorage.getItem('UserId');
// console.log(userId);

localStorage.setItem('person', JSON.stringify(person));
const storedPerson = localStorage.getItem('person');
const storedPersonParsed = JSON.parse(storedPerson);
console.log(storedPersonParsed.name);

const keys= Object.keys(storedPersonParsed);
console.log(keys);

const values = Object.values(storedPersonParsed);
console.log(values);