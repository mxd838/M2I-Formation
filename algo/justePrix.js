// object with price hidden
// user must guess the price with only clues more or less
// bonus : user only has 30 seconds to guess the price
// rajouter un settimeout
// refactorer
// commenter

const read = require('readline-sync');
const randomItemPrice = Math.floor(Math.random() * 5000)

console.log(randomItemPrice)
let userGuess 
while (userGuess !== randomItemPrice){
    userGuess = read.questionFloat('Dites un prix: ')
    if (userGuess < randomItemPrice){
        console.log('Plus')
    } else if (userGuess > randomItemPrice){
        console.log('Moins')
    } else {
        console.log('Bravo, vous avez gagné un joli dictionnaire')
    }
}
