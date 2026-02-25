
// function

function name(Name){
    console.log('Name of the person is: '+Name)
}
name('Sunthosh')

console.log("-------------------")


// Function Expression : Assigning function to a varible is known as function expression.

const place = function place(Place){
    console.log("Name of the place is: "+Place)
}
place('Hyderabad')

console.log("-------------------")

// Arrow function: 

const thing = (Thing) => {console.log('Name of the Thing is: '+Thing)}
thing('Laptop')

console.log("-------------------")

const add = (a,b)=>{console.log('The sum of a and b is: '+(a+b))}
add(14,15)