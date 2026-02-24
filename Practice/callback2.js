
function Office(callback){

console.log('Office Completed');
callback();
}

function Driving(){
console.log('Driving to Home');
}

function Home(){
console.log("Reached Home");
}
Office(Home)


console.log("----------------------------------------")


function Company(Thing, Item, essential, callback){

    console.log(`In the company I recieved ${Thing}, ${Item} and ${essential}`);
    callback();
}

function Work(Task, callback){

    console.log(`My Manager given me a task ${Task} to complete`);
    callback();
}

function Driving(vehicle, callback){

    console.log(`Drove my vehicle ${vehicle} to reach Home`);
    callback();
}

function Home(){
    console.log('Reached Home');
}
Company('Laptop','Charger','Water bottle', function(){
Work('Write a Testcase', function(){
Driving('Honda SP125', function(){
    (Home);
    });
  });
});