let randomInteger = require('./random-integer');
const Mustache = require('mustache');

let result = Mustache.render("Hi, {{firstName}} {{lastName}}", {
    firstName: "Nikolas", 
    lastName: "Cage"
})

console.log(result);
console.log(randomInteger());
console.log(randomInteger());
console.log(randomInteger());

