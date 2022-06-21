"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(age) {
        this._age = 0;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
    sayHello() {
        console.log("Hello");
    }
    displayAge(value) {
        console.log(`My age is ${this.age}`);
    }
}
exports.Person = Person;
