import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { generateRandomNumber } from '../../../utils/functions/random'
import { Link } from 'react-router-dom'
import HasGameStarted from '../../../utils/functions/hasGameStarted'
import {
  Text,
  ContainerQuestion,
  ContainerAnswer,
  ButtonAnswer,
  ContinuerContainer,
} from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'
import '../../../utils/animations/Bouncing/mythoPasMythoBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'
import { LoaderWrapper, Loader } from '../../../utils/styles/Atoms'
import Redbull from '../../../assets/PNG/redbull.png'
function MythoPasMytho() {
  const [mythoPasMythoData, setData] = useState([])
  const [teamAnswering, setTeamAnswering] = useState()
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [answerGiven, setAnswerGiven] = useState(null)
  const [isDataLoading, setDataLoading] = useState(true)
  const { updateGamesPlayed, games } = useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  const updateData = (value1, value2, value3, value4) => {
    let newData = [...mythoPasMythoData]
    newData.push(value1, value2, value3, value4)
    setData(newData)
  }

  function updateAnswer() {
    updateGamesPlayed('Le Mytho Pas Mytho', answerNumber, updateAnswerNumber)
    setAnswerGiven(null)
    if (teamAnswering === team1) setTeamAnswering(team2)
    else setTeamAnswering(team1)
  }

  function answer(answer) {
    setAnswerGiven(answer)
    if (
      (answer === true &&
        mythoPasMythoData[answerNumber].reponse.includes('Pas mytho')) ||
      (answer === false &&
        !mythoPasMythoData[answerNumber].reponse.includes('Pas mytho'))
    ) {
      updateScore(5, teamAnswering)
    }
  }
  useEffect(() => {
    fetch(`http://localhost:3001/api/mythopasmytho`)
      .then((response) => response.json())
      .then((requestData) => {
        const [n1, n2, n3, n4] = generateRandomNumber(requestData.length - 1)
        updateData(
          requestData[n1],
          requestData[n2],
          requestData[n3],
          requestData[n4]
        )
        setDataLoading(false)
        setTeamAnswering(team1)
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
        <div className="m-mpm">m</div>
        <div className="y-mpm">y</div>
        <div className="t-mpm">t</div>
        <div className="h-mpm">h</div>
        <div className="o-mpm">o</div>
        <div style={{ color: 'transparent'}}>..</div>
        <div className="p-mpm">p</div>
        <div className="a-mpm">a</div>
        <div className="s-mpm">s</div>
        <div style={{ color: 'transparent'}}>..</div>
        <div className="m1-mpm">m</div>
        <div className="y1-mpm">y</div>
        <div className="t1-mpm">t</div>
        <div className="h1-mpm">h</div>
        <div className="o1-mpm">o</div>
      </div>
      <ContainerColumn>
        <ContainerColumn style={{ marginTop: '2%' }}>
          <Text>Equipe {teamAnswering}</Text>
          {answerGiven === null ? (
            <ContainerRow style={{ width: '30%' }}>
              <ButtonAnswer onClick={() => answer(true)}>
                <Text style={{ color: 'white' }}>Pas mytho</Text>
              </ButtonAnswer>
              <ButtonAnswer onClick={() => answer(false)}>
                <Text style={{ color: 'white' }}>Mytho</Text>
              </ButtonAnswer>
            </ContainerRow>
          ) : null}
          {answerGiven !== null ? (
            <ContainerColumn>
              <ContainerAnswer>
                <ContainerRow style={{ width: '90%' }}>
                  {mythoPasMythoData[answerNumber].reponse.includes(
                    'Pas mytho'
                  ) ? (
                    <div>
                      <Text>Pas Mytho</Text>
                      <Text style={{ fontSize: 16 }}>
                        {mythoPasMythoData[answerNumber].reponse.substring(
                          12,
                          mythoPasMythoData[answerNumber].reponse.length
                        )}
                      </Text>
                    </div>
                  ) : (
                    <div>
                      <Text>Mytho</Text>
                      <Text style={{ fontSize: 16 }}>
                        {mythoPasMythoData[answerNumber].reponse.substring(
                          8,
                          mythoPasMythoData[answerNumber].reponse.length
                        )}
                      </Text>
                    </div>
                  )}
                </ContainerRow>
              </ContainerAnswer>
              {mythoPasMythoData[answerNumber].type === 'video' ? (
                <iframe
                  width="560"
                  height="315"
                  src={mythoPasMythoData[answerNumber].illustration}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : mythoPasMythoData[answerNumber].type === 'image' ? (
                <img
                  src={mythoPasMythoData[answerNumber].illustration}
                  alt=""
                />
              ) : (
                <a
                  rel="noreferrer"
                  href={mythoPasMythoData[answerNumber].illustration}
                  target="_blank"
                >
                  {mythoPasMythoData[answerNumber].illustration}
                </a>
              )}
            </ContainerColumn>
          ) : null}
        </ContainerColumn>
      </ContainerColumn>
      <ContainerColumn>
        {answerGiven !== null ? (
          answerNumber < 3 ? (
            <ContinuerContainer onClick={() => updateAnswer()}>
              Question suivante
            </ContinuerContainer>
          ) : (
            <ContinuerContainer>
              <Link
                style={{ textDecoration: 'none', color: 'white' }}
                to={`/${games[games.indexOf('Le Mytho Pas Mytho') + 1]}?game=${
                  games[games.indexOf('Le Mytho Pas Mytho') + 1]
                }`}
                onClick={() => updateAnswer()}
              >
                Continuer vers <br />{' '}
                {games[games.indexOf('Le Mytho Pas Mytho') + 1]}
              </Link>
            </ContinuerContainer>
          )
        ) : null}
      </ContainerColumn>
      <ContainerQuestion>
        <ContainerRow style={{ width: '85%', textAlign: 'center' }}>
          <Text style={{ color: 'white', fontSize: '1.4em' }}>
            {mythoPasMythoData[answerNumber].question}
          </Text>
        </ContainerRow>
      </ContainerQuestion>
    </ContainerRow>
  )
}

export default MythoPasMytho
