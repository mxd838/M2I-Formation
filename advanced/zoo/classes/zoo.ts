import { Location } from "../interfaces/location"

export class Zoo implements Location{
    private _nom : string = ''
    private _locations : string[] = []

    static zooPlacesCount = 0

    constructor(nom : string){
        this.nom = nom
    }

    get nom() : string {
        return this._nom
    }

    set nom(value : string) {
        this._nom = value
    }

    get locations() : string[] {
        return this._locations
    }

    set locations(value : string[]) {
        this._locations = value
    }

    // add a location to the zoo

    public addAnimal(value : Object): void {
        
    }
}