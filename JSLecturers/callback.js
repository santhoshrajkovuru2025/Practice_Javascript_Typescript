// callback function

// async call / task -- once this task is completed -- then the callback function is called

//basic callback:

function greet(name, callback){
    console.log("Hello " +name); //normal / some sync step / task, could be asyn call / api
    callback()
}

//callback function

function welcome (){
    console.log('Welcome !!!!')
}
greet('Sunthosh',welcome)

console.log('--------------------')
// practice

function Showroom(Thing, callback){
    console.log(`I brought a ${Thing} today`)
    callback()
}
// using callback function
function Home(){
    console.log("placed in the Hall")
}
Showroom('TV',Home)