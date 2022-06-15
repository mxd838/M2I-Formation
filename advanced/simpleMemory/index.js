const cells = document.querySelectorAll('.cell')

const toggleImg = () => {
    console.log('toggle')
}

cells.forEach(cell => {
    cell.addEventListener('click', toggleImg)
})


// associate to each cell a unique identifier
// get a randomized array with each index corresponding to that identifier
// when toggle, 
// -- get the id and toggle to the img with the equivalent index
// -- check on the container if any img with a source different from questionmark
// -- if so, set a short time interval to let the user compare the two
// -- if the two are the same, don't toggle back
// -- if not toggle them back to question mark