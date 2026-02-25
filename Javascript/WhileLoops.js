// while loop 

let p =1;
while (p<=10){
    console.log(p); //  to stop continous iteration of print the same values infinite times we need to break the loop by adding the condition.
    p++; // ++p, p=p+1; same is printed irrespective of the printing the value.
}

console.log ("-----------");

let l=2;
while (l<=10){
    console.log(l);
    l=l+2;
}
console.log ("-----------");

// while loop 
// in do while loop the condition is given in the do loop and the condition in the while loop.

let h = 1;
do {
    console.log(h);
    h++;
}
while (h<=10);
console.log ("-----------");
//break:
// we have to print the 1 to 100, print the hi when the multiplication of 5 seen

let m = 0;
while (m<=100){
    console.log(m);
    if(m%5==0){
        console.log("hi");
    
    }
    m ++;
}

console.log("--------");

let min1 = 5;
while (min1<=100){
    console.log(min1);
    if(min1%5==0){
        console.log("hi--bye");
        break;
    }
    min1 ++;
}
console.log("-------------");

const browser =['chrome', 'opera', 'firefox', 'edge', 'safari']
for (const e of browser){
    console.log(e);
}
console.log("-----------");

// break statement can be used when the combination for and if , switch and if, can't be used if it is only in the "if"
const Message =["Facebook", "Instagram", "Whatsapp", "Hike", "Messenger", "Arratai"]
for (const f of Message){

    if(f == "Hike"){
        console.log('launch the Hike messenger')
        break;
    }
}
console.log("-----------");
// if i want to use the for loop for an object
// if we have to use array for in loop then we have to use the array name and the variable in the square bracket
const user ={
    name: "john doe",
    age:30,
    city:"New york city",
}
for (const key in user){
console.log("key"+':'+user[key]);
}