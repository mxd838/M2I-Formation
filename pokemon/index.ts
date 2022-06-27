import { Pokemon } from "./classes/pokemon";
import { PokemonEau } from "./classes/pokemonEau";
import { PokemonFeu } from "./classes/pokemonFeu";
import { PokemonPlante } from "./classes/pokemonPlante";

const bubulle = new Pokemon('Bubulle', 100, 5)
const pupute = new Pokemon('Pupute', 150, 20)

// pokeRand1.attaquer(pokeRand2)

// pokeRand2.toString()

const popol = new PokemonEau('Popol', 150, 10)
const babate = new PokemonFeu('Babate', 150, 15)
const feufeuille = new PokemonPlante('Feufeuille', 200, 10)

// feufeuille.attaquer(popol)
// popol.toString()


Pokemon.combat(popol, feufeuille)