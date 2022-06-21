import { Idemo } from './interface/Idemo'
export class Ballon implements Idemo {
    private _taille : number = 0
    private _genre : string = ''
    private _couleur : string = ''

    constructor(taille : number, genre : string, couleur : string){
        this.taille = taille
        this.genre = genre
        this.couleur = couleur
    }

    get taille() : number {
        return this._taille
    }

    set taille(value : number){
        this._taille = value
    }

    get genre() : string {
        return this._genre
    }

    set genre(value : string){
        this._genre = value
    }

    get couleur() : string {
        return this._couleur
    }

    set couleur(value : string){
        this._couleur = value
    }

    public accelerate(): void {
        
    }

    public reculer(): void {
        
    }
}