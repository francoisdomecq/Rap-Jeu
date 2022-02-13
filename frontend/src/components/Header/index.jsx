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
`

function Header() {

  const { games, hasGameStarted } = useContext(GameContext)

  return (
    <NavContainer>
      {console.log(hasGameStarted)}
      {hasGameStarted ? (
        games.map((item)=>
        <p key={item}>{item}</p>)
      ) : (
        <Link to="/">Accueil</Link>
      )}
    </NavContainer>
  )
}

export default Header
