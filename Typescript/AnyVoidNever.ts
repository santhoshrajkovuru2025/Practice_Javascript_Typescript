
//Any

let num: any = "Ram"
let numm :any =123
let nu:any = true
let language:any[] = ['Ram', 1, true,'Automation']
language.push('Any')

// we declare the any type of function

function info(a: number, b:number):any {

    if(a>b){
        return 'testing'
    }
    else {
        return 123
    }
}
let n = info(12,20)
console.log(n)

// void: only undefined values can be used in the void data type, apart from the undefined we can't declare any type as it doesn't return anything


let num1: void = undefined

function getInfo(mesg: String):void{
    console.log(mesg)
}
getInfo("Only Undefined can be used as void doesn't return anything")


// Never: it doesn't indicate or it cannot hold any value. It is not void, it never return
// we can't assign it to the variabbles
// we can assign to the function


function throwError(mesg:string): never {
    throw new Error (mesg)
}
throwError('This record in never found');


function displaymesg(){
    while(true){
        console.log('welcome to the ITC Kakatiya')
    }
}
displaymesg();