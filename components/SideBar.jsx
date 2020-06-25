import React from 'react'
import styled from 'styled-components'

const SideBar = styled.div`
  background-color: white;
  font-size: 20px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
`

const Generation = styled.div`
  
  margin: 16px;
`

export default () => (
  <SideBar>
    <Generation>Generation: 1</Generation>
    <Generation>Generation: 2</Generation>
    <Generation>Generation: 3</Generation>
    <Generation>Generation: 4</Generation>
    <Generation>Generation: 5</Generation>
    <Generation>Generation: 6</Generation>
    <Generation>Generation: 7</Generation>
    <Generation>Generation: 8</Generation>
  </SideBar>
)
