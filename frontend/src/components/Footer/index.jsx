import styled from 'styled-components'
import Logo from '../../assets/logo_youtube.svg'

const FooterContainer = styled.footer`
  background-color: #ffd222;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`
const FooterText = styled.p`
  color: white;
  font-size: 12px;
  text-align: center;
`

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
