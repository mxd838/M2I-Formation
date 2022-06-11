// -- make grid : done
// -- get images : 
// -- return cards :
// -- compare cards :
// -- cards recognized face visible :
// -- endgame :
// -- random placement of the images at load:
// -- timer for the completion
// -- let the user choose the size of the grid :


// memory de 16 cartes
// --- bonus : laisser l'user choisir la taille de la grille
// une div pour chacune des cartes
// 2 images pour chacune des divs, une par defaut et l'autre comportant l'image à reconnaître
// si on fait apparaitre une image, retenir son id pour comparer avec la suivante
// si les id sont égaux, les laisser sur cette face
// s'ils sont différents, les retourner au bout d'un petit temps


const container = document.querySelector('.container')


// Create images grid
for (let i = 0; i < 4; i++){
    const cardRow = document.createElement('div')
    cardRow.classList.add('row')
    cardRow.classList.add(`row${i}`)
    container.appendChild(cardRow)
    for (let j = 0; j < 4; j++) {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('cardContainer')
        cardContainer.classList.add(`cell${i}${j}`)
        cardRow.appendChild(cardContainer)
    }
}

// Get elements generated
const cardContainers = document.querySelectorAll('.cardContainer')

const imagesSrc = ['./img/afghan.png','./img/albania.png', './img/algeria.png', './img/andorra.png', './img/angola.png', '.img/antigua-barbada.png', './img/argentina.png', './img/bangladesh.png']


const createImagesObjects = () => {
    const imagesObjectsArray = []
    for (let imageSrc in imagesSrc){
        const imgObject = {
            id: `imageId${imageSrc}`,
            verso: imagesSrc[imageSrc],
            returned: false
        }
        imagesObjectsArray.push(imgObject)
    }
    return imagesObjectsArray
}


const createImagesElements = () => {
    console.log('create img elts')
    for (let imgData of imagesData){
        console.log(imgData)
        const imgToGuess = document.createElement('img')
        imgToGuess.setAttribute('src', './img/questionMark.png')
    }
}

const randomizeImagesOrder = () => {
    // order of the images in the divs is random
}

const placeImages = () => {
    cardContainers.forEach( imageContainer => {
        console.log(imageContainer)
    })
}

// Function calls
const imagesData = createImagesObjects()
createImagesElements()