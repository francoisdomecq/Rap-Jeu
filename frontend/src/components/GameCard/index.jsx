import { useContext } from 'react'
import { GameContext } from '../../utils/context'
import {
  CardWrapper,
  CardTitleWrapper,
  CardTitle,
  CardRulesWrapper,
  CardRules,
  CardRound,
} from './styles'

//Ce composant correspond aux "cartes" de l'écran GamePicking sur lequel le joueur peut cliquer pour sélectionner un jeu
function GameCard({ label, rules, round }) {
  const { games, selectGames } = useContext(GameContext)

  //Cette fonction permet à un joueur de cliquer sur un jeu pour l'ajouter (ou l'enlever) des jeux choisis
  function clickGameCard(label) {
    selectGames(label)
  }

  return (
    <CardWrapper
      //La props isFavorite permet de modifier l'opacité de la carte si le jeu a été sélectionné.
      isFavorite={games.includes(label) ? true : false}
      onClick={() => clickGameCard(label)}
    >
      <CardTitleWrapper>
        <CardTitle>{label}</CardTitle>
      </CardTitleWrapper>
      <CardRulesWrapper>
        <CardRules>
          <CardRound>{round}</CardRound>
          {rules}
        </CardRules>
      </CardRulesWrapper>
    </CardWrapper>
  )
}

export default GameCard
