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




/**
 * Randomize the order of the elements inside the array
 * @param {array} answersArray 
 * @returns {array} randomizedArray
 */
const randomizeArray = (answersArray) => {
    for (let i = answersArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = answersArray[i];
        answersArray[i] = answersArray[j];
        answersArray[j] = temp;
    }
    return answersArray
}




const createAnswersArray = (correctAnswerString, incorrectAnswersArray) => {
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
    const randomizedAnswersArray = randomizeArray(answersArray)
    return randomizedAnswersArray
}



const transformData = (arrayQuestions, apiQuestions) => {
    for (let i = 0 ; i < apiQuestions.length; i++){
        arrayQuestions.push({
            questionLabel : apiQuestions[i].question,
            questionAnswers : createAnswersArray(apiQuestions[i].correctAnswer, apiQuestions[i].incorrectAnswers)
        })

    }
    return arrayQuestions
}

const createFirstQuestion = (firstQuestionObject) => {
    console.log(firstQuestionObject)
    const questionContainer = document.createElement('div')
    questionContainer.classList.add('questionContainer')
    container.appendChild(questionContainer)
    // create and add question
    const questionLabel = document.createElement('h4')
    questionLabel.innerText = firstQuestionObject.questionLabel
    questionContainer.appendChild(questionLabel)
    // console.log(questionLabel)
    // create container of all the answers
    const answersContainer = document.createElement('div')
    answersContainer.classList.add('answersContainer')
    // create and add answers
    for (let i = 0; i < firstQuestionObject.questionAnswers.length; i++){
        // create a container for the input radio and its label
        const answerContainer = document.createElement('div')
        answerContainer.classList.add('answerContainer')
        // create the radio button
        const answerRadio = document.createElement('input')
        answerRadio.setAttribute('type','radio')
        answerRadio.setAttribute('name', 'question0')
        answerRadio.setAttribute('id', `id${i}`)
        answerRadio.setAttribute('value', firstQuestionObject.questionAnswers[i].stringAnswer )
        if (firstQuestionObject.questionAnswers[i].correct === true){
            answerRadio.setAttribute('data-correct', 'true' )
        } else {
            answerRadio.setAttribute('data-correct', 'false')
        }
        if (i = 0){
            answerRadio.setAttribute('required', 'on')
        }
        // create the label associated with the radio button
        const answerLabel = document.createElement('label')
        answerLabel.setAttribute('for', `id${i}`)
        // insert the radio button
        answerContainer.appendChild(answerRadio)
        answerContainer.appendChild(answerLabel)
        answersContainer.appendChild(answerContainer)
        // console.log(answerRadio)
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
        return transformData(arrayQuestions, questions)
    })
    // .then(transformedArray => console.log(transformedArray))
    .then(transformedArray => createFirstQuestion(transformedArray[0]))
    // display the first question
    // next question with validate button
