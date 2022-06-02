const dropzone = document.querySelector('.dropzone')
const draggableImg = document.getElementById('draggable1')
const draggableText = document.getElementById('draggable2')

const dragStartImg = (e) => {
    e.dataTransfer.setData(draggableImg , e.target.id )
}

const dragStartText = (e) => {
    e.dataTransfer.setData(draggableText, e.target.id)
}

const drop = (e) => {
    // console.log(e)
    const movingImg = e.dataTransfer.getData(draggableImg)
    const draggedImg = document.getElementById(movingImg)
    e.target.appendChild(draggedImg)
}

const dragOver = (e) => {
    e.preventDefault()
}

draggableImg.addEventListener('dragstart', dragStartImg)
draggableText.addEventListener('dragstart', dragStartText)
dropzone.addEventListener('dragover',dragOver)
dropzone.addEventListener('drop', drop)


// Explication du machin
// --faire en sorte qu'un élément puisse être bougé
// ---- le rendre déplaçable
// ------- attribut draggable dans le html
// ------- le mettre dans un objet datatransfer pour le déplacer
// -- paramétrer la zone de drop pour qu'elle accepte l'élément bougé
// -- récupérer l'élément une fois dans la zone de drop
// ---- l'insérer dans la zone implique un appendchild sur le dropzone