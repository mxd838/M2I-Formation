export class Somme2 {
    private _nb1 : number = 0
    private _nb2 : number = 0

    constructor(number1 : number, number2 : number){
        this.nb1 = number1
        this.nb2 = number2
    }


    get nb1() : number {
        return this._nb1
    }

    set nb1(value : number){
        this._nb1 = value
    }

    get nb2() : number {
        return this._nb2
    }

    set nb2(value : number){
        this._nb2 = value
    }

    public somme(){
        return this.nb1 + this.nb2
    }
}