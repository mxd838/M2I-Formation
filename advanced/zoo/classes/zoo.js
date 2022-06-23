"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = void 0;
class Zoo {
    constructor(nom) {
        this._nom = '';
        this._locations = [];
        this.nom = nom;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get locations() {
        return this._locations;
    }
    set locations(value) {
        this._locations = value;
    }
    // add a location to the zoo
    addLocation(value) {
        // console.log(value)
        this.locations.push(this.nom);
    }
    addAnimal(value) {
    }
}
exports.Zoo = Zoo;
Zoo.zooPlacesCount = 0;
