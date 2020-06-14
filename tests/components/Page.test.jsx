import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import Page from '../../components/Page'

describe('Components - Page', () => {
  it('displays the children of the Page component.', () => {
    const wrapper = shallow(<Page><div>This is a test.</div></Page>)

    expect(wrapper.find('div')).to.have.length(1)
    expect(wrapper.find('div').text()).to.equal('This is a test.')
  })
})
