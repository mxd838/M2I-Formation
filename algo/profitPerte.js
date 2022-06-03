const read = require('readline-sync');

const prixFab = read.questionFloat('Prix de fabrication: ')
const prixVente = read.questionFloat('Prix de vente: ')


if (prixFab > prixVente){
    console.log(`Perte de ${prixFab - prixVente}Є.`)
}
else if (prixFab === prixVente){
    console.log('Pas de profit ou de perte.')
} 
else {
    console.log(`Profit de ${prixVente - prixFab}Є.`)

}


let x = 3
typeof x