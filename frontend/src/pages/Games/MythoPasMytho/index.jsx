import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { generateRandomNumber } from '../../../utils/functions/random'
import { Link } from 'react-router-dom'

import TeamSelection from '../../../components/TeamSelection'
import ContainerThemeSuggestion from '../../../components/ContainerThemeSuggestion'
import {
  TextAnswer,
  TextButton,
  ContainerRowAnswer,
  ContainerAnswer,
  ButtonAnswer,
  ContinuerContainer,
  Iframe,
  Image,
  Wrapper,
  ContainerRowTeamAnswering,
  ContainerColumnGlobal,
  ContainerColumnAnswer,
  TextLink,
} from './styles'
import { TextBlue } from '../../../utils/styles/Text'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'

import { LoaderWrapper, Loader } from '../../../utils/styles/Atoms'
import Redbull from '../../../assets/PNG/redbull.png'
function MythoPasMytho() {
  const [mythoPasMythoData, setData] = useState([])
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [answerGiven, setAnswerGiven] = useState(null)
  const [isDataLoading, setDataLoading] = useState(true)
  const { updateGamesPlayed, games, teamAnswering, setTeamAnswering } =
    useContext(GameContext)
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
    fetch(`https://rapjeu-backend.herokuapp.com/api/mythopasmytho`)
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

  return isDataLoading ? (
    <Wrapper>
      <LoaderWrapper>
        <Loader src={Redbull} />
      </LoaderWrapper>
    </Wrapper>
  ) : (
    <Wrapper>
      {teamAnswering ? (
        ''
      ) : (
        <ContainerRowTeamAnswering>
          <TeamSelection
            team1={team1}
            team2={team2}
            teamAnswering={teamAnswering}
            setTeamAnswering={setTeamAnswering}
            game={'Mytho pas Mytho'}
          />
        </ContainerRowTeamAnswering>
      )}
      <ContainerColumnGlobal>
        {answerGiven === null && teamAnswering ? (
          <ContainerRowAnswer>
            <ButtonAnswer onClick={() => answer(true)}>
              <TextButton>Pas mytho</TextButton>
            </ButtonAnswer>
            <ButtonAnswer onClick={() => answer(false)}>
              <TextButton>Mytho</TextButton>
            </ButtonAnswer>
          </ContainerRowAnswer>
        ) : null}
        {answerGiven !== null ? (
          <ContainerColumnAnswer>
            <ContainerAnswer>
              <TextAnswer>{mythoPasMythoData[answerNumber].reponse}</TextAnswer>
            </ContainerAnswer>
            <ContainerRow>
              {mythoPasMythoData[answerNumber].type === 'video' ? (
                <Iframe
                  src={mythoPasMythoData[answerNumber].illustration}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></Iframe>
              ) : mythoPasMythoData[answerNumber].type === 'image' ? (
                <Image
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
            </ContainerRow>
            <ContainerColumn>
              {answerGiven !== null ? (
                answerNumber < 3 ? (
                  <ContinuerContainer onClick={() => updateAnswer()}>
                    <TextLink>Question suivante</TextLink>
                  </ContinuerContainer>
                ) : (
                  <ContinuerContainer>
                    <Link
                      style={{ textDecoration: 'none', color: 'white' }}
                      to={`/${
                        games[games.indexOf('Le Mytho Pas Mytho') + 1]
                      }?game=${games[games.indexOf('Le Mytho Pas Mytho') + 1]}`}
                      onClick={() => updateAnswer()}
                    >
                      <TextLink>
                        Continuer vers <br />{' '}
                        {games[games.indexOf('Le Mytho Pas Mytho') + 1]}
                      </TextLink>
                    </Link>
                  </ContinuerContainer>
                )
              ) : null}
            </ContainerColumn>
          </ContainerColumnAnswer>
        ) : null}
      </ContainerColumnGlobal>
      {teamAnswering ? (
        <ContainerColumn>
          <ContainerThemeSuggestion
            theme={mythoPasMythoData[answerNumber].question}
          />
        </ContainerColumn>
      ) : null}
    </Wrapper>
  )
}

export default MythoPasMytho
