import { Person } from "./person";

export class Student extends Person {
    constructor (age : number){
        super(age)
    }

    public goToClasses() : void {
        console.log("I'm going to class.")
    }
}