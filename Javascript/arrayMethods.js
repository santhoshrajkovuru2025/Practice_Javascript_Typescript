// 1.map function

let numbers =[1,2,3,4,5,6,7,8];
let n = numbers.map((e)=>e*2);
    console.log(n);

// ex: fahernhiet temparature:

let farehTemp =[32, 54, 64,56,78,89];

function fahToCel (fah){
    return (fah-32)*(5/9);
} 
let celsius = farehTemp.map(fahToCel);
console.log(celsius);


// 2. filter  function:

let num = [1,2,3,4,5,6,7,8,9,10];
let even = num.filter((e)=> e%2 ==0);
console.log(even);

// example for filter employee array

let employee =[
    {name:"john",age:30,gender:"male"},
    {name:"peter",age:32,gender:"male"},
    {name:"sanah",age:25,gender:"female"},
    {name:"swaroop",age:41,gender:"male"},
    {name:"maneela",age:36,gender:"female"}
];
let femaleEmpOverThirty = employee.filter((emp)=>{
    return emp.gender === "female" && emp.age >30
});
console.log(femalEempOverThirty);

// 3. reduce function:

let arr = [1,2,3,4,5];
let nu = arr.reduce((acc,num)=>acc+num, 0);
console.log(nu);

// max number of an array 

let top = [10, 20, 30, 45, 87, 12, 14]; // highest num = 87
let maxnum = top.reduce((max,num)=> {
    if (num > max){
         return num;
    }
    else {
        return max;
    }
}, top[0]);
console.log(maxnum);

// cart: name, price

let cartItems =[
    {name:"Jeans", price: 1500},
    {name:"Shirt", price: 2000},
    {name:"Trouser", price: 1400},
    {name:"T-shirt", price: 600},
    {name:"vests", price: 250}
];
let totalCost = cartItems.reduce((total,item)=> total+ item.price, 0);
console.log(totalCost);
