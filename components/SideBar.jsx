import React from 'react'
import styled from 'styled-components'

const SideBar = styled.div`
  background-color: #404040;
  color: white;
  font-size: 20px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
`

const Generation = styled.div`
  cursor: pointer;
  margin: 16px;


  &:first-child {
    margin-top: 150px;
  }

  &:hover {
    color: magenta;
  }
`

export default ({ setter }) => (
  <SideBar>
    <Generation onClick={() => setter(0)}>All Pokemon</Generation>
    <Generation onClick={() => setter(1)}>Generation: 1</Generation>
    <Generation onClick={() => setter(2)}>Generation: 2</Generation>
    <Generation onClick={() => setter(3)}>Generation: 3</Generation>
    <Generation onClick={() => setter(4)}>Generation: 4</Generation>
    <Generation onClick={() => setter(5)}>Generation: 5</Generation>
    <Generation onClick={() => setter(6)}>Generation: 6</Generation>
    <Generation onClick={() => setter(7)}>Generation: 7</Generation>
    <Generation onClick={() => setter(8)}>Generation: 8</Generation>
  </SideBar>
)
