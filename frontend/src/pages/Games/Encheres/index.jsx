import { useState, useContext, useEffect } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import Theme from '../../../components/Theme'
import Timer from '../../../components/Timer'
import ContainerAnswer from '../../../components/ContainerAnswer'
import ContainerThemeSuggestion from '../../../components/ContainerThemeSuggestion'

import {
  ButtonScore,
  ContainerScore,
  Text,
  ContainerTeam,
  ContainerTeamSelection,
  ContinuerContainer,
} from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'
import { TextBlue } from '../../../utils/styles/Text'
import '../../../utils/animations/Bouncing/enchereBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'
import { ContainerColumn45, ContinueContainer } from '../3PetitsChats/styles'
import TeamSelection from '../../../components/TeamSelection'

function Enchere() {
  const [enchere, setEncheres] = useState()
  const [points, setPoints] = useState()
  const [teamAnswering, setTeamAnswering] = useState()
  const [startCounter, setStartCount] = useState(false)
  const [counter, setCounter] = useState(60)
  const [answerGiven, setAnswerGiven] = useState(0)
  const [answerNumber, updateAnswerNumber] = useState(0)
  const { updateGamesPlayed, games } = useContext(GameContext)
  const { team1, team2, updateScore } = useContext(TeamContext)

  useEffect(() => {
    if (startCounter === true) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
      return () => clearInterval(timer)
    }
  }, [counter, startCounter])

  function selectTheme(theme) {
    if (theme === enchere) setEncheres()
    else setEncheres(theme)
  }

  const updateAnswer = () => {
    updateGamesPlayed('Les enchères', answerNumber, updateAnswerNumber)
  }

  function startGame() {
    if (enchere && teamAnswering && points) setStartCount(true)
  }

  return (
    <ContainerRow style={{ marginBottom: '2%' }}>
      <ContainerColumn>
        <ContainerRow>
          {enchere && points && teamAnswering && startCounter ? (
            <div>
              {counter > 0 && answerGiven < points ? (
                <ContainerColumn style={{ marginTop: '1%' }}>
                  <Timer counter={counter} />
                  <ContainerRow style={{ width: '50%', marginTop: '8%' }}>
                    <ContainerAnswer
                      teamAnswering={teamAnswering}
                      answerGiven={answerGiven}
                      setAnswerGiven={setAnswerGiven}
                      answerNumberToGive={points}
                    />
                  </ContainerRow>
                  <ContainerThemeSuggestion
                    theme={enchere.theme}
                    suggestions={enchere.suggestions}
                  />
                </ContainerColumn>
              ) : (
                <ContainerColumn style={{ marginTop: '16%' }}>
                  {answerGiven >= points ? (
                    <ContainerTeamSelection
                      style={{ marginBottom: '6%', marginTop: '30%' }}
                    >
                      <TextBlue>Félicitations {teamAnswering}</TextBlue>
                      <ContainerTeam
                        style={{ width: '80%' }}
                        onClick={() => updateScore(points, teamAnswering)}
                      >
                        <Text style={{ color: 'white', fontSize: 16 }}>
                          +{points} points pour {teamAnswering}
                        </Text>
                      </ContainerTeam>
                    </ContainerTeamSelection>
                  ) : (
                    <ContainerTeamSelection>
                      <TextBlue>Dommage {teamAnswering}</TextBlue>
                      <ContainerTeam
                        style={{ width: '80%' }}
                        onClick={() =>
                          updateScore(
                            points,
                            teamAnswering === team1 ? team2 : team1
                          )
                        }
                      >
                        <Text style={{ color: 'white', fontSize: 16 }}>
                          +{points} points pour{' '}
                          {teamAnswering === team1 ? team2 : team1}
                        </Text>
                      </ContainerTeam>
                    </ContainerTeamSelection>
                  )}

                  <ContinuerContainer style={{ marginTop: '10%' }}>
                    <Link
                      style={{ textDecoration: 'none', color: 'white' }}
                      to={`/${games[games.indexOf('Les enchères') + 1]}?game=${
                        games[games.indexOf('Les enchères') + 1]
                      }`}
                      onClick={() => updateAnswer()}
                    >
                      Continuer vers le Rolland Gamos
                    </Link>
                  </ContinuerContainer>
                </ContainerColumn>
              )}
            </div>
          ) : (
            <ContainerRow>
              <Theme
                page="enchere"
                selectTheme={selectTheme}
                chosenTheme={enchere}
              />
              <ContainerColumn45>
                <TeamSelection
                  team1={team1}
                  team2={team2}
                  teamAnswering={teamAnswering}
                  setTeamAnswering={setTeamAnswering}
                  game={'Enchères'}
                />
                <ContainerTeamSelection>
                  <ContainerColumn>
                    <TextBlue>Combien de réponses ?</TextBlue>
                    <ContainerScore style={{ marginTop: '1%' }}>
                      <ButtonScore
                        type="number"
                        onChange={(e) => setPoints(e.target.value)}
                      />
                    </ContainerScore>
                  </ContainerColumn>
                </ContainerTeamSelection>
                <ContinueContainer
                  style={{ marginTop: '1%' }}
                  onClick={() => startGame()}
                >
                  Commencer la manche
                </ContinueContainer>
              </ContainerColumn45>
            </ContainerRow>
          )}
        </ContainerRow>
      </ContainerColumn>
    </ContainerRow>
  )
}

export default Enchere
