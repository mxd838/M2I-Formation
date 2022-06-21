export class Somme {
    private _n1 : number = 0
    private _n2 : number = 0

    constructor(number1 : number, number2 : number){
        this._n1 = number1
        this._n2 = number2
    }

    get n1() : number {
        return this._n1
    }

    set n1(value : number){
        this._n1 = value
    }

    get n2() : number {
        return this._n2
    }

    set n2(value : number) {
        this._n2 = value
    }

    public somme(value1 : number, value2 : number) : number {
        this._n1 = value1
        this._n2 = value2
        return this.n1 + this.n2
    }

}