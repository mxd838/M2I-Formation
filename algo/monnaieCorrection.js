// Erreurs dues à la précipitation, et pas de vérifications intermédiaires
const read = require('readline-sync');

let nombre =  read.questionFloat('Somme: ')

/**
 * Affiche le nombre de billets ou pieces correspondant à la somme demandée
 * @param {number} nombre 
 */
function nombreBillets(nombre){
    const monnaies = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
    
    for (let monnaie of monnaies){
        let nbMonnaie = Math.floor(nombre / monnaie)
        if (nbMonnaie !== 0){
            if (monnaie >= 5){
                console.log(`Nombre de billets de ${monnaie}€ : ${nbMonnaie}`)
            } else {
                console.log(`Nombre de pièces de ${monnaie}€ : ${nbMonnaie}`)
            }
        }
        // console.log(`${nombre} : ${nbMonnaie}`)
        nombre -= nbMonnaie * monnaie
    }

}