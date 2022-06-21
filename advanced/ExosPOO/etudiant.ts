export class Etudiant {
    private _nom : string = ''
    private _note1 : number = 0
    private _note2 : number = 0

    constructor(nom : string, note1 : number, note2 : number){
        this.nom = nom
        this.note1 = note1
        this.note2 = note2
    }

    get nom() : string {
        return this._nom
    }

    set nom(value : string){
        this._nom = value
    }

    get note1() : number {
        return this._note1
    }

    set note1(value : number){
        this._note1 = value
    }

    get note2() : number {
        return this._note2
    }

    set note2(value : number) {
        this._note2 = value
    }

    public calcMoy() {
        return (this._note1 + this._note2)/2
    }

    public show(){
        return `L'étudiant ${this._nom} a une moyenne de ${this.calcMoy()}`
    }

}