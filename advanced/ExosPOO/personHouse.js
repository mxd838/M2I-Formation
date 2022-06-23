"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonHouse = void 0;
class PersonHouse {
    constructor(name) {
        this._name = '';
        this._habitation = {};
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    display(surface, color) {
        console.log(`Je suis une personne.J'habite dans ${surface}. Ma porte est de couleur ${color}`);
    }
    setHabitation(habitation) {
        this._habitation = habitation;
    }
}
exports.PersonHouse = PersonHouse;
