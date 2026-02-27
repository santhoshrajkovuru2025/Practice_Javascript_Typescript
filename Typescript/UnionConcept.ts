

let userId: ( string | number);
userId = 'Sunthosh';
userId = 1041;

function getuserInformation (customerID: (string | number)){
    if (typeof(customerID) === 'number'){
        return customerID+"_naveen";
    }
    else if(typeof(customerID) === 'string'){
        return customerID+'_Sunthosh'
    }
}
console.log(getuserInformation(1451));
console.log(getuserInformation("Automation"));