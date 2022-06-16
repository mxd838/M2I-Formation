// mvp : items et liste d'exos correspondantes
// ++ : selon exos remplis, autorise acces a differents types d exos pour notions suivantes


// Exemples
// -- variables et types


// -- conditions (operateurs de comparaison)
// -- controle de flux
// --- if - else if - else
// ---- choisir une operation par rapport a age
// --- switch
// --- ternaire
// -- boucles
// --- while 
// --- do - while
// --- for
// --- for of 
// --- for in

// -- string
// --- methodes string
// -- tableau 
// --- parcourir un tableau
// --- methodes tableau
// --- tableaux imbriques
// -- objet
// --- parcourir un objet
// --- methodes d'objets
// -- conversions

// -- fonctions
// --- declaration (trad, arrow)
// --- appel
// --- valeur de retour
// --- parametre et argument




// tableau
let tab = []
let tab2 = new Arrays();
// methode pour ajouter des valeurs au tableau à la fin
tab.push("blabla1");
// methode pour retourner le premier élément du tableau et le supprimer
tab.shift();
// methode pour ajouter un élément au début du tableau
tab.unshift();
// methode pour retourner le dernier élément du tableau
tab.pop("lklklk");
// ? \\
tab.sort();
// retourne le tableau convertis en chaine de caractères
tab.join();
// inverser les éléments du tableau
tab.reverse();

switch (a) {
    case 1:
        console.log("a = 1");
        break;
}

// les if, else if
if (a ==5) {
    console.log("message 1");
} else if (a > 5){
    console.log("message 2");
} else {
    console.log("message 3");
}

/**
 * les ternaires simulent une seule condition if-else
 */
// condition? si vrai : si faux ;
a == 5? console.log("a = 5") : console.log("a != 5");

//les boucles
for (let i = 0; i < tab.length; i++) {
    console.log( tab[i] );
    break; // sortir de la boucle
    continue; // passer à l'itération suivante
}

// for equivalent à un foreach
for (const i of tab) {
    console.log(i);
}

// while et do while
while (condition) {
    // while = ici code qui est effectué si ma condition est vraie
    //et on recommence tant que c'est vrai
}

do{
    // code executé une prèmiere fois
    // puis on vérifie si on doit boucler ou pas
} while (condition);

// exeple de continue
for (let i = 0; i < 100; i++) {
    if (i%3 == 0) {
        continue
    }
    console.log(i)
}