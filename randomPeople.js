const people = ['Merlin','Sofian','Rabia','Samir','Roland','Anthony','Cindy','Mickaël','Boubacar','Trystan','Alain','Coralie','Philippe','Gaby','Justine','Matthieu']
console.log(people.length)
const choice1 = Math.floor(Math.random() * people.length)
console.log(`Premier délégué : ${people[choice1]}`)
