import { Vehicle } from "./vehicle";

export class Car extends Vehicle {
    private _nbOfPlaces = 4
    constructor (power : number, color : string, brand : string, nbWheels : number, nbOfPlaces : number){
        super(power, color, brand, nbWheels)
        // call the setter 
        // this.nbOfPlaces = nbOfPlaces
        // or the attribute :
        this._nbOfPlaces = nbOfPlaces
        // difference between the 2 ?
    }

    get nbOfPlaces() : number {
        return this._nbOfPlaces
    }

    set nbOfPlaces(value : number) {
        this._nbOfPlaces = value
    }

    // method redefinition
    // methode must have the same signature, the same number of parameters at the same place

    public accelerate() : void {
       console.log("la voiture accélère") 
    }
    // surcharge (override)
    // if any change to the signature or the parameters

    ride() : void {
        console.log("La voiture roule.")
    }
}