"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Demo = void 0;
class Demo {
    // Constructor 
    // - method launching at the object creation
    constructor(param, param2) {
        // Attributes
        // - visibility (how do I access the data)
        // -- public (in the class and outside) / private (in the class, not even instances) / protected (class and inheritance)
        // - name
        // -- name of the attribute
        // - type
        // -- type of the attribute
        this._name = "";
        this._age = 0;
        // not taken in constructor, value will be the same for all instances
        this._value = 10;
        this._name = param;
        // no security at this time, age can be negative
        // this._age = param2
        // underscore to differentiate attribute from method
        // here call the setter, with the security of it
        this.age = param2;
    }
    // Encapsulation
    // interest : put constraints to the attributes access
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length > 5) {
            this._name = value;
        }
    }
    get age() {
        // getter used if attribute not public
        return this._age;
    }
    set age(value) {
        // interest of setter : give conditions or raise exceptions in certain cases
        // no interest if no constraints
        if (value > 0) {
            this._age = value;
        }
    }
    // Methods
    avancer() {
        console.log("J'avance");
    }
    afficherAge() {
        return this._age;
    }
    reculer() {
        console.log("Je recule");
    }
}
exports.Demo = Demo;
// heritage : once class created, not touched again
// if modifications, through heritage
