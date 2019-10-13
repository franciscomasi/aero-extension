import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import Link from './components/Link'

const AppContainer = styled.div`
  background-color: #ffffff;
`

const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  min-height: calc(100vh - 100px);
  justify-content: center;
  margin: 0 auto;
  width: 1280px;

  > * {
    margin: 0 40px;
  }
`

function App() {
  return (
    <AppContainer className="App">
      <Header />
      <Content>
        <Link url='https://mail.google.com/mail/u/0/#inbox' image='gmail' />
        <Link url='https://aero.atlassian.net' image='jira' />
        <Link url='https://git.aero.tur.ar/' image='gitlab' />
        <Link url='https://aero-la-plata.slack.com/' image='slack' />
        <Link url='https://sentry.production.aeroservices.com.ar/' image='sentry' />
        <Link url='https://scoutapm.com/users/sign_in/' image='scout' />
        <Link url='https://mandrillapp.com/activity/' image='mandrill' />
      </Content>
      <Footer />
    </AppContainer>
  )
}

export default App
