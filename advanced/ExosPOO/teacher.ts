import { Person } from "./person"

export class Teacher extends Person {

    private _subject : string = ''

    constructor(age : number, subject : string){
        super(age)
        this.subject = subject
    }

    get subject () {
        return this._subject
    }

    set subject(value : string){
        this._subject = value
    }

    public explain() : void {
        console.log(`Explanation on ${this.subject} begins.`)
    }
}