
const cities = {

    city1: "Hyderabad",
    city2: "Mumbai",
    city3: "Pune",
    city4: "Nasik"
}

// using for...in loop:

for (let i in cities){
    console.log('The value of the city is: '+cities[i])

}

console.log("--------------------")

// Using the same with Template literals:

for(let j in cities){
    console.log(`The name of city is ${j} : ${cities[j]}`)
}