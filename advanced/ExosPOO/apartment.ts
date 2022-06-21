import { House } from "./house";

export class Apartment extends House{
    constructor(color : string) {
        super(50, color)
    }
}