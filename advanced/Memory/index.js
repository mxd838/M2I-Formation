// memory de 16 cartes
// --- bonus : laisser l'user choisir la taille de la grille
// une div pour chacune des cartes
// 2 images pour chacune des divs, une par defaut et l'autre comportant l'image à reconnaître
// si on fait apparaitre une image, retenir son id pour comparer avec la suivante
// si les id sont égaux, les laisser sur cette face
// s'ils sont différents, les retourner au bout d'un petit temps


const container = document.getElementById('.container')


// Creation of the cards
for (let i = 0; i < 4; i++){
    for (let j = 0; j < 4; j++){
        const cardContainer = document.createElement('div')
        console.log(cardContainer)
        // container.appendChild(cardContainer)
    }
}


// resolve create four containers and four cards by container