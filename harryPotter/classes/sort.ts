export class Sort {

    private _nom : string = ''
    private _couleur : string = ''
    private _categorie : string = ''
    private _degats : number = 0
    private _soin : number = 0

    constructor(nom : string, couleur : string, categorie : string, degats : number, soin : number){
        this.nom = nom
        this.couleur = couleur
        this.categorie = categorie
        this.degats = degats
        this.soin = soin
    }


    public get nom () : string {
        return this._nom
    }

    public set nom (value : string) {
        this._nom = value
    }

    public get couleur () : string {
        return this._couleur
    }

    public set couleur (value : string){
        this._couleur = value
    }

    public get categorie () : string {
        return this._categorie
    }

    public set categorie (value : string){
        if (value !== 'Enchantement' && value !== 'Malédiction' && value !== 'Métarmophose' && value !== 'Maléfices'){
            this._categorie = 'Enchantement'
        } else {
            this._categorie = value
        }
    }

    public get degats () : number {
        return this._degats
    }

    public set degats (value : number){
        if (value > 0) {
            this._degats = value
        } else {
            this._degats = 0
        }
    }

    public get soin () : number {
        return this._soin
    }

    public set soin (value : number){
        this._soin = value
    }

}