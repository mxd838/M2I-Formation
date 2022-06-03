const read = require('readline-sync');

const nombreNiveauxPyramide = read.questionInt('Nombre de niveaux de la pyramide: ')

/*
pour nombre = 5
nbEspaces1
        2 - 1 - 1 - 0 - 0
nbEtoiles
        1 - 2 - 3 - 4 - 5
nbEspace2
        2 - 2 - 1 - 1 - 0
*/

let display = ''
let stars = ''
let espace = ''

for(let j = 0; j < Math.floor(nombreNiveauxPyramide); j++){
    espace += ' '
}

console.log(espace)

for( let i = 0; i < nombreNiveauxPyramide; i++){
    
    
    stars += '*'
    display = espace + stars + espace
    console.log(display)
}