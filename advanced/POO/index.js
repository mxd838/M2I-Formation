"use strict";
// heritage
Object.defineProperty(exports, "__esModule", { value: true });
// encapsulation
// polymorphisme
// classes
const demo_1 = require("./demo");
const demo = new demo_1.Demo('Chiara', 28);
const demo2 = new demo_1.Demo('Arsene', 48);
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
demo.name = 'Mia';
console.log(demo.name);
