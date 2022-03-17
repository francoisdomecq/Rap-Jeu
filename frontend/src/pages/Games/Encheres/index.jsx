import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'
import { Link } from 'react-router-dom'

function Enchere() {
  const [enchere, setEncheres] = useState([])
  const [nombreReponses, updateNombreReponses] = useState(0)
  const { updateGamesPlayed, games } = useContext(GameContext)

  useEffect(() => {
    fetch(`http://localhost:3001/api/enchere`)
      .then((response) => response.json())
      .then((requestData) => {
        setEncheres(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  const updateNombreAnswers = () => {
    updateGamesPlayed('Les enchères', nombreReponses, updateNombreReponses)
  }

  return (
    <div>
      {/* Choisir le thème et choisir le nombre de points
      Valider, lance le chrono
      Chrono fini, l'équipe a t-elle réussi ?  */}
      <h1>Lesc enchères</h1>
      <Score team={'team1'} value="--" />
      {enchere.map((enchere) => (
        <p key={enchere._id}>
          {enchere.theme} {enchere.suggestions}
        </p>
      ))}
      <Score team={'team2'} value="--" />
      <div style={{ width: 50, height: 50 }}>
        <Link
          to={`/${games[games.indexOf('Les enchères') + 1]}`}
          onClick={() => updateNombreAnswers()}
        >
          Valider
        </Link>
      </div>
    </div>
  )
}

export default Enchere
