// Get elements
const computerChoiceDisplay = document.querySelector('.computerChoiceImg')

const userChoiceSelection = document.querySelector('.userChoices')
const computerScoreDisplay = document.querySelector('.computerScore')
const userScoreDisplay = document.querySelector('.userScore')
const resultSentence = document.querySelector('.resultSentence')
const resetBtn = document.querySelector('.reset')
const displayNumberOfRounds = document.querySelector('.numberOfRounds')
const confirmButton = document.querySelector('.confirm')
const lessButton = document.querySelector('.less')
const moreButton = document.querySelector('.more')
const roundsSelection = document.querySelector('.selection')
const computerChoiceSelection = document.querySelector('.computerChoice')

// Variables
let userScore = 0
let computerScore = 0
let roundLimit = 3
let numberOfRounds = 0


// Creation and insertion of the images
const images = [
    {
        class: 'paper',
        src: "./img/paper.png",
        alt: 'paper'
    },
    {
        class: 'rock',
        src: "./img/rock.png",
        alt: 'rock'
    },
    {
        class: 'scissors',
        src: "./img/scissors.png",
        alt: 'scissors'
    }
]

for (let image of images) {
    // Creation of the elements
    const imgContainer = document.createElement('div')
    const imgWeapon = document.createElement('img')
    // Images attributes
    imgWeapon.className = image.class
    imgWeapon.src = image.src
    imgWeapon.alt = image.alt
    // Insertion
    imgContainer.appendChild(imgWeapon)
    userChoiceSelection.appendChild(imgContainer)
}
// Selection of the elements created
const choicePaper = document.querySelector('.paper')
const choiceRock = document.querySelector('.rock')
const choiceScissors = document.querySelector('.scissors')

// Functions
const hideNumberOfRoundsChoice = () => {
    roundsSelection.style.display = 'none'
}

const lessRounds = () => {
    if (roundLimit >= 3){
        roundLimit -= 2
        displayNumberOfRounds.innerText = roundLimit
    }
}

const moreRounds = () => {
    if (roundLimit <= 11){
        roundLimit += 2
        displayNumberOfRounds.innerText = roundLimit
    }
}
const setComputerChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors']
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)]
    computerChoiceDisplay.src = `./img/${computerChoice}.png`
    computerChoiceDisplay.style.backgroundColor = 'white'

    return computerChoice
}
const setUserChoice = (e) => {
    return e.target.className
}

const resetGame = () => {
    userScore = 0
    userScoreDisplay.innerText = 0
    computerScore = 0
    computerScoreDisplay.innerText = 0
    numberOfRounds = 0
    roundsSelection.style.display = 'flex'
    resultSentence.innerText = 'Jouons encore !'
    document.querySelector('.computerChoiceImg').src = './img/questionMark.png'
    userChoiceSelection.style.backgroundColor = '#333'
    computerChoiceSelection.style.backgroundColor = '#333'
    resultSentence.style.color = 'white'

}

const checkEndgame = () => {

    if (numberOfRounds === roundLimit){
        userChoiceSelection.style.backgroundColor = 'gray'
        computerChoiceSelection.style.backgroundColor = 'gray'
        if (userScore > computerScore){
            resultSentence.innerText = "Le joueur a gagné la partie"
            resultSentence.style.color = '#5fed74'
        } else {
            resultSentence.innerText = "L'ordinateur a gagné la partie"
            resultSentence.style.color = '#ed5f5f'
        }
        return true
    }
    return false
}



const playGame = (e) => {

    if (checkEndgame() === false){

        hideNumberOfRoundsChoice()

        const userChoice = setUserChoice(e)
        const computerChoice = setComputerChoice()
        
        if ((userChoice === 'rock' && computerChoice === 'scissors') 
        || (userChoice === 'paper' && computerChoice === 'rock')
        || (userChoice === 'scissors' && computerChoice === 'paper') )
        {
            userScore++
            userScoreDisplay.innerText = userScore
            resultSentence.innerText = 'Le joueur a gagné le round'
            numberOfRounds++
            userChoiceSelection.style.backgroundColor = '#5fed74'
            computerChoiceSelection.style.backgroundColor = '#ed5f5f'
        } else if ( userChoice === computerChoice){
            resultSentence.innerText = 'Match nul'
            userChoiceSelection.style.backgroundColor = 'black'
            computerChoiceSelection.style.backgroundColor = 'black'
        } else {
            computerScore++
            computerScoreDisplay.innerText = computerScore
            resultSentence.innerText = "L'ordinateur a gagné le round"
            numberOfRounds++
            userChoiceSelection.style.backgroundColor = '#ed5f5f'
            computerChoiceSelection.style.backgroundColor = '#5fed74'

        }
    }
    checkEndgame()
}
// Event listeners
choicePaper.addEventListener('click', playGame)
choiceRock.addEventListener('click', playGame)
choiceScissors.addEventListener('click', playGame)
resetBtn.addEventListener('click', resetGame)
confirmButton.addEventListener('click', hideNumberOfRoundsChoice)
lessButton.addEventListener('click', lessRounds)
moreButton.addEventListener('click', moreRounds)