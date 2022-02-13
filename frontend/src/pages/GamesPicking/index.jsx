import { Link } from 'react-router-dom'
import { useContext } from 'react'
import GameCard from '../../components/GameCard'
import Logo from '../../assets/logo_youtube.svg'
import { GameContext } from '../../utils/context'

function Games() {
  const {startGame} = useContext(GameContext)

  return (
    <div>
      <h1>Sélection des jeux</h1>
      {/* <button
        name="top 5"
        onClick={() => selectGames("top 5")}
      />
      <button
        name="chien"
        onClick={() => selectGames("chien")}
      /> */}
      <div>
        <GameCard label={'Top 5'} title="top 5" picture={Logo} />
        <GameCard label={'Rapjeu'} title="rap jeu" picture={Logo} />
        <GameCard label={'Maison'} title="Argh" picture={Logo} />
      </div>
      <Link to="/game"  onClick={() => startGame()}>Commencer la partie</Link>
    </div>
  )
}

export default Games
