function checkDayofWeek(daynumber){
let day;

switch(daynumber){
    case 0:
        day= "Sunday";
        break;
        case 1:
        day= "Monday";
        break;
        case 2:
        day= "Tuesday";
        break;
        case 3:
        day= "Wednesday";
        break;
        case 4:
        day= "Thursday";
        break;
        case 5:
        day= "Friday";
        break;
        case 6:
        day= "Saturday";
        break;

    default:
        console.log('Invalid Day');
        break;
}   
return day;

}
console.log(checkDayofWeek(1));
console.log(checkDayofWeek(3));
console.log(checkDayofWeek(4));
console.log(checkDayofWeek(10));

// Browser navigation using switch case.

let browser = 'opera';
switch(browser){

    case 'chrome':
        console.log('Launch the Chrome Broswer');
        break;
    case 'firefox':
        console.log('Launch the Firefox Broswer');
        break;
    case 'Edge':
        console.log('Launch the Edge Broswer');
        break;
    default:
        console.log('please pass the right broswer...'+browser);
        break;
}

// can be used in multi env: dev, qa, stage, UAT, prod
// multi user: admin, customer, seller, distributor, Cat manager