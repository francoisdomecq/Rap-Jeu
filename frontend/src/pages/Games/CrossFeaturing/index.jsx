import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'

function CrossFeaturing() {
  const [crossFeaturingData, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/crossfeaturing`)
      .then((response) => response.json())
      .then((requestData) => {
        setData(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>Lesc enchères</h1>
      {crossFeaturingData.map((item) => (
        <p key={item._id}>{item.rappeur1} {item.rappeur2}</p>

      ))}
    </div>
  )
}

export default CrossFeaturing
