"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aquarium = void 0;
const zoo_1 = require("./zoo");
class Aquarium extends zoo_1.Zoo {
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
exports.Aquarium = Aquarium;
