import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import { generateRandomNumber } from '../../../utils/functions/random'
import HasGameStarted from '../../../utils/functions/hasGameStarted'
import {
  Text,
  ContainerQuestion,
  ContainerAnswer,
  ButtonAnswer,
} from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'
import '../../../utils/animations/Bouncing/rapGenieOuGenantBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'
import { LoaderWrapper, Loader } from '../../../utils/styles/Atoms'
import Redbull from '../../../assets/PNG/redbull.png'

function RapGenieOuGenant() {
  const [isDataLoading, setDataLoading] = useState(true)
  const [questionData, setData] = useState([])
  const [teamAnswering, setTeamAnswering] = useState()
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [answerGiven, setAnswerGiven] = useState(null)
  const { games, updateGamesPlayed } = useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

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
    setAnswerGiven(null)
    if (teamAnswering === team1) setTeamAnswering(team2)
    else setTeamAnswering(team1)
  }

  function answer(answer) {
    setAnswerGiven(answer)
    if (
      (answer === true &&
        questionData[answerNumber].reponse.includes('Rap génie')) ||
      (answer === false &&
        questionData[answerNumber].reponse.includes('Rap gênant'))
    ) {
      updateScore(5, teamAnswering)
    }
  }

  useEffect(() => {
    fetch(`http://localhost:3001/api/rapgenieougenant`)
      .then((response) => response.json())
      .then((requestData) => {
        const [n1, n2, n3, n4] = generateRandomNumber(requestData.length - 1)
        console.log(n1, n2, n3, n4)
        console.log(requestData[n1])
        console.log(requestData[n2])
        console.log(requestData[n3])
        console.log(requestData[n4])
        updateData(
          requestData[n1],
          requestData[n2],
          requestData[n3],
          requestData[n4]
        )
        setTeamAnswering(team1)
        setDataLoading(false)
      })
      .catch((error) => console.log(error))
  }, [])

  HasGameStarted()

  return isDataLoading ? (
    <LoaderWrapper>
      <Loader src={Redbull} />
    </LoaderWrapper>
  ) : (
    <ContainerRow>
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
      <ContainerColumn>
        <ContainerRow>
          <ContainerColumn style={{ marginTop: '2%' }}>
            <Text>{teamAnswering}</Text>
            {answerGiven === null ? (
              <ContainerRow style={{ width: '30%' }}>
                <ButtonAnswer onClick={() => answer(true)}>
                  <Text style={{ color: 'white' }}>Rap génie</Text>
                </ButtonAnswer>
                <ButtonAnswer onClick={() => answer(false)}>
                  <Text style={{ color: 'white' }}>Rap gênant</Text>
                </ButtonAnswer>
              </ContainerRow>
            ) : null}
            {answerGiven !== null ? (
              <ContainerColumn>
                <ContainerAnswer>
                  <ContainerRow style={{ width: '90%' }}>
                    <Text style={{ color: 'white' }}>
                      {questionData[answerNumber].reponse.includes(
                        'Rap génie'
                      ) ? (
                        <div style={{ textAlign: 'center' }}>
                          <p>Rap génie</p>
                          <Text style={{ fontSize: 16 }}>
                            {questionData[answerNumber].reponse.substring(
                              12,
                              questionData[answerNumber].reponse.length
                            )}
                          </Text>
                        </div>
                      ) : (
                        <div style={{ textAlign: 'center' }}>
                          <p>Rap gênant</p>
                          <Text style={{ fontSize: 16 }}>
                            {questionData[answerNumber].reponse.substring(
                              13,
                              questionData[answerNumber].reponse.length
                            )}
                          </Text>
                        </div>
                      )}
                    </Text>
                  </ContainerRow>
                </ContainerAnswer>
                {questionData[answerNumber].type === 'video' ? (
                  <iframe
                    width="560"
                    height="315"
                    src={questionData[answerNumber].illustration}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : questionData[answerNumber].type === 'image' ? (
                  <img src={questionData[answerNumber].illustration} alt="" />
                ) : (
                  <a
                    rel="noreferrer"
                    href={questionData[answerNumber].illustration}
                    target="_blank"
                  >
                    {questionData[answerNumber].illustration}
                  </a>
                )}
              </ContainerColumn>
            ) : null}
          </ContainerColumn>
        </ContainerRow>
      </ContainerColumn>
      <ContainerColumn>
        {answerNumber < 3 ? (
          <button onClick={() => updateAnswer()}>Question suivante</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Rap génie ou rap gênant') + 1]}?game=${
              games[games.indexOf('Rap génie ou rap gênant') + 1]
            }`}
            onClick={() => updateAnswer()}
          >
            Passer au jeu suivant
          </Link>
        )}
      </ContainerColumn>
      <ContainerQuestion>
        <ContainerRow style={{ width: '85%', textAlign: 'center' }}>
          <Text style={{ color: 'white', fontSize: '1.4em' }}>
            {questionData[answerNumber].question}
          </Text>
        </ContainerRow>
      </ContainerQuestion>
    </ContainerRow>
  )
}

export default RapGenieOuGenant
