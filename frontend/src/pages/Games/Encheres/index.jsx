import { useState, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import Score from '../../../components/Score'
import Theme from '../../../components/theme'
import HasGameStarted from '../../../utils/functions/hasGameStarted'
import { FirstContainer, Container, SecondContainer } from './styles'
import '../../../utils/animations/Bouncing/enchereBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

function Enchere() {
  const [enchere, setEncheres] = useState()
  const [answerNumber, updateAnswerNumber] = useState(0)
  const { updateGamesPlayed, games } = useContext(GameContext)

  function selectTheme(theme) {
    setEncheres(theme)
  }

  const updateAnswer = () => {
    updateGamesPlayed('Les enchères', answerNumber, updateAnswerNumber)
  }

  HasGameStarted()
  return (
    <FirstContainer>
      <div class="bouncing-text">
        <div class="l-enc">l</div>
        <div class="e-enc">e</div>
        <div class="s-enc">s</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div class="e1-enc">e</div>
        <div class="n-enc">n</div>
        <div class="c-enc">c</div>
        <div class="h-enc">h</div>
        <div class="e2-enc">è</div>
        <div class="r-enc">r</div>
        <div class="e3-enc">e</div>
        <div class="s1-enc">s</div>
      </div>
      <Container>
        {/* Choisir le thème et choisir le nombre de points
      Valider, lance le chrono
      Chrono fini, l'équipe a t-elle réussi ?  */}

        <Score team={'team1'} value="--" />

        {enchere ? (
          <div>
            <p>{enchere.theme}</p>
            <p>{enchere.suggestions}</p>
          </div>
        ) : (
          <SecondContainer>
            <Theme page="enchere" selectTheme={selectTheme} />
          </SecondContainer>
        )}

        <Score team={'team2'} value="--" />
        <div style={{ width: 50, height: 50 }}>
          <Link
            to={`/${games[games.indexOf('Les enchères') + 1]}`}
            onClick={() => updateAnswer()}
          >
            Valider
          </Link>
        </div>
      </Container>
    </FirstContainer>
  )
}

export default Enchere
