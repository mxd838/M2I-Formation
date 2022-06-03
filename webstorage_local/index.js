// DOM nodes
const todoInput = document.getElementById('todoInput')
const display =  document.querySelector('.display')
const sendBtn = document.getElementById('sendTask')
const resetBtn = document.getElementById('resetList')



// Bonus > version avec seul un item dans local storage sous forme de liste
// plutot qu un local storage clear, faire remove item sur l'objet

let idCounter = 0

// Display local storage at loading
if (window.localStorage.length !== 0){

    idCounter = localStorage.length
    // console.log(localStorage)
    for (let i = 0; i < localStorage.length; i++){
        const task = document.createElement('li')
        task.setAttribute('id', `task${i}`)
        task.textContent = localStorage.getItem(`task${i}`)
        display.appendChild(task)
    }
}


// Functions

const addTask = (e) => {
    e.preventDefault()
   
    // Node creation
    const task = document.createElement('li')
    task.setAttribute('id', `task${idCounter}`)
    task.textContent = todoInput.value

    // Register to local storage
    display.appendChild(task)
    localStorage.setItem(`task${idCounter}`, todoInput.value)



    idCounter++
    todoInput.value = ''
}

const resetList = () => {
    display.innerHTML = ''
    localStorage.clear()
    idCounter = 0
}


// Event listeners
sendBtn.addEventListener('click', addTask)
resetBtn.addEventListener('click',resetList)




