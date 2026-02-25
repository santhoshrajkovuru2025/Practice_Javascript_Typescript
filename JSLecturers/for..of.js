
const marks = [65,78,98,75,74,80]
const subjects =["telugu","english","hindi","maths","science","social"]

// using forEach method:

marks.forEach(function(a){
    console.log(a)
})

console.log("--------------------")

// how it can be done in "for..of loop"

syntax:

for(let b of marks){
    console.log(`The value of b: ${b}`)
}

console.log("--------------------")

for(let d of marks){
    console.log(d)
}

console.log("--------------------")

for (let c of subjects){
    console.log(`The value of Subject is: ${c}`)
}

