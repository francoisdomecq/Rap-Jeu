import { useContext } from 'react'
import { GameContext } from '../../utils/context'
import { NavContainer, LinkText, PageText, PageTextBis } from './styles'

function Header() {
  const { games, hasGameStarted, gamesPlayed } = useContext(GameContext)

  return hasGameStarted ? (
    <NavContainer>
      {gamesPlayed.length === 0 ? (
        <PageTextBis>{games[0]}</PageTextBis>
      ) : (
        <PageText>{games[0]}</PageText>
      )}
      {gamesPlayed.length === 1 ? (
        <PageTextBis>{games[1]}</PageTextBis>
      ) : (
        <PageText>{games[1]}</PageText>
      )}
      {gamesPlayed.length === 2 ? (
        <PageTextBis>{games[2]}</PageTextBis>
      ) : (
        <PageText>{games[2]}</PageText>
      )}
      {gamesPlayed.length === 3 ? (
        <PageTextBis>{games[3]}</PageTextBis>
      ) : (
        <PageText>{games[3]}</PageText>
      )}
    </NavContainer>
  ) : (
    <NavContainer>
      <LinkText to="/">Accueil</LinkText>
    </NavContainer>
  )
}

export default Header
