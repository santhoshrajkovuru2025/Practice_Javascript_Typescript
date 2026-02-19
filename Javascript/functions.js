// 1. function():

function add(a,b){
    return a+b;
}
function print(){
    console.log("Hi this is Java Script");
}
const sum = add(5,6);
console.log(sum);
print();
console.log("---------------");

// 2. Function Expression: Annonymous function.

const mutliply = function(x,y){
    return x*y;
}
let mul = mutliply(5,6);
console.log(mul);
console.log("---------------");
// 3. Arrow function Expression: Annonymous function , a function has no name.

const divide = (t1,t2) => t1/t2;
let div = divide(20,2);
console.log(div);
console.log("---------------");

// 4. Function Constructor:

const substract = new Function('a','b', 'return a-b;');
const subs = substract(10,2);
console.log(subs);
console.log("---------------");

// 5. IIFE (Immediately Invoked Function Expression):

(function(){

console.log("Server is up now and running successfully");
})();
console.log("---------------");


// 6. Generator Function();
// function * and yeild is used to create a function.

function* generateNewSequence(){

    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    
}
const generator = generateNewSequence();
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log(generator.next().value);
console.log("---------------");

//7. Annoymous function(): No specific Name

const numbers = [1,2,3,4,5,6,];
const squareNumbers = numbers.map((e)=>{
 return e*e;
});
console.log(squareNumbers);
console.log("---------------");

// 8. recurrsive function(): A function calls itself is known as recurrsive function.


function factorial(n){

    if(n === 0 || n === 1){
         return 1;
    }
   else{
    return n * factorial (n-1);
   }
}
console.log(factorial(3));
console.log(factorial(7));
console.log(factorial(6));
console.log(factorial(100));
console.log("---------------");

// 9. Higher - Order function ():

function addition(a,b){
 return a+b;
}
function multiplication(a,b){
 return a*b;
}
function operate(fuName, a,b){
    return fuName(a,b);
}
const s = operate(addition, 4,5);
console.log(s);
const s1 = operate(multiplication, 4,5);
console.log(s1);
console.log("---------------");


