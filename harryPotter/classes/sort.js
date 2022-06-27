"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sort = void 0;
class Sort {
    constructor(nom, couleur, categorie, degats, soin) {
        this._nom = '';
        this._couleur = '';
        this._categorie = '';
        this._degats = 0;
        this._soin = 0;
        this.nom = nom;
        this.couleur = couleur;
        this.categorie = categorie;
        this.degats = degats;
        this.soin = soin;
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
    get categorie() {
        return this._categorie;
    }
    set categorie(value) {
        if (value !== 'Enchantement' && value !== 'Malédiction' && value !== 'Métarmophose' && value !== 'Maléfices') {
            this._categorie = 'Enchantement';
        }
        else {
            this._categorie = value;
        }
    }
    get degats() {
        return this._degats;
    }
    set degats(value) {
        if (value > 0) {
            this._degats = value;
        }
        else {
            this._degats = 0;
        }
    }
    get soin() {
        return this._soin;
    }
    set soin(value) {
        this._soin = value;
    }
}
exports.Sort = Sort;
