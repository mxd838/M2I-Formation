// appel api
/*
Produisez un QCM en javascript
-Définissez les questions
-Définissez les réponses (bonnes et mauvaises)
-Faire un résumé en fin de questionnaire des réponses renduesLa page web n’affiche qu’un questionnaire à la fois comprenant la question et ses réponses.
-Une fois la réponse donnée, l’affichage change pour afficher la question suivante et les réponses.
-En fin de partie un bouton rejouer est définien dessous du recap.
-Bonus:-Afficher les réponses et les questions dans le désordre.
*/
const container = document.querySelector('.container')
const confirmBtn = document.querySelector('.confirmBtn')
// Content of the card
// --- once the question is answered, the card is re-rendered with a new question

// End of the game
// --- when all questions are answered, the display change again
// --- all questions (all cards) are rendered with the good answers
// --- and the wrong answers of the user if so, with the count of good and wrong answers


// need a state to call the card template
// register the answers

// need to put all the answers in an array
// random to display the order of the answers

const userAnswers = []
let questionNumber = 0

const createCardTemplate = (questionItem) => {
    console.log('youhou')
    // create div
    const cardContainer  = document.createElement('div')
    cardContainer.classList.add('cardContainer')
    // insert cardContainer
    container.appendChild(cardContainer)
    // create the question
    fillCardQuestion(cardContainer, questionItem.question)
    // create answers container
    const answersContainer = document.createElement('div')
    answersContainer.classList.add('answersContainer')
    // insert answers container
    cardContainer.appendChild(answersContainer)
    // // recreate an array of all the possible answers
    // const possibleAnswers = [question.correctAnswer]
    // for (let i = 0; i < question.incorrectAnswers.length; i++){
    //     // console.log(question.incorrectAnswers[i])
    //     possibleAnswers.push(question.incorrectAnswers[i])
    // }
    // for (let i = 0; i < possibleAnswers.length; i++){
    //     // creation of the container of the answer and the label
    //     const singleAnswerContainer = document.createElement('div')
    //     singleAnswerContainer.classList.add('singleAnswerContainer')
    //     // insertion of the single answer container
    //     answersContainer.appendChild(singleAnswerContainer)
    //     // creation of the radio button
    //     const answerInput = document.createElement('input')
    //     answerInput.setAttribute('type','radio')
    //     answerInput.setAttribute('name', 'question')
    //     answerInput.setAttribute('id', `id${i}`)
    //     if (answerInput.getAttribute('id') === 'id0'){
    //         answerInput.setAttribute('data-correct','true')
    //     } else {
    //         answerInput.setAttribute('data-correct','false')
    //     }
    //     // insertion of the radio button
    //     singleAnswerContainer.appendChild(answerInput)
    //     // creation of the label
    //     const answerLabel = document.createElement('label')
    //     answerLabel.setAttribute('for', `id${i}`)
    //     answerLabel.innerText = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]
    //     // insertion of the label
    //     singleAnswerContainer.appendChild(answerLabel)
    //     console.log(answerInput)
    // }
    // // fill the title and answers with the data retrieved
    // console.log(possibleAnswers)
}

/**
 * Fill the template with the current question
 * @param {htmlElement} questionContainer 
 * @param {object} question 
 */
const fillCardQuestion = (questionContainer, questionText) => {
    console.log(questionContainer)
    console.log(questionText)
    // create title (question label)
    // const cardQuestion = document.createElement('h4')
    // cardQuestion.classList.add('question')
    // cardQuestion.innerText = question.question
    // insert question label
    // questionContainer.appendChild(cardQuestion)
}


/**
 * Randomize the order of the elements inside the array
 * @param {array} answersArray 
 * @returns {array} randomizedArray
 */
const randomizeArray = (answersArray) => {
    console.log(answersArray)
    for (let i = answersArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = answersArray[i];
        answersArray[i] = answersArray[j];
        answersArray[j] = temp;
    }
    console.log(answersArray)
}

const fillCardAnswers = () => {

}

const startGame = (questions) => {
        // questions.forEach(question => {
        //     createCardTemplate(question)
        // })        
    // create first question
    createCardTemplate(questions[questionNumber])
}


const createAnswersArray = (correctAnswerString, incorrectAnswersArray) => {
    // console.log(correctAnswerString)
    // console.log(incorrectAnswersArray)
    const answersArray = []
    answersArray.push({
        stringAnswer: correctAnswerString,
        correct: true
    })
    for (let wrongAnswer of incorrectAnswersArray){
        answersArray.push({
            stringAnswer: wrongAnswer,
            correct: false
        })
    }
    randomizeArray(answersArray)
}
const transformData = (arrayQuestions, apiQuestions) => {
    // console.log(apiQuestions)
    for (let i = 0 ; i < apiQuestions.length; i++){
        arrayQuestions.push({
            questionLabel : apiQuestions[i].question,
            questionAnswers : createAnswersArray(apiQuestions[i].correctAnswer, apiQuestions[i].incorrectAnswers)
        })

    }
}

fetch('https://the-trivia-api.com/api/questions?limit=10&difficulty=easy')
    .then(response => response.json())
    .catch( err => console.log(err))
    .then(data => {
        const questions = []
        data.forEach(element => {
            questions.push(element) 
        });
        return questions
    })
    .then(questions => {
        const arrayQuestions = []
        transformData(arrayQuestions, questions)
    })
    // transform object received to make it easier to use for the app
    // .then(questions => startGame(questions))

