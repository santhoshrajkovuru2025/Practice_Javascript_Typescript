
// class code using function

class payment {

    upi(Amount){
        console.log("Payment done for the amount: " +Amount);
    }

    creditcard(Amount){
        console.log("Payment done for the amount: " +Amount);
    }
}
const type = new payment()
type.upi(500)
type.creditcard(1000)

console.log("-----------------------")

// class code using constructor and template literals

class Shoe {

    constructor(brand, price, size){

        console.log(`shoe: ${brand}, price:${price}, size: ${size}`)
    }
}
const Shoe1 = new Shoe("Addidas", 2000, 9)
const Shoe2 = new Shoe("Bata", 3000, 10)