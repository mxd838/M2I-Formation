// Nodes
const body = document.querySelector('body')
const color = document.getElementById('col')
const storageCheck = document.getElementById('valid')
const removeBtn = document.getElementById('remove')


if (sessionStorage.length !== 0){
    body.style.backgroundColor = sessionStorage.getItem('backgroundColor')
    color.value = sessionStorage.getItem('backgroundColor')
    
}


color.addEventListener('input', (e) => {
    body.style.backgroundColor = e.target.value
    if (storageCheck.checked === true){
        console.log('on :' + e.target.value)
        sessionStorage.setItem('backgroundColor', e.target.value)
    } 
    
})



