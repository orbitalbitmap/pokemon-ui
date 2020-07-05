import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  position: fixed;
  text-align: left;
  text-decoration: none;
  top: 100px;
  left: 30px;
  z-index: 10;

  &:hover {
    color: magenta;
  }
`

export default () => (
  <Link to="/">&lt;&lt; Go Back</Link>
)
