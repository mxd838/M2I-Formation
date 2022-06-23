"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complex2 = void 0;
class Complex2 {
    constructor(reel, imaginaire) {
        this._reel = 0;
        this._imaginaire = 0;
        this.reel = reel;
        this.imaginaire = imaginaire;
    }
    get reel() {
        return this._reel;
    }
    set reel(value) {
        this._reel = value;
    }
    get imaginaire() {
        return this._imaginaire;
    }
    set imaginaire(value) {
        this._imaginaire = value;
    }
    static addComplex(reel1, imaginaire1, reel2, imaginaire2) {
        const sommeReels = reel1 + reel2;
        const sommeImaginaires = imaginaire1 + imaginaire2;
        // sums.push()
    }
}
exports.Complex2 = Complex2;
Complex2.sums = [];
