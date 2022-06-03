const read = require('readline-sync');

const stopNumber = read.questionInt('Choisissez un nombre: ')

/**
 * Display numbers from 0 to parameter
 * Log Fizz if multiple of 3, Buzz if multiple of 5, FizzBuzz if multiple of 3 and 5
 * @param {number} number 
 */
function fizzBuzz(number){
    for (let i = 0; i <= number; i++){
        if ( i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz')
        } else if (i % 3 === 0){
            console.log('Fizz')
        } else if (i % 5 === 0){
            console.log('Buzz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(stopNumber)