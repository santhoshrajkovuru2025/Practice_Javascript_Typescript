
function Home(Item, callback){

    console.log(`Started from Home with ${Item}`)
    callback()
}

function Office(){
    console.log('reached office with the same')
}
Home('Laptop',Office)