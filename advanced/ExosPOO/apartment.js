"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apartment = void 0;
const house_1 = require("./house");
class Apartment extends house_1.House {
    constructor(color) {
        super(50, color);
    }
}
exports.Apartment = Apartment;
