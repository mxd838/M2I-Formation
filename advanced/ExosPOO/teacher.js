"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
const person_1 = require("./person");
class Teacher extends person_1.Person {
    constructor(age, subject) {
        super(age);
        this._subject = '';
        this.subject = subject;
    }
    get subject() {
        return this._subject;
    }
    set subject(value) {
        this._subject = value;
    }
    explain() {
        console.log(`Explanation on ${this.subject} begins.`);
    }
}
exports.Teacher = Teacher;
