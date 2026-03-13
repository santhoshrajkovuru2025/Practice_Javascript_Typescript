
// Polymorphism means one method can behave differently depending on the object calling it.

// -------------------------------
// Example 1: Attempted Polymorphism
// -------------------------------

// Define a class named 'add'
class add{

// Method with one parameter
// NOTE: JavaScript does NOT support method overloading,
// so the later methods with the same name will override this one.
a(x){
console.log(x)
}

// Method with two parameters
// This overrides the previous method definition
a(x,y){
console.log(x+y)
}

// Method with three parameters
// This overrides all previous 'a()' methods
// Only this method will actually exist in the class
a(x,y,z){
console.log(x*y+z)
}
}

// Create an object of class 'add'
const c= new add()

// Calling method 'a'
// Since the last method definition overrides the previous ones,
// this call executes: a(x,y,z)
c.a(1,4,5)



// -------------------------------
// Example 2: Runtime Polymorphism (Method Overriding)
// -------------------------------

// Base class (Parent class)
class type{

// Method 'a' that prints a single value
a(x){
    console.log(x)
 }
}

// Child class 'multiply' inheriting from 'type'
class multiply extends type {

// Overriding the parent method 'a'
// Now this method takes two parameters
a(x,y){
console.log(x+y)
  }

}

// Another child class 'Division' inheriting from 'multiply'
class Division extends multiply{

// Overriding method 'a' again
// This method takes three parameters
a(x,y,z){
console.log(x*y+z)
  } 
}


// Create object of Division class
// It will use the 'a()' method defined inside Division
const ci = new Division()

// Create object of multiply class
// It will use 'a()' from multiply class
const ci2 = new multiply()

// Create object of type class
// It will use 'a()' from the parent class
const ci3 = new type();


// Calling method from Division class
// Executes: a(x,y,z)
ci.a(1,6,'Kovuru')


// Calling method from multiply class
// Executes: a(x,y)
ci2.a('Santhosh','Raj')


// Calling method from type class
// Executes: a(x)
ci3.a(2);