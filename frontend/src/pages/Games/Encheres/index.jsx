import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import Score from '../../../components/Score'

function Enchere() {
  const [enchere, setEncheres] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/enchere`)
      .then((response) => response.json())
      .then((requestData) => {
        setEncheres(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>Lesc enchères</h1>
      <Score team={'team1'} value="--" />
      {enchere.map((enchere) => (
        <p key={enchere._id}>
          {enchere.theme} {enchere.suggestions}
        </p>
      ))}
      <Score team={'team2'} value="--" />
    </div>
  )
}

export default Enchere
