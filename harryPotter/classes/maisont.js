"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Maison = void 0;
class Maison {
    constructor(nom, couleur) {
        this._nom = '';
        this._couleur = '';
        this.nom = nom;
        this.couleur = couleur;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get couleur() {
        return this._couleur;
    }
    set couleur(value) {
        this._couleur = value;
    }
}
exports.Maison = Maison;
