import { Vehicle } from "../vehicle"

export interface Iuser {
    afficherGarage() : void
    stockerVehicule(value : Vehicle) : void
}