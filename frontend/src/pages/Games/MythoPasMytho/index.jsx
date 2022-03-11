import { useState, useEffect } from 'react'
import { generateRandomNumber } from '../../../utils/functions/random'
import Score from '../../../components/Score'

function MythoPasMytho() {
  const [mythoPasMythoData, setData] = useState([])
  const [countQuestion, setCountQuestion] = useState(0)
  const [isDataLoaded, setDataLoad] = useState(false)

  const updateData = (value1, value2, value3, value4) => {
    let newData = [...mythoPasMythoData]
    newData.push(value1, value2, value3, value4)
    setData(newData)
  }

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
  const question = mythoPasMythoData[countQuestion]
  return isDataLoaded ? (
    <div>
      {console.log(question.question)}
      <h1>Le Mytho pas Mytho</h1>
      <Score team={'team1'} value={5}/>

      <p>{question.question}</p>
      <p>{question.reponse}</p>
      {question.type === 'video' ? (
        <iframe
          width="560"
          height="315"
          src={question.illustration}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : question.type === 'image' ? (
        <img src={question.illustration} alt="" />
      ) : (
        <a rel="noreferrer" href={question.illustration} target="_blank">
          {question.illustration}
        </a>
      )}

      <Score team={'team2'} value={5}/>
      <button onClick={() => setCountQuestion(countQuestion + 1)} />
    </div>
  ) : null
}

export default MythoPasMytho
