"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.House = void 0;
const door_1 = require("./door");
class House {
    constructor(surface, color) {
        this._surface = 0;
        // composition
        this._door = new door_1.Door('bleue');
        this.surface = surface;
        this._door.color = color;
    }
    get surface() {
        return this._surface;
    }
    set surface(value) {
        this._surface = value;
    }
    get door() {
        return this._door;
    }
    set door(value) {
        this._door = value;
    }
    display() {
        console.log(`Je suis une maison, ma surface est de ${this.surface}m2`);
    }
}
exports.House = House;
