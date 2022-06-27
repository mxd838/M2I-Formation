import { Pokemon } from "./pokemon"

export class PokemonPlante extends Pokemon {


    constructor(nom : string, hp : number, atk : number){
        super(nom, hp, atk)
        this.type = 'plante'
    }



    public attaquer(value : Pokemon){
        if (value.type === 'feu' || value.type === 'plante'){
            value.hp -= this.atk / 2
            console.log(`${this.nom} inflige ${this.atk / 2} points de dégâts à ${value.nom}`)
        } else if (value.type === 'eau') {
            value.hp -= this.atk * 2
            console.log(`${this.nom} inflige ${this.atk * 2} points de dégâts à ${value.nom}`)
 
        } else {
            value.hp -= this.atk
            console.log(`${this.nom} inflige ${this.atk} points de dégâts à ${value.nom}`)
 
        }
    }

}