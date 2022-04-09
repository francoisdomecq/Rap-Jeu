import { FooterContainer, FooterText } from './styles'

function Footer() {
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const game = urlParams.get('game')
  return (
    <FooterContainer>
      <FooterText>Jeu crée par François Domecq</FooterText>
      <FooterText>
        <a
          href="https://github.com/francoisdomecq/Rap-Jeu"
          rel="noreferrer"
          target="_blank"
        >
          Accéder au dépôt GitHub
        </a>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
