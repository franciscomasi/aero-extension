import React from 'react'
import logo from '../images/aero.png'
import styled from 'styled-components'

const Container = styled.header`
  align-items: center;
  border-bottom: 1px solid #cacaca;
  box-shadow: 0 0 2px 0 #cacaca;
  box-sizing: border-box;
  display: flex;
  height: 60px;
  justify-content: flex-start;
  padding: 10px;

  img {
    height: 50px;
  }
`

function Header() {
  return <Container>
    <img src={logo} alt="Logo Aero"/>
  </Container>
}

export default Header
