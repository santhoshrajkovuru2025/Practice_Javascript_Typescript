
// Higher order functions:

// Welcome
// Register
// Login
// Thank you

console.log('Welcome')

const Register = (Success) => {
    setTimeout(()=> {
        console.log("Please Register")
        Success()
    }, 5000) // intially given 2000 as set timeout
}

    const Login = (Confirmation) => {
        setTimeout(()=> {
            console.log("Please Login")
             Confirmation()
        }, 3000) // intially given 4000 as set timeout
    }

    const Thankyou = () => {
    setTimeout(()=> {
        console.log("Thank You")
    }, 1000) // intially given 5000 as set timeout
}

    Register(function() {
        Login(function(){
            Thankyou()
        })
    })
    
    // Callback hell : one function inside other function for multiple times
    // This will create the code messy and clumpsy.
    // To overcome it promises is introduced.