import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import GoHome from '../../components/GoHome'

describe('Components - GoHome', () => {
  it('displays "<< Go Home" link to the screen to direct the user to the go back to the "/" path.', () => {
    const wrapper = shallow(<GoHome />)

    expect(wrapper.prop('to')).to.equal('/')
    expect(wrapper.text()).to.equal('<< Go Home')
  })
})
