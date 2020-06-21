import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import Title from '../../components/Title'

describe('Components - Title', () => {
  it('displays the title to the screen.', () => {
    const wrapper = shallow(<Title />)

    expect(wrapper.text()).to.equal('Welcome to the world of Pokemon!')
  })
})
