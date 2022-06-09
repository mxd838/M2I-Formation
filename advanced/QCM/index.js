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


// Test api


// Create a card template
// Each card :
// --- the question
// --- the answers possible (to each a radio button)


// Content of the card
// --- once the question is answered, the card is re-rendered with a new question

// End of the game
// --- when all questions are answered, the display change again
// --- all questions (all cards) are rendered with the good answers
// --- and the wrong answers of the user if so, with the count of good and wrong answers


// need a state to call the card template
// register the answersa

// need to put all the answers in an array
// random to display the order of the answers

const userAnswers = []

const createCardTemplate = (question) => {
    // create div
    const cardContainer  = document.createElement('div')
    cardContainer.classList.add('cardContainer')
    // insert cardContainer
    container.appendChild(cardContainer)
    // create title (question label)
    const cardQuestion = document.createElement('h4')
    cardQuestion.classList.add('question')
    cardQuestion.innerText = question.question
    // insert question label
    cardContainer.appendChild(cardQuestion)
    // create answers container
    const answersContainer = document.createElement('div')
    answersContainer.classList.add('answersContainer')
    // insert answers container
    cardContainer.appendChild(answersContainer)
    // recreate an array of all the possible answers
    const possibleAnswers = [question.correctAnswer]
    for (let i = 0; i < question.incorrectAnswers.length; i++){
        // console.log(question.incorrectAnswers[i])
        possibleAnswers.push(question.incorrectAnswers[i])
    }
    // create answer options (radio buttons)
    // --- hit the array of possible answers with a random
    // --- as to not have always the right answer as the first answer possible
    for (let i = 0; i < possibleAnswers.length; i++){
        // creation of the container of the answer and the label
        const singleAnswerContainer = document.createElement('div')
        singleAnswerContainer.classList.add('singleAnswerContainer')
        // insertion of the single answer container
        answersContainer.appendChild(singleAnswerContainer)
        // creation of the radio button
        const answerInput = document.createElement('input')
        answerInput.setAttribute('type','radio')
        answerInput.setAttribute('name', 'question')
        answerInput.setAttribute('id', `id${i}`)
        // insertion of the radio button
        singleAnswerContainer.appendChild(answerInput)
        // creation of the label
        const answerLabel = document.createElement('label')
        answerLabel.setAttribute('for', `id${i}`)
        // Each answer must be unique 
        // && the order of the answers must be randomized
        // --- select randomly one of the answers
        // --- find the index of that answer
        // --- remove the element of that index 
        // --- the method used for that must transform the original array
        // ------ in order to be able to work with the array in the next iteration
        answerLabel.innerText = possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)]
        // insertion of the label
        singleAnswerContainer.appendChild(answerLabel)
    }
    // fill the title and answers with the data retrieved



    // insert elements
}



const startGame = (questions) => {
        questions.forEach(question => {
            console.log(question)
            createCardTemplate(question)
        })        
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
    // .then(questions => console.log(questions))
    .then(questions => startGame(questions))


