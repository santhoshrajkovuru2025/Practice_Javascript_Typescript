
// functions:
//  function keyword

function identify(){

    console.log('ID card found')
    let res = ()=>{
        console.log('Result printed')
    }
    return res
}
let res1 = identify();
res1()

function fun(newRes){

    console.log('printing call back function')
    newRes();
}
fun(res1)

console.log('===========================================')



function employee(name, ID){

    console.log(`Name of the employee : ${name} and Id is: ${ID}`)

    let Dept = (deptName)=> {
        console.log(`The employee belongs to ${deptName}`)
    }
    return Dept
}

function Org(EmployeeDetails){

    console.log('The Employee belongs to Softsol')
    EmployeeDetails('QA')
}
let Details = employee('Sunthosh','01984')
Org(Details)

//
console.log('-----------------------------')

function counter(){

    let count = 0;
    
    function inner() {
        count ++
        console.log(count)
    }
    return inner
}
 let c = counter();
 c();
 c();
 c();

 console.log('-----------------------------')


 var countt =0;
 function counters(){
    countt ++
    console.log(countt)
 }
 counters();
 counters();
 counters();
 counters();

console.log('-----------------------------')

