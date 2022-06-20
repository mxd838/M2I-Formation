export class Vehicle {
    // Attributes
    private _power : number = 0
    protected _color : string = "bleue"
    private _brand : string = ""
    private _nbWheels : number = 4

    // Constructor
    constructor( power : number, color : string, brand : string, nbWheels : number){
        this._power = power
        this._color = color
        this._brand = brand
        this._nbWheels = nbWheels
    }

    // Encapsulation
    get power () : number {
        return this._power
    }

    set power (value : number) {
        this._power = value
    }

    get color () : string {
        return this._color
    }

    set color (value : string) {
        this._color = value
    }

    get brand () : string {
        return this._brand
    }

    set brand(value : string) {
        this._brand = value
    }

    get nbWheels () : number {
        return this._nbWheels
    }
    
    set nbWheels (value :number ){
        this._nbWheels = value
    }
    // Methods
    // rouler
    public ride() : void {
        console.log("Je roule")
    }
    // accelerer
    public accelerate() : void {
        console.log("J'accélère")
    }
    // freiner
    public brake() : void {
        console.log("Je freine")
    }
}