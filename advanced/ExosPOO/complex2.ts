export class Complex2 {
    private _reel : number = 0
    private _imaginaire : number = 0

    static sums : number[] = []

    constructor(reel : number, imaginaire : number){
        this.reel = reel
        this.imaginaire = imaginaire
    }

    get reel() : number {
        return this._reel
    }

    set reel(value : number){
        this._reel = value
    }

    get imaginaire() :number {
        return this._imaginaire
    }

    set imaginaire(value : number){
        this._imaginaire = value
    }

    static addComplex (reel1 : number, imaginaire1 : number, reel2 : number, imaginaire2 : number){
        const sommeReels = reel1 + reel2
        const sommeImaginaires = imaginaire1 + imaginaire2
        // sums.push()
        
    }
}