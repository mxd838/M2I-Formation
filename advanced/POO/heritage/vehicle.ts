export abstract class Vehicle {
    // Attributes
    private _power : number = 0
    protected _color : string = "bleue"
    private _brand : string = ""
    private _nbWheels : number = 4

    // attribut static
    // attributs statiques ne dépendent pas de l'objet mais de la classe
    // par exemple pour compter le nombre d'objets créés
    static count = 0

    // Constructor
    constructor( power : number, color : string, brand : string, nbWheels : number){
        this._power = power
        this._color = color
        this._brand = brand
        this._nbWheels = nbWheels
        // et pas this.count puisque this se réfère à l'instance 
        Vehicle.count++
        // ici, comme classe abstraite, va s'incrémenter à chaque création d'enfant
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
    // quand rend methode abstraite, peut plus mettre son comportement à l'intérieur
    // on va devoir la redéfinir dans chaque enfant
    abstract ride() : void

    // accelerer
    public accelerate() : void {
        console.log("J'accélère")
    }
    // freiner
    public brake() : void {
        console.log("Je freine")
    }
}