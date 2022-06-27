"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonEau = void 0;
const pokemon_1 = require("./pokemon");
class PokemonEau extends pokemon_1.Pokemon {
    constructor(nom, hp, atk) {
        super(nom, hp, atk);
        this.type = 'eau';
    }
    attaquer(value) {
        if (value.type === 'plante' || value.type === 'eau') {
            value.hp -= this.atk / 2;
            console.log(`${this.nom} inflige ${this.atk / 2} points de dégâts à ${value.nom}`);
        }
        else if (value.type === 'feu') {
            value.hp -= this.atk * 2;
            console.log(`${this.nom} inflige ${this.atk * 2} points de dégâts à ${value.nom}`);
        }
        else {
            value.hp -= this.atk;
            console.log(`${this.nom} inflige ${this.atk} points de dégâts à ${value.nom}`);
        }
    }
}
exports.PokemonEau = PokemonEau;
