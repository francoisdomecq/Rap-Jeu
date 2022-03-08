import { useContext } from 'react'
import { GameContext } from '../../utils/context'
import styled from 'styled-components'
import colors from '../../utils/styles/colors'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:1%;
  padding-bottom: 2%;
  margin-top: 3%;
  width: 28%;
  border-radius: 30px;
  background-color: ${colors.blue};
  box-shadow: 12px 12px 2px 1px rgba(0, 0, 255, .6);
  opacity: ${({ isFavorite }) => (isFavorite ? '0.4' : '1')};
  &:hover {
    cursor: pointer;
    opacity: ${({ isFavorite }) => (isFavorite ? '0.2' : '0.9')};
  }
`

const CardTitleWrapper = styled.div`
  background: ${colors.red};
  box-shadow: 2px 5px 2px 1px black;
  width: 100%;
  padding:1%;
  border-radius: 20px;
  text-align: center;
  margin-top: 1%;
`
const CardTitle = styled.span`
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  text-transform:uppercase;
`

const CardRulesWrapper = styled.div`
  background: ${colors.yellow};
  box-shadow: 5px 5px 2px 1px black;
  font-size: 22px;
  width: 95%;
  align-items: center;
  border-radius: 30px;
  padding: 10px;
  margin-top: 20px;
`

const CardRules = styled.span`
  color: #2704C4;
  font-size: 16px;
  font-weight:bold;
  text-align: center;
`

function GameCard({ label, rules, picture }) {
  const { games, selectGames } = useContext(GameContext)

  function clickGameCard(label) {
    selectGames(label)
  }

  return (
    <CardWrapper isFavorite={games.includes(label) ? true:false} onClick={() => clickGameCard(label)}>
      <CardTitleWrapper>
        <CardTitle>{label}</CardTitle>
      </CardTitleWrapper>
      <CardRulesWrapper>
        <CardRules>
          {rules}
        </CardRules>
      </CardRulesWrapper>
    </CardWrapper>
  )
}

export default GameCard
