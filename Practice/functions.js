function multiply(){
    let x=10
    let y =2
console.log(x*y)
}
multiply()

console.log("------------------")

const multiple = (a,b) =>{
    return a*b
};
console.log(multiple(3,8))
console.log("----------------------------------")

// what is a function ? : It is a block of code
// function with parameters and without parameters
// function should contain function name
// function key word should be used to declare a function

// function without parameters:

function identity(){
    console.log('Identity of the person is None');
}
identity();
console.log("----------------------------------")

// function with parameters:

function identify(name,age){

    console.log("The person name is:" +name, "and the age is: "+age)
    console.log(`The name of the person is ${name} and the age is ${age}`)
}
identify('Swaroop',40);
identify('Santhosh',25);


