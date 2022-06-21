"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const person_1 = require("./person");
class Student extends person_1.Person {
    constructor(age) {
        super(age);
    }
    goToClasses() {
        console.log("I'm going to class.");
    }
}
exports.Student = Student;
