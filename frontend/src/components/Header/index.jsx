import { useContext } from 'react'
import { GameContext } from '../../utils/context'
import { NavContainer, LinkText } from './styles'

function Header() {
  const { games, hasGameStarted, gamesPlayed } = useContext(GameContext)

  return hasGameStarted ? (
    <NavContainer>
      {console.log(gamesPlayed)}
      {games.map((item) =>
        gamesPlayed.includes(item) ? (
          <p key={item}>{item}</p>
        ) : (
          <LinkText key={item} to={`/${item}`}>
            {item}
          </LinkText>
        )
      )}
      {/* {gamesPlayed.includes(games[2]) ? (
        <p>{games[2]}</p>
      ) : (
        <LinkText to={`/${games[2]}`}>{games[2]}</LinkText>
      )}
      {gamesPlayed.includes(games[3]) ? (
        <p>{games[3]}</p>
      ) : (
        <LinkText to={`/${games[3]}`}>{games[3]}</LinkText>
      )}
      {gamesPlayed.includes(games[1]) ? (
        <p>{games[1]}</p>
      ) : (
        <LinkText to={`/${games[1]}`}>{games[1]}</LinkText>
      )}
      {gamesPlayed.includes(games[0]) ? (
        <p>{games[0]}</p>
      ) : (
        <LinkText to={`/${games[0]}`}>{games[0]}</LinkText>
      )} */}
    </NavContainer>
  ) : (
    <NavContainer>
      <LinkText to="/">Accueil</LinkText>
    </NavContainer>
  )
}

export default Header
