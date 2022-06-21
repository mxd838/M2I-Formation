export interface Idemo {
    accelerate() : void
    reculer() : void
}


// oblige classe qui implemente interface a definir ce qui est indique dans interface
// classe abstraite :
// signature dans le parent
// définition dans le/les enfants


// interface :
// contient les signatures des méthodes qu'on est obligés de définir dans les classes qui implémentent les interfaces
// une classe peut avoir plusieurs interfaces


// surcharge
// reprend une méthode parent en changeant la signature (valeur de renvoi) ou nombre de parametres ou corps méthode
// redéfinition
// change uniquement corps de fonction

// attribut statique


// polymorphisme
// par ex pour interface
// tout ce qui implémente interface est aussi de type interface


// agrégation et composition
// objet dans objet
// agrégation : objet instancié à l'extérieur classe utilisé dans la classe via methode (faible dépendance) (bonne pratique)
// composition : new directement dans la classe (très forte dépendance) (mauvaise pratique)
// -- implique objet pète si classe disparait