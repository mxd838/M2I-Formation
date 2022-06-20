import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
    private _nbOfPlaces = 4
    constructor (power : number, color : string, brand : string, nbWheels : number, nbOfPlaces : number){
        super(power, color, brand, nbWheels)
        this._nbOfPlaces = nbOfPlaces
    }

    get nbOfPlaces() : number {
        return this._nbOfPlaces
    }

    set nbOfPlaces(value : number) {
        this._nbOfPlaces = value
    }
}