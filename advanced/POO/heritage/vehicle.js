"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehicle = void 0;
class Vehicle {
    // Constructor
    constructor(power, color, brand, nbWheels) {
        // Attributes
        this._power = 0;
        this._color = "bleue";
        this._brand = "";
        this._nbWheels = 4;
        this._power = power;
        this._color = color;
        this._brand = brand;
        this._nbWheels = nbWheels;
        // et pas this.count puisque this se réfère à l'instance 
        Vehicle.count++;
        // ici, comme classe abstraite, va s'incrémenter à chaque création d'enfant
    }
    // Encapsulation
    get power() {
        return this._power;
    }
    set power(value) {
        this._power = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    get brand() {
        return this._brand;
    }
    set brand(value) {
        this._brand = value;
    }
    get nbWheels() {
        return this._nbWheels;
    }
    set nbWheels(value) {
        this._nbWheels = value;
    }
    // accelerer
    accelerate() {
        console.log("J'accélère");
    }
    // freiner
    brake() {
        console.log("Je freine");
    }
}
exports.Vehicle = Vehicle;
// attribut static
// attributs statiques ne dépendent pas de l'objet mais de la classe
// par exemple pour compter le nombre d'objets créés
Vehicle.count = 0;
