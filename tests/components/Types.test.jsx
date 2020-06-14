import React from 'react'
import { expect } from 'chai'
import { describe, it } from 'mocha'
import { shallow } from 'enzyme'

import Types from '../../components/Types'

describe('Components - Types', () => {
  it('displays multiple divs containg the types passed to the component as an array.', () => {
    const wrapper = shallow(<Types
      typesList={
        [{ id: 1, name: 'Fire' }, { id: 2, name: 'Ghost' }]
      }
    />)

    const typeNameList = wrapper.find('Types__TypeName')

    expect(wrapper.find('Types__TypeUl').text()).to.equal('Types:')
    expect(typeNameList.at(0).text()).to.equal('Fire')
    expect(typeNameList.at(1).text()).to.equal('Ghost')
  })
})
