import { Volatile } from "../interfaces/volatile";
import { Animal } from "./animal";

export class Aigle extends Animal implements Volatile{
    constructor(nom : string){
        super(nom)
    }

    public voler() : void {
        console.log(`${this.nom} l'aigle vole.`)
    }
}