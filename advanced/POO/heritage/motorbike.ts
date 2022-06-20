import { Vehicle } from "./vehicle";

export class Motorbike extends Vehicle {
    // constructor heritage
    constructor(power : number, color : string, brand : string, nbWheels : number) {
        super(power, color, brand, nbWheels) 
    }

    ride() : void {
        console.log("La moto roule.")
    }

    public returnColor() : string {
        return this._color
    }

    public wheeling() : string {
        return "Je fais un wheeling"
    }

    // surcharge
    // on change la signature
    public brake () : string {
        return "La moto freine"
    }
}