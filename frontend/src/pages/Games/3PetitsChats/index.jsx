import { useState, useEffect, useContext } from 'react'
import { GameContext } from '../../../utils/context'
import { Link } from 'react-router-dom'

import ScoreTeam1 from '../../../components/Score/index.scoreteam1'
import ScoreTeam2 from '../../../components/Score/index.scoreteam2'
import RapperArray from '../../../components/Rappers'
import HasGameStarted from '../../../utils/functions/hasGameStarted'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/balises'
import '../../../utils/animations/Bouncing/petitsChatsBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'
import {
  RappersContainer,
  SecondContainer,
  Header,
  TableBottom,
  RapperInput,
  Text,
} from './styles'

function PetitsChats() {
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [rapper, setRapper] = useState('')
  const [rappers, setRappers] = useState([])
  const { games, updateGamesPlayed } = useContext(GameContext)

  function addRappers(e) {
    if (e.key === 'Enter') {
      rappers.push(e.target.value)
      const newRapper = [...rappers]
      setRappers(newRapper)
      e.target.value = ''
    }
  }
  function selectRapper(rapper) {
    setRapper(rapper)
  }
  function updateAnswer() {
    updateGamesPlayed('Les 3 petits chats', answerNumber, updateAnswerNumber)
    setRapper('')
    setRappers([])
  }

  HasGameStarted()
  return (
    <ContainerRow>
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
      <ContainerColumn>
        <ContainerRow>
          <ScoreTeam1 value={10} />
          <ScoreTeam2 value={10} />
          {rapper ? (
            <ContainerColumn>
              <Header>Rappeurs cités</Header>
              <RappersContainer>
                <p>{rapper}</p>
                {rappers.map((rapper) => (
                  <p>{rapper}</p>
                ))}
              </RappersContainer>
              <TableBottom />
              <ContainerColumn>
                <Text>Nouveau rappeur</Text>
                <RapperInput type="search" onKeyPress={(e) => addRappers(e)} />
              </ContainerColumn>
            </ContainerColumn>
          ) : (
            <SecondContainer>
              <RapperArray selectRapper={selectRapper} />
            </SecondContainer>
          )}
        </ContainerRow>
      </ContainerColumn>
      <ContainerColumn>
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
      </ContainerColumn>
    </ContainerRow>
  )
}

export default PetitsChats
