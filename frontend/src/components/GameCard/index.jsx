import { useState, useContext } from 'react'
import { GameContext } from '../../utils/context'
import styled from 'styled-components'



const CardLabel = styled.span`
  color: white;
  font-size: 22px;
  font-weight: normal;
  padding-left: 15px;
`

const CardTitle = styled.div`
  color: ${({ theme }) => (theme === 'light' ? '#000000' : '#ffffff')};
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  height: 25px;
  display: flex;
  align-items: center;
`

const CardImage = styled.img`
  height: 150px;
  width: 150px;
  align-self: center;
  border-radius: 50%;
`

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: black;
  border-radius: 30px;
  width: 300px;
  height: 300px;
  &:hover {
    cursor: pointer;
  }
`

function GameCard({ label, title, picture }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const {games,selectGames} = useContext(GameContext)
  const star = isFavorite ? '⭐️' : ''

 function clickGameCard(label){
    setIsFavorite(!isFavorite)
    selectGames(label)
  }

  console.log(games)
  return (
    <CardWrapper  onClick={() => clickGameCard(label)}>
      <CardLabel >{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle >
        {star} {title} {star}
      </CardTitle>
    </CardWrapper>
  )
}


export default GameCard
