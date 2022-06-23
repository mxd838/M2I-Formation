import { Zoo } from "./zoo"

export class Cage extends Zoo{
    protected _nomLoc : string = ''

    constructor(nom : string, nomLoc : string){
        super(nom)
        this.nomLoc = nomLoc
    }

    get nomLoc() : string {
        return this._nomLoc
    }

    set nomLoc(value : string)  {
        this._nomLoc = value
    }


}