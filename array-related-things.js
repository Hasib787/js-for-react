const number = [22, 47, 48, 44, 88];
const friends = ['Rafiq', 'Jabbar', 'barkat'];
const products = [
    { id: 1, name: 'Laptop', price: 500 },
    { id: 2, name: 'Mobile', price: 100 },
    { id: 3, name: 'watch', price: 50 },
    { id: 4, name: 'watch', price: 50 }
];

//map 
const names = products.map(product=> product.name);
const prices = products.map(pp => pp.price);
const prices2 = products.map(productPrice=>{
    return productPrice.price;
});
console.log(prices2);
