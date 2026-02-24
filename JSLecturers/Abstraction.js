class coffeeMachine{
    
startMachine(){
    console.log('Heating Water....!')
 } 
makeCoffee(){
    this.startMachine();
    console.log('Coffee Ready')
    }
}
let coffee = new coffeeMachine();
coffee.makeCoffee();