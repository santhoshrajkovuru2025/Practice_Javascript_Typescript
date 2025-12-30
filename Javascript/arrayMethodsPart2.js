
// 1. every():

let num = [1,2,3,4,5,6,];
let flag = num.every((e)=> e<10);
console.log(flag);
console.log("----------------")

// some():
let num1 = [1,2,3,4,5,6];
let fg = num1.some((e)=> e%2 === 0);
console.log(fg);
console.log("----------------")

// 3. find()

let total = [1,2,3,5,7,9,11];
let fe = total.find((e)=> e%2 === 0);
console.log(fe);
console.log("----------------")

// 4. indexOf():

let fruits = ['Apple', 'Banana', 'peer', 'Plump'];
let str_fruits = fruits.indexOf('peer');
console.log("Index of fruit: ",str_fruits);
console.log("----------------");

//5. lastindexof():

let fruit = ['Apple','Apple','Banana','Peach','Mango'];
let fruitlastIndex = fruit.lastIndexOf('Apple');
console.log(fruitlastIndex);
console.log("----------------");

// 6. reverse():

let frts = ['apple','banana','mango','peach'];
let frtrvrse = frts.reverse();
console.log(frtrvrse);
console.log("----------------");
//7. sort();

let products = ['iphone','macbook','Andriod','lenovo'];
let prosort = products.sort();
console.log(prosort);
console.log("----------------");



