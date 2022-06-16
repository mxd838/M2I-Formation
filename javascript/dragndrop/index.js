// Access to DOM nodes
const dragzone = document.querySelector('.dragzone')
const dropzone = document.querySelector('.dropzone')
const eltMoved = document.querySelector('.dragme')









































// // Functions
// const dragstart = (e) => {
//     e.dataTransfer.setData('text/plain', e.target.id)
//     e.currentTarget.style.backgroundColor = 'rgba(160, 71, 152, 0.1)'
    
//     console.log(e)
//     console.log(e.dataTransfer)
//     console.log(e.dataTransfer.getData('text/plain'))


// }

// const dragover = (e) => {
//     e.preventDefault()
// }

// const drop = (e) => {
//     // const id = e.dataTransfer.getData('text/plain')
//     // console.log(id)
//     // const draggableElement = document.getElementById(id)
//     const droparea = e.target
//     console.log(e.target)
//     droparea.appendChild(eltMoved)
//     e.dataTransfer.clearData()
// }

// // Event listener
// eltMoved.addEventListener('dragstart', dragstart)
// dropzone.addEventListener('dragover', dragover)
// // dropzone.addEventListener('drop', drop)