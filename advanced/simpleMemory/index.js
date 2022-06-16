// Get DOM elements
const cells = document.querySelectorAll('.cell img')

// Variables
const imgSrcs = ['./img/afghan.png', './img/albania.png', './img/algeria.png', './img/angola.png', './img/argentina.png','./img/bangladesh.png']

// -- build complete images array
const completeImgSrcs = imgSrcs.concat(imgSrcs)

// -- add a custom id to match the indexes of completeImgSrcs
for(let i = 0; i < cells.length; i++){
    cells[i].setAttribute('data-id', i)
}


// Functions

const toggleImg = (e) => {
    const cellNumber = e.target.dataset.id
    // check all images
    // -- if img != e.target (id) has src != ..questionMark.png
    cells.forEach(cell => {
        // console.log(cell.dataset.id)
        if (cell.dataset.id !== e.target.dataset.id && cell.getAttribute('src') === e.target.getAttribute('src')){
            console.log('Meme source')
            // console.log('Cell ' + cell.src)
            // console.log('e.target ' + e.target.src)
        } else if (cell.dataset.id !== e.target.dataset.id && cell.getAttribute('src') !== e.target.getAttribute('src')) {
            console.log('Source differente')
            // console.log('Cell ' + cell.src)
            // console.log('e.target ' + e.target.src)
        }
    })
    // ----- if this img has same src > dont toggle the imgs
    // ----- if not, toggle both images
    e.target.getAttribute('src') === './img/questionMark.png' ? e.target.setAttribute('src',`${completeImgSrcs[cellNumber]}`) : e.target.setAttribute('src','./img/questionMark.png')
}

// Event listeners
cells.forEach(cell => {
    cell.addEventListener('click', toggleImg)
})


// associate to each cell a unique identifier
// get a randomized array with each index corresponding to that identifier
// when toggle, 
// DONE -- get the id and toggle to the img with the equivalent index
// -- check on the container if any img with a source different from questionmark
// -- if so, set a short time interval to let the user compare the two
// -- if the two are the same, don't toggle back
// -- if not toggle them back to question mark