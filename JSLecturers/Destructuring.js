
// Destructuring: breaking objects or Arrays into variables

// without destructuring:

const user = {name:"Sunthosh",age:25, place:"Hyderabad"}

const name = user.name
const age = user.age
const place = user.place

console.log(name,age,place)

console.log('-----------------------------------------')

// with Destructuring:

const user1 = {Name:'Sunthosh',Age:25, Place:"Hyderabad",Sub:"Gurramguda"}

const{Name,Age,Place,Sub} = user1
console.log(Name,Age,Place,Sub)

console.log('-----------------------------------------')

// Array Destructuring :

const district =["Nalgonda","Ranga Reddy","Mahabubnagar","Nagarkurnool"]

const[first,second,third,fourth] = district
console.log(first,second,third,fourth)

console.log('-----------------------------------------')

// practice;

const sample = [1,2,3,4,5,6,7,8,9]

const [one,two,three,four,five,six,seven,eight,nine] = sample
console.log(five)

const states = {

    
}
