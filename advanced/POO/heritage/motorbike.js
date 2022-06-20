"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Motorbike = void 0;
const vehicle_1 = require("./vehicle");
class Motorbike extends vehicle_1.Vehicle {
    // constructor heritage
    constructor(power, color, brand, nbWheels) {
        super(power, color, brand, nbWheels);
    }
    returnColor() {
        return this._color;
    }
    wheeling() {
        return "Je fais un wheeling";
    }
}
exports.Motorbike = Motorbike;
