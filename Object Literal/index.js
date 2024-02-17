//function addressMaker(city, state) {
    //const newAddress = {newCity: city, newState: state}
    //const newAddress = {city, state}
    //console.log(newAddress)
//}

//addressMaker('Austin', 'Texas');

function addressMaker(address) {
    //const newAddress = {
        //city: address.city,
        //state: address.state,
        //country: 'United States'
    //};
    const {city, state} = address
    const newAddress = {
        city,
        state,
        country: 'United States'
    }
    console.log(`${newAddress.city}, ${newAddress.state}, ${newAddress.country}`)
}

addressMaker({city: 'Austin', state: 'Texas'});