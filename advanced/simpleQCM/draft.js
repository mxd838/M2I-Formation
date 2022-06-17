import { data } from "./data.js";

// Get elements
const container = document.querySelector('.container')
const validateBtn = document.querySelector('.validate')

// Variables
let questionNumber = 0
const correctAnswersArray = []
const userAnswersArray = []
let numberOfChoicesLength = data[questionNumber].answers.length

// Functions
// Create template
const createTemplate = (questionNb) => {
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
        if ( i === 0){
            answerChoiceInput.setAttribute('checked', true)
        }
        answerChoiceInput.setAttribute('name',`question${questionNb}`)
        answerChoiceInput.setAttribute('id', `question${questionNb}id${i}`)
        // --- insertion of the radio input
        answerContainer.appendChild(answerChoiceInput)
        // --- creation of the label
        const answerLabel = document.createElement('label')
        answerLabel.setAttribute('for',`question${questionNb}id${i}`)
        answerLabel.setAttribute('id', `question${questionNb}label${i}`)
        // --- insertion of the label
        answerContainer.appendChild(answerLabel)
    }
}

// Call the template when the page loads
createTemplate(questionNumber)

// Get elements generated by the template
const questionText = document.querySelector('.questionText')


// Fill the template with the question content
const fillTemplate = (questionNb) => {
    // console.log(questionNb)
    // console.log(data[questionNb])
    questionText.innerText = data[questionNb].question
    const questionAnswers = data[questionNb].answers
    // console.log(questionAnswers)
    for (let i = 0 ; i < numberOfChoicesLength; i++){
        const currentInput = document.getElementById(`question${questionNb}id${i}`)
        console.log(currentInput)
        const currentLabel = document.getElementById(`question${questionNb}label${i}`)
        console.log(currentLabel)
        // currentInput.setAttribute('value',questionAnswers[i].text)
        // currentLabel.innerText = questionAnswers[i].text
        // currentInput.setAttribute('value',questionAnswers[i].text)
    }
}

// Call the filling function when page loads for the first question
fillTemplate(questionNumber)
// console.log(questionNumber)

// Functions 
const createCorrectAnswersArray = () => {
    for (let element of data){
        for(let i = 0; i < element.answers.length; i++){
            if (element.answers[i].correct === true){
                correctAnswersArray.push(element.answers[i].text)
            }
        }
    }
}


const registerUserAnswer = () => {
    // register the user response in an array
    const choices = document.querySelectorAll("input[type='radio']")
    for (let choice of choices){
        if (choice.checked === true){
            userAnswersArray.push(choice.value)
        }
    }
    // console.log(userAnswersArray)
}
const generateNewQuestion = (questionNb) => {
    console.log(questionNb)
    fillTemplate(questionNb)
}

const generateQuizzResume = () => {
    console.log(userAnswersArray)

    // for(let i = 0; i < data.length; i++){
    //     createTemplate()
    //     fillTemplate(i)
    // }
    // createTemplate()
    // fillTemplate(0)
}

const nextQuestion = (e) => {

     if (userAnswersArray.length /*- 1*/ === questionNumber && questionNumber === data.length - 2 ){
        registerUserAnswer()
        questionNumber++
        generateNewQuestion(questionNumber)
        e.target.innerText = 'Valider'
    } else {
        registerUserAnswer()
        questionNumber++
        generateNewQuestion(questionNumber)
    }
}

const endQuizz = (e) => {
    // console.log('end')
    if (questionNumber === data.length -1){
        registerUserAnswer()
        generateQuizzResume()
    }
}

const resetQuizz = () => {
    console.log('reset')
}

const handleAnswer = (e) => {

    switch (e.target.innerText){
        case 'Suivant':
            nextQuestion(e)
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