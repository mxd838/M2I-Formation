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
        // -- first radio input checked by default
        if ( i === 0){
            answerChoiceInput.setAttribute('checked', true)
        }
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
        inputs[i].setAttribute('id', `question${questionNumber}id${i}`)
        inputs[i].setAttribute('name',`question${questionNumber}`)
        answers[i].setAttribute('for',`question${questionNumber}id${i}`)
        answers[i].setAttribute('id', `question${questionNumber}label${i}`)
        answers[i].innerText = data[questionNumber].answers[i].text
    }
}


// get the question number
// for the input checked
// get the corresponding label and register its value in array
const registerUserAnswer = () => {
    const choices = document.querySelectorAll("input[type='radio']")
    const choicesLabels = document.querySelectorAll('label')
    for (let i = 0; i < choices.length; i++){
        if (choices[i].checked === true){
            userAnswers.push(choicesLabels[i].innerText)
        }
    }
    console.log(userAnswers)
}

// Next question
// -- register user answer
// -- display the next question
const nextQuestion = (e) => {

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
    // compare all the user answers to the good answers
    // display all the questions, user answers and good answers
    // change the button text to 'Rejouer'
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
            // -- first radio input checked by default
            if ( i === 0){
                answerChoiceInput.setAttribute('checked', true)
            }
            answerChoiceInput.classList.add('answerInput')
            // --- insertion of the radio input
            answerContainer.appendChild(answerChoiceInput)
            // --- creation of the label
            const answerLabel = document.createElement('label')
            answerLabel.classList.add('answerLabel')
            // --- insertion of the label
            answerContainer.appendChild(answerLabel)
        }
    validateBtn.innerText = 'Rejouer'
    }
}

const resetQuizz = () => {
    // window.location.reload()
}

// console.log(createCorrectAnswersArray())
createTemplate()
fillTemplate(questionNumber)









// const handleEvent = (e) => {

    // switch (e.target.innerText){
    //     case 'Suivant':
    //         nextQuestion(e)
    //         break
    //     case 'Valider':
    //         endQuizz()
    //         break
    //     case 'Rejouer':
    //         resetQuizz()
    //         break
    //     default :
    //         console.log('Erreur')
    // }
// }


validateBtn.addEventListener('click', nextQuestion)