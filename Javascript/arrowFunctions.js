 // Arrow functions: parenthesis() is used when having one or more parameters 

 const square = num => num * num;
 const result = square(5);
 console.log(result);
console.log("------------------");
 // '()' should be used compulsory 
 const mesag = ()=> "Hello JS";
 console.log(mesag());
console.log("------------------");
 // If you have more than one paramters then '()' is compulsory to declare the parameters.

const add = (a,b)=> a+b;
console.log(add(5,6));
console.log("------------------");


const getfullName = (person) => `${person.firstName}${person.lastName}`

const person = {
    firstName: 'Nagaraju',
    lastName: 'Vajja'
}
const fullName = getfullName(person);
console.log(fullName);
console.log("------------------");
// creating an arrow function with default parameters

const greet = (userName='guest',age= 0)=> `Hello, ${userName}! You're ${age} years old`;
const g1 = greet();
console.log(g1);

const g2 = greet('Sam',30);
console.log(g2);
console.log("------------------");

// Arrow function with Rest parameters

const sum = (...numbers) => numbers.reduce((acc,num) => acc+num,0);
const Total = sum(1,2,3,4,5);
console.log(Total);
console.log("------------------");
// one is default and one is accumlator

const browserInfo= (browser ='chrome', ...details)=>{
    console.log(`Browser: ${browser}`);
    console.log('other details:', details);
    console.log("------------------");
};
browserInfo();
browserInfo('firefox','115.12.3.0','mozilla','headless');


//max number usinh Math

 const findMaxNum = (a,b,c) => {
return Math.max(a,b,c);
};

const maxvalue = findMaxNum(10,30,50);
console.log(maxvalue);