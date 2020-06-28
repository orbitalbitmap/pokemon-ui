import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  text-align: center;
`
const TitleBar = styled.div`
  background-color: #404040;
  
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  box-shadow: 0px 1px 4px black;
`

export default () => (
  <TitleBar>
    <Title>Welcome to the world of Pokemon!</Title>
  </TitleBar>
)
