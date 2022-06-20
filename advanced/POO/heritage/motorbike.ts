import { Vehicle } from "./vehicle";

export class Motorbike extends Vehicle {
    // constructor heritage
    constructor(power : number, color : string, brand : string, nbWheels : number) {
        super(power, color, brand, nbWheels) 
    }

    public returnColor() : string {
        return this._color
    }

    public wheeling() : string {
        return "Je fais un wheeling"
    }
}