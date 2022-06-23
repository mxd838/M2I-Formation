import { Animal } from "./classes/animal";
import { Aquarium } from "./classes/aquarium";
import { Cage } from "./classes/cage";
import { Chat } from "./classes/chat"
import { Dauphin } from "./classes/dauphin";
import { Voliere } from "./classes/voliere";
import { Zoo } from "./classes/zoo";


const bobby = new Animal('Bobby')
// console.log(bobby.nom)
// console.log(Animal.count)
// bobby.manger()


const pancho = new Chat('Pancho')
// console.log(pancho.nom)
// console.log(Animal.count)
// pancho.dormir()
// pancho.allerLitiere()


const tempo = new Dauphin('Tempo')
// console.log(tempo.nom)
// console.log(Animal.count)


// class zoo
// agregation avec classes cage, voliere et aquarium
// methode pour chaque lieu pour ajouter un animal dans array
// attributs statiques faisant le compte de chaque animal dans chaque lieu


// add only name of the subloc
// display the locations of the zoo

const zooMagique = new Zoo('Magical Zoo')
const voliereMagique = new Voliere('Magical Zoo','Magical Voliere')
const cageMagique = new Cage('Magical Zoo','Magical Cage')
const aquariumMagique = new Aquarium('Magical Zoo','Magical Aquarium')
// zooMagique.addLocation(voliereMagique)
// zooMagique.addLocation(cageMagique)
// zooMagique.addLocation(aquariumMagique)
console.log(zooMagique.locations)

