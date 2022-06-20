"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
const vehicle_1 = require("./vehicle");
class Car extends vehicle_1.Vehicle {
    constructor(power, color, brand, nbWheels, nbOfPlaces) {
        super(power, color, brand, nbWheels);
        this._nbOfPlaces = 4;
        this._nbOfPlaces = nbOfPlaces;
    }
    get nbOfPlaces() {
        return this._nbOfPlaces;
    }
    set nbOfPlaces(value) {
        this._nbOfPlaces = value;
    }
}
exports.Car = Car;
