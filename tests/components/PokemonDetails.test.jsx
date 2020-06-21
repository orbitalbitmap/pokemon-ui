import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import PokemonDetails from '../../components/PokemonDetails'

describe('Components - PokemonDetails', () => {
  it('displays the Pokemon and some details about it.', () => {
    const wrapper = shallow(<PokemonDetails
      formsList={['Gender']}
      genNumber="1"
      pokemonId="300"
      pokemonName="Fakemon"
      typesList={['Fire', 'Ghost']}
    />)

    const divList = wrapper.find('div')

    expect(divList.at(0).text()).to.equal('#300: Fakemon')
    expect(divList.at(1).text()).to.equal('Generation: 1')
    expect(divList.at(2).children()).to.have.lengthOf(1)
    expect(divList.at(3).children()).to.have.lengthOf(1)
  })
})
