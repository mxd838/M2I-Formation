const read = require('readline-sync');


const hauteurPyramide = read.questionInt('Hauteur de la pyramide: ')
const pyramide = []
for(let i = 1; i <= hauteurPyramide; i++){
    pyramide.push('*')
    console.log(pyramide.join(''))
}

for(let i = 1; i <= hauteurPyramide; i++){
    pyramide.pop()
    console.log(pyramide.join(''))
}