

const fruits = ["Apple","Mango","Banana","Lemon"]
const Veggies = ["Cucumber","Spinach","Mushroom","Onion"]

const group =[...fruits,...Veggies]
console.log(group)

 // if you want to get the output in a single line but does'nt display like Array:

 console.log(group.join(","))

 console.log("------------------------------------")

 // spread oprator for objects:


 const firstName ={
    fname: "Sunthosh"
 }

 const lastName ={
    lname: "Raj"
 }

 const surName ={
    sname: "Kovuru"
 }

 const fullname ={...surName, ...firstName, ...lastName}
 console.log(fullname)
 console.log(fullname.sname, fullname.fname, fullname.lname)