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
        this.name =name;
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



