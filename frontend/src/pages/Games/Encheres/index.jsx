import { useState, useContext, useEffect } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import Theme from '../../../components/Theme'
import HasGameStarted from '../../../utils/functions/hasGameStarted'
import {
  SecondContainer,
  ButtonScore,
  ContainerScore,
  Text,
  ContainerTimer,
  Timer,
  ContainerTheme,
  ContainerSuggestions,
  ThemeText,
  SuggestionsText,
  ContainerButton,
  SuggestionsTextDiv,
  ContainerTeam,
  ContainerTeamSelection,
  ContinuerContainer,
} from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'
import { TextBlue } from '../../../utils/styles/Text'
import '../../../utils/animations/Bouncing/enchereBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'
import { ContainerColumn45, ContinueContainer } from '../3PetitsChats/styles'

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

  // HasGameStarted()
  return (
    <ContainerRow style={{ marginBottom: '2%' }}>
      <div className="bouncing-text">
        <div className="l-enc">l</div>
        <div className="e-enc">e</div>
        <div className="s-enc">s</div>
        <div style={{ color: 'transparent' }}>..</div>
        <div className="e1-enc">e</div>
        <div className="n-enc">n</div>
        <div className="c-enc">c</div>
        <div className="h-enc">h</div>
        <div className="e2-enc">è</div>
        <div className="r-enc">r</div>
        <div className="e3-enc">e</div>
        <div className="s1-enc">s</div>
      </div>
      <ContainerColumn>
        <ContainerRow>
          {enchere && points && teamAnswering && startCounter ? (
            <div>
              {counter > 0 && answerGiven < points ? (
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
                    <ContainerRow
                      style={{ justifyContent: 'between', width: '20%' }}
                    >
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
                    <ThemeText>{enchere.theme}</ThemeText>
                  </ContainerTheme>
                  <ContainerSuggestions>
                    <ContainerColumn>
                      <SuggestionsTextDiv>
                        <SuggestionsText>
                          {enchere.suggestions}...
                        </SuggestionsText>
                      </SuggestionsTextDiv>
                    </ContainerColumn>
                  </ContainerSuggestions>
                </ContainerColumn>
              ) : (
                <ContainerColumn style={{ marginTop: '16%' }}>
                  {answerGiven >= points ? (
                    <ContainerTeamSelection style={{ marginBottom: '5%' }}>
                      <TextBlue>Félicitations {teamAnswering}</TextBlue>
                      <ContainerTeam
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
                <ContainerTeamSelection>
                  <TextBlue>Choisir l'équipe qui répond</TextBlue>
                  <ContainerRow style={{ marginTop: '1%' }}>
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
