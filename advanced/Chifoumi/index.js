// Get elements
const computerChoiceDisplay = document.querySelector('.computerChoiceImg')
const choicePaper = document.querySelector('.paper')
const choiceRock = document.querySelector('.rock')
const choiceScissors = document.querySelector('.scissors')
const computerScoreDisplay = document.querySelector('.computerScore')
const userScoreDisplay = document.querySelector('.userScore')
const resultSentence = document.querySelector('.resultSentence')
const resetBtn = document.querySelector('.reset')
const displayNumberOfRounds = document.querySelector('.numberOfRounds')
const confirmButton = document.querySelector('.confirm')

// Variables
let userScore = 0
let computerScore = 0
let roundLimit = 3
let numberOfRounds = 0


// for the reset
// --- put the choice of rounds in a div setNumberOfRounds
// --- set the roundlimit to the value retrieved
// --- once the value chosen and confirmed (via button) 
// --- turn the div setNumberOfRounds to display none
// Functions
const setComputerChoice = () => {
    const computerChoices = ['rock', 'paper', 'scissors']
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)]
    computerChoiceDisplay.src = `./img/${computerChoice}.png`

    return computerChoice
}
const setUserChoice = (e) => {
    return e.target.className
}

const resetGame = () => {
    userScore = 0
    computerScore = 0
    numberOfRounds = 0
}

const checkEndgame = () => {

    if (numberOfRounds === roundLimit){
        if (userScore > computerScore){
            resultSentence.innerText = "Le joueur a gagné la partie"
        } else {
            resultSentence.innerText = "L'ordinateur a gagné la partie"
        }
    }
}


const playGame = (e) => {
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
    } else if ( userChoice === computerChoice){
        // console.log('Draw')
        resultSentence.innerText = 'Match nul'
    } else {
        computerScore++
        computerScoreDisplay.innerText = computerScore
        resultSentence.innerText = "L'ordinateur a gagné le round"
        numberOfRounds++
    }
    
    
    checkEndgame()

}
// Event listeners
choicePaper.addEventListener('click', playGame)
choiceRock.addEventListener('click', playGame)
choiceScissors.addEventListener('click', playGame)
resetBtn.addEventListener('click', resetGame)