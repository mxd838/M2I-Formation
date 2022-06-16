const dropzone = document.querySelector('.dropzone')
const dragzone = document.querySelector('.dragzone')
const draggableImg = document.getElementById('draggable1')
const draggableText = document.getElementById('draggable2')


/**
 * une fonction qui permet le déplacement de l'élément ciblé
 * @param {*} e 
 */
const dragStartElement = (e) => {
    e.dataTransfer.setData('item' , e.target.id )
}



const drop = (e) => {
    // console.log(e)
    const movingElt= e.dataTransfer.getData('item')
    const draggedElt = document.getElementById(movingElt)
    e.target.appendChild(draggedElt)
}

const dragOver = (e) => {
    e.preventDefault()
}

draggableImg.addEventListener('dragstart', dragStartElement)
draggableText.addEventListener('dragstart', dragStartElement)
dropzone.addEventListener('dragover',dragOver)
dropzone.addEventListener('drop', drop)
dragzone.addEventListener('dragover',dragOver)
dragzone.addEventListener('drop', drop)

// Explication du machin
// --faire en sorte qu'un élément puisse être bougé
// ---- le rendre déplaçable
// ------- attribut draggable dans le html
// ------- le mettre dans un objet datatransfer pour le déplacer
// -- paramétrer la zone de drop pour qu'elle accepte l'élément bougé
// -- récupérer l'élément une fois dans la zone de drop
// ---- l'insérer dans la zone implique un appendchild sur le dropzone