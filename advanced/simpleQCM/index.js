import { data } from "./data.js";

// Get elements
const container = document.querySelector('.container')
const validateBtn = document.querySelector('.validate')

// Creation of the first element
// -- Template -----------------
// --- creation of the card container
const cardContainer = document.createElement('div')
cardContainer.classList.add('cardContainer')
// --- insertion of the card container
container.appendChild(cardContainer)
// --- creation of the question 
const questionText = document.createElement('h4')
questionText.classList.add('questionText')
questionText.innerText = data[0].question
// --- insertion of the question
cardContainer.appendChild(questionText)
// --- creation of the answers container
const answersContainer = document.createElement('div')
answersContainer.classList.add('answersContainer')
// --- insertion of the answers container
cardContainer.appendChild(answersContainer)
const firstQuestionAnswers = data[0].answers
for (let i = 0; i < firstQuestionAnswers.length; i++){
    // --- creation of a single answer container
    const answerContainer = document.createElement('div')
    answerContainer.classList.add('answerContainer')
    // --- insertion of a single answer container
    answersContainer.appendChild(answerContainer)
    // --- creation of the radio input
    const answerChoiceInput = document.createElement('input')
    answerChoiceInput.setAttribute('type','radio')
    if ( i === 0){
        answerChoiceInput.setAttribute('checked', true)
    }
    answerChoiceInput.setAttribute('name','question1')
    answerChoiceInput.setAttribute('value',firstQuestionAnswers[i].text)
    answerChoiceInput.setAttribute('id', `id${i}`)
    // --- insertion of the radio input
    answerContainer.appendChild(answerChoiceInput)
    // --- creation of the label
    const answerLabel = document.createElement('label')
    answerLabel.setAttribute('for',`id${i}`)
    answerLabel.innerText = firstQuestionAnswers[i].text
    // --- insertion of the label
    answerContainer.appendChild(answerLabel)
}

// Get input elements generated
// const firstAnswer = document.getElementById('id0')
// const secondAnswer = document.getElementById('id1')
// const thirdAnswer = document.getElementById('id2')

// Variables
const correctAnswersArray = []
const userAnswersArray = []

// Functions 
// --- creation of the array of correct answers
const createCorrectAnswersArray = () => {
    for (let element of data){
        for(let i = 0; i < element.answers.length; i++){
            if (element.answers[i].correct === true){
                correctAnswersArray.push(element.answers[i].text)
            }
        }
    }
}

console.log(correctAnswersArray)

// --- functions called by the event listener
const nextQuestion = () => {
    console.log('next')
    // register the user response in an array
    const choices = document.querySelectorAll("input[type='radio']")
    // console.log(choices)
    for (let choice of choices){
        // console.log(choice)
        if (choice.checked === true){
            userAnswersArray.push(choice.value)
        }
    }
    console.log(userAnswersArray)
}

const endQuizz = () => {
    console.log('end')
}

const resetQuizz = () => {
    console.log('reset')
}

const handleAnswer = (e) => {
    // three values possible for validateBtn.innertext
    // --- suivant 
    // ---------- register the user response
    // --- valider / terminer questionnaire
    // ----------- display with all the questions, the user answers and the correct answers
    // --- rejouer
    // ----------- after the results page, offer the possibility to replay
    switch (e.target.innerText){
        case 'Suivant':
            nextQuestion()
            break
        case 'Valider':
            endQuizz()
            break
        case 'Rejouer':
            resetQuizz()
            break
        default :
            console.log('Erreur')
    }
}

// Function call
createCorrectAnswersArray()

// Event listener
validateBtn.addEventListener('click', handleAnswer)