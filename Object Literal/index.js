//function addressMaker(city, state) {
    //const newAddress = {newCity: city, newState: state}
    //const newAddress = {city, state}
    //console.log(newAddress)
//}

//addressMaker('Austin', 'Texas');

function addressMaker(address) {
    const newAddress = {
        city: address.city,
        state: address.state,
        country: 'United States'
    };
    
}

addressMaker({city: 'Austin', state: 'Texas'});