import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import Theme from '../../../components/Theme'

import HasGameStarted from '../../../utils/functions/hasGameStarted'

import {
  ContainerSuggestions,
  ContainerTimer,
  Timer,
  SuggestionsText,
  ContainerTheme,
  ThemeText,
  SecondContainer,
  ContainerButton,
  Text,
  ContainerTeam,
  ContainerTeamSelection,
  ContinuerContainer,
} from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'
import { TextBlue } from '../../../utils/styles/Text'
import '../../../utils/animations/Bouncing/top5BouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

function Top5() {
  const [top5, setTop5] = useState()
  const [teamAnswering, setTeamAnswering] = useState()
  const [startCounter, setStartCount] = useState(false)
  const [counter, setCounter] = useState(2000)
  const [answerGiven, setAnswerGiven] = useState(0)
  const [trialNumber, setTrialNumber] = useState(0)
  const [nombreReponses, updateNombreReponses] = useState(0)
  const { games, updateGamesPlayed } = useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  const updateNombreAnswers = () => {
    setTop5()
    if (trialNumber === 0)
      if (teamAnswering === team1) setTeamAnswering(team2)
      else setTeamAnswering(team1)
    setStartCount(false)
    setCounter(20)
    setAnswerGiven(0)
    setTrialNumber(0)
    updateGamesPlayed('Top 5', nombreReponses, updateNombreReponses)
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
      <ContainerColumn>
        <ContainerRow>
          {top5 && teamAnswering && startCounter ? (
            <div>
              {counter > 0 && answerGiven < 5 ? (
                <ContainerColumn>
                  <ContainerTimer>
                    <Timer>
                      00:{counter < 10 ? '0' : null}
                      {counter}
                    </Timer>
                  </ContainerTimer>
                  <ContainerColumn style={{ marginTop: '2%' }}>
                    <Text>{teamAnswering}, à vous de jouer !</Text>
                    <Text>Nombre de bonne réponses : {answerGiven}</Text>
                  </ContainerColumn>
                  <ContainerColumn style={{ marginTop: '2%' }}>
                    <ContainerRow style={{ justifyContent: '', width: '20%' }}>
                      <ContainerButton
                        onClick={() => setAnswerGiven(answerGiven - 1)}
                      >
                        <Text style={{ color: 'white' }}>-1</Text>
                      </ContainerButton>
                      <ContainerButton
                        onClick={() => setAnswerGiven(answerGiven + 1)}
                      >
                        <Text style={{ color: 'white' }}>+1</Text>
                      </ContainerButton>
                    </ContainerRow>
                  </ContainerColumn>
                  <ContainerTheme style={{ marginTop: '4%' }}>
                    <ThemeText>{top5.theme}</ThemeText>
                  </ContainerTheme>
                  <ContainerSuggestions>
                    <ContainerColumn>
                      <SuggestionsText>{top5.suggestions}...</SuggestionsText>
                    </ContainerColumn>
                  </ContainerSuggestions>
                </ContainerColumn>
              ) : (
                <ContainerRow>
                  <ContainerColumn style={{marginTop:'16%'}}>
                    {answerGiven >= 5 ? (
                      <ContainerTeamSelection style={{ marginBottom: '5%' }}>
                        <TextBlue>Félicitations {teamAnswering}</TextBlue>
                        <ContainerTeam
                          className="Button"
                          onClick={() => updateScore(15, teamAnswering)}
                        >
                          <Text style={{ color: 'white', fontSize: 16 }}>
                            +15 points pour {teamAnswering}
                          </Text>
                        </ContainerTeam>
                      </ContainerTeamSelection>
                    ) : (
                      <Text>Aucune des deux équipes ne gagne de points..</Text>
                    )}

                    {nombreReponses < 1 ? (
                      <ContinuerContainer onClick={() => updateNombreAnswers()}>
                        Manche suivante
                      </ContinuerContainer>
                    ) : (
                      <ContinuerContainer>
                        <Link
                          style={{ textDecoration: 'none', color: 'white' }}
                          to={`/${games[games.indexOf('Top 5') + 1]}/?game=${
                            games[games.indexOf('Top 5') + 1]
                          }`}
                          onClick={() => updateNombreAnswers()}
                        >
                          Continuer vers <br />
                          {games[games.indexOf('Top 5') + 1]}
                        </Link>
                      </ContinuerContainer>
                    )}
                  </ContainerColumn>
                </ContainerRow>
              )}
            </div>
          ) : (
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
                      <Text style={{ color: 'white', fontSize: 18 }}>
                        {team1}
                      </Text>
                    </ContainerTeam>
                    <ContainerTeam
                      isSelected={teamAnswering === team2}
                      onClick={() => setTeamAnswering(team2)}
                    >
                      <Text style={{ color: 'white', fontSize: 18 }}>
                        {team2}
                      </Text>
                    </ContainerTeam>
                  </ContainerRow>
                </ContainerTeamSelection>

                {/*Changer le boutton dessous*/}
                <ContainerTeam
                  style={{ marginTop: '6%' }}
                  onClick={() => startGame()}
                >
                  <Text style={{ color: 'white' }}>Commencer la manche</Text>
                </ContainerTeam>
              </ContainerColumn>
            </ContainerRow>
          )}
        </ContainerRow>
      </ContainerColumn>
    </ContainerRow>
  )
}
export default Top5
