const pokemonList = [{
  pokedexNumber: 1,
  name: 'Bulbasaur',
  generationNumber: 1,
  fromId: null,
  isProtected: 1,
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
}, {
  pokedexNumber: 10,
  name: 'Caterpie',
  generationNumber: 1,
  fromId: null,
  isProtected: 1,
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
}]

const formsList = [{
  id: 4,
  name: 'Alolan',
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
}]

const typesList = [{
  id: 1,
  name: 'Bug',
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
}]

const singlePokemonWithAltForm = {
  pokedexNumber: 88,
  name: 'Grimer',
  generationNumber: 1,
  fromId: null,
  isProtected: 1,
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
  AlternateForms: [
    {
      id: 4,
      name: 'Alolan',
      createdAt: '2020-05-23T11:42:42.000Z',
      updatedAt: '2020-05-23T11:42:42.000Z',
      PokemonAlternateForms: {
        PokemonPokedexNumber: 88,
        AlternateFormId: 4,
        createdAt: '2020-05-23T11:42:42.000Z',
        updatedAt: '2020-05-23T11:42:42.000Z',
      },
    },
  ],
  Types: [
    {
      id: 14,
      name: 'Poison',
      createdAt: '2020-05-23T11:42:42.000Z',
      updatedAt: '2020-05-23T11:42:42.000Z',
      PokemonTypes: {
        PokemonPokedexNumber: 88,
        TypeId: 14,
        createdAt: '2020-05-23T11:42:42.000Z',
        updatedAt: '2020-05-23T11:42:42.000Z',
      },
    },
  ],
}

const singleAltFormWithPokemon = {
  id: 4,
  name: 'Alolan',
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
  Pokemons: [
    {
      pokedexNumber: 19,
      name: 'Rattata',
      generationNumber: 1,
      fromId: null,
      isProtected: 1,
      createdAt: '2020-05-23T11:42:42.000Z',
      updatedAt: '2020-05-23T11:42:42.000Z',
      PokemonAlternateForms: {
        PokemonPokedexNumber: 19,
        AlternateFormId: 4,
        createdAt: '2020-05-23T11:42:42.000Z',
        updatedAt: '2020-05-23T11:42:42.000Z',
      },
    },
  ],
}

const singleTypeWithPokemon = {
  id: 1,
  name: 'Bug',
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
  Pokemons: [
    {
      pokedexNumber: 10,
      name: 'Caterpie',
      generationNumber: 1,
      fromId: null,
      isProtected: 1,
      createdAt: '2020-05-23T11:42:42.000Z',
      updatedAt: '2020-05-23T11:42:42.000Z',
      PokemonTypes: {
        PokemonPokedexNumber: 10,
        TypeId: 1,
        createdAt: '2020-05-23T11:42:42.000Z',
        updatedAt: '2020-05-23T11:42:42.000Z',
      },
    },
  ],
}

const newPokemon = {
  pokedexNumber: 154,
  generationNumber: 1,
  fromId: null,
  isProtected: 0,
  name: 'Leafeon',
  updatedAt: '2020-05-24T16:42:32.743Z',
  createdAt: '2020-05-24T16:42:32.743Z',
}

const unprotectedPokemon = {
  pokedexNumber: 88,
  generationNumber: 1,
  fromId: null,
  isisProtected: 0,
  name: 'Jolion',
  updatedAt: '2020-05-24T16:42:32.743Z',
  createdAt: '2020-05-24T16:42:32.743Z',
}

const protectedPokemon = {
  pokedexNumber: 1,
  name: 'Fakemon',
  generationNumber: 1,
  fromId: null,
  isProtected: 1,
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
  deletedAt: null,
}

const filteredPokemonList = [{
  pokedexNumber: 10,
  name: 'Caterpie',
  generationNumber: 1,
  fromId: null,
  isProtected: 1,
  createdAt: '2020-05-23T11:42:42.000Z',
  updatedAt: '2020-05-23T11:42:42.000Z',
}]

const fetchedPokemonDetails = {
  pokedexNumber: 501,
  name: 'Rex',
  generationNumber: 1,
  Forms: ['Alolan'],
  Types: ['Fire', 'Fighting'],
}

module.exports = {
  pokemonList,
  formsList,
  typesList,
  singlePokemonWithAltForm,
  singleAltFormWithPokemon,
  singleTypeWithPokemon,
  newPokemon,
  unprotectedPokemon,
  protectedPokemon,
  filteredPokemonList,
  fetchedPokemonDetails,
}
