import { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { NavContainer, PageText, PageTextBis, Logo } from './styles'

import useModal from '../../utils/modal/useModal'
import Modal from '../../utils/modal/modal'
import { GameContext } from '../../utils/context'

import IconInformation from '../../assets/icons8-info.svg'

//Ce composant correspond au Header
function Header() {
  const { games, gamesPlayed, setGames, setGamesPlayed } =
    useContext(GameContext)
  const { isShowing, toggle } = useModal()

  //Ces variables permettent de récupérer les jeux sélectionnés et déjà complétés sur la machine de l'utilisateur
  const localGames = JSON.parse(localStorage.getItem('games'))
  const localGamesPlayed = JSON.parse(localStorage.getItem('gamesPlayed'))

  //Les lignes de code ci-dessous permettent de récupérer les paramètres de l'URL que l'on trouve après le '?game=...'
  //Cela permet de savoir sur quelle page l'utilisateur se trouve pour modifier l'affichage de la modal en cas de clic sur
  //Le bouton d'affichage de la modal
  const queryString = window.location.search
  const urlParams = new URLSearchParams(queryString)
  const game = urlParams.get('game')

  //Si jamais le jeu a été mis sur pause, ou que l'utilisateur refresh la page, cette fonction permet de
  //récupérer les jeux sélectionnées et complétés pour les réafficher dans le header
  useEffect(() => {
    if (localGames && games[0] === 'Jeu 1' && game !== null) {
      setGames(localGames)
      if (localGamesPlayed !== null) setGamesPlayed(localGamesPlayed)
    }
  })

  return (
    <NavContainer>
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
      {/*Si l'utilisateur se trouve sur une page de jeu, la variable game sera non null, alors il faut afficher le bouton pour ouvrir la modal*/}
      {game ? (
        <div>
          <Logo src={IconInformation} onClick={toggle} alt="logo"></Logo>
          <Modal isShowing={isShowing} hide={toggle} title={game}></Modal>{' '}
        </div>
      ) : null}
    </NavContainer>
  )
}

export default Header
