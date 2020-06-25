/* eslint-disable max-len */
import { expect } from 'chai'
import { createSandbox } from 'sinon'
import {
  after, afterEach, before, describe, it,
} from 'mocha'
import * as PokemonDetailsActions from '../../actions/pokemonDetails'
import { fetchedPokemonDetails, retrievedPokemonDetails, unretrievedPokemonDetails } from '../mocks/pokemonData'
import * as pokemonDetails from '../../utils/pokemonDetails'

describe('Utils - PokemonDetails', () => {
  let sandbox
  let stubbedFetchPokemonDetails
  let stubbedRetrievePokemonDetails

  before(() => {
    sandbox = createSandbox()

    stubbedFetchPokemonDetails = sandbox.stub(PokemonDetailsActions, 'fetchPokemonDetails')
    stubbedRetrievePokemonDetails = sandbox.stub(pokemonDetails, 'retrievePokemonDetails')
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('getNameFromUrl', () => {
    it('returns the final portion of the URL from the location prop provided', () => {
      const name = pokemonDetails.getNameFromUrl({ pathname: '/pokemon/caterpie' })

      expect(name).to.equal('caterpie')
    })

    it('returns an empty string when there is no path name', () => {
      const id = pokemonDetails.getNameFromUrl({})

      expect(id).to.equal('')
    })
  })

  describe('retrievePokemonDetails', () => {
    it('returns the pokemon details from the API call', async () => {
      stubbedFetchPokemonDetails.returns(fetchedPokemonDetails)
      stubbedRetrievePokemonDetails.returns(retrievedPokemonDetails)

      const data = await pokemonDetails.retrievePokemonDetails({ pathname: '/pokemon/rex' })

      expect(data).to.deep.equal(retrievedPokemonDetails)
    })

    it('returns empty details when the path does not contain the correct pathing', async () => {
      stubbedFetchPokemonDetails.returns({})
      stubbedRetrievePokemonDetails.returns({
        pokedexNumber: 0,
        name: '',
        generationNumber: 0,
        primaryType: '',
        Forms: [],
        Types: [],
      })

      const data = await pokemonDetails.retrievePokemonDetails({ pathname: '/no/a/pokemon' })

      expect(data).to.deep.equal(unretrievedPokemonDetails)
    })

    it('returns empty details when the action returns bad data', async () => {
      stubbedFetchPokemonDetails.returns({})
      stubbedRetrievePokemonDetails.returns(unretrievedPokemonDetails)

      const data = await pokemonDetails.retrievePokemonDetails({ pathname: '/pok/fakemon' })

      expect(data).to.deep.equal(unretrievedPokemonDetails)
    })
  })
})
