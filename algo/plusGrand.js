const read = require('readline-sync');

const nombre1 = read.questionFloat('Nombre 1: ');
const nombre2 = read.questionFloat('Nombre 2: ');
const nombre3 = read.questionFloat('Nombre 3: ');

const nombres = [nombre1, nombre2, nombre3];

let max = nombre1;

for (let i = 0; i < nombres.length; i++){
    if (max < nombres[i]){
        max = nombres[i];
    }
}


console.log(`[${nombre1},${nombre2},${nombre3}] --> ${max}`); 
