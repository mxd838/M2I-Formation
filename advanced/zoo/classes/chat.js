"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chat = void 0;
const animal_1 = require("./animal");
class Chat extends animal_1.Animal {
    constructor(nom) {
        super(nom);
    }
    dormir() {
        console.log(`Le chat ${this.nom} dort.`);
    }
    allerLitiere() {
        console.log(`Le chat ${this.nom} va à la litière.`);
    }
}
exports.Chat = Chat;
