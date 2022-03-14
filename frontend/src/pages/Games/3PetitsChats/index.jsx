import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import RappeurArray from '../../../components/Rappers'

function PetitsChats() {
  const [nombreReponses, updateNombreReponses] = useState(0)
  const [rappeur, setRappeurs] = useState('')
  const { updateGamesPlayed } = useContext(GameContext)

  const updateNombreAnswers = () => {
    updateGamesPlayed(
      'Les 3 petits chats',
      nombreReponses,
      updateNombreReponses
    )
  }

  return (
    <div>
      <h1>Les 3 petits chats</h1>
      <Score team="team1" value={10} />
      <RappeurArray />

      <Score team="team2" value={10} />
      <button onClick={() => updateNombreAnswers()} />
    </div>
  )
}

export default PetitsChats
