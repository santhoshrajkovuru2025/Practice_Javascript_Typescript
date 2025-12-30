function checkAge(age){

    if (age>=18){

        console.log('Right to Vote');
    }else{

        console.log("No right to vote");
    }
}
checkAge(14);
checkAge(28);
checkAge(0);

// Multiple if else condition:

function checkNumber(num){

    if (num >0){
        console.log("The Number is Positive");
    }
    else if( num <0){
        console.log("The Number is Negative");
    }
    else{
        console.log("Zero number found");
    }
}
checkNumber(1);
checkNumber(-1);
checkNumber(0);

// nested if - else

    function checkGrade(score){

        if (score>=90){
            grade = 'A';
        }
        else {
            if(score >=80){
                grade ='B';
            }
            else {
                if(score >=70){
                grade = 'C';
            }
            else
                {
                 grade ='D';
                }

            }
        }
        console.log(grade)
    }
    checkGrade(90);
    checkGrade(70);
    checkGrade(35);
    checkGrade(80);


    // if else condition for the browsers

    // let browser = "chrome";
    // if (browser == "chrome"){
    //     console.log("Launch the chrome browser");
    // }
    // if (browser == "edge"){
    //     console.log("Launch the edge browser");
    // }
    // if (browser == "firefox"){
    //     console.log("Launch the firefox browser");
    // }
    // else {
    //   console.log ("launch the right browser......");
    // }


    // if - else if 

    let browser = "opera";
    if (browser == "chrome"){
        console.log("Launch the chrome browser");
    }
    else if (browser == "edge"){
        console.log("Launch the edge browser");
    }
    else if (browser == "firefox"){
        console.log("Launch the firefox browser");
    }
    else {
      console.log ("Please launch the right browser......");
    }

