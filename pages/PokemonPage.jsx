import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import Pokemon from '../components/Pokemon'
import SearchBar from '../components/SearchBox'
import SideBar from '../components/SideBar'
import Title from '../components/Title'
import TitleBar from '../components/TitleBar'

import { filterPokemonByGen, filterPokemonByName, retrievePokemon } from '../utils/pokemons'

const PokemonImage = styled.img`
  width: 40px;
  height: 40px;

  &:hover {
  color: magenta;
}
`

export default () => {
  const reactGridStyling = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 150px)',
    justifyContent: 'center',
  }
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
        <TitleBar />
        <Title />
        <SearchBar term={searchTerm} setter={setSearchTerm} />
        <div className="pokemonList" style={reactGridStyling}>
          {
            filteredPokemonList
              ? filteredPokemonList.map(pokemon => (
                <div key={pokemon.name} style={{ textAlign: 'center', margin: '5px 0' }}>
                  <PokemonImage
                    src={`images/gen${pokemon.generationNumber}/${pokemon.slug}.png`}
                    alt={pokemon.name}
                  />
                  <Pokemon key={pokemon.pokedexNumber} name={pokemon.name} />
                </div>
              ))
              : (<div>Nothing here</div>)
          }
        </div>
      </Page>
    </>
  )
}
