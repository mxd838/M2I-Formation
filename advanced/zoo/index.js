"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./classes/animal");
const aquarium_1 = require("./classes/aquarium");
const cage_1 = require("./classes/cage");
const chat_1 = require("./classes/chat");
const dauphin_1 = require("./classes/dauphin");
const voliere_1 = require("./classes/voliere");
const zoo_1 = require("./classes/zoo");
const bobby = new animal_1.Animal('Bobby');
// console.log(bobby.nom)
// console.log(Animal.count)
// bobby.manger()
const pancho = new chat_1.Chat('Pancho');
// console.log(pancho.nom)
// console.log(Animal.count)
// pancho.dormir()
// pancho.allerLitiere()
const tempo = new dauphin_1.Dauphin('Tempo');
// console.log(tempo.nom)
// console.log(Animal.count)
// class zoo
// agregation avec classes cage, voliere et aquarium
// methode pour chaque lieu pour ajouter un animal dans array
// attributs statiques faisant le compte de chaque animal dans chaque lieu
const zooMagique = new zoo_1.Zoo('Magical Zoo');
const voliereMagique = new voliere_1.Voliere('Magical Zoo', 'Magical Voliere');
const cageMagique = new cage_1.Cage('Magical Zoo', 'Magical Cage');
const aquariumMagique = new aquarium_1.Aquarium('Magical Zoo', 'Magical Aquarium');
zooMagique.addLocation(voliereMagique);
zooMagique.addLocation(cageMagique);
zooMagique.addLocation(aquariumMagique);
console.log(zooMagique.locations);
