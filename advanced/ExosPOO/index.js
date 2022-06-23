"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apartment_1 = require("./apartment");
const complex_1 = require("./complex");
const etudiant_1 = require("./etudiant");
const points_1 = require("./points");
const rectangle_1 = require("./rectangle");
const somme_1 = require("./somme");
const house_1 = require("./house");
const personHouse_1 = require("./personHouse");
const somme2_1 = require("./somme2");
const readline = require('readline-sync');
// const readlineSync = require('readline-sync')
// Redo all exercises with readline
// 02 - Somme
const number1 = readline.questionInt('Nombre 1 : ');
const number2 = readline.questionInt('Nombre 2 : ');
const sum = new somme2_1.Somme2(number1, number2);
console.log(sum.somme());
const newRect = new rectangle_1.Rectangle(12, 28);
newRect.largeur = 20;
// console.log(newRect.surface())
const newSomme = new somme_1.Somme(12, 18);
// console.log(newSomme.somme(14, 18))
const newStudent = new etudiant_1.Etudiant('Kimiko', 12, 18);
// console.log(newStudent.show())
const newComplex = new complex_1.Complex(3, 4, 2, 3);
// newComplex.addComplex(5, 2, 8, 3)
const point1 = new points_1.Point(5, 6);
const point2 = new points_1.Point(3, 2);
// console.log(`La distance entre P1 et P2 est ${point1.distance(point2)}`)
const person1 = new personHouse_1.PersonHouse('Robert');
const person2 = new personHouse_1.PersonHouse('Matilda');
const appart = new apartment_1.Apartment('green');
const maison = new house_1.House(120, 'pink');
// console.log(maison)
person1.display(maison.surface, maison.door.color);
// person2.display(appart.door.color)
person1.setHabitation(appart);
person2.setHabitation(maison);
// console.log(person1)
// console.log(person2)
const loulou = readline.question('Loulou ?');
// console.log(loulou)
