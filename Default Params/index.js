//const leadSinger = () => {
    //console.log("Chris Martin is the lead singer of Cold Play");
//}

//leadSinger();

//const leadSinger = (artist) => {
    //console.log(`${artist} is the lead singer of Cold Play`);
//}

//leadSinger("Chris Martin");

const leadSinger = (artist = "someone") => {
    console.log(`${artist} is the lead singer of Cold Play`);
}

leadSinger()
leadSinger("Chris Martin");


const buyGrocery = (food = "something") => `I'm going to buy ${food} from the grocery shop`

console.log(buyGrocery())
console.log(buyGrocery("milk"))
