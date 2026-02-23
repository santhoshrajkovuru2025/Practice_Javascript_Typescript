
class BankAccount{
    #balance = 0; // declared as private variable using #
    deposit(amount){
        this.#balance +=amount
    }
    getBalance(){
        return this.#balance
    }
}
let acc = new BankAccount();
acc.deposit(500);
console.log(acc.getBalance());



