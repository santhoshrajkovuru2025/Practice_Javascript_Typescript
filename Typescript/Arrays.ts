
// Array are more dynamic in nature.


var names: string[] = ["Tom","Stephen","John","Ravi"]
console.log(names[0])

console.log("------------------------")

// using generics:

let empNames: Array<String> =['Ram','Rehman','Rome','Rat']

let empNum: Array<Number> = [1,2,3,4,5,6,7,8,9]

let empInfo: Array<any> = [1,'Naveen',true,null]


// multitype Array:

let values: (string | number)[] = ["Tom", 100, "Naveen", 200]

let val : Array<String | boolean> = ["Sam",true]

//  first intiliazation and then declaration.

let users: Array<number |String >;
users= [100, "Ram"]


// interation of Array:

let emp : Array<String> = ["Peter","pavan","narendra","kumar"]

// 1. index based loop

for (let i=0;i<emp.length;i++){
    console.log(emp[i])
}

console.log("------------------------")

// for in loop:

for (let e in emp){
    console.log(e + ":" + emp[e])
    console.log(`the value of the employee is ${e}:${emp[e]}`) // another way to print the values.
}

