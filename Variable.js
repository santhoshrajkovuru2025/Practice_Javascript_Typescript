
// Variable is used to declare the Fucntionally = local+ global scope.
// 

var x =10;
function test (){
var y = 20;
}
console.log(x);
console.log ("---------------------")

// Scope of var is local in a function
var pop ='Hello';
function rel(){
var top = "I am Javascript";
console.log(top);
}
rel();
console.log ("---------------------")

// Re-declaration

var browser = "Chrome";
var browser = 'Firefox';
browser ='edge'; // prints the only edge as the variable is re declared.
console.log(browser);
console.log ("---------------------")

var g; // undefined
console.log(g);
g= 'goat';
console.log(g);
console.log ("---------------------")

