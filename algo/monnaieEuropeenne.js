const read = require('readline-sync');

let somme =  read.questionFloat('Somme: ')

// const repartitionMonnaie = {
//     billet500: 0,
//     billet200: 0,
//     billet100: 0,
//     billet50: 0,
//     billet20: 0,
//     billet10: 0,
//     billet5: 0,
//     piece2: 0,
//     piece1: 0,
//     pieceZero50: 0,
//     pieceZero20: 0,
//     pieceZero10: 0,
//     pieceZero5: 0,
//     pieceZero2: 0,
//     pieceZero1: 0
// }

// while (somme > 0){
//     if (somme > 500){
//         somme -= 500
//         repartitionMonnaie.billet500 += 1
//     }
//     else if (somme > 200){
//         somme -= 200
//         repartitionMonnaie.billet200 += 1
//     }
//     else if (somme > 100){
//         somme -= 100
//         repartitionMonnaie.billet100 += 1
//     }
//     else if (somme > 50){
//         somme -= 50
//         repartitionMonnaie.billet50 += 1
//     }
//     else if (somme > 20){
//         somme -= 20
//         repartitionMonnaie.billet20 += 1
//     }
//     else if (somme > 10){
//         somme -= 10
//         repartitionMonnaie.billet10 += 1
//     }
//     else if (somme > 5){
//         somme -= 5
//         repartitionMonnaie.billet5 += 1
//     }
//     else if (somme > 2){
//         somme -= 2
//         repartitionMonnaie.piece2 += 1
//     }
//     else if (somme > 1){
//         somme -= 1
//         repartitionMonnaie.piece1 += 1
//     }
//     else if (somme > 0.5){
//         somme -= 0.5
//         repartitionMonnaie.pieceZero50 += 1
//     }
//     else if (somme > 0.2){
//         somme -= 0.2
//         repartitionMonnaie.pieceZero20 += 1
//     }
//     else if (somme > 0.1){
//         somme -= 0.1
//         repartitionMonnaie.pieceZero10 += 1
//     }
//     else if (somme > 0.05){
//         somme -= 0.05
//         repartitionMonnaie.pieceZero5 += 1
//     }
//     else if (somme > 0.02){
//         somme -= 0.02
//         repartitionMonnaie.pieceZero2 += 1
//     }else {
//         somme -= 0.01
//         repartitionMonnaie.pieceZero1 += 1
//     }
// }

// console.log(repartitionMonnaie)

// for (let element in repartitionMonnaie){
//     console.log(element)
// }

const valeurs = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01]
const moyensPaiement = []
for(let i = 0; i < valeurs.length; i++){
    moyensPaiement.push(0)
}

while (somme > 0){
    for (let i = 0; i < valeurs.length; i++){
        // const nombreItemsPaiement = Math.floor(somme / valeurs[i])
        // const nombreItemsPaiement = (somme - (somme % valeurs[i])) / valeurs[i]
        // const reste = Math.floor(somme % valeurs[i])
        // const sommeARetirer = somme - reste
        // const nombreItemsPaiement = sommeARetirer / valeurs[i]
        const result = somme / valeurs[i]
        const nombreItemsPaiement = Math.floor(result)
        // const nombreItemsPaiement = sommeARetirer / valeurs[i]

        const sommeSoustraite = nombreItemsPaiement * valeurs[i]
        somme -= sommeSoustraite
        if (valeurs[i] > 2){
            console.log(`Billets de ${valeurs[i]}€ : ${nombreItemsPaiement}`)
        } else {
            console.log(`Pièces de ${valeurs[i]}€ : ${nombreItemsPaiement}`)
        }
    }
}

