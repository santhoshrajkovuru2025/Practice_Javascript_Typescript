function someFun1() {
    if (true) {
        var x = 100;
        console.log(x);
    }
    console.log(x);
}
someFun1();
// console.log(x) --> Accessing the var keyword is not possible.
