import { Personne } from "./personne";


export class Sorcier extends Personne {

    private _pointFort : string = ""
    private _pointFaible : string = ""
    private _maison : Object = {}
    private _sorts : Object[] = []


    constructor(nom : string, prenom : string, age : number, pointFort : string, pointFaible : string, maison : Object, sorts : Object[]){
        super(nom, prenom, age, 100)
    }

    public get pointFort() : string {
        return this._pointFort
    }

    public set pointFort(value : string) {
        this._pointFort = value
    }

    public get pointFaible() : string {
        return this._pointFaible
    }

    public set pointFaible(value : string) {
        this._pointFaible = value
    }

    public get maison() : Object {
        return this._maison
    }

    public set maison(value : Object) {
        this._maison = value
    }

    public get sorts() : Object[] {
        return this._sorts
    }

    public set sorts(value : Object[]) {
        this._sorts = value
    }

}