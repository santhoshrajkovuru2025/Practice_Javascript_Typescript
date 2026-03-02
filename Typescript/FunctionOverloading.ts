
// javascript doesn't support function over loading
 // Typescript provides the concept of function loading
 // 1. with the same name
 // 2. but different paramter types and return type.
 // 3. however, the number of parameters should be the same.
 // we should provide the implementation / prototype  of the function

 function sum (a:string, b:string):string
 function sum (a:number, b:number):number
 function sum (a:boolean, b:boolean):boolean

 // need to implement with function body this only once

 function sum(a:any,b:any):any{

    return a+b
 }
 let s1 = sum(5,6)
 let s2 = sum(true,false)
 let s3 = sum("Hello","World")
 console.log(s1)
 console.log(s2)
 console.log(s3)