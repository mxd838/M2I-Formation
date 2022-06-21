"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Etudiant = void 0;
class Etudiant {
    constructor(nom, note1, note2) {
        this._nom = '';
        this._note1 = 0;
        this._note2 = 0;
        this.nom = nom;
        this.note1 = note1;
        this.note2 = note2;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get note1() {
        return this._note1;
    }
    set note1(value) {
        this._note1 = value;
    }
    get note2() {
        return this._note2;
    }
    set note2(value) {
        this._note2 = value;
    }
    calcMoy() {
        return (this._note1 + this._note2) / 2;
    }
    show() {
        return `L'étudiant ${this._nom} a une moyenne de ${this.calcMoy()}`;
    }
}
exports.Etudiant = Etudiant;
