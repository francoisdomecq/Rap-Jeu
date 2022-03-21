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

function GameCard({ label, rules, manches }) {
  const { games, selectGames } = useContext(GameContext)

  function clickGameCard(label) {
    selectGames(label)
  }

  return (
    <CardWrapper
      isFavorite={games.includes(label) ? true : false}
      onClick={() => clickGameCard(label)}
    >
      <CardTitleWrapper>
        <CardTitle>{label}</CardTitle>
      </CardTitleWrapper>
      <CardRulesWrapper>
        <CardRules>
          <CardRound>{manches}</CardRound>
          {rules}
        </CardRules>
      </CardRulesWrapper>
    </CardWrapper>
  )
}

export default GameCard
