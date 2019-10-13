import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import LogoGitlab from '../images/gitlab.png'
import LogoJira from '../images/jira.png'
import LogoScout from '../images/scout.png'
import LogoSlack from '../images/slack.png'
import LogoSentry from '../images/sentry.png'
import LogoGmail from '../images/gmail.png'
import LogoMandrill from '../images/mandrill.png'
import LogoAero from '../images/aero.png'

const LinkContainer = styled.a`
  align-items: center;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  height: 200px;
  min-width: 200px;
  justify-content: space-around;
  padding: 20px;
  text-decoration: none;
  transition: background-color 250ms linear;

  &:hover {
    background-color: #255dc4;
  }
`

const ImageContainer = styled.div`
  align-items: center;
  display: flex;
  height: 180px;
`

const Image = styled.img`
  max-height: 128px;
`

const Text = styled.span`
  color: #454848;
  font-size: 16px;
  text-transform: capitalize;

  ${LinkContainer}:hover & {
    color: #ffffff;
  }
`

function Link({ url, image }) {
  function loadImage(name) {
    switch (name) {
      case 'gitlab':
        return LogoGitlab
      case 'jira':
        return LogoJira
      case 'scout':
        return LogoScout
      case 'slack':
        return LogoSlack
      case 'sentry':
        return LogoSentry
      case 'gmail':
        return LogoGmail
      case 'mandrill':
        return LogoMandrill
      default:
        return LogoAero
    }
  }

  return <LinkContainer href={url}>
    <ImageContainer>
      <Image src={loadImage(image)} alt={`Imagen de link a ${image}`}/>
    </ImageContainer>
    <Text>{image}</Text>
  </LinkContainer>
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Link
