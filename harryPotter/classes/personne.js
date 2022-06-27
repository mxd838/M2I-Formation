"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Personne = void 0;
class Personne {
    constructor(nom, prenom, age, vie) {
        this._nom = '';
        this._prenom = '';
        this._age = 0;
        this._vie = 0;
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.vie = vie;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get prenom() {
        return this._prenom;
    }
    set prenom(value) {
        this._prenom = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    get vie() {
        return this._vie;
    }
    set vie(value) {
        this._vie = value;
    }
}
exports.Personne = Personne;
