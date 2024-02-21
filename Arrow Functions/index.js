//function declaration
function breakfastMenu() {
    return "I'm going to scrambled eggs for breakfast";
}

//anonymous function
const lunchMenu = function() {
    return "I'm going to eat pizza for lunch";
}

const dinnerMenu = (food, drink) => `I'm going to eat a ${food} and drink ${drink} for dinner`

console.log(dinnerMenu("chicken salad", "soda"))