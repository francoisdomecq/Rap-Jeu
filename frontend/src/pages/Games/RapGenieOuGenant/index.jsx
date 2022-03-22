import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import { generateRandomNumber } from '../../../utils/functions/random'
import Score from '../../../components/Score'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

import { Container, FirstContainer } from '../../../utils/styles/balises'
import '../../../utils/animations/Bouncing/rapGenieOuGenantBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

function RapGenieOuGenant() {
  const [questionData, setData] = useState([])
  const { games, updateGamesPlayed } = useContext(GameContext)
  const [answerNumber, updateAnswerNumber] = useState(0)

  const updateData = (value1, value2, value3, value4) => {
    let newData = [...questionData]
    newData.push(value1, value2, value3, value4)
    setData(newData)
  }

  const updateAnswer = () => {
    updateGamesPlayed(
      'Rap génie ou rap gênant',
      answerNumber,
      updateAnswerNumber
    )
    setData()
  }
  useEffect(() => {
    fetch(`http://localhost:3001/api/rapgenieougenant`)
      .then((response) => response.json())
      .then((requestData) => {
        console.log(requestData)
        const [n1, n2, n3, n4] = generateRandomNumber(requestData.length)
        updateData(
          requestData[n1],
          requestData[n2],
          requestData[n3],
          requestData[n4]
        )
      })
      .catch((error) => console.log(error))
  }, [])

  HasGameStarted()

  return (
    <FirstContainer>
      <div className="bouncing-text">
        <div className="r-rgog">r</div>
        <div className="a-rgog">a</div>
        <div className="p-rgog">p</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div className="g-rgog">g</div>
        <div className="e-rgog">e</div>
        <div className="n-rgog">n</div>
        <div className="i-rgog">i</div>
        <div className="e1-rgog">e</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div className="o-rgog">o</div>
        <div className="u-rgog">u</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div className="g1-rgog">g</div>
        <div className="e2-rgog">e</div>
        <div className="n1-rgog">n</div>
        <div className="a1-rgog">a</div>
        <div className="n2-rgog">n</div>
        <div className="t-rgog">t</div>
      </div>
      <Container>
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
      </Container>
      <div style={{ width: 50, height: 50 }}>
        {answerNumber < 3 ? (
          <button onClick={() => updateAnswer()}>Valider</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Rap génie ou rap gênant') + 1]}`}
            onClick={() => updateAnswer()}
          >
            Passer au jeu suivant
          </Link>
        )}
      </div>
    </FirstContainer>
  )
}

export default RapGenieOuGenant
