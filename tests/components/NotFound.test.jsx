import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import NotFound from '../../components/NotFound'

describe('Components - NotFound', () => {
  it('displays a message to the screen when there\'s nothing found for a searched pokemon.', () => {
    const wrapper = shallow(<NotFound message="Looks like there's nothing here." />)

    expect(wrapper.find('NotFound__Message').text()).to.equal('Looks like there\'s nothing here.')
  })
})
