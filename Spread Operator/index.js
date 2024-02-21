let contacts = ["Mary", "Joel", "Danny"];

let personalFriends = ['David',...contacts, 'Lily']

contacts.push('John')

console.log(personalFriends)

let person = {
    name: 'Adam', 
    age: 25,
    city: 'Manchester'
}

let employee = {
    ...person,
    salary: 50000,
    position: 'Software Developer'
}

console.log(employee)


const shoppingList = ['eggs', 'milk', 'butter']

const shoppingBasket = ['hotdog', ...shoppingList, 'ketchup']

console.log(shoppingBasket)