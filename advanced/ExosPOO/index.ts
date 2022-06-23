import { Apartment } from './apartment'
import { Complex } from './complex'
import { Etudiant } from './etudiant'
import { Point } from './points'
import { Rectangle } from './rectangle'
import { Somme } from './somme'
import { House } from './house'
import { PersonHouse } from './personHouse'
import { Somme2 } from './somme2'

const readline = require('readline-sync')
// const readlineSync = require('readline-sync')

// Redo all exercises with readline
// 02 - Somme
const number1 = readline.questionInt('Nombre 1 : ')
const number2 = readline.questionInt('Nombre 2 : ')
const sum = new Somme2(number1, number2)
// console.log(sum.somme())


// 03 - Notes étudiant








const newRect = new Rectangle(12, 28)

newRect.largeur = 20
// console.log(newRect.surface())

const newSomme = new Somme(12, 18)
// console.log(newSomme.somme(14, 18))

const newStudent = new Etudiant('Kimiko',12, 18)
// console.log(newStudent.show())


const newComplex = new Complex(3, 4, 2, 3)
// newComplex.addComplex(5, 2, 8, 3)

const point1 = new Point(5, 6)
const point2 = new Point(3, 2)


// console.log(`La distance entre P1 et P2 est ${point1.distance(point2)}`)



const person1 = new PersonHouse('Robert')
const person2 = new PersonHouse('Matilda')
const appart = new Apartment('green')
const maison = new House(120, 'pink')


// console.log(maison)

// person1.display(maison.surface, maison.door.color)
// person2.display(appart.door.color)

person1.setHabitation(appart)
person2.setHabitation(maison)

// console.log(person1)
// console.log(person2)

