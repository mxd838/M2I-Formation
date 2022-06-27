export class Pokemon {
    protected _nom : string = ''
    protected _hp : number = 0
    protected _atk : number = 0
    protected _type : string = 'normal'


    constructor(nom : string, hp : number, atk : number){
        this.nom = nom
        this.hp = hp
        this.atk = atk
    }

    get nom () : string {
        return this._nom
    }

    set nom(value : string){
        this._nom = value
    }

    get hp () : number {
        return this._hp
    }

    set hp(value : number){
        this._hp = value
    }

    get atk () : number {
        return this._atk
    }

    set atk(value : number){
        this._atk = value
    }

    get type () : string {
        return this._type
    }

    set type(value : string){
        this._type = value
    }


    public isDead() : boolean {
        if (this.hp <= 0){
            return true
        }
        return false
    }

    public attaquer(value : Pokemon){
        value.hp -= this.atk
    }

    public toString() {
        console.log(`
        ${this.nom} :
        Type ${this.type},
        ${this.hp} points de vie,
        ${this.atk} points de dégats d'attaque
        `)
    }

    static combat(bebete1 : Pokemon, bebete2 : Pokemon){

        while(bebete1.isDead() === false && bebete2.isDead() === false){
            console.log(`${bebete1.nom} attaque ${bebete2.nom} !`)
            bebete1.attaquer(bebete2)
            if (bebete2.hp <= 0) {
                console.log(`${bebete2.nom} est décédé.`)
            } else {
                console.log(`${bebete2.nom} n'a plus que ${bebete2.hp} points de vie !`)
            }
 
            console.log(`${bebete2.nom} attaque ${bebete1.nom} !`)
            bebete2.attaquer(bebete1)
            if (bebete1.hp <= 0) {
                console.log(`${bebete1.nom} est décédé.`)
            } else {
                console.log(`${bebete1.nom} n'a plus que ${bebete1.hp} points de vie !`)
            }
            // for (let i = 0; i < 2; i++){

            // }
        }
    }
}