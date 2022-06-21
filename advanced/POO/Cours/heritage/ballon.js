"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ballon = void 0;
class Ballon {
    constructor(taille, genre, couleur) {
        this._taille = 0;
        this._genre = '';
        this._couleur = '';
        this.taille = taille;
        this.genre = genre;
        this.couleur = couleur;
    }
    get taille() {
        return this._taille;
    }
    set taille(value) {
        this._taille = value;
    }
    get genre() {
        return this._genre;
    }
    set genre(value) {
        this._genre = value;
    }
    get couleur() {
        return this._couleur;
    }
    set couleur(value) {
        this._couleur = value;
    }
    accelerate() {
    }
    reculer() {
    }
}
exports.Ballon = Ballon;
