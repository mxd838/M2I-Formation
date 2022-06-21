"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Door = void 0;
class Door {
    constructor(color) {
        this._color = '';
        this.color = color;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    display() {
        console.log(`Je suis une porte, ma couleur est ${this.color}`);
    }
}
exports.Door = Door;
