"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
class Martinpecheur extends animal_1.Animal {
    constructor(nom) {
        super(nom);
    }
    voler() {
        console.log(`${this.nom} le martin-pêcheur vole.`);
    }
    nager() {
        console.log(`${this.nom} le martin-pêcheur nage.`);
    }
}
