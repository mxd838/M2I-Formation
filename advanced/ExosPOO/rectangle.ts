// Rectangle
export class Rectangle {
    private _largeur : number = 0
    private _longueur : number = 0

    constructor(largeur : number, longueur : number){
        this.largeur = largeur
        this.longueur = longueur
    }

    get largeur() : number {
        return this._largeur
    }

    set largeur(value : number){
        this._largeur = value
    }

    get longueur() : number {
        return this._longueur
    }

    set longueur(value : number) {
        this._longueur = value
    }

    public surface() : number {
        return this._largeur * this._longueur
    }
}