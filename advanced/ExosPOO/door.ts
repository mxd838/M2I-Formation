export class Door {
    private _color : string = ''

    constructor(color : string){
        this.color = color
    }

    get color() {
        return this._color
    }

    set color(value : string){
        this._color = value
    }

    public display(): void {
        console.log(`Je suis une porte, ma couleur est ${this.color}`   )
    }
}