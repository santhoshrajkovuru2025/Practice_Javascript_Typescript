// Enum: It is a set of variables that holds.
// If you want to compile the typescript program we should use a command: tsc classname.ts
// This will create a js file for execution and run file in the commnand prompt /console.
// No, run the file using a command in the command prompt: node classname.js --> give the result
// If we want to execute the code directly in vs code in the console. we have install the plugin "npm install -g ts-node"
// then if we have to enter the code in the console : ts-node filename.ts
// numeric
// String
// Heterogenous
// numeric type Enum:
var BrowserName;
(function (BrowserName) {
    BrowserName[BrowserName["Firefox"] = 0] = "Firefox";
    BrowserName[BrowserName["Safari"] = 1] = "Safari";
    BrowserName[BrowserName["Edge"] = getversion('Chrome') * 5] = "Edge";
    BrowserName[BrowserName["Chrome"] = getversion('Chrome')] = "Chrome";
})(BrowserName || (BrowserName = {}));
function getversion(browserName) {
    if (browserName === 'Chrome') {
        return 115;
    }
    return -1;
}
console.log(BrowserName.Chrome);
console.log(BrowserName);
// Enum in String
var Environment;
(function (Environment) {
    Environment["Dev"] = "Dev";
    Environment["QA"] = "QA";
    Environment["Stage"] = "Stage";
    Environment["Prod"] = "Prod";
})(Environment || (Environment = {}));
console.log(Environment.Dev);
