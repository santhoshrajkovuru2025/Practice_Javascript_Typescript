// Abstraction:
// Abstraction means hiding internal implementation details and showing only the necessary functionality to the user.

// Base class 'type'
class type{

// Public method exposed to the user
// Internally it calls the private calculation method
a(x,y){
    this.#divide(x,y)
}

// Private method that performs the actual division
#divide(x,y){
    console.log(x/y)
 }

}

// Child class inheriting from 'type'
class multiply extends type{

// Public method accessible to user
b(x,y,z){
    this.#multiplyLogic(x,y,z)
}

// Private method that performs internal calculation
#multiplyLogic(x,y,z){
console.log(x+y*z)
}

}


// Child class inheriting from 'multiply'
class Division extends multiply{

// Public method exposed to user
c(x,y,z,g){
    this.#complexCalculation(x,y,z,g)
}

// Private method hiding internal logic
#complexCalculation(x,y,z,g){
console.log(x*y+z-g)
}

}


// Creating object of Division class
const ci = new Division()

// User only calls these simple methods
ci.a(1,2);
ci.b(1,3,4);
ci.c(5,6,7,8);


// Second example:  Abstraction + Encapsulation Example

// Define a class called 'human'
class human {

    // Private property '#name' (hidden from outside world)
    #name = 'Swaroop'; 

    // Private property '#age' (hidden internal data)
    #age = 30;
     
    // Private method performing internal logic
    // User cannot directly call this method
    #getage(){
        console.log(`${this.#age} and ${this.#name}`)
    }

    // Public method (this is the abstraction layer)
    // User interacts only with this method
    getdetails(){
        // Internally calls private logic
        this.#getage();
    }
}

// Creating an object
const h = new human();

// User only calls the public method
h.getdetails();


// Third Example:  Abstraction Example with Office class

class Office {

        // Private employee ID
        #EMPID = 1984;

        // Private manager name
        #Manager = 'Peddi';

        // Public property (visible outside)
        Dept = 'QA';

    // Private method performing internal employee logic
    #Employee(){

        console.log(`The Dept of the Employee ${this.Dept}, Emp ID is: ${this.#EMPID} and assigned to the Manager name is:${this.#Manager}`)
    }
    
    // Public method acting as abstraction layer
    Desk(){

        // Calls hidden internal logic
        this.#Employee()
    }

}

// Creating object of Office class
const off = new Office();

// User interacts only with the public method
off.Desk()


