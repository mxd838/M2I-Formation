import { Personne } from "./personne";

export class Professeur extends Personne {

    private _pointFort : string = ""
    private _pointFaible : string = ""
    private _sorts : Object[] = []


    constructor(nom : string, prenom : string, age : number){
        super(nom, prenom, age, 150)
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

    public get sorts() : Object[] {
        return this._sorts
    }

    public set sorts(value : Object[]) {
        this._sorts = value
    }

}