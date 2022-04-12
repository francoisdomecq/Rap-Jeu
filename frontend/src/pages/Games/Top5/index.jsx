import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import Theme from '../../../components/Theme'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

import {
  ContainerRow,
  ContainerColumn,
  ContainerTimer,
  Timer,
  ContainerTheme,
  ContainerSuggestions,
  ContainerButton,
  ContainerTeam,
  ContainerTeamSelection,
  NextRoundButton,
  ContainerAnswer,
} from './styles'
import { TextBlue, TextWhite, TextBlack } from '../../../utils/styles/Text'
import '../../../utils/animations/Bouncing/top5BouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

function Top5() {
  const [top5, setTop5] = useState()
  const [teamAnswering, setTeamAnswering] = useState()
  const [answerGiven, setAnswerGiven] = useState(0)
  const [trialNumber, setTrialNumber] = useState(0)
  const [startCounter, setStartCount] = useState(false)
  const [counter, setCounter] = useState(20)
  const [round, updateRound] = useState(0)
  const { games, updateGamesPlayed } = useContext(GameContext)
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

  HasGameStarted()
  return (
    <ContainerRow style={{ marginBottom: '2%' }}>
      <div className="bouncing-text">
        <div className="t-top5">t</div>
        <div className="o-top5">o</div>
        <div className="p-top5">p</div>
        <div style={{ color: 'transparent' }}>..</div>
        <div className="five-top5">5</div>
      </div>
      {startCounter ? (
        counter > 0 && answerGiven < 5 ? (
          <ContainerColumn style={{ marginTop: '1%' }}>
            <ContainerTimer>
              <Timer>
                00:{counter < 10 ? '0' : null}
                {counter}
              </Timer>
            </ContainerTimer>
            <ContainerAnswer>
              <TextBlue>
                {teamAnswering}, à vous de jouer !<br />
                <TextBlack size={12}>
                  {counter <= 10 && trialNumber === 0
                    ? teamAnswering === team1
                      ? `${team2} préparez-vous, vous reprenez la main dans ${counter} secondes !`
                      : `${team1} préparez-vous, vous reprenez la main dans ${counter} secondes !`
                    : null}
                </TextBlack>
                <br />
                Nombre de bonnes réponses : {answerGiven}
              </TextBlue>
              <ContainerRow style={{ width: '70%' }}>
                <ContainerButton
                  onClick={() => setAnswerGiven(answerGiven - 1)}
                >
                  <TextWhite>-1</TextWhite>
                </ContainerButton>
                <ContainerButton
                  onClick={() => setAnswerGiven(answerGiven + 1)}
                >
                  <TextWhite>+1</TextWhite>
                </ContainerButton>
              </ContainerRow>
            </ContainerAnswer>
            <ContainerTheme style={{ marginTop: '4%' }}>
              <TextWhite size={20}>{top5.theme}</TextWhite>
            </ContainerTheme>
            <ContainerSuggestions>
              <ContainerColumn>
                <TextBlack size={14}>{top5.suggestions}...</TextBlack>
              </ContainerColumn>
            </ContainerSuggestions>
          </ContainerColumn>
        ) : (
          <ContainerColumn>
            {answerGiven >= 5 ? (
              <ContainerAnswer
                style={{ marginBottom: '5%', marginTop: '5%', width: '30%' }}
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
              </ContainerAnswer>
            ) : (
              <ContainerAnswer
                style={{ marginBottom: '6%', marginTop: '7%', width: '30%' }}
              >
                <TextBlue size={20}>
                  Aucune des deux équipes ne gagne de points..
                </TextBlue>
              </ContainerAnswer>
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
              <ContainerTeamSelection>
                <TextBlue>Choisir l'équipe qui répond</TextBlue>
                <ContainerRow>
                  <ContainerTeam
                    isSelected={teamAnswering === team1}
                    onClick={() => setTeamAnswering(team1)}
                  >
                    <TextWhite size={18}>{team1}</TextWhite>
                  </ContainerTeam>
                  <ContainerTeam
                    isSelected={teamAnswering === team2}
                    onClick={() => setTeamAnswering(team2)}
                  >
                    <TextWhite size={18}>{team2}</TextWhite>
                  </ContainerTeam>
                </ContainerRow>
              </ContainerTeamSelection>
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
