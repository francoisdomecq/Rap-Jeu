import { useState, useContext } from 'react'
import { GameContext } from '../../utils/context'
import styled from 'styled-components'

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  margin-top: 20px;
  background-color: #001c39;
  border-radius: 30px;
  width: 350px;
  height: 350px;
  opacity: ${({ isFavorite }) => (isFavorite ? '0.4' : '1')};
  &:hover {
    cursor: pointer;
    opacity: ${({ isFavorite }) => (isFavorite ? '0.2' : '0.9')};
  }
`

const CardTitleWrapper = styled.div`
  background-color: #db0a40;
  width: 320px;
  height: 50px;
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

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

function GameCard({ label, title, picture }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { games, selectGames } = useContext(GameContext)

  function clickGameCard(label) {
    //Pour empêcher de modifier l'opacité d'une carte de jeu alors qu'on en a déjà 4 de sélectionnés
    if (games.length < 4) {
      setIsFavorite(!isFavorite)
    }
    //Dans le cas où l'on a 4 jeux sélectionnés, on veut pouvoir modifier l'opacité d'un jeu déjà sélectionné
    else if (games.length===4 && games.includes(label)){
      setIsFavorite(!isFavorite)
    }
    selectGames(label)
  }

  console.log(games)
  return (
    <CardWrapper isFavorite={isFavorite} onClick={() => clickGameCard(label)}>
      <CardTitleWrapper>
        <CardTitle>{label}</CardTitle>
      </CardTitleWrapper>
      <CardRulesWrapper>
        <CardRules>
          {console.log(isFavorite)}
          {title}
        </CardRules>
      </CardRulesWrapper>
    </CardWrapper>
  )
}

export default GameCard
