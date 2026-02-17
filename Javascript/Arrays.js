let num =[]; // empty Array


let lang =['java','python','javascript']
// 1. method - push : appends at the last of the array

lang.push('ruby','c++');
console.log(lang);

// 2. pop - removes the last element from the array.

let numbers =[1,2,3,4,5,6];
numbers.pop();
console.log(numbers);

// 3. shift method: remove the element from the array and return the array.

let fruits =['Apples','Mangoes','Bananas','Kiwis']; // Array of strings

let fistFruit = fruits.shift();
console.log(fistFruit);
console.log(fruits);

// 4. unshift : one or more adds elements in the beginning of the array and return the array.

let colour =["black","white"];
colour.unshift("blue");
console.log(colour);
console.log(colour.length);

// 5. splice: Allow to add remove in the array for the same index

let animals = ['bear', 'deer','fox','eagle']
animals.splice(1,1,'lion');
console.log(animals)

// 6. slice: 
let n =[1,2,3,4,5,6];
let newn = n.slice(1,4);
console.log(newn);

//7.  concat : Adds two arrays

let fr =['Apples','Mangoes','Bananas','Kiwis'];
let veg = ['cabbage','califlower','carrot']
let mixedArray=fr.concat(veg);
console.log(mixedArray);

// 8. indexof

let color =["black","white","Red","black"]
let indexRed = color.indexOf("black");
console.log(indexRed);
let indexpink = color.indexOf("pink");
console.log(indexpink);

// to find the 2nd or multiple index of repeated element in an array

let colorblack = color.indexOf("black",2);
// another way without hardcoded: color.indexOf("black",color.indexOf("black")+1 )
console.log(colorblack);


// 9. includes:

let test = ["admin","customer","seller","vendor"]
let flag = test.includes("seller","vendor");
console.log(flag);

// foreach function:

let n1 =[1,2,3,4,,5,6,7,8]
n1.forEach((e)=>{ // e will go to each and every value
console.log(e);
});

