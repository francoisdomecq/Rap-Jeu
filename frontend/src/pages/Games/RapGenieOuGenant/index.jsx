import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'

function RapGenieOuGenant() {
  const [data, setData] = useState([])
  const { updateGamesPlayed } = useContext(GameContext)

  useEffect(() => {
    fetch(`http://localhost:3001/api/rapgenieougenant`)
      .then((response) => response.json())
      .then((requestData) => {
        setData(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>Rap génie ou gênant</h1>
      {data.map((data) => (
        <div>
          <p>{data.question}</p>
          <p>{data.reponse}</p>
          {data.type === 'video' ? (
            <iframe
              width="560"
              height="315"
              src={data.illustration}
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          ) : null}
        </div>
      ))}
    </div>
  )
}

export default RapGenieOuGenant
