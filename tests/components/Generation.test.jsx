import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import Generation from '../../components/Generation'

describe('Components - Generation', () => {
  it('displays a generation number as a link', () => {
    const wrapper = shallow(<Generation id={1} />)
    const GenerationLink = wrapper.find('Generation__Link')

    expect(GenerationLink.prop('to')).to.equal('/generation/1')
    expect(GenerationLink.text()).to.equal('Generation: 1')
  })
})
