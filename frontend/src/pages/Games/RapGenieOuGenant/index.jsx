import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import { generateRandomNumber } from '../../../utils/functions/random'
import TeamSelection from '../../../components/TeamSelection'
import ContainerThemeSuggestion from '../../../components/ContainerThemeSuggestion'
import {
  Wrapper,
  ContainerAnswer,
  ButtonAnswer,
  ContinuerContainer,
  ContainerColumnGlobal,
  ContainerRowAnswer,
  ContainerColumnAnswer,
  TextAnswer,
  Iframe,
  Image,
  TextLink,
  TextButton,
  ContainerImage,
} from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'
import { LoaderWrapper, Loader } from '../../../utils/styles/Atoms'
import Redbull from '../../../assets/PNG/redbull.png'

function RapGenieOuGenant() {
  const [isDataLoading, setDataLoading] = useState(true)
  const [questionData, setData] = useState([])
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [answerGiven, setAnswerGiven] = useState(null)
  const { games, updateGamesPlayed, teamAnswering, setTeamAnswering } =
    useContext(GameContext)
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
    fetch(`https://rapjeu-backend.herokuapp.com/api/rapgenieougenant`)
      .then((response) => response.json())
      .then((requestData) => {
        const [n1, n2, n3, n4] = generateRandomNumber(requestData.length - 1)
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
        <ContainerRow style={{ width: '30%' }}>
          <TeamSelection
            team1={team1}
            team2={team2}
            teamAnswering={teamAnswering}
            setTeamAnswering={setTeamAnswering}
            game={'Rap génie ou gênant'}
          />
        </ContainerRow>
      )}

      <ContainerColumnGlobal>
        {answerGiven === null && teamAnswering ? (
          <ContainerRowAnswer>
            <ButtonAnswer onClick={() => answer(true)}>
              <TextButton>Rap génie</TextButton>
            </ButtonAnswer>
            <ButtonAnswer onClick={() => answer(false)}>
              <TextButton>Rap gênant</TextButton>
            </ButtonAnswer>
          </ContainerRowAnswer>
        ) : null}

        {answerGiven !== null ? (
          <ContainerColumnAnswer>
            <ContainerAnswer>
              <TextAnswer>{questionData[answerNumber].reponse}</TextAnswer>
            </ContainerAnswer>
            <ContainerRow>
              {questionData[answerNumber].type === 'video' ? (
                <Iframe
                  src={questionData[answerNumber].illustration}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></Iframe>
              ) : questionData[answerNumber].type === 'image' ? (
                <ContainerImage>
                  <Image src={questionData[answerNumber].illustration} alt="" />
                </ContainerImage>
              ) : (
                <a
                  rel="noreferrer"
                  href={questionData[answerNumber].illustration}
                  target="_blank"
                >
                  {questionData[answerNumber].illustration}
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
                        games[games.indexOf('Rap génie ou rap gênant') + 1]
                      }?game=${
                        games[games.indexOf('Rap génie ou rap gênant') + 1]
                      }`}
                      onClick={() => updateAnswer()}
                    >
                      <TextLink>
                        Continuer vers <br />{' '}
                        {games[games.indexOf('Rap génie ou gênant') + 1]}
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
            theme={questionData[answerNumber].question}
          />
        </ContainerColumn>
      ) : null}
    </Wrapper>
  )
}

export default RapGenieOuGenant
