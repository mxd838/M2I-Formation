// heritage

// encapsulation

// polymorphisme


// classes


import { ModuleDetectionKind } from 'typescript'
import {Demo} from './demo'
import { Car } from './heritage/car'
import { Motorbike } from './heritage/motorbike'
import { Vehicle } from './heritage/vehicle'

// new keyword to instantiate an object
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
// console.log(demo.name)


// heritage
const audi = new Vehicle(500, 'rouge', 'Audi', 4)
audi.brand = 'BMW'
console.log(audi)
audi.ride()

const moto = new Motorbike(250, "black", "Honda", 2)
// console.log(moto)
moto.ride()
// console.log(moto.returnColor())
// console.log(moto.wheeling())

const tuture = new Car(500, 'blue', 'citroen', 4, 5)
console.log(tuture)

tuture.accelerate()