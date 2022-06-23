"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Somme2 = void 0;
class Somme2 {
    constructor(number1, number2) {
        this._nb1 = 0;
        this._nb2 = 0;
        this.nb1 = number1;
        this.nb2 = number2;
    }
    get nb1() {
        return this._nb1;
    }
    set nb1(value) {
        this._nb1 = value;
    }
    get nb2() {
        return this._nb2;
    }
    set nb2(value) {
        this._nb2 = value;
    }
    somme() {
        return this.nb1 + this.nb2;
    }
}
exports.Somme2 = Somme2;
