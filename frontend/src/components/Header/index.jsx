import styled from 'styled-components'

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001c39;
`

function Header() {
  const hasGameStarted = false
  return <NavContainer>{hasGameStarted ? <p>Accueil</p> :<p>Jeu 1 Jeu 2 Enchères Rolland Gamos</p>}</NavContainer>
}

export default Header
