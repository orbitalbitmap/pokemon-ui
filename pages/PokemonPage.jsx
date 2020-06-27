import React, { useEffect, useState } from 'react'
import Page from '../components/Page'
import Pokemon from '../components/Pokemon'
import SearchBar from '../components/SearchBox'
import SideBar from '../components/SideBar'
import Title from '../components/Title'

import { filterPokemonByGen, filterPokemonByName, retrievePokemon } from '../utils/pokemons'

export default () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [generation, setGeneration] = useState(0)
  const [pokemonList, setPokemonList] = useState([])
  const [currentPokemonList, setCurrentPokemonList] = useState([])
  const [filteredPokemonList, setFilteredPokemonList] = useState([])

  useEffect(() => {
    async function pullPokemon() {
      const retrievedList = await retrievePokemon()

      setPokemonList(retrievedList)
      setFilteredPokemonList(retrievedList)
      setCurrentPokemonList(retrievedList)
    }

    pullPokemon()
  }, [])

  useEffect(() => {
    const filtered = filterPokemonByGen(pokemonList, generation)

    setSearchTerm('')
    setFilteredPokemonList(filtered)
    setCurrentPokemonList(filtered)
  }, [generation])

  useEffect(() => {
    const filtered = filterPokemonByName(currentPokemonList, searchTerm)

    setFilteredPokemonList(filtered)
  }, [searchTerm])

  return (
    <>
      <SideBar setter={setGeneration} />
      <Page>
        <Title />
        <SearchBar term={searchTerm} setter={setSearchTerm} />
        {
          filteredPokemonList
            ? filteredPokemonList.map(pokemon => (
              <Pokemon key={pokemon.pokedexNumber} name={pokemon.name} />
            ))
            : (<div>Nothing here</div>)
        }
      </Page>
    </>
  )
}
