"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_1 = require("./classes/pokemon");
const pokemonEau_1 = require("./classes/pokemonEau");
const pokemonFeu_1 = require("./classes/pokemonFeu");
const pokemonPlante_1 = require("./classes/pokemonPlante");
const bubulle = new pokemon_1.Pokemon('Bubulle', 100, 5);
const pupute = new pokemon_1.Pokemon('Pupute', 150, 20);
// pokeRand1.attaquer(pokeRand2)
// pokeRand2.toString()
const popol = new pokemonEau_1.PokemonEau('Popol', 150, 10);
const babate = new pokemonFeu_1.PokemonFeu('Babate', 150, 15);
const feufeuille = new pokemonPlante_1.PokemonPlante('Feufeuille', 200, 10);
// feufeuille.attaquer(popol)
// popol.toString()
pokemon_1.Pokemon.combat(popol, feufeuille);
