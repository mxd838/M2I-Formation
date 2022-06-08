const body = document.querySelector('body')

// Container
const container = document.createElement('div')
container.classList.add('container')
body.appendChild(container)

// MENU
// -- menu container
const menuContainer = document.createElement('div')
menuContainer.classList.add('menuContainer')
container.appendChild(menuContainer)

// -- Website Title
const siteTitle = document.createElement('h1')
siteTitle.innerText = 'Netflix'
siteTitle.classList.add('siteTitle')
menuContainer.appendChild(siteTitle)

// -- List of nav items
const navList = document.createElement('ul')
navList.classList.add('navList')
menuContainer.appendChild(navList)

// ----- Nav list items
const navItems = ['Accueil','Séries', 'Films', 'Nouveautés les plus regardées', 'Ma liste']
for (let navItem in navItems){
    const listMenuItem = document.createElement('li')
    listMenuItem.innerText = navItems[navItem]
    navList.appendChild(listMenuItem)
}

// -- Search button 
const searchButton = document.createElement('button')
searchButton.innerHTML = '<i class="fa fa-search" aria-hidden="true"></i>'
menuContainer.appendChild(searchButton)

// GALLERIES
const galleryTitles = ['Séries', 'Tendances actuelles', 'Revoir']
const galleryImages = [
    ['./assets/img/1.png','./assets/img/2.png','./assets/img/3.png','./assets/img/4.png','./assets/img/5.png'],
    ['./assets/img/6.png','./assets/img/7.png','./assets/img/8.png','./assets/img/9.png','./assets/img/10.png'],
    ['./assets/img/11.png','./assets/img/12.png','./assets/img/13.png','./assets/img/14.png','./assets/img/15.png'],
]

// -- Gallery containers
for (let i = 0; i < 3; i++){
    // gallery container
    const galleryContainer = document.createElement('div')
    galleryContainer.classList.add('galleryContainer')
    // title of the gallery
    const galleryTitle = document.createElement('h2')
    galleryTitle.innerText = galleryTitles[i]
    galleryContainer.appendChild(galleryTitle)
    // images container (or gallery container)
    const imagesContainer = document.createElement('div')
    imagesContainer.classList.add('imagesContainer')
    galleryContainer.appendChild(imagesContainer)
    for (let j = 0; j < 5; j++){
        // img container
        const imgContainer = document.createElement('div')
        imgContainer.classList.add('imgContainer')
        // img
        const showPic = document.createElement('img')
        showPic.setAttribute('src', galleryImages[i][j])
        imgContainer.appendChild(showPic)
        imagesContainer.appendChild(imgContainer)
    }    
    container.appendChild(galleryContainer)
}

// responsive
// window.addEventListener('resize', () => {
    
// })