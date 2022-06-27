"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonFeu = void 0;
const pokemon_1 = require("./pokemon");
class PokemonFeu extends pokemon_1.Pokemon {
    constructor(nom, hp, atk) {
        super(nom, hp, atk);
        this.type = 'feu';
    }
    attaquer(value) {
        if (value.type === 'feu' || value.type === 'eau') {
            value.hp -= this.atk / 2;
            console.log(`${this.nom} inflige ${this.atk / 2} points de dégâts à ${value.nom}`);
        }
        else if (value.type === 'plante') {
            value.hp -= this.atk * 2;
            console.log(`${this.nom} inflige ${this.atk * 2} points de dégâts à ${value.nom}`);
        }
        else {
            value.hp -= this.atk;
            console.log(`${this.nom} inflige ${this.atk} points de dégâts à ${value.nom}`);
        }
    }
}
exports.PokemonFeu = PokemonFeu;
