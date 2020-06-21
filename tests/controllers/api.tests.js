/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const {
  after, afterEach, before, beforeEach, describe, it,
} = require('mocha')
const models = require('../../models')
const { getAllForms, getFormById } = require('../../controllers/Forms.js')
const { getAllTypes, getTypeById } = require('../../controllers/Types.js')

const {
  pokemonList,
  singlePokemonWithAltForm,
  newPokemon,
  formsList,
  singleAltFormWithPokemon,
  unprotectedPokemon,
  protectedPokemon,
} = require('../mocks/pokemonData')

const {
  getAllPokemon,
  getPokemonById,
  getPokemonByGenerationId,
  saveNewPokemon,
  deletePokemon,
} = require('../../controllers/Pokemons.js')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - API', () => {
  let sandbox
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatusDotSend
  let stubbedStatus

  let stubbedPokemonsDestroy
  let stubbedPokemonsFindAll
  let stubbedPokemonsFindOne
  let stubbedPokemonsFindOrCreate

  let stubbedFormsFindAll
  let stubbedFormsFindOne

  let stubbedTypesFindAll
  let stubbedTypesFindOne
  let stubbedTypesFindOrCreate

  let stubbedPokemonTypesDestroy
  let stubbedPokemonTypesFindOrCreate

  before(() => {
    sandbox = sinon.createSandbox()
    stubbedPokemonsDestroy = sandbox.stub(models.Pokemons, 'destroy')
    stubbedPokemonsFindAll = sandbox.stub(models.Pokemons, 'findAll')
    stubbedPokemonsFindOne = sandbox.stub(models.Pokemons, 'findOne')
    stubbedPokemonsFindOrCreate = sandbox.stub(models.Pokemons, 'findOrCreate')

    stubbedFormsFindAll = sandbox.stub(models.Forms, 'findAll')
    stubbedFormsFindOne = sandbox.stub(models.Forms, 'findOne')

    stubbedTypesFindAll = sandbox.stub(models.Types, 'findAll')
    stubbedTypesFindOne = sandbox.stub(models.Types, 'findOne')
    stubbedTypesFindOrCreate = sandbox.stub(models.Types, 'findOrCreate')

    stubbedPokemonTypesDestroy = sandbox.stub(models.PokemonTypes, 'destroy')
    stubbedPokemonTypesFindOrCreate = sandbox.stub(models.PokemonTypes, 'findOrCreate')

    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatusDotSend = sandbox.stub()
    stubbedStatus = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusDotSend })
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('Controller - Pokemons', () => {
    describe('getAllPokemon', () => {
      it('retrieves a list of all pokemon.', async () => {
        stubbedPokemonsFindAll.returns(pokemonList)

        await getAllPokemon({}, response)

        expect(stubbedPokemonsFindAll).to.have.been.calledWith()
        expect(stubbedSend).to.have.been.calledWith(pokemonList)
      })

      it('returns a 500 error with a message when the database call throws an error.', async () => {
        stubbedPokemonsFindAll.throws('ERROR!')

        await getAllPokemon({}, response)

        expect(stubbedStatus).to.have.been.calledWith(500)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Could not retrieve all pokemon, please try again.')
      })
    })

    describe('getPokemonById', () => {
      it('retrieves the pokemon associated with the id passed by the user with the pokemon\'s alternate form and types and responds with a 200 status and sends the list of pokemon back.', async () => {
        stubbedPokemonsFindOne.returns(singlePokemonWithAltForm)
        const request = { params: { name: 'Grimer' } }

        await getPokemonById(request, response)

        expect(stubbedPokemonsFindOne).to.be.calledWith({
          where: { name: request.params.name },
          include: [{ model: models.Forms }, { model: models.Types }],
        })
        expect(stubbedStatus).to.have.been.calledWith(200)
        expect(stubbedStatusDotSend).to.have.been.calledWith(singlePokemonWithAltForm)
      })

      it('returns a 404 status with a message when no pokemon is found matching the id provided by the user.', async () => {
        stubbedPokemonsFindOne.returns(null)
        const request = { params: { name: 'ratata' } }

        await getPokemonById(request, response)

        expect(stubbedPokemonsFindOne).to.be.calledWith({
          where: { name: request.params.name },
          include: [{ model: models.Forms }, { model: models.Types }],
        })
        expect(stubbedStatus).to.have.been.calledWith(404)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Could not find the pokemon ratata.')
      })

      it('returns a 500 status with a message when the database call throws an error.', async () => {
        stubbedPokemonsFindOne.throws('ERROR!')

        await getPokemonById({}, response)

        expect(stubbedStatus).to.have.been.calledWith(500)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Could not retrieve the pokemon, please try again.')
      })
    })

    describe('getPokemonByGenerationId', () => {
      it('retrieves all the pokemon in a generation provided by the user specified id.', async () => {
        stubbedPokemonsFindAll.returns(pokemonList)

        const request = { params: { id: '1' } }

        await getPokemonByGenerationId(request, response)

        expect(stubbedPokemonsFindAll).to.have.been.calledWith({ where: { generationNumber: request.params.id } })
        expect(stubbedSend).to.have.been.calledWith(pokemonList)
      })

      it('returns a 404 error when a user searches for a generation that does not exist in the database.', async () => {
        stubbedPokemonsFindAll.returns('')
        const request = { params: { id: 4 } }

        await getPokemonByGenerationId(request, response)

        expect(stubbedPokemonsFindAll).to.be.calledWith({ where: { generationNumber: request.params.id } })
        expect(stubbedStatus).to.have.been.calledWith(404)
        expect(stubbedStatusDotSend).to.have.been.calledWith(`No generation ${request.params.id} pokemon currently exists.`)
      })

      it('returns a 500 status with a message when the database call throws an error.', async () => {
        stubbedPokemonsFindAll.throws('ERROR!')

        await getPokemonByGenerationId({}, response)

        expect(stubbedStatus).to.have.been.calledWith(500)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Could not retrieve the pokemon by the sepcified generation, please try again.')
      })
    })

    describe('saveNewPokemon', () => {
      it('either finds a pokemon matching the name provided or creates a new pokemon based on the id input by user.', async () => {
        stubbedPokemonsFindOrCreate.returns([newPokemon, false])
        stubbedTypesFindOrCreate.onCall(1).returns(7)
        stubbedTypesFindOrCreate.onCall(2).returns(8)
        stubbedPokemonTypesFindOrCreate.onCall(3).returns({ PokemonPokedexNumber: 154, typeId: 7 })
        stubbedPokemonTypesFindOrCreate.onCall(4).returns({ PokemonPokedexNumber: 154, typeId: 8 })

        const request = {
          body: {
            name: 'Leafeon',
            generationNumber: 1,
            fromId: 'null',
            types: ['Fire', 'Flying'],
          },
        }

        await saveNewPokemon(request, response)

        expect(stubbedStatus).to.have.been.calledWith(201)
        expect(stubbedStatusDotSend).to.have.been.calledWith(newPokemon)
      })

      it('returns a 400 status and a message when no pokemon is found matching the id provided by the user.', async () => {
        stubbedPokemonsFindOne.returns(null)
        const request = {
          body: {
            generationNumber: 1,
            fromId: 'null',
            types: ['Fire', 'Flying'],
          },
        }

        await saveNewPokemon(request, response)

        expect(stubbedStatus).to.have.been.calledWith(400)
        expect(stubbedStatusDotSend).to.have.been.calledWith('At least one of the following attributes is missing: pokedexNumber, name, or generationNumber')
      })

      it('returns a 500 status with a message when the database call throws an error.', async () => {
        stubbedPokemonsFindOne.throws('ERROR!')

        await saveNewPokemon({}, response)

        expect(stubbedStatus).to.have.been.calledWith(500)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Could not reach the database, please try again.')
      })
    })

    describe('deletePokemon', () => {
      it('deletes a user named pokemon from the database as long as its not protected.', async () => {
        stubbedPokemonsFindOne.returns(unprotectedPokemon)

        const request = { params: { name: 'Jolion' } }

        await deletePokemon(request, response)

        expect(stubbedPokemonTypesDestroy).to.have.calledWith({ where: { PokemonPokedexNumber: unprotectedPokemon.pokedexNumber } })
        expect(stubbedPokemonsDestroy).to.have.calledWith({ where: { name: request.params.name } })
        expect(stubbedSend).to.have.been.calledWith(`Successfully deleted the pokemon: ${request.params.name}.`)
      })

      it('returns a 404 status and a message when no pokemon is found matching the id provided by the user.', async () => {
        stubbedPokemonsFindOne.returns(null)

        const request = { params: { name: 'Fakemon' } }

        await deletePokemon(request, response)

        expect(stubbedPokemonsDestroy).to.have.callCount(0)
        expect(stubbedStatus).to.have.been.calledWith(404)
        expect(stubbedStatusDotSend).to.have.been.calledWith(`No pokemon matching the name: ${request.params.name}`)
      })

      it('returns a 409 status and a message when trying to delete a protected pokemon.', async () => {
        stubbedPokemonsFindOne.returns(protectedPokemon)

        const request = { params: { name: 'Fakemon' } }

        await deletePokemon(request, response)

        expect(stubbedPokemonsDestroy).to.have.callCount(0)
        expect(stubbedStatus).to.have.been.calledWith(409)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Cannot delete protected pokemon')
      })

      it('returns a 500 status with a message when the database call throws an error.', async () => {
        stubbedPokemonsFindOne.throws('ERROR!')

        await deletePokemon({}, response)

        expect(stubbedPokemonsDestroy).to.have.callCount(0)
        expect(stubbedStatus).to.have.been.calledWith(500)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Unknown error while deleting pokemon, please try again.')
      })
    })
  })

  describe('Controllers - Forms', () => {
    describe('getAllForms', () => {
      it('retrieves a list of all form names.', async () => {
        stubbedFormsFindAll.returns(formsList)

        await getAllForms({}, response)

        expect(stubbedFormsFindAll).to.have.been.calledWith()
        expect(stubbedSend).to.have.been.calledWith(formsList)
      })

      it('returns a 500 error with an error message when the database call throws an error.', async () => {
        stubbedFormsFindAll.throws('ERROR!')

        await getAllForms({}, response)

        expect(stubbedStatus).to.have.been.calledWith(500)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve all the  forms, please try again.')
      })
    })

    describe('getFormById', () => {
      it('retrieves a form and the associated pokemon to the form and responds with a 200 status and sends the list of pokemon back.', async () => {
        stubbedFormsFindOne.returns(singleAltFormWithPokemon)
        const request = { params: { name: 'alolan' } }

        await getFormById(request, response)

        expect(stubbedFormsFindOne).to.be.calledWith({
          where: { name: request.params.name },
          include: [{ model: models.Pokemons }],
        })
        expect(stubbedStatus).to.have.been.calledWith(200)
        expect(stubbedStatusDotSend).to.have.been.calledWith(singleAltFormWithPokemon)
      })

      it('returns a 404 status and a message when no form is found matching the id provided by the user.', async () => {
        stubbedFormsFindOne.returns(null)
        const request = { params: { name: 'pikachu' } }

        await getFormById(request, response)

        expect(stubbedFormsFindOne).to.be.calledWith({
          where: { name: request.params.name },
          include: [{ model: models.Pokemons }],
        })
        expect(stubbedStatus).to.have.been.calledWith(404)
        expect(stubbedStatusDotSend).to.have.been.calledWith('It appears there is no form called \'pikachu\' does not exist.')
      })

      it('returns a 500 status with a message when the database call throws an error.', async () => {
        stubbedFormsFindOne.throws('ERROR!')

        await getFormById({}, response)

        expect(stubbedStatus).to.have.been.calledWith(500)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve the  form, please try again.')
      })
    })
  })

  describe('Controllers - Types', () => {
    describe('getAllTypes', () => {
      it('retrieves a list of all types.', async () => {
        stubbedTypesFindAll.returns(pokemonList)

        await getAllTypes({}, response)

        expect(stubbedTypesFindAll).to.have.been.calledWith()
        expect(stubbedSend).to.have.been.calledWith(pokemonList)
      })

      it('returns a 500 error with an error message when the database call throws an error.', async () => {
        stubbedTypesFindAll.throws('ERROR!')

        await getAllTypes({}, response)

        expect(stubbedStatus).to.have.been.calledWith(500)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Could not retrieve all the types, please try again.')
      })
    })

    describe('getTypeById', () => {
      it('retrieves all the pokemon under a user specified type and responds with a 200 status and sends the list of pokemon back.', async () => {
        stubbedTypesFindOne.returns(singleAltFormWithPokemon)
        const request = { params: { name: 'alolan' } }

        await getTypeById(request, response)

        expect(stubbedTypesFindOne).to.be.calledWith({
          where: { name: request.params.name },
          include: [{ model: models.Pokemons }],
        })
        expect(stubbedStatus).to.have.been.calledWith(200)
        expect(stubbedStatusDotSend).to.have.been.calledWith(singleAltFormWithPokemon)
      })

      it('returns a 404 status and a message when no type is found matching the id provided by the user.', async () => {
        stubbedTypesFindOne.returns(null)
        const request = { params: { name: 'shadow' } }

        await getTypeById(request, response)

        expect(stubbedTypesFindOne).to.be.calledWith({
          where: { name: request.params.name },
          include: [{ model: models.Pokemons }],
        })
        expect(stubbedStatus).to.have.been.calledWith(404)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Could not find the type: shadow.')
      })

      it('returns a 500 status with a message when the database call throws an error.', async () => {
        stubbedTypesFindOne.throws('ERROR!')

        await getTypeById({}, response)

        expect(stubbedStatus).to.have.been.calledWith(500)
        expect(stubbedStatusDotSend).to.have.been.calledWith('Could not retrieve the specified type, please try again.')
      })
    })
  })
})
