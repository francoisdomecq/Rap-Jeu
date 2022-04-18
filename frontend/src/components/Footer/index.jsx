import { FooterContainer, FooterText } from './styles'

function Footer() {
  return (
    <FooterContainer>
      {console.log(localStorage)}
      <FooterText>Jeu crée par François Domecq</FooterText>
      <FooterText>
        <a
          href="https://github.com/francoisdomecq/Rap-Jeu"
          rel="noreferrer"
          target="_blank"
        >
          Accéder au dépôt GitHub
        </a>{' '}
        <button onClick={() => localStorage.clear()} />          
      </FooterText>
    </FooterContainer>
  )
}

export default Footer
