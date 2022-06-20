"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorbike = void 0;
const vehicle_1 = require("./vehicle");
class Motorbike extends vehicle_1.Vehicle {
    // constructor heritage
    constructor(power, color, brand, nbWheels) {
        super(power, color, brand, nbWheels);
    }
    ride() {
        console.log("La moto roule.");
    }
    returnColor() {
        return this._color;
    }
    wheeling() {
        return "Je fais un wheeling";
    }
    // surcharge
    // on change la signature
    brake() {
        return "La moto freine";
    }
}
exports.Motorbike = Motorbike;
