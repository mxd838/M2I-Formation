import { Iuser } from "./interface/Iuser"
import { Vehicle } from "./vehicle"
import { Idemo } from "./interface/Idemo"

export class User implements Iuser {
   private _nom : string = ''
   private _garage : Idemo[] = []

   constructor(nom : string) {
    // toujours chercher setter
    this.nom = nom
   }

   get nom() : string {
    return this._nom
   }

   set nom(value :string) {
    this._nom = value
   }

   get garage() : Idemo[] {
    return this._garage
   }

   set garage(value : Idemo[]){
    this._garage = value
   }

   public afficherGarage(): void {
      console.log(this._garage) 
   }

   public stockerVehicule(value : Idemo): void {
        this._garage.push(value) 
   }
}