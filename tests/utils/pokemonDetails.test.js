/* eslint-disable max-len */
import { expect } from 'chai'
import { createSandbox } from 'sinon'
import {
  after, afterEach, before, describe, it,
} from 'mocha'
import * as PokemonDetailsActions from '../../actions/pokemonDetails'
import { fetchedPokemonDetails } from '../mocks/pokemonData'
import { getNameFromUrl, retrievePokemonDetails } from '../../utils/pokemonDetails'

describe('Utils - Pokemon', () => {
  let sandbox
  let stubbedFetchPokemonDetails

  before(() => {
    sandbox = createSandbox()

    stubbedFetchPokemonDetails = sandbox.stub(PokemonDetailsActions, 'fetchPokemonDetails')
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('getNameFromUrl', () => {
    it('returns the final portion of the URL from the location prop provided', () => {
      const name = getNameFromUrl({ pathname: '/pokemon/caterpie' })

      expect(name).to.equal('caterpie')
    })

    it('returns an empty string when there is no path name', () => {
      const id = getNameFromUrl({})

      expect(id).to.equal('')
    })
  })

  describe('retrievePokemonDetails', () => {
    it('returns the pokemon details from the API call', async () => {
      stubbedFetchPokemonDetails.returns(fetchedPokemonDetails)

      const data = await retrievePokemonDetails({ pathname: '/pokemon/rex' })

      expect(data).to.deep.equal(fetchedPokemonDetails)
    })

    it('returns empty details when the path does not contain the correct pathing', async () => {
      stubbedFetchPokemonDetails.returns({})

      const data = await retrievePokemonDetails({ pathname: '/no/a/pokemon' })

      expect(data).to.deep.equal({
        pokedexNumber: 0,
        name: '',
        generationNumber: 0,
        Forms: [],
        Types: [],
      })
    })

    it('returns empty details when the action returns bad data', async () => {
      stubbedFetchPokemonDetails.returns({})

      const data = await retrievePokemonDetails({ pathname: '/pok/fakemon' })

      expect(data).to.deep.equal({
        pokedexNumber: 0,
        name: '',
        generationNumber: 0,
        Forms: [],
        Types: [],
      })
    })
  })
})
