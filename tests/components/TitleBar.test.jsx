import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import TitleBar from '../../components/TitleBar'

describe('Components - TitleBar', () => {
  it('displays the titleBar to the screen.', () => {
    const wrapper = shallow(<TitleBar />)

    expect(wrapper.text()).to.equal('Welcome to the world of Pokemon!')
  })
})
