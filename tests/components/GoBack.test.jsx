import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import GoBack from '../../components/GoBack'

describe('Components - GoBack', () => {
  it('displays "<< Go Back" link to the screen to direct the user to the go back to the "/" path.', () => {
    const wrapper = shallow(<GoBack path="/" />)

    expect(wrapper.prop('to')).to.equal('/')
    expect(wrapper.text()).to.equal('<< Go Back')
  })
})
