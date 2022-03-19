import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import { generateRandomNumber } from '../../../utils/functions/random'
import Score from '../../../components/Score'
import { Link } from 'react-router-dom'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

function MythoPasMytho() {
  const [mythoPasMythoData, setData] = useState([])
  const [nombreReponses, updateNombreReponses] = useState(0)
  const [isDataLoaded, setDataLoad] = useState(false)
  const { updateGamesPlayed, games } = useContext(GameContext)

  const updateData = (value1, value2, value3, value4) => {
    let newData = [...mythoPasMythoData]
    newData.push(value1, value2, value3, value4)
    setData(newData)
  }

  function updateNombreAnswers() {
    updateGamesPlayed(
      'Le Mytho Pas Mytho',
      nombreReponses,
      updateNombreReponses
    )
  }
  HasGameStarted()
  useEffect(() => {
    fetch(`http://localhost:3001/api/mythopasmytho`)
      .then((response) => response.json())
      .then((requestData) => {
        const [n1, n2, n3, n4] = generateRandomNumber(requestData.length)
        updateData(
          requestData[n1],
          requestData[n2],
          requestData[n3],
          requestData[n4]
        )
        setDataLoad(true)
      })
      .catch((error) => console.log(error))
  }, [])
  return isDataLoaded ? (
    <div>
      <h1>Le Mytho pas Mytho</h1>
      <Score team={'team1'} value={5} />
      <p>{mythoPasMythoData[nombreReponses].question}</p>
      <p>{mythoPasMythoData[nombreReponses].reponse}</p>
      {mythoPasMythoData[nombreReponses].type === 'video' ? (
        <iframe
          width="560"
          height="315"
          src={mythoPasMythoData[nombreReponses].illustration}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : mythoPasMythoData[nombreReponses].type === 'image' ? (
        <img src={mythoPasMythoData[nombreReponses].illustration} alt="" />
      ) : (
        <a
          rel="noreferrer"
          href={mythoPasMythoData[nombreReponses].illustration}
          target="_blank"
        >
          {mythoPasMythoData[nombreReponses].illustration}
        </a>
      )}

      <Score team={'team2'} value={5} placeHolder={5} />
      <div style={{ width: 50, height: 50 }}>
        {nombreReponses < 3 ? (
          <button onClick={() => updateNombreAnswers()}>Valider</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Le Mytho Pas Mytho') + 1]}`}
            onClick={() => updateNombreAnswers()}
          >
            Valider
          </Link>
        )}
      </div>
    </div>
  ) : null
}

export default MythoPasMytho
