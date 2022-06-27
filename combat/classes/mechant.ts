import { AbstractPersonnage } from "./abstractPersonnage";

export class Mechant extends AbstractPersonnage {

    constructor(arme : string, nom : string, cible : string){
        super(arme, nom, cible)
    }
}