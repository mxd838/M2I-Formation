import { data } from "./data.js";

// Get elements
const container = document.querySelector('.container')
const validateBtn = document.querySelector('.validate')

// Variables
let questionNumber = 0
let numberOfChoicesLength = data[questionNumber].answers.length
let userAnswers = []

// Functions
// Create array of correct answers
const createCorrectAnswersArray = () => {
    const correctAnswers = []
    for (let dataItem of data){
        for(let i = 0; i < dataItem.answers.length; i++){
            if (dataItem.answers[i].correct === true){
                correctAnswers.push(dataItem.answers[i].text)
            }
        }
    }
    return correctAnswers
}
// Create template
const createTemplate = () => {
    // --- creation of the card container
    const cardContainer = document.createElement('div')
    cardContainer.classList.add('cardContainer')
    // --- insertion of the card container
    container.appendChild(cardContainer)
    // --- creation of the question 
    const questionText = document.createElement('h4')
    questionText.classList.add('questionText')
    // --- insertion of the question
    cardContainer.appendChild(questionText)
    // --- creation of the answers container
    const answersContainer = document.createElement('div')
    answersContainer.classList.add('answersContainer')
    // --- insertion of the answers container
    cardContainer.appendChild(answersContainer)
    for (let i = 0; i < numberOfChoicesLength; i++){
        // --- creation of a single answer container
        const answerContainer = document.createElement('div')
        answerContainer.classList.add('answerContainer')
        // --- insertion of a single answer container
        answersContainer.appendChild(answerContainer)
        // --- creation of the radio input
        const answerChoiceInput = document.createElement('input')
        answerChoiceInput.setAttribute('type','radio')
        answerChoiceInput.classList.add('answerInput')
        // --- insertion of the radio input
        answerContainer.appendChild(answerChoiceInput)
        // --- creation of the label
        const answerLabel = document.createElement('label')
        answerLabel.classList.add('answerLabel')
        // --- insertion of the label
        answerContainer.appendChild(answerLabel)
    }
}

// Fill template
const fillTemplate = (questionNumber) => {
    // Retrieve elements
    // -- question
    const questionText = document.querySelector('.questionText')
    questionText.innerText = data[questionNumber].question
    // -- possible answers
    const answers = document.querySelectorAll('.answerLabel')
    // -- radio inputs
    const inputs = document.querySelectorAll('.answerInput')

    for (let i = 0; i < answers.length; i++){
        // console.log(answers[i])
        inputs[i].setAttribute('id', `question${questionNumber}id${i}`)
        inputs[i].setAttribute('name',`question${questionNumber}`)
        answers[i].setAttribute('for',`question${questionNumber}id${i}`)
        answers[i].setAttribute('id', `question${questionNumber}label${i}`)
        answers[i].innerText = data[questionNumber].answers[i].text
        // if (inputs[i].getAttribute('id') === `question${questionNumber}id0` ){
        //     console.log(inputs[i].getAttribute('id'))
        //     inputs[i].setAttribute('checked', true)
        // }
    }
}



const registerUserAnswer = () => {
    const choices = document.querySelectorAll("input[type='radio']")
    const choicesLabels = document.querySelectorAll('label')
    for (let i = 0; i < choices.length; i++){
        if (choices[i].checked === true){
            userAnswers.push(choicesLabels[i].innerText)
        }
    }
    // console.log(userAnswers)
}

// Next question
// -- register user answer
// -- display the next question
const nextQuestion = (e) => {
    if (e.target.innerText === 'Rejouer'){
        window.location.reload()
    }
    registerUserAnswer()
    if (e.target.innerText === 'Valider'){
        endQuizz()
    }
    else if (questionNumber === data.length - 2){
        questionNumber++
        fillTemplate(questionNumber)
        e.target.innerText = 'Valider'
    } else {
        questionNumber++
        fillTemplate(questionNumber)
    }
}

const endQuizz = () => {

    let userPoints = 0
    container.innerHTML = ''
    for (let i = 0; i < data.length; i++){
        // --- creation of the card container
        const cardContainer = document.createElement('div')
        cardContainer.classList.add('cardContainer')
        // --- insertion of the card container
        container.appendChild(cardContainer)
        // --- creation of the question 
        const questionText = document.createElement('h4')
        questionText.classList.add('questionText')
        // --- insert the question
        questionText.innerText = data[i].question
        // --- insertion of the question
        cardContainer.appendChild(questionText)
        // --- creation of the answers container
        const answersContainer = document.createElement('div')
        answersContainer.classList.add('answersContainer')
        // --- insertion of the answers container
        cardContainer.appendChild(answersContainer)
        for (let j = 0; j < numberOfChoicesLength; j++){
            // --- creation of a single answer container
            const answerContainer = document.createElement('div')
            answerContainer.classList.add('answerContainer')
            // --- insertion of a single answer container
            answersContainer.appendChild(answerContainer)
            // --- creation of the radio input
            const answerChoiceInput = document.createElement('input')
            answerChoiceInput.setAttribute('type','radio')
            // --radio input chosen by user checked
            if ( data[i].answers[j].text === userAnswers[i]){
                answerChoiceInput.setAttribute('checked', true)
            }
            answerChoiceInput.classList.add('answerInput')
            // --- insertion of the radio input
            answerContainer.appendChild(answerChoiceInput)
            // --- creation of the label
            const answerLabel = document.createElement('label')
            answerLabel.classList.add('answerLabel')
            // --- insert the answer text
            answerLabel.innerText = data[i].answers[j].text
            // --- highlight the correct answer
            if (data[i].answers[j].correct && userAnswers[i] === data[i].answers[j].text){
                userPoints++
                answerLabel.classList.add('correctAnswer')

            }
            else if (data[i].answers[j].correct){
                answerLabel.classList.add('answerCorrected')
            }
            if (data[i].answers[j].correct === false && userAnswers[i] === data[i].answers[j].text){
                answerLabel.classList.add('wrongAnswer')
            }
            // --- insertion of the label
            answerContainer.appendChild(answerLabel)
        }
    }
    validateBtn.innerText = 'Rejouer'
    console.log(userPoints)
    const results = document.createElement('p')
    results.innerText = `Votre score: ${userPoints} sur ${data.length}`
    container.appendChild(results)
}

createTemplate()
fillTemplate(questionNumber)

validateBtn.addEventListener('click', nextQuestion)