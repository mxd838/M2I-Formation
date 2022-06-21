"use strict";
// heritage
Object.defineProperty(exports, "__esModule", { value: true });
const demo_1 = require("./demo");
const car_1 = require("./heritage/car");
const motorbike_1 = require("./heritage/motorbike");
const vehicle_1 = require("./heritage/vehicle");
const user_1 = require("./heritage/user");
const ballon_1 = require("./heritage/ballon");
// new keyword to instantiate an object
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
// console.log(demo.name)
// heritage
// const audi = new Vehicle(500, 'rouge', 'Audi', 4)
// audi.brand = 'BMW'
// console.log(audi)
// audi.ride()
const moto = new motorbike_1.Motorbike(250, "black", "Honda", 2);
// console.log(moto)
// moto.ride()
// console.log(moto.returnColor())
// console.log(moto.wheeling())
const tuture = new car_1.Car(500, 'blue', 'citroen', 4, 5);
// console.log(tuture)
tuture.accelerate();
console.log(moto.brake());
// classe abstraite
// classe qui n'a pas vocation à être instanciée
// sert à fournir méthodes et attributs à ses enfants
// qui eux peuvent être instanciés
moto.ride();
const motoBis = new motorbike_1.Motorbike(300, 'blue', 'suzuki', 2);
console.log(vehicle_1.Vehicle.count);
const baballe = new ballon_1.Ballon(42, 'gagball', 'black');
const marion = new user_1.User('Marion');
marion.stockerVehicule(moto);
marion.stockerVehicule(motoBis);
marion.stockerVehicule(tuture);
marion.stockerVehicule(baballe);
console.log(marion);
