// Elements
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')
const parentCounter = document.querySelector('.parentCounter')
const childCounter = document.querySelector('.childCounter')

// Variables
let numberOfParentClicks = 0
let numberOfChildClicks = 0

// Functions
const clickParent = () => {
    numberOfParentClicks++
    parentCounter.textContent = `Parent : ${numberOfParentClicks}` 
    document.title = `parent : ${numberOfParentClicks} - enfant : ${numberOfChildClicks}`
}

const clickChild = (e) => {
    e.stopPropagation()
    e.preventDefault()
    numberOfChildClicks++
    childCounter.textContent = `Enfant : ${numberOfChildClicks}`
    console.log(`parent : ${numberOfParentClicks} - enfant : ${numberOfChildClicks}`)
}

// Event listeners
parent.addEventListener('click', clickParent)
child.addEventListener('click', clickChild)

