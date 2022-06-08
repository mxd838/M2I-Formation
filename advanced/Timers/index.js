const clockDisplay = document.querySelector('.clock')
const timerDisplay = document.querySelector('.timer')

// Clock Display
setInterval(() => {
    const now = new Date()
    clockDisplay.innerText = `${now.getHours() < 10 ? '0' + now.getHours(): now.getHours()}:${now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes()}`
}, 1000)


// First Timer
// -- Let the user choose the length
// -- create the timer with the selected length
// ---- setinterval for second display
// ---- choose total length 

// let timerLength = 25 * 60 * 1000
// while (timerLength >= 0){
//     setInterval(() => {
//         const 
//     })
// }


let minutes = 0
let seconds = 30
const timerInterval = setInterval(()=> {
    timerDisplay.innerText = `${minutes < 10 ? '0'+ minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
    if (seconds === 0 && minutes === 0){
        console.log('Temps écoulé')
    }
    else if (seconds === 0){
        seconds = 59
        minutes--
    } else {
        seconds--
    }
}, 1000)

// while (minutes !== 0 && seconds !== 0){
//     if (minutes === 0 && seconds === 0){
//         clearInterval(timerInterval)
//     }    
// }