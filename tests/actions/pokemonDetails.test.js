import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import { expect } from 'chai'
import { before, describe, it } from 'mocha'
import { singleTypeWithPokemon } from '../mocks/pokemonData'
import { fetchPokemonDetails } from '../../actions/pokemonDetails'

describe('Actions - PokemonDetails', () => {
  let mockAxios

  before(() => {
    mockAxios = new MockAdapter(axios)
  })

  describe('fetchPokemonDetails', () => {
    it('returns a pokemon from the API', async () => {
      mockAxios.onGet().reply(200, singleTypeWithPokemon)

      const data = await fetchPokemonDetails()

      expect(data).to.deep.equal(singleTypeWithPokemon)
    })

    it('returns an empty object when the API responds with a non-200 status', async () => {
      mockAxios.onGet().reply(500, {})

      const data = await fetchPokemonDetails()

      expect(data).to.deep.equal({})
    })
  })
})
