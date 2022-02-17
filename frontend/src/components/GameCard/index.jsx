import { useState, useContext } from 'react'
import { GameContext } from '../../utils/context'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:10px;
  padding-bottom: 20px;
  margin-top: 20px;
  background-color: #001c39;
  border-radius: 30px;
  width: 350px;
  opacity: ${({ isFavorite }) => (isFavorite ? '0.4' : '1')};
  &:hover {
    cursor: pointer;
    opacity: ${({ isFavorite }) => (isFavorite ? '0.2' : '0.9')};
  }
`

const CardTitleWrapper = styled.div`
  background-color: #db0a40;
  width: 320px;
  padding:5px;
  border-radius: 20px;
  text-align: center;
  margin-top: 10px;
`
const CardTitle = styled.span`
  color: white;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`

const CardRulesWrapper = styled.div`
  background-color: #ffd222;
  font-size: 22px;
  width: 320px;
  align-items: center;
  border-radius: 30px;
  padding: 10px;
  margin-top: 20px;
`

const CardRules = styled.span`
  color: black;
  font-size: 16px;
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
