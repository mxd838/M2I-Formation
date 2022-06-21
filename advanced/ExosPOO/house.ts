import { Door } from "./door"

export class House {
    protected _surface : number = 0
    // composition
    private _door : Door = new Door('bleue')

    constructor(surface : number, color : string){
        this.surface = surface
        this._door.color = color
    }

    get surface () {
        return this._surface
    }

    set surface(value : number){
        this._surface = value
    }

    get door() {
        return this._door
    }

    set door(value : Door){
        this._door = value
    }

    public display() : void {
        console.log(`Je suis une maison, ma surface est de ${this.surface}m2`)
    }
}