const container = document.querySelector('.container')
const button = document.querySelector('.btn')


const test = (e) => {
    // e.stopPropagation()
    console.log(e.target)
    // console.log('oubh')
}

button.addEventListener('click', test)
// container.addEventListener('click', test)