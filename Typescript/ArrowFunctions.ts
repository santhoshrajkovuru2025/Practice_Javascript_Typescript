// Arrow Funtion: or fat Arrow or lamba function in python
// Arrow function nothing but the Anonymous function : without a name, we have to store it in a variable

// let Info = function (){
// }

// In Arrow function we will write in this way

let Info = ()=>{
console.log('Write the Info of the code')
}

// we can also write in this way

let printInfo = ()=> console.log('Hellow TS')

Info()
printInfo()

console.log('--------------------------')

let multiply = (x: number,y:number):number =>{
    return x*y;
}
console.log(multiply(12,8))


console.log('-----------------------------------')

class person{
    firstName:string
    age:number

    constructor(firstName:string,age:number){
        this.firstName = firstName
        this.age = age
    }
    displayPerson =()=> console.log(this.firstName +''+this.age);
    
}
    let p = new person('Tom',30)
    p.displayPerson()