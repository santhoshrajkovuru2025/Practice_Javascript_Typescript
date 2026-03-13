
function name(){  

    console.log('Name is santhosh')

}
name()



function add(a){

    
    console.log(a)
}
add(10)

function bodmas(a,b,c,d){

    return a/b*c+d

}
console.log(bodmas(1,2,4,6))

// closure



function add(){

    let i=10;

    function count(){
        console.log(i);
    }
    return count
}
let c = add();
c();



