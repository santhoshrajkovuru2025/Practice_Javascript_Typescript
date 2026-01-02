// 1. Object Literals: {}

const user = {
    name: 'john',
    age:25,
    city: 'California',
    Occupation:'Engineer'
};
console.log(user.name);
console.log(user.Occupation);
console.log("-------------");

// 2. Constructor Function:

function Car(brand, model, price){
    this.brand=brand;
    this.model=model;
    this.price=price;
};
const c1 = new Car('BMW','520d','25L');
const c2 = new Car("Audi","Q7","14L");
const c3 = new Car("TATA","NEXON","12L");
console.log(c1.brand+ " "+ c1.model+ " "+c1.price);
console.log(c2.brand+ " "+ c2.model+ " "+c2.price);
console.log(c3.brand+ " "+ c3.model+ " "+c3.price);
console.log("-------------");

// 3. Class Style;

class Customer {
    constructor(name, product){
        this.name =name; // Instance Variables
        this.product=product;
    }
    addToCart(){

         console.log(`${this.name}'s product ${this.product} is successfully added to the cart`);
    }
}
const customer1 =new Customer('Sai','Apple MAC Book');
console.log(customer1.name);
console.log(customer1.product);
customer1.addToCart();
console.log("-------------");

// 4. object. create method(): with some prototype it can be created.

const employeeProtoType = {
    printInfo:function(){
        console.log(`Hello, I am an employee of ${this.companyName}`);
    }
};

const e1 = Object.create(employeeProtoType);
e1.companyName='Softsol';
e1.printInfo();


// 5 Using the factory functions: return an object

function createDepartment(deptname, HOD){
    return{
        deptname: deptname,
        HOD:HOD,
        getDeptInfo: function(){
            console.log(`Hi the deptname is ${this.deptname} and the hod is ${this.HOD}`);
        }
    }
}
const dept1 = createDepartment("QA","Srinivas Rao Peddi");
const dept2 = createDepartment("Dev","Srinivas Manne");
dept1.getDeptInfo();
dept2.getDeptInfo();
console.log(dept1.deptname+' '+dept1.HOD);
console.log(dept2.deptname+' '+dept2.HOD);