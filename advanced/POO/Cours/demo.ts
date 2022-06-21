export class Demo {
    // Attributes
    // - visibility (how do I access the data)
    // -- public (in the class and outside) / private (in the class, not even instances) / protected (class and inheritance)
    // - name
    // -- name of the attribute
    // - type
    // -- type of the attribute
    public _name : string = ""
    private _age : number = 0
    // not taken in constructor, value will be the same for all instances
    public _value : number = 10


    // Constructor 
    // - method launching at the object creation
    constructor(param : string, param2 : number) {
        this._name = param
        // no security at this time, age can be negative
        // this._age = param2
        // underscore to differentiate attribute from method
        // here call the setter, with the security of it
        this.age = param2
    }

    // Encapsulation
    // interest : put constraints to the attributes access
    get name () : string {
        return this._name
    }
    set name (value: string) {
        if (value.length > 5){
            this._name = value
        }
    }
    get age () : number {
        // getter used if attribute not public
        return this._age
    }

    set age (value : number) {
        // interest of setter : give conditions or raise exceptions in certain cases
        // no interest if no constraints
        if (value > 0){
            this._age = value
        }
    }

    // Methods
    public avancer() : void {
        console.log("J'avance")
    }

    public afficherAge() : number {
        return this._age
    }

    private reculer() : void {
        console.log("Je recule")
    }
}


// heritage : once class created, not touched again
// if modifications, through heritage