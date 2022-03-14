import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import {Link} from 'react-router-dom'

function CrossFeaturing() {
  const [nombreReponses, updateNombreReponses] = useState(0)
  const [crossFeaturingData, setData] = useState([])
  const { games,updateGamesPlayed } = useContext(GameContext)

  useEffect(() => {
    fetch(`http://localhost:3001/api/crossfeaturing`)
      .then((response) => response.json())
      .then((requestData) => {
        setData(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  const updateNombreAnswers = () => {
    updateGamesPlayed('Le CrossFeaturing', nombreReponses, updateNombreReponses)
  }

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
        {nombreReponses < 2 ? (
          <button onClick={() => updateNombreAnswers()}>Valider</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Le CrossFeaturing') + 1]}`}
            onClick={() => updateNombreAnswers()}
          >
            Valider
          </Link>
        )}
      </div>
    </div>
  )
}

export default CrossFeaturing
