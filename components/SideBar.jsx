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

  box-shadow: 0px 1px 4px black;
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

export default ({ setter }) => {
  const updateGenList = (genNum) => {
    setter(genNum)
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }

  return (
    <SideBar>
      <Generation onClick={() => updateGenList(0)}>All Pokemon</Generation>
      <Generation onClick={() => updateGenList(1)}>Generation: 1</Generation>
      <Generation onClick={() => updateGenList(2)}>Generation: 2</Generation>
      <Generation onClick={() => updateGenList(3)}>Generation: 3</Generation>
      <Generation onClick={() => updateGenList(4)}>Generation: 4</Generation>
      <Generation onClick={() => updateGenList(5)}>Generation: 5</Generation>
      <Generation onClick={() => updateGenList(6)}>Generation: 6</Generation>
      <Generation onClick={() => updateGenList(7)}>Generation: 7</Generation>
      <Generation onClick={() => updateGenList(8)}>Generation: 8</Generation>
    </SideBar>
  )
}
