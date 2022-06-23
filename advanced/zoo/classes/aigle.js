"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aigle = void 0;
const animal_1 = require("./animal");
class Aigle extends animal_1.Animal {
    constructor(nom) {
        super(nom);
    }
    voler() {
        console.log(`${this.nom} l'aigle vole.`);
    }
}
exports.Aigle = Aigle;
