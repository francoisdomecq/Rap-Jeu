import { useContext } from 'react'
import { GameContext } from '../../utils/context'
import { Link } from 'react-router-dom'
import { NavContainer, PageText, PageTextBis, Logo } from './styles'
import RedbullLogo from '../../assets/PNG/redbull.png'
import useModal from '../../utils/modal/useModal'
import Modal from '../../utils/modal/modal'

function Header() {
  const { games, hasGameStarted, gamesPlayed } = useContext(GameContext)
  const { isShowing: isLoginFormShowed, toggle: toggleLoginForm } = useModal()
  const queryString = window.location.search;
 
  const urlParams = new URLSearchParams(queryString);
  const game=urlParams.get('game')
  return hasGameStarted ? (
    <NavContainer>
      {console.log(game)}
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
      <Logo src={RedbullLogo}  onClick={toggleLoginForm}  alt="logo"></Logo>
      <Modal isShowing={isLoginFormShowed} hide={toggleLoginForm} title="Login">
        <p>Maison</p>
      </Modal>
    </NavContainer>
  ) : (
    <NavContainer>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <PageTextBis>Accueil</PageTextBis>
      </Link>
    </NavContainer>
    
  )
}

export default Header
