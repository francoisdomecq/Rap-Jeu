import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import Theme from '../../../components/Theme'
import TeamSelection from '../../../components/TeamSelection'
import Timer from '../../../components/Timer'
import ContainerAnswer from '../../../components/ContainerAnswer'
import ContainerThemeSuggestion from '../../../components/ContainerThemeSuggestion'

import {
  ContainerRow,
  ContainerColumn,
  ContainerTeam,
  NextRoundButton,
  Container,
} from './styles'

import { TextBlue, TextWhite } from '../../../utils/styles/Text'

function Top5() {
  const [top5, setTop5] = useState()
  const [answerGiven, setAnswerGiven] = useState(0)
  const [trialNumber, setTrialNumber] = useState(0)
  const [startCounter, setStartCount] = useState(false)
  const [counter, setCounter] = useState(20)
  const [round, updateRound] = useState(0)
  const { games, updateGamesPlayed, teamAnswering, setTeamAnswering } =
    useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  const updateAnswersNumber = () => {
    setTop5()
    if (trialNumber === 0)
      if (teamAnswering === team1) setTeamAnswering(team2)
      else setTeamAnswering(team1)
    setStartCount(false)
    setCounter(20)
    setAnswerGiven(0)
    setTrialNumber(0)
    updateGamesPlayed('Top 5', round, updateRound)
  }

  function selectTheme(theme) {
    if (theme === top5) setTop5()
    else setTop5(theme)
  }

  function startGame() {
    if (top5 && teamAnswering) setStartCount(true)
  }

  useEffect(()=>{
    setTeamAnswering('')
  },[])
  useEffect(() => {
    if (startCounter === true) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
      if (counter === 0 && answerGiven < 5 && trialNumber === 0) {
        if (teamAnswering === team1) setTeamAnswering(team2)
        else setTeamAnswering(team1)
        setCounter(10)
        setTrialNumber(1)
      }
      return () => clearInterval(timer)
    }
  }, [
    startCounter,
    counter,
    answerGiven,
    trialNumber,
    teamAnswering,
    team1,
    team2,
  ])

  return (
    <ContainerRow style={{ marginBottom: '2%' }}>
      {startCounter ? (
        counter > 0 && answerGiven < 5 ? (
          <ContainerColumn style={{ marginTop: '1%' }}>
            <Timer counter={counter} />
            <ContainerRow style={{ width: '40%', marginTop: '5%' }}>
              <ContainerAnswer
                team1={team1}
                team2={team2}
                teamAnswering={teamAnswering}
                counter={counter}
                answerGiven={answerGiven}
                setAnswerGiven={setAnswerGiven}
                trialNumber={trialNumber}
                answerNumberToGive={5}
              />
            </ContainerRow>
            <ContainerThemeSuggestion
              theme={top5.theme}
              suggestions={top5.suggestions}
            />
          </ContainerColumn>
        ) : (
          <ContainerColumn>
            {answerGiven >= 5 ? (
              <Container
                style={{ marginBottom: '5%', marginTop: '8%', width: '30%' }}
              >
                <TextBlue>Félicitations {teamAnswering}</TextBlue>
                <ContainerTeam
                  style={{ width: '60%' }}
                  className="Button"
                  onClick={() => updateScore(15, teamAnswering)}
                >
                  <TextWhite size={16}>
                    +15 points pour {teamAnswering}
                  </TextWhite>
                </ContainerTeam>
              </Container>
            ) : (
              <Container
                style={{ marginBottom: '6%', marginTop: '7%', width: '30%' }}
              >
                <TextBlue size={20}>
                  Aucune des deux équipes ne gagne de points..
                </TextBlue>
              </Container>
            )}
            {round < 1 ? (
              <NextRoundButton onClick={() => updateAnswersNumber()}>
                <TextWhite size={20}>Manche suivante</TextWhite>
              </NextRoundButton>
            ) : (
              <NextRoundButton>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={`/${games[games.indexOf('Top 5') + 1]}/?game=${
                    games[games.indexOf('Top 5') + 1]
                  }`}
                  onClick={() => updateAnswersNumber()}
                >
                  <TextWhite size={20}>
                    Continuer vers <br /> {games[games.indexOf('Top 5') + 1]}
                  </TextWhite>
                </Link>
              </NextRoundButton>
            )}
          </ContainerColumn>
        )
      ) : (
        <ContainerColumn>
          <ContainerRow>
            <Theme page="top5" selectTheme={selectTheme} chosenTheme={top5} />
            <ContainerColumn style={{ width: '40%' }}>
              <TeamSelection
                team1={team1}
                team2={team2}
                teamAnswering={teamAnswering}
                setTeamAnswering={setTeamAnswering}
                game={'Top 5'}
              />
              <NextRoundButton
                style={{ marginTop: '6%' }}
                onClick={() => startGame()}
              >
                <TextWhite size={20}> Commencer la manche</TextWhite>
              </NextRoundButton>
            </ContainerColumn>
          </ContainerRow>
        </ContainerColumn>
      )}
    </ContainerRow>
  )
}
export default Top5
