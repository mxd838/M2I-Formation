// Retrieve DOM elements
const container = document.querySelector('.container')
const myBtn = document.querySelector('.btn')
const exempleProp = document.querySelector('.exempleProp')

// Data
const etapes = ['Dans un saladier, mélanger la farine, le sel et le sucre.','Faire une fontaine.','Ajouter les oeufs et commencer à les incorporer à la farine avec une cuillère en bois, ajouter le beure fondu (tiédi) peu à peu et bien malaxer.','Incorporer le lait (par petites quantités au début pour éviter les grumeaux), ajouter le parfum.','Faire cuire les crêpes dans une poêle chaude huilée.']

// Functions
const maFonctionExemple = () => {
    // bloc de code de ma fonction
    console.log('bouh')
}

const clicBouton = (e) => {
    e.stopPropagation()
    console.log('Pauvre de toi')
}

const showPropagation = () => {
    console.log('event declenche sur div par propa')
}

// Creation of elements and insertion in DOM  
const titre = document.createElement('h3')
titre.textContent = 'Recette de la pâte à crêpes'
const recette = document.createElement('dl')

// -- loop the array 'etapes' to create elements and content
for (let i = 0; i < 5; i++){
    let numeroEtape = i + 1
    const nomEtape = document.createElement('dt')
    const descriptionEtape = document.createElement('dd')
    nomEtape.textContent = `Etape  ${numeroEtape}`
    descriptionEtape.textContent = etapes[i]
    recette.appendChild(nomEtape)
    recette.appendChild(descriptionEtape)
}

container.appendChild(titre)
container.appendChild(recette)

// Event Listeners
myBtn.addEventListener('click', clicBouton)
exempleProp.addEventListener('click', showPropagation)



// Exemple de propagation
// - btn interieur div
// - click event listener sur btn
// - click event listener sur div
// - si pas stopPropagation, click sur btn  declenche event listener sur div

// Exemple de comportement par défaut
// - clic un lien (balise a) -> rechargement de la page
// - e.preventDefault() pour l'empêcher
