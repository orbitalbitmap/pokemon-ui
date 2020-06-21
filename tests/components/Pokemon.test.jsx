import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import Pokemon from '../../components/Pokemon'

describe('Components - Pokemon', () => {
  it('displays a pokemon\'s name as a link', () => {
    const wrapper = shallow(<Pokemon id={1} name="Eevee" />)
    const PokemonLink = wrapper.find('Pokemon__Link')

    expect(PokemonLink.prop('to')).to.equal('/pokemon/Eevee')
    expect(PokemonLink.text()).to.equal('Eevee')
  })
})
