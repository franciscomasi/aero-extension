import React from 'react'
import styled from 'styled-components'

const Container = styled.footer`
  align-items: center;
  box-sizing: border-box;
  color: #454848;
  display: flex;
  height: 40px;
  justify-content: flex-end;
  padding: 10px;
`

function Footer() {
  return <Container>
    <span>v0.0.1</span>
  </Container>
}

export default Footer
