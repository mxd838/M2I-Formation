const read = require('readline-sync');


const nbMarches = read.questionInt('Nombre de marches: ')


let display = '*'

for(let i = 0; i < nbMarches; i++){
    console.log(display)
    display += '*'
}