import { AbstractPersonnage } from "./abstractPersonnage";

export class Gentil extends AbstractPersonnage {

    constructor(arme : string, nom : string, cible : string){
        super(arme, nom, cible)
    }

    public soin() {
        console.log('Bisou magique')
    }
}