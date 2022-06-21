// refaire pour n'avoir que 2 attributs
// et creer deux instances
export class Complex {
    private _reel1 : number = 0
    private _imaginaire1 : number = 0
    private _reel2 : number = 0
    private _imaginaire2 : number = 0

    constructor(reel1 : number, imaginaire1 : number,reel2 : number, imaginaire2 : number){
        this.reel1 = reel1
        this.imaginaire1 = imaginaire1
        this.reel2 = reel2
        this.imaginaire2 = imaginaire2

    }

    get reel1() : number {
        return this._reel1
    }

    set reel1(value : number){
        this._reel1 = value
    }

    get imaginaire1() : number {
        return this._imaginaire1
    }

    set imaginaire1(value : number) {
        this._imaginaire1 = value
    }

    get reel2() : number {
        return this._reel2
    }

    set reel2(value : number){
        this._reel2 = value
    }

    get imaginaire2() : number {
        return this._imaginaire2
    }

    set imaginaire2(value : number) {
        this._imaginaire2 = value
    }

    public addComplex(valueR1 : number, valueI1 : number,valueR2 : number, valueI2 : number){
        this.reel1 = valueR1
        this.imaginaire1 = valueI1
        this.reel2 = valueR2
        this.imaginaire2 = valueI2
        const display = `Nombre complexe 1 :\nPartie relle: ${this.reel1}\nPartie imaginaire: ${this.imaginaire1}\n
        Nombre complexe 2 :\nPartie relle: ${this.reel2}\nPartie imaginaire: ${this.imaginaire2}\n
        La somme : ${this.reel1 + this.reel2} + ${this.imaginaire1 + this.imaginaire2 }i`
        console.log(display)
    }
}
