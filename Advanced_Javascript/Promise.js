
// Promise function

/* syntax:

new promise ((resolve,reject)=>{

})  */

    const Register = () => {

       return new Promise((resolve, reject) => {
            setTimeout(()=>{
                console.log('Please Register')
                 resolve("Registration Successful")
                //  reject("Registration failed") // used for reject block
            }, 3000)
        })
    }

     const Login = () => {
        return new Promise((resolve, reject)=>{
        setTimeout(()=> {
            console.log("Please Login")
             resolve() 
            }, 1000) 
        })
     }

     const Thankyou = () =>{
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                console.log('Thank You !')
                resolve()
            },3000)

        })
     }

     // Register().then((data)=>{console.log(data)}) : before adding the login function, i had added this.

     Register().then(Login).then(Thankyou) //.catch((err)=>console.log(err))