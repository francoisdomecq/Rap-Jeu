import { useState, useContext, useEffect } from 'react'
import { GameContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import Score from '../../../components/Score'
import Theme from '../../../components/theme'
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
  ContainerStopTimer,
} from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/balises'
import '../../../utils/animations/Bouncing/enchereBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

function Enchere() {
  const [enchere, setEncheres] = useState()
  const [points, setPoints] = useState()
  const [startCounter, setStartCount] = useState(false)
  const [counter, setCounter] = useState(60)
  const [answerGiven, setAnswerGiven] = useState(0)
  const [answerNumber, updateAnswerNumber] = useState(0)
  const { updateGamesPlayed, games } = useContext(GameContext)

  useEffect(() => {
    if (startCounter === true) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000)
      return () => clearInterval(timer)
    }
  }, [counter, startCounter])

  function selectTheme(theme) {
    setEncheres(theme)
  }

  function endTimer() {
    setCounter(0)
  }
  const updateAnswer = () => {
    updateGamesPlayed('Les enchères', answerNumber, updateAnswerNumber)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setPoints(e.target.value)
      setStartCount(true)
    }
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
        {/* Choisir le thème et choisir le nombre de points
      Valider, lance le chrono
      Chrono fini, l'équipe a t-elle réussi ?  */}
        <ContainerRow>
          <Score team={'team1'} value={points} />
          {enchere && points ? (
            <div>
              {counter > 0 ? (
                <ContainerColumn>
                  <ContainerTimer>
                    <Timer>
                      00:{counter < 10 ? '0' : null}
                      {counter}
                    </Timer>
                  </ContainerTimer>
                  <ContainerColumn>
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
                    <ContainerStopTimer style={{ marginTop: '2%' }} onClick={() => endTimer()}>
                      <Text style={{ color: 'white' }}>Stopper le chrono</Text>
                    </ContainerStopTimer>
                  </ContainerColumn>

                  <ContainerTheme style={{ marginTop: '2%' }}>
                    <ThemeText>{enchere.theme}</ThemeText>
                  </ContainerTheme>
                  <ContainerSuggestions>
                    <ContainerColumn>
                      <SuggestionsText>{enchere.suggestions}</SuggestionsText>
                    </ContainerColumn>
                  </ContainerSuggestions>
                </ContainerColumn>
              ) : (
                <ContainerColumn>
                  <p>Attends avant de passer au jeu suivant !</p>
                  <p>
                    Si l'équipe a bien réussi l'épreuve, accorde leurs leurs
                    points sinon donne les à l'équipe adverse
                  </p>
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
                    onKeyPress={(e) => handleKeyPress(e)}
                  />
                </ContainerScore>
              </ContainerColumn>
            </SecondContainer>
          )}

          <Score team={'team2'} value={points} />
        </ContainerRow>
      </ContainerColumn>
    </ContainerRow>
  )
}

export default Enchere
