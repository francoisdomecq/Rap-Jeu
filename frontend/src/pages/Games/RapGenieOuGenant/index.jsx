import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import { generateRandomNumber } from '../../../utils/functions/random'
import Score from '../../../components/Score'

function RapGenieOuGenant() {
  const [questionData, setData] = useState([])
  const { updateGamesPlayed } = useContext(GameContext)
  const [nombreReponses, updateNombreReponses] = useState(0)

  const updateData = (value1, value2, value3, value4) => {
    let newData = [...questionData]
    newData.push(value1, value2, value3, value4)
    setData(newData)
  }

  const updateNombreAnswers = () => {
    updateGamesPlayed(
      'Rap génie ou rap gênant',
      nombreReponses,
      updateNombreReponses
    )
  }
  useEffect(() => {
    fetch(`http://localhost:3001/api/rapgenieougenant`)
      .then((response) => response.json())
      .then((requestData) => {
        console.log(requestData)
        // const [n1, n2, n3, n4] = generateRandomNumber(requestData.length)
        // updateData(requestData[n1],requestData[n2],requestData[n3],requestData[n4])
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div>
      <h1>Rap génie ou gênant</h1>
      <Score team={'team1'} value={5} />
      {questionData.map((data) => (
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
      <Score team={'team2'} value={5} />
      <button onClick={() => updateNombreAnswers()} />
    </div>
  )
}

export default RapGenieOuGenant
