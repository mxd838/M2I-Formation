"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dauphin = void 0;
const animal_1 = require("./animal");
class Dauphin extends animal_1.Animal {
    constructor(nom) {
        super(nom);
    }
    nager() {
        console.log(`${this.nom} le dauphin nage.`);
    }
}
exports.Dauphin = Dauphin;
