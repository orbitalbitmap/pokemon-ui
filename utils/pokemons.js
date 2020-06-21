import { fetchPokemon } from '../actions/pokemons'

export const filterPokemon = (list, term) => list.filter(pokemon => (
  pokemon.name.toLowerCase().includes(term.toLowerCase())
))

export const getIdFromUrl = location => (location && location.pathname
  ? location.pathname.split('/generation/').pop()
  : 0
)

export const retrievePokemon = async (location) => {
  const generationNumber = getIdFromUrl(location)

  const pokemonList = await fetchPokemon(generationNumber)

  return pokemonList
}
