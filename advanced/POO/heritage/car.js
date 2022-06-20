"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const vehicle_1 = require("./vehicle");
class Car extends vehicle_1.Vehicle {
    constructor(power, color, brand, nbWheels, nbOfPlaces) {
        super(power, color, brand, nbWheels);
        this._nbOfPlaces = 4;
        // call the setter 
        // this.nbOfPlaces = nbOfPlaces
        // or the attribute :
        this._nbOfPlaces = nbOfPlaces;
        // difference between the 2 ?
    }
    get nbOfPlaces() {
        return this._nbOfPlaces;
    }
    set nbOfPlaces(value) {
        this._nbOfPlaces = value;
    }
    // method redefinition
    // methode must have the same signature, the same number of parameters at the same place
    accelerate() {
        console.log("la voiture accélère");
    }
    // surcharge (override)
    // if any change to the signature or the parameters
    ride() {
        console.log("La voiture roule.");
    }
}
exports.Car = Car;
