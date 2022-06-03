let couleur = 'rouge';

if (couleur === 'vert'){
    console.log('Avancez!');
} else if ( couleur === 'rouge') {
    console.log("Arrêtez vous!");
} else if (couleur === 'orange')
{
    console.log("Préparez vous à vous arrêter!");
} else {
    console.log("Y a-t-il vraiment un feu ? Qu'est-ce que la vie ?");
}


// Avec couleur aléatoire
const couleurs = ['rouge', 'vert', 'orange'];
const couleurRand = Math.floor(Math.random() * 3);

if (couleurs[couleurRand] === 'vert'){
    console.log('Avancez!');
} else if (couleurs[couleurRand] === 'rouge') {
    console.log("Arrêtez vous!");
} else if (couleurs[couleurRand] === 'orange'){
    console.log("Préparez vous à vous arrêter!");
} else {
    console.log("Y a-t-il vraiment un feu ? Qu'est-ce que la vie ?");
}


// use readline to get text from user in the console