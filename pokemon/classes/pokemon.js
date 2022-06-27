"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
class Pokemon {
    constructor(nom, hp, atk) {
        this._nom = '';
        this._hp = 0;
        this._atk = 0;
        this._type = 'normal';
        this.nom = nom;
        this.hp = hp;
        this.atk = atk;
    }
    get nom() {
        return this._nom;
    }
    set nom(value) {
        this._nom = value;
    }
    get hp() {
        return this._hp;
    }
    set hp(value) {
        this._hp = value;
    }
    get atk() {
        return this._atk;
    }
    set atk(value) {
        this._atk = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    isDead() {
        if (this.hp <= 0) {
            return true;
        }
        return false;
    }
    attaquer(value) {
        value.hp -= this.atk;
    }
    toString() {
        console.log(`
        ${this.nom} :
        Type ${this.type},
        ${this.hp} points de vie,
        ${this.atk} points de dégats d'attaque
        `);
    }
    static combat(bebete1, bebete2) {
        while (bebete1.isDead() === false && bebete2.isDead() === false) {
            console.log(`${bebete1.nom} attaque ${bebete2.nom} !`);
            bebete1.attaquer(bebete2);
            if (bebete2.hp <= 0) {
                console.log(`${bebete2.nom} est décédé.`);
            }
            else {
                console.log(`${bebete2.nom} n'a plus que ${bebete2.hp} points de vie !`);
            }
            console.log(`${bebete2.nom} attaque ${bebete1.nom} !`);
            bebete2.attaquer(bebete1);
            if (bebete1.hp <= 0) {
                console.log(`${bebete1.nom} est décédé.`);
            }
            else {
                console.log(`${bebete1.nom} n'a plus que ${bebete1.hp} points de vie !`);
            }
            // for (let i = 0; i < 2; i++){
            // }
        }
    }
}
exports.Pokemon = Pokemon;
