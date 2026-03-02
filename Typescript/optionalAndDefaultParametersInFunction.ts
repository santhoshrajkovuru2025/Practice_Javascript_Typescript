
// without optional parameters: we should provide the details mandatorily when a string or number is initilazed

function getInformation(firstName:string,age:number,lastName:string): string{
    return firstName +' '+ age+' '+lastName
}
console.log(getInformation('Tom',21,'sim'))
console.log('------------------------')

// optional parameters: we should '?' sign before the parameters, so that it is not mandatory to declare the variable values

function getInfor(firstName:string,age:number,lastName?:string): string{
    return firstName +' '+ age
}
console.log(getInfor('Tom',21,'simg'))

console.log('------------------------')

// default parameters

function setDetails(name:string,mesg:string = 'welcome'):string{

    return mesg+' '+name
}
console.log(setDetails('Sunthosh'))
console.log(setDetails('Naveen','Hello')) // in this case instead of welcome it will prints Hello as we provided the parameter 'Hello'
console.log(setDetails('Suraj',undefined)) // if we pass the undefined, the it will ignore and prints the 'Welcome' only.