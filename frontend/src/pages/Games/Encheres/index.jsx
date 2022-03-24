import { useState, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import Score from '../../../components/Score'
import Theme from '../../../components/theme'
import HasGameStarted from '../../../utils/functions/hasGameStarted'
import { SecondContainer } from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/balises'
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
        </ContainerRow>
        <div style={{ width: 50, height: 50 }}>
          <Link
            to={`/${games[games.indexOf('Les enchères') + 1]}`}
            onClick={() => updateAnswer()}
          >
            Valider
          </Link>
        </div>
      </ContainerColumn>
    </ContainerRow>
  )
}

export default Enchere
