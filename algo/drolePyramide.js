const read = require('readline-sync');

const nombreEtoilesMax = read.questionInt('Hauteur pyramide: ')
let display = ''
const star = '*'
for (let i = 1; i <= nombreEtoilesMax; i++){
   display += star
   console.log(display)
}

for (let i = 1; i <= nombreEtoilesMax; i++){
    display = display.substring(0, nombreEtoilesMax - i)
    console.log(display)
 }


 console.log('   '.length)