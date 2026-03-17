function someFunc() {
    if (true) {
        var y = 10;
        y = 25;
        console.log(y);
        console.log('--------------------');
    }
    //  console.log(y) --> when used let keyword, it is not accessible outside the block
}
someFunc();
// console.log(y)  --> when used let keyword, it is not accessible outside the block
// const:
// cannot only initiliaze
// cannot redeclare
var z = 10;
console.log(z);
// z =20; --> not possible
// const y;  --> not possible.
