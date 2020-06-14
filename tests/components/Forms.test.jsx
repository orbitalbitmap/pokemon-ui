import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import Forms from '../../components/Forms'

describe('Components - Forms', () => {
  it('displays multiple divs containg the forms passed to the component as an array.', () => {
    const wrapper = shallow(<Forms
      formsList={
        [{ id: 1, name: 'Alolan' }, { id: 2, name: 'Alternative' }]
      }
    />)

    const formNameList = wrapper.find('Forms__FormName')

    expect(wrapper.find('Forms__FormUl').text()).to.equal('Forms:')
    expect(formNameList.at(0).text()).to.equal('Alolan')
    expect(formNameList.at(1).text()).to.equal('Alternative')
  })
})
