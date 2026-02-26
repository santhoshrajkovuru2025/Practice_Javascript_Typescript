
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

enum BrowserName{
    
    Firefox,
    Safari,
    Edge = getversion('Chrome')*5,
    Chrome = getversion('Chrome')
}

function getversion(browserName: String): number {
    if (browserName === 'Chrome'){
        return 115;
    }
    return -1   
}


console.log(BrowserName.Chrome)
console.log(BrowserName)


// Enum in String

enum Environment{

    Dev = 'Dev',
    QA = 'QA',
    Stage = 'Stage',
    Prod = 'Prod'
}


console.log(Environment.Dev)