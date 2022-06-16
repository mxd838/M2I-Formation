// Elements
const showCat = document.querySelector('.showCat')
const catImg = document.querySelector('.catImg')
const display = document.querySelector('.display')
const breed = document.querySelector('.breed')
const positionXDisplay = document.querySelector('.offsetX')
const positionYDisplay = document.querySelector('.offsetY')

// Functions
const getAMiaouMiaou = () => {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(function(response) {
            if(response.ok) {
                return response.json()
            }
        })
        .then(function(value){
            console.log(value)
            catImg.setAttribute('src', value[0].url )

            if (value[0].breeds.length !== 0){
                breed.innerText = value[0].breeds[0].name
                catImg.setAttribute('alt', `Photo de ${value[0].breeds[0].name}`)
            } else {
                breed.innerText = ''
            }
        })
        .catch(function(error){
            console.log(error);
        })
    }

const getMousePosition = (e) => {
    console.log(e)

    positionXDisplay.innerText = `Position X : ${e.offsetX}` 
    positionYDisplay.innerText = `Position Y : ${e.offsetY}` 
}


// Event Listeners
window.onload = getAMiaouMiaou()
showCat.addEventListener('click', getAMiaouMiaou)
display.addEventListener('mousemove', getMousePosition)
