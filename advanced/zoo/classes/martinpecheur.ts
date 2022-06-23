import { Nageur } from "../interfaces/nageur";
import { Volatile } from "../interfaces/volatile";
import { Animal } from "./animal";

class Martinpecheur extends Animal implements Nageur, Volatile {
    constructor(nom : string){
        super(nom)
    }

    public voler() : void {
        console.log(`${this.nom} le martin-pêcheur vole.`)
    }

    public nager() : void {
        console.log(`${this.nom} le martin-pêcheur nage.`)
    }
}