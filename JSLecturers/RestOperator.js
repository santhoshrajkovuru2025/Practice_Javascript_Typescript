
// Rest Operator:
// RestOperator(...) is indicator used for coding
// Rest Operator is used in declaring the function

function Sample(name,place,...myCollection) {

    let value = 0;

    for (let i in myCollection){
        value += myCollection[i]
    }
    console.log(name, place, value)
}
Sample("Sunthosh", "Hyderabad", 10,20,30,40,50,60,70)