export interface Personnage {
    pointsDeVie : number
    arme : string
    nom : string
    cible : string
    attaquer() : void
    cibler() : void
}