

 /* let num = [1,2,3,4,5,6,7,8];

 // pop : removes from last element

let numPop = num.pop()
console.log(numPop);
console.log(num)
console.log('------------------------------------')

// push : adds at the last 

let numPush = num.push(10,4,5,6)
console.log(numPush); // length of the Array.
console.log(num);
console.log('------------------------------------')


// shift: 

let numShift = num.shift()
console.log(numShift);
console.log(num)
console.log('------------------------------------')

// let num = [1,2,3,4,5,6,7,8];

// unshift: Adds at first the 

let numUnshift = num.unshift(8,9,10,44,55);
console.log(numUnshift); // returns the updated length of the Array.
console.log(num)
console.log('---------------------------------------') 


// splice: array.splice(start, deleteCount, item1, item2, ...), returns deleted sub Array.

let num = [8, 9, 10, 44, 55, 1,2, 3,  4,  5,  6, 7, 8]

let numSplice = num.splice(3,2,11,22,33)
console.log(numSplice)
console.log(num);
console.log('---------------------------------------')
numSplice.splice(0,0,66,77)
console.log(numSplice) 


// slice : returns and prints the elements

let num = [8, 9, 10, 11, 22, 33,1, 2,  3,  4,  5,  6, 7, 8]

let numSlice = num.slice(-4,-2)
console.log(numSlice); 



let num = [8, 9, 10, 11, 22, 33,1, 2,  3,  4,  5,  6, 7, 8,22,33,99,8,9]

let numIndex = num.indexOf(22,2) // starts from first Index  --> forward direction
let numLastIndex = num.lastIndexOf(22,18) // starts from last index --> search reverse direction
console.log(numIndex);
console.log(numLastIndex); 


// some(): checks that atleast one condition is satisfied or not and returns the result in boolean: true, false

let num = [8, 9, 10, 11, 22, 33, 1, 2,  3,  4,  5,  6, 7, 8, 22, 33, 99, 8, 9]

 let numSome = num.some((n)=> true)
 console.log(numSome)


const users = [
  { name: "A", active: false },
  { name: "B", active: false }
];

const isAnyActive = users.some(user => user.active);

console.log(isAnyActive); // true 

// filter(): returns new array based on the given condition

let num = [8, 9, 10, 11, 22, 33, 1, 2,  3,  4,  5,  6, 7, 8, 22, 33, 99, 8, 9]

let numFilter = num.filter((e)=> e%2 === 0); // even
let numFilterOdd = num.filter((e)=> e%2 !== 0); // odd
let numFilterOdd1 = num.filter((e)=> e%3 === 0); // 3 condition 
let numFilterOdd12 = num.filter((e)=> e%3 == '0');
console.log(numFilter);
console.log(numFilterOdd);
console.log(numFilterOdd1); 
console.log(numFilterOdd12);
console.log(num);  

let num = [8, 9, 10, 11, 22, 33, 1, 2,  3,  4,  5,  6, 7, 8, 22, 33, 99, 8, 9, 1, 2]

 let numReduce = num.reduce((total,n)=>{
    return total+n*2
}, 10);
console.log(numReduce);  

let numCount = num.reduce((NumCount,n)=>{
    NumCount[n]=(NumCount[n] || 0 )+1;
    return NumCount;

}, {})
console.log(numCount); */

// map():

let num = [8, 9, 10, 11, 22, 33, 1, 2,  3,  4,  5,  6, 7, 8, 22, 33, 99, 8, 9, 1, 2]

 let numMap = num.map((n)=> n-n+1)
 console.log((numMap));


