"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Somme = void 0;
class Somme {
    constructor(number1, number2) {
        this._n1 = 0;
        this._n2 = 0;
        this._n1 = number1;
        this._n2 = number2;
    }
    get n1() {
        return this._n1;
    }
    set n1(value) {
        this._n1 = value;
    }
    get n2() {
        return this._n2;
    }
    set n2(value) {
        this._n2 = value;
    }
    somme(value1, value2) {
        this._n1 = value1;
        this._n2 = value2;
        return this.n1 + this.n2;
    }
}
exports.Somme = Somme;
