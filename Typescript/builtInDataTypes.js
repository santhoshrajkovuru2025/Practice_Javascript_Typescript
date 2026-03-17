// Number:
var first = 12;
var second = 15.1542; // decimal
var third = 0X37CF; // Hexa - decimal
var fourth = 255; // Octa - decimal
var fifth = 57; // binary
console.log(first);
console.log('--------------------');
console.log(second);
console.log('--------------------');
console.log(third);
console.log('--------------------');
console.log(fourth);
console.log('--------------------');
console.log(fifth);
console.log('--------------------');
// string:
var empName = 'John';
var empDept = 'QA';
console.log(empName);
console.log(empDept);
var statement = empName + " Works in the Dept: " + empDept;
console.log(statement);
console.log('--------------------');
// Boolean:
var a = true;
var b = false;
console.log(a);
console.log(b);
console.log('--------------------');
// void type:
function hello() {
    console.log('This is the welcome message');
}
hello();
console.log('--------------------------------');
// Null;
var num1 = null;
console.log(num1);
console.log('--------------------------------');
// Undefined:
var num2 = undefined;
num2 = 1000;
console.log(num2);
console.log('--------------------------------');
// Any:
var val;
val = 10001;
console.log(val);
console.log('--------------------------------');
val = 'sunthoshraj';
console.log(val);
console.log('--------------------------------');
val = true;
console.log(val);
console.log('--------------------------------');
function funName(x, y) {
    console.log(x + y);
}
funName(122, 145);
funName('Swaroop', 'Reddy');
funName(true, false);
funName('Hi', 'Welcome to the Typescript');
