import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'

function CrossFeaturing() {
  const [nombreReponses, updateNombreReponses] = useState(0)
  const [crossFeaturingData, setData] = useState([])
  const { updateGamesPlayed } = useContext(GameContext)

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
      <button onClick={() => updateNombreAnswers()} />
    </div>
  )
}

export default CrossFeaturing
