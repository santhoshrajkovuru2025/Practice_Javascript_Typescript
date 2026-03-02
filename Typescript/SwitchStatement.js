// using the if else condition:
var day = "Saturday";
var dayOfWeek;
if (day === 'Sunday') {
    dayOfWeek = 'Sunday';
}
else if (day === 'Monday') {
    dayOfWeek = 'Monday';
}
else if (day === 'Tuesday') {
    dayOfWeek = 'Tuesday';
}
else if (day === 'Wednesday') {
    dayOfWeek = 'Wednesday';
}
else if (day === 'Thursday') {
    dayOfWeek = 'Thursday';
}
else if (day === 'Friday') {
    dayOfWeek = 'Friday';
}
else if (day === 'Saturday') {
    dayOfWeek = 'Saturday';
}
else {
    dayOfWeek = 'Invalid day';
}
console.log("Day of the week is: ".concat(dayOfWeek));
console.log('-----------------------------------');
var myday = 'sunday';
switch (myday) {
    case 'sunday':
        console.log('Its sunday');
        break;
    case 'monday':
        console.log('Its monday');
        break;
    case 'tuesday':
        console.log('Its tuesday');
        break;
    case 'wednesday':
        console.log('Its wednesday');
        break;
    case 'thursday':
        console.log('Its thursday');
        break;
    case 'friday':
        console.log('Its friday');
        break;
    case 'saturday':
        console.log('Its saturday');
        break;
    default:
        console.log('Wrong day');
        break;
}
console.log('------------------------------------');
// switch case using the marks
var marks = 100;
switch (marks) {
    case 100:
        console.log('Marks:' + marks);
        break;
    case 200:
        console.log('Marks:' + marks);
        break;
    default:
        console.log("wrong marks");
        break;
}
// switch case statement is true
var flag1 = true;
switch (flag1) {
    case true:
        console.log('flag is true');
        break;
    default:
        console.log('flag is unknown');
        break;
}
// switch case with Enums:
var Browser;
(function (Browser) {
    Browser["Chrome"] = "chrome";
    Browser["Firefox"] = "firefox";
    Browser["Edge"] = "edge";
    Browser["Webkit"] = "safari";
})(Browser || (Browser = {}));
var browserName = Browser.Firefox;
switch (browserName) {
    case Browser.Firefox:
        console.log('Firefox browser is launched');
        break;
    case Browser.Chrome:
        console.log('Chrome browser is launched');
        break;
    case Browser.Edge:
        console.log('Edge browser is launched');
        break;
    default:
        console.log('No browser info');
        break;
}
