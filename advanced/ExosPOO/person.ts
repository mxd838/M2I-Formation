export class Person {
    protected _age : number = 0

    constructor(age : number){
        this._age = age
    }

    get age() {
        return this._age
    }

    set age(value : number){
        this._age = value
    }

    public sayHello() : void {
        console.log("Hello")
    }

    public displayAge(value : number) : void {
        console.log(`My age is ${this.age}`)
    }
}
