
let flag:boolean = true
if(flag){
    console.log('pass')
}else{
    console.log('fail') 
}

// number 

let x:number = 10, y: number = 20

if(x>y){
    console.log("x is greater than y")
}else{
    console.log("y is greater than x")
}

console.log('----------------------------')

// if else-if

let a :number = 100
let b :number = 200
let c: number = 300

if(a>b && a>c){  // && is also called as short circuit operator
 console.log('a is the greatest number')
}
else if(b>c){
    console.log('b is the greatest number')
}
else{
    console.log('c is the greatest number')
}

console.log('----------------------------')

// Ternery Operator:

let i:number =100
let j: number =200

i>j ? console.log("i is greater than j"): console.log("j is greater than i")
console.log('----------------------')

let browser: string = 'chrome'; // firefox

(browser === 'chrome') ? console.log('Launch Chrome') : browser === 'firefox' ? console.log('Launch Firefox') : console.log('Please pass the right browser')