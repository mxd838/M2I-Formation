"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
// Rectangle
class Rectangle {
    constructor(largeur, longueur) {
        this._largeur = 0;
        this._longueur = 0;
        this.largeur = largeur;
        this.longueur = longueur;
    }
    get largeur() {
        return this._largeur;
    }
    set largeur(value) {
        this._largeur = value;
    }
    get longueur() {
        return this._longueur;
    }
    set longueur(value) {
        this._longueur = value;
    }
    surface() {
        return this._largeur * this._longueur;
    }
}
exports.Rectangle = Rectangle;
