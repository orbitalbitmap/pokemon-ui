import React from 'react'
import chai, { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'
import { stub } from 'sinon'
import SinonChai from 'sinon-chai'

import SearchBox from '../../components/SearchBox'

chai.use(SinonChai)

describe('Components - SearchBox', () => {
  it('displays an empty search box to the screen.', () => {
    const wrapper = shallow(<SearchBox term="" setter={() => { }} />)

    expect(wrapper.prop('value')).to.equal('')
  })

  it('displays the search box with the value passed in.', () => {
    const wrapper = shallow(<SearchBox term="test" setter={() => { }} />)

    expect(wrapper.prop('value')).to.equal('test')
  })

  it('displays the an empty search box to the screen.', () => {
    const setter = stub()
    const wrapper = shallow(<SearchBox term="test" setter={setter} />)

    wrapper.simulate('change', { target: { value: 'passed' } })

    expect(setter).to.have.been.calledWith('passed')
  })
})
