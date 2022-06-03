let prenom = "Michel"
console.log(prenom) // Affiche Michel

function hello(nouveauPrenom){
    prenom = nouveauPrenom 
}

hello("Robert")

console.log(prenom)


// Exemple de commentaire de fonction
/**
 * Objectif de la fonction
 * @param {type} param1 ce que doit contenir le param1
 * @param {type} param2 ce que doit contenir le param2
 * @return {type} ce que retourne la fonction
 */