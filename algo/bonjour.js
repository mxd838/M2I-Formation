const readlineSync = require('readline-sync');

const prenom = readlineSync.question('Ton prenom: ');
console.log('Salut ' + prenom);
console.log(`Comment vas-tu ${prenom.toUpperCase()}?`)
