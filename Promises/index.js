// Promises

const buyFlightTicket = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            const error = false
            if(error) {
                reject("Sorry your payment was not successful")
            } else {
                resolve("Thank you, your payment was successful")
            }
        }, 3000)
    })
}

buyFlightTicket()
.then( (success) => console.log(success) )
.catch( (error) => console.log(error) )



const userData = new Promise( (resolve, rejects) => {
    const error = false
    if(error) {
        rejects("500 Level Error")
    } else {
        resolve( {
            firstName: "Dylan",
            age: 32,
            email: "DylansEmail310@gmail.com"
        })
    }
})

userData
.then( (data) => console.log(data) )
.catch( (error) => console.log(error))