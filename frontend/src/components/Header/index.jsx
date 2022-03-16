import { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GameContext } from '../../utils/context'
import { NavContainer, LinkText } from './styles'

function Header() {
  const { games, hasGameStarted, gamesPlayed } = useContext(GameContext)

  return hasGameStarted ? (
    <NavContainer>
      {gamesPlayed.length === 0 ? (
        <p style={{ color: 'red' }}>{games[0]}</p>
      ) : (
        <p>{games[0]}</p>
      )}
      {gamesPlayed.length === 1 ? (
        <p style={{ color: 'red' }}>{games[1]}</p>
      ) : (
        <p>{games[1]}</p>
      )}
      {gamesPlayed.length === 2 ? (
        <p style={{ color: 'red' }}>{games[2]}</p>
      ) : (
        <p>{games[2]}</p>
      )}
      {gamesPlayed.length === 3 ? (
        <p style={{ color: 'red' }}>{games[3]}</p>
      ) : (
        <p>{games[3]}</p>
      )}
    </NavContainer>
  ) : (
    <NavContainer>
      <LinkText to="/">Accueil</LinkText>
    </NavContainer>
  )
}

export default Header
