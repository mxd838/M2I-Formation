"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Complex = void 0;
// refaire pour n'avoir que 2 attributs
// et creer deux instances
class Complex {
    constructor(reel1, imaginaire1, reel2, imaginaire2) {
        this._reel1 = 0;
        this._imaginaire1 = 0;
        this._reel2 = 0;
        this._imaginaire2 = 0;
        this.reel1 = reel1;
        this.imaginaire1 = imaginaire1;
        this.reel2 = reel2;
        this.imaginaire2 = imaginaire2;
    }
    get reel1() {
        return this._reel1;
    }
    set reel1(value) {
        this._reel1 = value;
    }
    get imaginaire1() {
        return this._imaginaire1;
    }
    set imaginaire1(value) {
        this._imaginaire1 = value;
    }
    get reel2() {
        return this._reel2;
    }
    set reel2(value) {
        this._reel2 = value;
    }
    get imaginaire2() {
        return this._imaginaire2;
    }
    set imaginaire2(value) {
        this._imaginaire2 = value;
    }
    addComplex(valueR1, valueI1, valueR2, valueI2) {
        this.reel1 = valueR1;
        this.imaginaire1 = valueI1;
        this.reel2 = valueR2;
        this.imaginaire2 = valueI2;
        const display = `Nombre complexe 1 :\nPartie relle: ${this.reel1}\nPartie imaginaire: ${this.imaginaire1}\n
        Nombre complexe 2 :\nPartie relle: ${this.reel2}\nPartie imaginaire: ${this.imaginaire2}\n
        La somme : ${this.reel1 + this.reel2} + ${this.imaginaire1 + this.imaginaire2}i`;
        console.log(display);
    }
}
exports.Complex = Complex;
