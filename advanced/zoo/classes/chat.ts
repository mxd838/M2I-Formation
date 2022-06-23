import { Animal } from "./animal";

export class Chat extends Animal{
    constructor(nom : string){
        super(nom)
    }


    public dormir() : void {
        console.log(`Le chat ${this.nom} dort.`)
    }

    public allerLitiere() : void {
        console.log(`Le chat ${this.nom} va à la litière.`)
    }

}