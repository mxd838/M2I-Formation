const read = require('readline-sync');


const hauteurPyramide = read.questionInt('Hauteur de la pyramide: ')

let display = ''

let espace = ' '
for(let i = 0; i <= hauteurPyramide ; i++){
    espace += ' '
}

let etoiles = '*'
for(let i = 0; i < hauteurPyramide; i++){
    display = espace + etoiles
    console.log(display)
    etoiles += '**'
    espace = espace.substring(0, espace.length - 1)
}

// Autre version 
/*


for(let i = 1; i <= nombre; i++){
    let espaces = ''
    let etoiles = ''
    let etoiles2 = ''

    for(let j = 0; j < nombre - i; j++){
        espaces +=  ' '
    }

    for(let k = 0; k < i; k++){
        etoiles += '*'
        if(k !== 0){
            etoiles2 += '*'
        }
    }
    console.log(espaces + etoiles + etoiles2)
}


*/