import Logo from '../../assets/logo_youtube.svg'
import { FooterContainer, FooterText } from './styles'

function Footer() {
  return (
    <FooterContainer>
      <FooterText>
        Jeu crée par François Domecq
        <a
          href="https://youtube.com/playlist?list=PLLkvlAQ5R3l8zLZWcwcjkMQ1pU4BQlAcp"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Logo} alt="Logo" />
        </a>
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
