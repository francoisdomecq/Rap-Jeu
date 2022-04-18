import { useContext, useEffect } from 'react'
import { GameContext } from '../../utils/context'
import { Link } from 'react-router-dom'

import useModal from '../../utils/modal/useModal'
import Modal from '../../utils/modal/modal'

import { NavContainer, PageText, PageTextBis, Logo } from './styles'
import IconInformation from '../../assets/icons8-info.svg'

function Header() {
  const { games, gamesPlayed, setGames, setGamesPlayed } =
    useContext(GameContext)
  const { isShowing, toggle } = useModal()

  const localGames = JSON.parse(localStorage.getItem('games'))
  const localGamesPlayed = JSON.parse(localStorage.getItem('gamesPlayed'))

  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const game = urlParams.get('game')

  useEffect(() => {
    if (localGames && games[0] === 'Jeu 1' && game !== null) {
      setGames(localGames)
      if (localGamesPlayed !== null) setGamesPlayed(localGamesPlayed)
    }
  })

  return (
    <NavContainer>
      {console.log(game)}
      <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
        <PageText>Accueil</PageText>
      </Link>
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
      <Logo src={IconInformation} onClick={toggle} alt="logo"></Logo>
      <Modal isShowing={isShowing} hide={toggle} title={game}></Modal>
    </NavContainer>
  )
}

export default Header
