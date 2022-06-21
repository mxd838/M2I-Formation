import { Apartment } from "./apartment"
import { House } from "./house"

export class PersonHouse {
    private _name : string = ''
    private _habitation : Object = {}

    constructor(name : string){
        this.name = name
    }

    get name() {
        return this._name
    }

    set name(value : string){
        this._name = value
    }

    public display(surface : number, color: string){
        console.log(`Je suis une personne.J'habite dans ${surface}. Ma porte est de couleur ${color}`)
    }

    public setHabitation(habitation: House){
        this._habitation = habitation
    }
}