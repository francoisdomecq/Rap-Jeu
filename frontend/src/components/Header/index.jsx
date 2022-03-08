import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GameContext } from '../../utils/context'

const NavContainer = styled.nav`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2704c4;
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
  const { games, hasGameStarted, gamesPlayed } = useContext(GameContext)

  return hasGameStarted ? (
    <NavContainer>
      {gamesPlayed.includes(games[2]) ?(<p>{games[2]}</p>): (<LinkText to={`/${games[2]}`}>{games[2]}</LinkText>)}
      {gamesPlayed.includes(games[3]) ? (<p>{games[3]}</p>):(<LinkText to={`/${games[3]}`}>{games[3]}</LinkText>)}
      {gamesPlayed.includes(games[1]) ? (<p>{games[1]}</p>):(<LinkText to={`/${games[1]}`}>{games[1]}</LinkText>)}
      {gamesPlayed.includes(games[0]) ?(<p>{games[0]}</p>): (<LinkText to={`/${games[0]}`}>{games[0]}</LinkText>)}
    </NavContainer>
  ) : (
    <NavContainer>
      <LinkText to="/">Accueil</LinkText>
    </NavContainer>
  )
}

export default Header
