import { expect } from 'chai'
import { createSandbox } from 'sinon'
import {
  after, afterEach, before, describe, it,
} from 'mocha'
import { pokemonList, filteredPokemonList } from '../mocks/pokemonData'
import { filterPokemon, retrievePokemon, getIdFromUrl } from '../../utils/pokemons'
import * as PokemonActions from '../../actions/pokemons'

describe('Utils - Pokemon', () => {
  let sandbox
  let stubbedFetchPokemon

  before(() => {
    sandbox = createSandbox()

    stubbedFetchPokemon = sandbox.stub(PokemonActions, 'fetchPokemon')
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('filterPokemon', () => {
    it('returns an array of matching pokemon', () => {
      const filtered = filterPokemon(pokemonList, 'cat')

      expect(filtered).to.deep.equal(filteredPokemonList)
    })
  })

  describe('retrievePokemon', () => {
    it('returns the data provided by the fetch action', async () => {
      stubbedFetchPokemon.returns(pokemonList)

      const data = await retrievePokemon()

      expect(data).to.deep.equal(pokemonList)
    })
  })

  describe('getIdFromUrl', () => {
    it('returns the final portion of the URL from the location prop provided', () => {
      const name = getIdFromUrl({ pathname: '/generation/3' })

      expect(name).to.equal('3')
    })

    it('returns zero when there is no path name', () => {
      const id = getIdFromUrl({})

      expect(id).to.equal(0)
    })
  })
})
