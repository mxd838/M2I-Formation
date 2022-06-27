"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractPersonnage = void 0;
class AbstractPersonnage {
    constructor(arme, nom, cible) {
        this._pointsDeVie = 0;
        this._arme = '';
        this._nom = '';
        this._cible = '';
        this.arme = arme;
        this.nom = nom;
        this.cible = cible;
        this.pointsDeVie = 100 + (Math.floor(Math.random() * 100));
    }
    get arme() {
        return this._arme;
    }
    set arme(value) {
        this._arme = value;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get cible() {
        return this._cible;
    }
    set cible(value) {
        this._cible = value;
    }
    get pointsDeVie() {
        return this._pointsDeVie;
    }
    set pointsDeVie(value) {
        this._pointsDeVie = value;
    }
    attaquer() {
    }
    cibler() {
    }
}
exports.AbstractPersonnage = AbstractPersonnage;
