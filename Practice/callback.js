
function Home(Item, callback){

    console.log(`Started from Home with ${Item}`)
    callback()
}

function Office(){
    console.log('reached office with the same')
}
Home('Laptop',Office)


console.log("-------------------")


// function with callback

function essentials(thing, callback){
 console.log(`provided the ${thing}`)
    callback()
}

function accept(){
    console.log('Accepted')
}
essentials('bottle', accept)

