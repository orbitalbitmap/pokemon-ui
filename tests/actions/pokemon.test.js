import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { expect } from 'chai'
import { before, describe, it } from 'mocha'
import { pokemonList } from '../mocks/pokemonData'
import { fetchPokemon } from '../../actions/pokemons'

describe('Actions - Pokemons', () => {
  let mockAxios

  before(() => {
    mockAxios = new MockAdapter(axios)
  })

  describe('fetchPokemons', () => {
    it('returns an array of pokemon from the API', async () => {
      mockAxios.onGet().reply(200, pokemonList)

      const data = await fetchPokemon()

      expect(data).to.deep.equal(pokemonList)
    })

    it('returns an empty array when the API responds with a non-200 status', async () => {
      mockAxios.onGet().reply(500, [])

      const data = await fetchPokemon()

      expect(data).to.deep.equal([])
    })
  })
})
