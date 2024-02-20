const player = {
  name1: 'Lebron James',
  club: 'LA Lakers',
  address: {
    city: 'Los Angeles'
  }
}

const student = {
  name: 'Kyle',
  age: 24,
  projects: {
    diceGame: 'Two player dice game using JavaScript'
  }
}

//console.log(player.address.city)

const {name1, club, address: {city}} = player
const {name, age, projects: {diceGame}} = student

//console.log(`${name} plays for ${club}`)

console.log(`${name1} lives in ${city}`)
console.log(`${age} yrs old ${name} created Dice Game which is a ${diceGame}`)