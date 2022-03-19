import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import { Link } from 'react-router-dom'
import HasGameStarted from '../../../utils/functions/hasGameStarted'
function CrossFeaturing() {
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [crossFeaturingData, setData] = useState([])
  const { games, updateGamesPlayed } = useContext(GameContext)

  useEffect(() => {
    fetch(`http://localhost:3001/api/crossfeaturing`)
      .then((response) => response.json())
      .then((requestData) => {
        setData(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  const updateAnswer = () => {
    updateGamesPlayed('Le CrossFeaturing', answerNumber, updateAnswerNumber)
  }
HasGameStarted()
  return (
    <div>
      <h1>CrossFeaturing</h1>
      <Score team={'team1'} value={5} />
      {crossFeaturingData.map((item) => (
        <p key={item._id}>
          {item.rappeur1} {item.rappeur2}
        </p>
      ))}
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
