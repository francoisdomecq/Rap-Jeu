import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import Score from '../../../components/Score'
import CrossFeaturingArray from '../../../components/CrossFeaturing'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

import { SecondContainer } from './styles'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/balises'
import '../../../utils/animations/Bouncing/crossFeaturingBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

function CrossFeaturing() {
  const [crossFeaturing, setCrossFeaturing] = useState()
  const [answerNumber, updateAnswerNumber] = useState(0)
  const { games, updateGamesPlayed } = useContext(GameContext)

  function selectCrossFeaturing(crossFeaturing) {
    setCrossFeaturing(crossFeaturing)
  }
  const updateAnswer = () => {
    updateGamesPlayed('Le CrossFeaturing', answerNumber, updateAnswerNumber)
  }
  // HasGameStarted()
  return (
    <ContainerRow>
      <div className="bouncing-text">
        <div className="l-cf">l</div>
        <div className="e-cf">e</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div className="c-cf">c</div>
        <div className="r-cf">r</div>
        <div className="o-cf">o</div>
        <div className="s-cf">s</div>
        <div className="s1-cf">s</div>
        <div className="f-cf">f</div>
        <div className="e1-cf">e</div>
        <div className="a-cf">a</div>
        <div className="t-cf">t</div>
        <div className="u-cf">u</div>
        <div className="r1-cf">r</div>
        <div className="i-cf">i</div>
        <div className="n-cf">n</div>
        <div className="g-cf">g</div>
      </div>
      <ContainerColumn>
        <ContainerRow>
          <Score team={'team1'} value={5} />
          <SecondContainer>
            <CrossFeaturingArray selectCrossFeaturing={selectCrossFeaturing} />
          </SecondContainer>
          <Score team={'team2'} value={5} />
        </ContainerRow>
        <ContainerColumn style={{ width: 50, height: 50 }}>
          {answerNumber < 2 ? (
            <button onClick={() => updateAnswer()}>Valider</button>
          ) : (
            <Link
              to={`/${games[games.indexOf('Le CrossFeaturing') + 1]}`}
              onClick={() => updateAnswer()}
            >
              Valider
            </Link>
          )}
        </ContainerColumn>
      </ContainerColumn>
    </ContainerRow>
  )
}

export default CrossFeaturing
