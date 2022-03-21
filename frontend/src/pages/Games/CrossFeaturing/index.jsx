import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import { Link } from 'react-router-dom'
import HasGameStarted from '../../../utils/functions/hasGameStarted'
import CrossFeaturingArray from '../../../components/CrossFeaturing'
function CrossFeaturing() {
  const [crossFeaturing, setCrossFeaturing] = useState()
  const [answerNumber, updateAnswerNumber] = useState(0)
  const { games, updateGamesPlayed } = useContext(GameContext)

  function selectCrossFeaturing(crossFeaturing) {
    setCrossFeaturing(crossFeaturing)
  }
  const updateAnswer = () => {
    updateGamesPlayed('Le CrossFeaturing', answerNumber, updateAnswerNumber)
  }
  // HasGameStarted()
  return (
    <div>
      {console.log(crossFeaturing)}
      <h1>CrossFeaturing</h1>
      <Score team={'team1'} value={5} />
      <CrossFeaturingArray selectCrossFeaturing={selectCrossFeaturing} />
      <Score team={'team2'} value={5} />
      <div style={{ width: 50, height: 50 }}>
        {answerNumber < 2 ? (
          <button onClick={() => updateAnswer()}>Valider</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Le CrossFeaturing') + 1]}`}
            onClick={() => updateAnswer()}
          >
            Valider
          </Link>
        )}
      </div>
    </div>
  )
}

export default CrossFeaturing
