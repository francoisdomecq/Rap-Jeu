import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GameContext } from '../../utils/context'

const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #001c39;
  color: white;
`
const LinkText = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: #ffd222;
  }
`

function Header() {
  const { games, hasGameStarted } = useContext(GameContext)

  return (
    <NavContainer>
      {console.log(hasGameStarted)}
      {hasGameStarted ? (
        games
          .slice(0)
          .reverse()
          .map((item) => <LinkText to={`/${item}`} key={item}>{item}</LinkText>)
      ) : (
        <LinkText to="/">Accueil</LinkText>
      )}
    </NavContainer>
  )
}

export default Header
