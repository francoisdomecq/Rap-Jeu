import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'

function MythoPasMytho() {
  const [mythoPasMythoData, setData] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3001/api/mythopasmytho`)
      .then((response) => response.json())
      .then((requestData) => {
        setData(requestData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>Lesc enchères</h1>

        {mythoPasMythoData.map((data) => (
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
              ) : <img src={data.illustration} alt=""/>}
            </div>))}

    </div>
  )
}

export default MythoPasMytho
