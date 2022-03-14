import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import { Link } from 'react-router-dom'

function Top5() {
  const [top5, setTop5] = useState([])
  const [nombreReponses, updateNombreReponses] = useState(0)
  const { games, gamesPlayed, updateGamesPlayed } = useContext(GameContext)

  const updateNombreAnswers = () => {
    updateGamesPlayed('Top 5', nombreReponses, updateNombreReponses)
  }
  useEffect(() => {
    fetch(`http://localhost:3001/api/top5`)
      .then((response) => response.json())
      .then((requestData) => {
        setTop5(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      {console.log("Nombre réponses" ,nombreReponses)}
      <h1>Le top 5 </h1>
      <Score team={'team1'} value={5} />
      {top5.map((top5) => (
        <p key={top5._id}>
          {top5.theme} {top5.suggestions}
        </p>
      ))}{' '}
      <Score team={'team2'} value={5} />
      <div style={{ width: 50, height: 50 }}>
        {nombreReponses < 1 ? (
          <button onClick={() => updateNombreAnswers()}>Valider</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Top 5') + 1]}`}
            onClick={() => updateNombreAnswers()}
          >
            Valider
          </Link>
        )}
      </div>
    </div>
  )
}

export default Top5
