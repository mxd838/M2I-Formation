const read = require('readline-sync');


let operande1, operande2, operator


operande1 = read.questionFloat('Nombre 1: ')

operator = read.question('Operateur: ')

// Operator input verification
while (operator !== '+' && operator !== '-' && operator !== '/' && operator !== '*'){
    console.log("Choix d'operateur non valide.")
    operator = read.question('Operateur: ')
}

operande2 =  read.questionFloat('Nombre 2: ')

// In case of a division, prevent user from entering 0 as operande2
if (operator === '/' && operande2 === 0){
    while (operande2 === 0){
        console.log('La division par zéro est impossible.')
        operande2 =  read.questionFloat('Nombre 2: ')
    }
}


switch (operator) {
    case '+':
        console.log(`${operande1} + ${operande2} = ${operande1 + operande2}`)
        break

    case '-':
        console.log(`${operande1} - ${operande2} = ${operande1 - operande2}`)
        break
        
    case '/':
        console.log(`${operande1} / ${operande2} = ${operande1 / operande2}`)
        break
        
    case '*':
        console.log(`${operande1} * ${operande2} = ${operande1 * operande2}`)
        break
    default :
        console.log('Opération non autorisée')
}