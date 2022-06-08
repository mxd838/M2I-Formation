// Get elements
const container = document.querySelector('.container')
const inputForm = document.querySelector('.input')
const inputField = document.querySelector('.inputField')
const categories =  document.querySelector('.categories')
const tasks = document.querySelector('.tasks')


// Event listeners
inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(inputField.value)
    inputField.value = ''
})