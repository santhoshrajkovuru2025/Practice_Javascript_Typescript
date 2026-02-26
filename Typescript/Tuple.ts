
// Tuple: fixed size
// Tuple vs Array
// Array: are in dynamic in nature, in runtime more values can be added

let person: [string , number]=["Naveen", 1045];
console.log(person[0])
console.log('-----------------------')
// to create one more tuple we have to create another tuple.

let user: [String, number, boolean] = ["Naveen", 1424, true];

console.log(user[0])
console.log(user[1])

console.log('---------------------------')

let data: [string,number][] =[["Sunthosh", 100], ["Swaroop", 50]]
console.log(data[0][0])
console.log(data[0][1])

// push method in Tuple

let customer :[String, number] = ["Ravi",400]
customer.push("Ram",150)
console.log(customer)

