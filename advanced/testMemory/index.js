const divTest = document.querySelector('.test')
const imgDisplayed = document.createElement('img')
imgDisplayed.setAttribute('id','img')
imgDisplayed.src = 'questionMark.png'
divTest.appendChild(imgDisplayed)

const imgElement = document.getElementById('img')

const toggleImg = () => {
    imgElement.getAttribute('src') === 'questionMark.png' ? imgElement.setAttribute('src', 'bangladesh.png') : imgElement.setAttribute('src', 'questionMark.png')
}

divTest.addEventListener('click', toggleImg)