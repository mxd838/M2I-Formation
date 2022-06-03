const read = require('readline-sync');


const nombreUtilisateur = read.questionInt('Saisissez un nombre: ')

let somme = 0
let display = ''

for(let i = 1; i <= nombreUtilisateur; i++){
    somme += i
    if (i === nombreUtilisateur){
        display += `${i} = ${somme}`
    } else {
        display += `${i} +  `
    }
}

// console.log(somme)
console.log(display)