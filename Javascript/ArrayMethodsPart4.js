
let int1 = [1,2];
int1.push(12,34,45,67,89,"Sunthosh");
console.log(int1);
console.log('----------------------');

let int12 = [1, 2, 12, 34, 45, 67, 89];
int12.pop(67,89);
console.log(int12);
console.log('----------------------');

//shift:

let int13 = [ 1, 2, 12, 34, 45, 67, 89, 'Sunthosh' ]
int13.shift();
console.log(int13);
console.log('----------------------');

//unshift:

let int14 = [11,22,33,44,55,66,77];
int14.unshift(88,99);
console.log(int14);
console.log('----------------------');

//splice:

let names = ['santhosh','softsol','Sudheer', 'swaroop'];
//let names_splice = names.splice(0,2,'akhil','sunishit');
let names_splice = names.splice(0,2);
console.log(names_splice);
console.log(names)
console.log('--------------------------------')


// slice:

let n =[1,2,3,4,5,6];
let newn = n.slice(1,5);
console.log(newn);
console.log('--------------------------------')


//indexOf():

let num = [8, 9, 10, 11, 22, 33, 1, 2,  3, 22,  4,  5,  6, 7, 8, 22, 33, 99, 8, 9]

let numIndex = num.indexOf(77)
console.log(numIndex)
console.log('--------------------------------')

//lastIndexOf():

let num1 = [8, 9, 10, 11, 22, 33, 1, 2,  3, 22,  4,  5,  6, 7, 8, 22, 33, 99, 8,9]

let numlastIndexOf = num1.lastIndexOf(22,-18)
console.log(numlastIndexOf)
console.log('--------------------------------')

// some():

let num2 = [8, 9, 10, 11, 22, 33, 1, 2]

let numSome=num2.some(n=>n%2 == 0) 
    console.log(numSome)
console.log('--------------------------------')

// filter():

let num3 = [8, 9, 10, 11, 22, 33, 1, 2]
let numfilter = num3.filter(n=>n%2 ==0)
console.log(numfilter)

// map():

let numMap =num3.map((e) =>e*3)
    console.log(numMap);
