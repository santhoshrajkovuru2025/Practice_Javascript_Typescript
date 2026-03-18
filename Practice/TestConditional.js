
var a = 100;

for(let i=2; i<=a; i++){
    var isPCount=0;
    for (let j=2; j<i;j++) {

        if( i%j === 0){
            //console.log(j+"is not prime")
            isPCount++;

        }
        
    }
    if(isPCount === 0)
        {
            console.log(i)
        }
}