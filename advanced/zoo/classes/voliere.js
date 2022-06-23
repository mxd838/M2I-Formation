"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Voliere = void 0;
const zoo_1 = require("./zoo");
class Voliere extends zoo_1.Zoo {
    constructor(nom, nomLoc) {
        super(nom);
        this._nomLoc = '';
        this.nomLoc = nomLoc;
    }
    get nomLoc() {
        return this._nomLoc;
    }
    set nomLoc(value) {
        this._nomLoc = value;
    }
}
exports.Voliere = Voliere;
