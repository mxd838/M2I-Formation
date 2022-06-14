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

let imageNumber = 0

// Create images grid
for (let i = 0; i < 4; i++){
    const cardRow = document.createElement('div')
    cardRow.classList.add('row')
    cardRow.classList.add(`row${i}`)
    container.appendChild(cardRow)
    for (let j = 0; j < 4; j++) {
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('cardContainer')
        cardRow.appendChild(cardContainer)
        const questionMarkImg = document.createElement('img')
        questionMarkImg.setAttribute('src', './img/questionMark.png')
        questionMarkImg.classList.add('cell')
        questionMarkImg.classList.add(`cell${imageNumber}`)
        cardContainer.appendChild(questionMarkImg)
        imageNumber++
    }
}

// Get elements generated
const imgCells = document.querySelectorAll('.cell')
console.log(imgCells)

// console.log(imgCells)



const randomizeImages = () => {
    const imagesSrc = ['./img/afghan.png','./img/albania.png', './img/algeria.png', './img/andorra.png', './img/angola.png', '.img/antigua-barbada.png', './img/argentina.png', './img/bangladesh.png']
    const completeImagesArray = imagesSrc.concat(imagesSrc)
    for (let i = completeImagesArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = completeImagesArray[i];
        completeImagesArray[i] = completeImagesArray[j];
        completeImagesArray[j] = temp;
        // console.log(imgCells[i])
        imgCells[i].setAttribute('data-src', completeImagesArray[i])
        // console.log(imgCells[i])
    }
    // insert data-src attribute for each image and use it to toggle src when cl
    return completeImagesArray
}

randomizeImages()

const placeImages = () => {
    const randomizedArray = randomizeImages()
     
}

const toggleImage = (e) => {
    // console.log(e.target.dataset.src)
    const imgRevealedSrc = e.target.dataset.src
    console.log(e.target.dataset.src)
    console.log(typeof e.target.dataset.src)
    console.log(imgRevealedSrc)
    e.target.src === './img/questionMark.png' ? imgRevealedSrc: './img/questionMark.png'
}


imgCells.forEach(imgCell => {
    imgCell.addEventListener('click', toggleImage)
})