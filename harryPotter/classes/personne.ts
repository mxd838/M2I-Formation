export class Personne {
    protected _nom : string = ''
    protected _prenom : string = ''
    protected _age : number = 0
    protected _vie : number = 0

    constructor(nom : string, prenom : string, age : number, vie : number){
        this.nom = nom
        this.prenom = prenom
        this.age = age
        this.vie = vie
    }

    public get nom () : string {
        return this._nom
    }

    public set nom (value : string)  {
        this._nom = value
    }

    public get prenom () : string {
        return this._prenom
    }

    public set prenom (value : string)  {
        this._prenom = value
    }


    public get age () : number {
        return this._age
    }

    public set age (value : number)  {
        this._age = value
    }

    public get vie () : number {
        return this._vie
    }

    public set vie (value : number)  {
        this._vie = value
    }

}