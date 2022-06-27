"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gentil = void 0;
const abstractPersonnage_1 = require("./abstractPersonnage");
class Gentil extends abstractPersonnage_1.AbstractPersonnage {
    constructor(arme, nom, cible) {
        super(arme, nom, cible);
    }
}
exports.Gentil = Gentil;
