import { Nageur } from "../interfaces/nageur";
import { Animal } from "./animal";

export class Dauphin extends Animal implements Nageur{
    constructor(nom : string){
        super(nom)
    }

    public nager() : void {
        console.log(`${this.nom} le dauphin nage.`)
    }
}