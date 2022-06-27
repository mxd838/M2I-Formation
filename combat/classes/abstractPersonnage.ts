import { Personnage } from "../interfaces/personnage"

export abstract class AbstractPersonnage implements Personnage {
    public _pointsDeVie: number  = 0  
    public _arme: string = ''
    public _nom : string = ''
    public _cible : string = ''


    constructor(arme : string, nom : string, cible : string) {
        this.arme = arme
        this.nom = nom
        this.cible = cible
        this.pointsDeVie = 100 + (Math.floor(Math.random() * 100))
    }

    get arme () : string {
        return this._arme
    }

    set arme (value : string){
        this._arme = value
    }

    get nom () : string {
        return this._nom
    }

    set nom (value : string){
        this._nom = value
    }

    get cible () : string {
        return this._cible
    }

    set cible (value : string){
        this._cible = value
    }

    get pointsDeVie() : number {
        return this._pointsDeVie
    }

    set pointsDeVie( value : number){
        this._pointsDeVie = value
    }

    public attaquer() {

    }

    public cibler() {

    }
}