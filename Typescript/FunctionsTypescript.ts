
// functions in TS:
// void  // parameter // return

//Named function: zero parameter function also known as Void type

function getInfo(): void{
    console.log('Hello Info')
    return // it is called blank return or void return: it returns nothing
}
getInfo()

console.log('------------------------')

// Named function with parameters:
 
function add(a: number, b:number){  // 2 parameters
    console.log(a+b)
}
add(10,20) // call by value, These are called as arguments

console.log('------------------------')

// function with return statement:

function Bodmas(a:number, b:number, c:number): number{
    let total:number = a*b+c;
    return total;
}
let result:number = Bodmas(1,6,8)
console.log(result)
console.log('------------------------')

function isUserActive(userName:string): boolean{
    if(userName === 'Naveen'){
        return true;
    }
    else if (userName === 'Tom'){
        
        return false;
    }
    else {
        console.log(`user name ${userName} not found`)
        return false;
    }
}
let user: boolean = isUserActive('Ram')
console.log(user)


console.log('------------------------')

// 2 . Anonymous function: without name  function -- store in a variable
// call it using variable name only

let infon = function(){
    console.log('Hello')
}
infon();

console.log('------------------------')

let multiple = function(m1:number, m2:number): number{

    return m1*m2
}
let res: number = multiple(5,9)
console.log(res)