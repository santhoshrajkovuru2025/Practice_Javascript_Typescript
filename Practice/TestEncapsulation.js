
// Encapsulation: using private variables and private functions
// Encapsulation is the process of wrapping data (variables) and methods (functions) into a single unit (class) and restricting direct access using private variables.

// Define a class called 'human'
class human {

    // Private property '#name', only accessible inside the class
    #name = 'Swaroop'; 

    // Private property '#age', only accessible inside the class
    #age = 30;
     
    // Private method '#getage', can only be called inside the class
    #getage(){
        // Logs the private age and name in a formatted string
        console.log(`${this.#age} and ${this.#name}`)
    }

    // Public method 'getdetails', accessible from outside the class
    getdetails(){
        // Calls the private method '#getage' from within the class
        this.#getage();
    }
}

// Create an instance of the 'human' class
const h = new human();

// Call the public method 'getdetails', which internally calls the private method
h.getdetails(); // Output: 30 and Swaroop


 // #Private variables are only accessible in class body only not in functions and methods

// Encapsulation


class Office {

        #EMPID = 1984;
        #Manager = 'Peddi';
        Dept = 'QA';

    #Employee(){

        console.log(`The Dept of the Employee ${this.Dept}, Emp ID is: ${this.#EMPID} and assigned to the Manager name is:${this.#Manager}`)
    }
    
    Desk(){
        this.#Employee()
    }

}
const off = new Office();
off.Desk()

