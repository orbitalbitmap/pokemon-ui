import React from 'react'
import styled from 'styled-components'

const Message = styled.div`
  font-size: 20px;
  margin: 10px;
  text-align: center;
`

export default ({ message }) => (
  <Message>{message}</Message>
)
