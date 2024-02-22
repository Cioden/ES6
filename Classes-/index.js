class Animal {
    constructor(type, legs) {
        this.type = type
        this.legs = legs
    }
    makeNoise(sound = 'Loud Noise') {
        console.log(sound)
    }
    get metaData() {
        return `Type: ${this.type}, Legs: ${this.legs}`
    }
    static return10() {
        return 10
    }
}

class Cat extends Animal {
    //constructor(type, legs, tail) {
        //super(type, legs)
        //this.tail = tail   
    //}
    makeNoise(sound = "meow") {
        console.log(sound)
    }
}

//let cat = new Animal('Cat', 4)
let cat = new Cat('Cat', 4)

cat.legs = 3

console.log(cat.type)
console.log(cat.legs)
cat.makeNoise()
cat.makeNoise("Meow")
console.log(Animal.return10())
console.log(cat.metaData)
cat.makeNoise()
console.log(cat.metaData)



class Player {
    constructor(Name, Country) {
        this.name = Name
        this.country = Country
    }
    playerCountry() {
        console.log(`${this.name} was born in ${this.country}`)
    }
}

class tennisPlayer extends Player {
    constructor(Name, Contry, Age) {
        super(Name, Contry)
        this.age = Age
    }
    aboutTennis() {
        console.log(`${this.name} is ${this.age} years old and knows how to play Tennis`)
    }
}

const player = new Player('Messi', 'Argentina')
const tennis = new tennisPlayer('Rafael Nadal', 'Italy', 34)

player.playerCountry()
tennis.aboutTennis()
tennis.playerCountry()