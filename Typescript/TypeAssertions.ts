
// TSC
// Type Assertions: telling the compiler the type of the paramete or variable.

// 1. using <>
// 2. using 'as' keyword.

let total: any = 123
let totalBill = <number>total + 200
console.log(totalBill)

let usingValue: any = "hello Typescript Learning with Sunthosh";
let len = (usingValue as string).length;
console.log(len)

let flag: any = true;
if (flag as boolean){
    console.log('Hello TS !!!')
}
