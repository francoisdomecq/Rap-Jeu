import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import RappeurArray from '../../../components/Rappers'
import {Link} from 'react-router-dom'

function PetitsChats() {
  const [nombreReponses, updateNombreReponses] = useState(0)
  const [rappeur, setRappeurs] = useState('')
  const {games, updateGamesPlayed } = useContext(GameContext)

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
      <div style={{ width: 50, height: 50 }}>
        {nombreReponses < 1 ? (
          <button onClick={() => updateNombreAnswers()}>Valider</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Les 3 petits chats') + 1]}`}
            onClick={() => updateNombreAnswers()}
          >
            Valider
          </Link>
        )}
      </div>
    </div>
  )
}

export default PetitsChats
