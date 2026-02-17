// foreach Method:

numbers = [1,2,3,4,5,6]
numbers.forEach(n => console.log(n));
console.log ('--------------------')

// for .. in method 
const obj = { a: 1, b: 2 };
for (const key in obj) {
  console.log(key, obj[key]);
}

console.log ('--------------------')

/* for.. of()
num = [4,5,6,7,8,9]

for (const n of num) {
  if (n === 3) break; 
} */


// Map():

const doubled = numbers.map(n => n*2)
console.log(doubled)

console.log ('--------------------')

    // filter(): useed for filtering the data in the Array

    const evens = numbers.filter(n => n%2 === 0)
    console.log(evens);

    console.log ('--------------------')

    // reduce(): Reduces to a single value.

    const sum = numbers.reduce((total,n)=>n+total,0);
    console.log(sum);