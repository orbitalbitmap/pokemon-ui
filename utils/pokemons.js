import { fetchPokemon } from '../actions/pokemons'

export const filterPokemonByGen = (list, genToFilterBy) => {
  if (genToFilterBy === 0) return list
  return list.filter(pokemon => (pokemon.generationNumber === genToFilterBy))
}

export const filterPokemonByName = (list, term) => list.filter(pokemon => (
  pokemon.name.toLowerCase().includes(term.toLowerCase())
))

export const retrievePokemon = async () => {
  const pokemonList = await fetchPokemon()

  return pokemonList
}
