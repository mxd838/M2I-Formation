// heritage

// encapsulation

// polymorphisme


// classes


import {Demo} from './demo'

const demo = new Demo('Chiara', 28)
const demo2 = new Demo('Arsene', 48)


// console.log(demo._name)
// console.log(demo2)
// demo.age = 15
 // = : call the setter

// console.log(demo.age) 
// need the value : call the getter
// not possible because private :
// console.log(demo.age)
// demo.avancer()
// able to display because public method
// private attribute can be accessed via method of the class
// encapsulation : access to private attributes via methods
// console.log(demo.afficherAge())


demo.name = 'Mia'
console.log(demo.name)