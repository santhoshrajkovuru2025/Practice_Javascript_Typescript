
// Rest Operator:
// RestOperator(...) is indicator used for coding
// Rest Operator is used in declaring the function

function Sample(name,...myCollection) {

    let value = 0;

    for (let i in myCollection){
        value += myCollection[i]
    }
    console.log(value)
}
Sample("Sunthosh",10,20,30,40,50,60,70)