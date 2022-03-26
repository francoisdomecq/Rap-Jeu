import { useState, useContext, useEffect } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import ScoreTeam1 from '../../../components/Score/index.scoreteam1'
import ScoreTeam2 from '../../../components/Score/index.scoreteam2'
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
} from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/balises'
import '../../../utils/animations/Bouncing/enchereBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

function Enchere() {
  const [enchere, setEncheres] = useState()
  const [points, setPoints] = useState()
  const [teamAnswering, setTeamAnswering] = useState()
  const [startCounter, setStartCount] = useState(false)
  const [counter, setCounter] = useState(60)
  const [answerGiven, setAnswerGiven] = useState(0)
  const [answerNumber, updateAnswerNumber] = useState(0)
  const { updateGamesPlayed, games } = useContext(GameContext)
  const { team1, team2 } = useContext(TeamContext)

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
    <ContainerRow>
      <div className="bouncing-text">
        <div className="l-enc">l</div>
        <div className="e-enc">e</div>
        <div className="s-enc">s</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
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
          <ScoreTeam1 value={points} />
          <ScoreTeam2 value={points} />
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
                  <ContainerColumn>
                    <Text>{teamAnswering}, à vous de jouer !</Text>
                    <Text>Nombre de bonne réponses : {answerGiven}</Text>
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

                  <ContainerTheme style={{ marginTop: '2%' }}>
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
                <ContainerColumn>
                  {answerGiven >= points ? (
                    <ContainerColumn>
                      <Text>Félicitations {teamAnswering}</Text>
                      <Text>
                        Tu peux accorder leurs points à l'équipe {teamAnswering}
                      </Text>
                    </ContainerColumn>
                  ) : (
                    <ContainerColumn>
                      <Text>Dommage {teamAnswering}</Text>
                      <Text>
                        Tu peux accorder leurs points à l'équipe{' '}
                        {teamAnswering === team1 ? team2 : team1}
                      </Text>
                    </ContainerColumn>
                  )}
                  <div style={{ width: 50, height: 50 }}>
                    <Link
                      to={`/${games[games.indexOf('Les enchères') + 1]}`}
                      onClick={() => updateAnswer()}
                    >
                      Valider
                    </Link>
                  </div>
                </ContainerColumn>
              )}
            </div>
          ) : (
            <SecondContainer>
              <Theme
                page="enchere"
                selectTheme={selectTheme}
                chosenTheme={enchere}
              />
              <ContainerColumn>
                <Text>Combien de réponses ?</Text>
                <ContainerScore>
                  <ButtonScore
                    type="number"
                    onChange={(e) => setPoints(e.target.value)}
                  />
                </ContainerScore>
              </ContainerColumn>
              <Text>Choisir l'équipe qui répond</Text>
              <ContainerRow>
                <ContainerTeam
                  isSelected={teamAnswering === team1}
                  onClick={() => setTeamAnswering(team1)}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>{team1}</Text>
                </ContainerTeam>
                <ContainerTeam
                  isSelected={teamAnswering === team2}
                  onClick={() => setTeamAnswering(team2)}
                >
                  <Text style={{ color: 'white', fontSize: 18 }}>{team2}</Text>
                </ContainerTeam>
              </ContainerRow>
              <button onClick={() => startGame()}>Commencer la manche</button>
            </SecondContainer>
          )}
        </ContainerRow>
      </ContainerColumn>
    </ContainerRow>
  )
}

export default Enchere
