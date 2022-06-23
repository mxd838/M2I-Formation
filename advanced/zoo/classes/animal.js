"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
class Animal {
    constructor(nom) {
        this._nom = '';
        this.nom = nom;
        Animal.count++;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    manger() {
        console.log(`${this.nom} mange`);
    }
}
exports.Animal = Animal;
Animal.count = 0;
