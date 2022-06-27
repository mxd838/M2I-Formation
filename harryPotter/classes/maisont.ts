export class Maison {
    
    public _nom : string = ''
    public _couleur : string = ''

    constructor(nom : string, couleur : string){
        this.nom = nom
        this.couleur = couleur
    }
    
    get nom () : string {
        return this._nom
    }

    set nom (value : string){
        this._nom = value
    }

    get couleur() : string {
        return this._couleur
    }

    set couleur(value : string){
        this._couleur = value
    }
}