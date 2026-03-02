
// for loop

// use cases:
// when the no. of iterations are fixed. ex: drop- down values 11 to 12 months fixed iterations (Jan to Dec)
// used for Array or Array list

    // 1 to 10. 
    for (let i =0; i<=10;i++){
    console.log("i: "+i)
    }
    console.log('--------------------------')
    for (let j=0;j<=10;j=j+2){
        console.log("j: "+j)
    }
    console.log('--------------------------')
    for(let k=1;k<=10;k=k+2){
        console.log("k: "+k)
    }
    console.log('--------------------------')

    // for..of loop : Arrays

    let numbers =[10,20,30,40,50,60]
    for(let n of numbers){console.log(n)}

    console.log('--------------------------')

    let number =[10,20,30,40,50,60]
    for(let n of number){
        console.log(n)
        if(n === 30){
            console.log("Hi");
            break
        }
    }

    console.log('--------------------------')

    let info:string = "Automation Practice for Playwright"
    for (let c of info){
        console.log(c)
    }
    console.log('--------------------------')
    // for..in loop : Array, Tuple, Objects, it will print the index of the element in the array

    let num = [100,200,300,400,500,6000]

    for(let i in  num){
        console.log(i) // prints the index of the element in Array
        console.log(i+':'+num[i]); // prints the elements in the Array
    }
    console.log("-----------------------------");

    
    // while Loop: does'nt execute until the condition is satisfied

    // use cases:
        // printing 1 to 10 using while loop
        // when to use while loop: No.of iterations are fixed
        // Ex:  1. Infinite scrolling purpose in the applications like (swiggy, zomato, linkedin)
        //      2. wait for the page loading if (2 sec, 5 sec, 10 sec, 15 sec)
        //      3. wait for the element to load in the page (Ex: Calender handling)
        //      4. Web table pagination 1, 2, 3, 4,...... next ....


        let p=1
        while(p<=10){
            console.log("p: "+p) // if we execute the excute the code directly it will print the value 1 continuously, as the condition is not given
            p++ // Now the code prints till 10 only as the condition is given
        }

        console.log('-----------------------------')

    // do-while loop: it will executes atleast once before providing the business logic

    let d=1

    do{
        console.log("d: "+d);
        d++
    }
    while(d<=10)

    // while (d>=10); output: 1, because 1 is less than 10, but after checking the condition it stops execution, so that it will execute atleast once