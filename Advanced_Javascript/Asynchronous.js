

//java script is a Single - Threaded
// Asynchronous programming provides a mechanism for managing long running operations without interuppting the flow of the program
// Asynchrnous operations involves the use of callbacks, promises, or asyn/await syntax.


console.log("First Test case")
console.log("Second Test case")

setTimeout(() => {
console.log("Third Test case")  
}, 3000)

console.log("Fourth Test case")
console.log("Fifth Test case")
