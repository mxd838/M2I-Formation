"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Professeur = void 0;
const personne_1 = require("./personne");
class Professeur extends personne_1.Personne {
    constructor(nom, prenom, age) {
        super(nom, prenom, age, 100);
    }
}
exports.Professeur = Professeur;
