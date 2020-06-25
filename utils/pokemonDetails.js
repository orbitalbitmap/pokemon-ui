import { fetchPokemonDetails } from '../actions/pokemonDetails'

export const getNameFromUrl = location => (location && location.pathname
  ? location.pathname.split('/pokemon/').pop()
  : ''
)

export const retrievePokemonDetails = async (location) => {
  const pokemonName = getNameFromUrl(location)

  if (!pokemonName) {
    return {
      pokedexNumber: 0,
      name: '',
      generationNumber: 0,
      Forms: [],
      Types: [],
    }
  }

  const {
    pokedexNumber, name, generationNumber, Forms, Types,
  } = await fetchPokemonDetails(pokemonName)
  const primaryType = Types[0].name

  if (!name) {
    return {
      pokedexNumber: 0,
      name: '',
      generationNumber: 0,
      primaryType: '',
      Forms: [],
      Types: [],
    }
  }

  return {
    pokedexNumber,
    name,
    generationNumber,
    primaryType,
    Forms,
    Types,
  }
}
