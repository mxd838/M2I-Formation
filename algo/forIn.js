// For ... in avec arrays

let tableau = [ 'element 1', 2, true, 'lala']
for (let element in tableau){
    console.log(tableau[element]) // retourne valeurs
}

console.log('\n')

for (let element in tableau){
    console.log(element)  // retourne index
}

console.log('\n')


// For ... in avec objects
const monObj = {
    nom: 'Michel',
    prenom: 'Iznogoud',
    age: 235,
    vieux: true
}

for (let prop in monObj){
    console.log(monObj[prop]) // retourne valeurs
}

console.log('\n')

for (let prop in monObj){
    console.log(prop) // retourne clés
}