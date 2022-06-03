// DOM nodes
const container = document.querySelector('.container')
const btn = document.querySelector('button')
const display = document.querySelector('.displayLoc')
const latDisplay = document.querySelector('.lat')
const longDisplay = document.querySelector('.long')


// Functions
// -- data handling
const geo_ok = (position) => {
    console.log('lat: ' + position.coords.latitude + 'long: ' + position.coords.longitude)
    latDisplay.textContent =  position.coords.latitude
    longDisplay.textContent = position.coords.longitude

}

// -- error handling
const geo_error = () => {
    console.log("Bah voilà, t'es paumé")
}

// -- call to the api
const showLocation = () => {
    console.log('ici')
    navigator.geolocation.getCurrentPosition(geo_ok, geo_error)
}

// Event Listener
btn.addEventListener('click', showLocation)