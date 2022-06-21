"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(nom) {
        this._nom = '';
        this._garage = [];
        // toujours chercher setter
        this.nom = nom;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get garage() {
        return this._garage;
    }
    set garage(value) {
        this._garage = value;
    }
    afficherGarage() {
        console.log(this._garage);
    }
    stockerVehicule(value) {
        this._garage.push(value);
    }
}
exports.User = User;
