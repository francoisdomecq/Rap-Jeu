import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import Score from '../../../components/Score'
import RapperArray from '../../../components/Rappers'
import HasGameStarted from '../../../utils/functions/hasGameStarted'

import { FirstContainer, Container } from '../../../utils/styles/balises'
import '../../../utils/animations/Bouncing/petitsChatsBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'

function PetitsChats() {
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [rapper, setRapper] = useState('')
  const { games, updateGamesPlayed } = useContext(GameContext)

  function selectRapper(rapper) {
    setRapper(rapper)
  }
  function updateAnswer() {
    updateGamesPlayed('Les 3 petits chats', answerNumber, updateAnswerNumber)
    setRapper('')
  }

  HasGameStarted()
  return (
    <FirstContainer>
      <div className="bouncing-text">
        <div className="three-3pc">3</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div className="p-3pc">P</div>
        <div className="e-3pc">E</div>
        <div className="t-3pc">T</div>
        <div className="i-3pc">I</div>
        <div className="t1-3pc">T</div>
        <div className="s-3pc">S</div>
        <p style={{ color: 'transparent', lineHeight: 0 }}>''</p>
        <div className="c-3pc">C</div>
        <div className="h-3pc">H</div>
        <div className="a-3pc">A</div>
        <div className="t2-3pc">T</div>
        <div className="s1-3pc">S</div>
      </div>
      <Container>
        <Score team="team1" value={10} />
        {rapper ? <p>{rapper}</p> : <RapperArray selectRapper={selectRapper} />}
        <Score team="team2" value={10} />
      </Container>
      <Container>
        {answerNumber < 1 ? (
          <button onClick={() => updateAnswer()}>Valider</button>
        ) : (
          <Link
            to={`/${games[games.indexOf('Les 3 petits chats') + 1]}`}
            onClick={() => updateAnswer()}
          >
            Valider
          </Link>
        )}
      </Container>
    </FirstContainer>
  )
}

export default PetitsChats
