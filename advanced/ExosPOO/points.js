"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this._x = 0;
        this._y = 0;
        this.x = x;
        this.y = y;
    }
    get x() {
        return this._x;
    }
    set x(value) {
        this._x = value;
    }
    get y() {
        return this._y;
    }
    set y(value) {
        this._y = value;
    }
    distance(value) {
        return Math.sqrt(Math.pow((this.x - value.x), 2) + Math.pow((this.y - value.y), 2));
    }
}
exports.Point = Point;
