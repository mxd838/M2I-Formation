const notes = []
for(let i = 0; i < 5; i++){
    notes.push(Math.floor(Math.random() * 21))
}

// console.log(notes)

for(let j = 0; j < notes.length; j++){
    if (notes[j] < 5){
        console.log(`(0 - 4) / ${notes[j]} : Catastrophique, il faut tout revoir.`)
    } else if (notes[j] < 11){
        console.log(`(5 - 10) / ${notes[j]} : Insuffisant.`)
    } else if (notes[j] < 15){
        console.log(`11 - 14) / ${notes[j]} : Peut mieux faire.`)
    } else if (notes[j] < 18){
        console.log(`(15 - 17) / ${notes[j]} : Bien`)
    } else {
        console.log(`(18 - 20) / ${notes[j]} : Excellent, bon travail.`)
    }
}
