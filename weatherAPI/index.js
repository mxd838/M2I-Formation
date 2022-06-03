// Récupération des éléments du DOM
const search = document.getElementById('search')
const inputCity = document.getElementById('inputCity')
const cityDisplay = document.querySelector('.city')
const forecastDisplay = document.querySelector('.forecast')



// Fonctions
const displayCityInfos = (data) =>{

    // console.log(data)
    const cityName = document.createElement('h3')
    cityName.innerText = data.city.name

    const cityTemp = document.createElement('h4')
    cityTemp.innerText = `${Math.trunc(data.list[0].main.temp)}°`

    const latitude = document.createElement('p')
    latitude.innerHTML = `Latitude: <span>${data.city.coord.lat}</span>`

    const longitude = document.createElement('p')
    longitude.innerHTML = `Longitude: <span>${data.city.coord.lon}</span>`

    cityDisplay.appendChild(cityName)
    cityDisplay.appendChild(cityTemp)
    cityDisplay.appendChild(latitude)
    cityDisplay.appendChild(longitude)
}

const displayForecast = (data) => {
    // Parcours de la liste renvoyée par l'API
    data.list.forEach( forecastItem => {
        const temp = `${Math.trunc(forecastItem.main.temp)}°`
        const time = forecastItem.dt_txt.slice(0, -3)
    
        const forecastItemDisplay = document.createElement('div')
        forecastItemDisplay.setAttribute('class', 'forecastItem')
        forecastDisplay.appendChild(forecastItemDisplay)

        const forecastItemTemp = document.createElement('div')
        forecastItemTemp.setAttribute('class','forecastItemTemp')
        forecastItemTemp.innerText = temp
        forecastItemDisplay.appendChild(forecastItemTemp)

        const forecastItemTime = document.createElement('div')
        forecastItemTime.setAttribute('class','forecastItemTime')
        forecastItemTime.innerText = time
        forecastItemDisplay.appendChild(forecastItemTime)


    })
}

const displayWeather = (e) => {
    e.preventDefault()
    // Récupère le choix de l'utilisateur
    const cityChosen = inputCity.value
    // Récupère les données de l'API
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityChosen},us&lang=fr&units=metric&appid=a57de39fa700efeff9af4da27cd37caa`)
        .then(response => response.json()
        )
        .catch(error => console.log(error))
        .then(data => {
            displayCityInfos(data)
            displayForecast(data)
        })
    inputCity.value = ''
}


// Écoute d'événements
search.addEventListener('click', displayWeather)


// recuperer le nom de la ville
// -- event sur form, nom ville dans variable apres saisie input
// recuperer les donnees pour cette ville


// let a = 'bouboub'
// const machaine = 'dfljasdlfj' + input + 'bou'

// console.log(machaine)