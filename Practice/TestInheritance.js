// Inheritance: Inheritance allows one class to acquire properties and methods of another class.

// Parent class 'type'
class type{

// Method 'a' takes two parameters and prints the result of division
a(x,y){
    console.log(x/y)
 }
}


// Child class 'multiply' inherits from class 'type'
class multiply extends type {

// Method 'b' performs multiplication first and then addition
// Expression follows BODMAS rule: y*z first, then x + result
b(x,y,z){
console.log(x+y*z)
  }

}


// Class 'Division' inherits from class 'multiply'
// This creates multilevel inheritance: type -> multiply -> Division
class Division extends multiply{

// Method 'c' takes four parameters
// Performs multiplication first, then addition, then subtraction
c(x,y,z,g){
console.log(x*y+z-g)
  } 
}


// Creating an object of the 'Division' class
const ci = new Division()

// Calling method 'a' inherited from the 'type' class
ci.a(1,2);

// Calling method 'b' inherited from the 'multiply' class
ci.b(1,3,4);

// Calling method 'c' defined inside the 'Division' class
ci.c(5,6,7,8);