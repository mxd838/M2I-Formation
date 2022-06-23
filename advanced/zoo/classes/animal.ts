export class Animal implements Animal{
    protected _nom : string = ''

    static count = 0

    constructor(nom : string){
        this.nom = nom
        Animal.count++
    }

    get nom() : string {
        return this._nom
    }

    set nom(value : string){
        this._nom = value
    }

    public manger(): void {
        console.log(`${this.nom} mange`)
    }

    // add method to add in a place
}