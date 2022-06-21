export class Point {
    private _x : number = 0
    private _y : number = 0

    constructor(x : number, y : number){
        this.x = x
        this.y = y
    }

    get x() {
        return this._x
    }

    set x(value : number){
        this._x = value
    }

    get y() {
        return this._y
    }

    set y(value : number){
        this._y = value
    }

    public distance(value : Point){
        return Math.sqrt(Math.pow((this.x - value.x),2) + Math.pow((this.y - value.y),2))
    }
}