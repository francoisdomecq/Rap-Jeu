import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import RapperArray from '../../../components/Rappers'
import { Link } from 'react-router-dom'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

function PetitsChats() {
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [rapper, setRapper] = useState('')
  const { games, updateGamesPlayed } = useContext(GameContext)

  function selectRapper(rapper) {
    setRapper(rapper)
  }
  function updateAnswer () {
    updateGamesPlayed('Les 3 petits chats', answerNumber, updateAnswerNumber)
    setRapper('')
  }

  HasGameStarted()
  return (
    <div>
      <h1>Les 3 petits chats</h1>
      <Score team="team1" value={10} />
      {rapper ? <p>{rapper}</p> : <RapperArray selectRapper={selectRapper} />}

      <Score team="team2" value={10} />
      <div style={{ width: 50, height: 50 }}>
        {answerNumber < 1 ? (
          <button onClick={() => updateAnswer()}>Valider</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Les 3 petits chats') + 1]}`}
            onClick={() => updateAnswer()}
          >
            Valider
          </Link>
        )}
      </div>
    </div>
  )
}

export default PetitsChats
