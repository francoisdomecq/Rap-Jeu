import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import RapperArray from '../../../components/Rappers'

import HasGameStarted from '../../../utils/functions/hasGameStarted'
import { ContainerRow, ContainerColumn } from '../../../utils/styles/Containers'
import { TextBlack, TextWhite, TextBlue } from '../../../utils/styles/Text'
import '../../../utils/animations/Bouncing/petitsChatsBouncingLetters.css'
import '../../../utils/animations/Bouncing/animationBouncing.css'
import {
  RappersContainer,
  SecondContainer,
  Header,
  TableBottom,
  RapperInput,
  ContainerNewRapper,
  ContinuerContainer,
} from './styles'

function PetitsChats() {
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [teamAnswering, setTeamAnswering] = useState()
  const [rapper, setRapper] = useState('')
  const [rappers, setRappers] = useState([])
  const { games, updateGamesPlayed } = useContext(GameContext)
  const { team1, team2, updateScore, scoreTeam1, scoreTeam2 } =
    useContext(TeamContext)

  function addRappers(e) {
    if (e.key === 'Enter') {
      rappers.push(e.target.value)
      const newRapper = [...rappers]
      setRappers(newRapper)
      e.target.value = ''
      if (teamAnswering === team1) setTeamAnswering(team2)
      else setTeamAnswering(team1)
    }
  }
  function selectRapper(rapper) {
    setRapper(rapper)
  }
  function updateAnswer() {
    updateGamesPlayed('Les 3 petits chats', answerNumber, updateAnswerNumber)
    setRapper('')
    setRappers([])
    if (rappers.length > 1) updateScore(10, teamAnswering)
    else if (teamAnswering === team1) updateScore(10, team2)
    else updateScore(10, team1)
    setTeamAnswering(team2)
  }
  useEffect(() => {})
  useEffect(() => {
    if (scoreTeam1 >= scoreTeam2) setTeamAnswering(team1)
    else setTeamAnswering(team2)
  }, [team1])

  HasGameStarted()
  return (
    <ContainerRow style={{ marginBottom: '1%' }}>
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
          {rapper ? (
            <ContainerColumn>
              <TextBlack>Equipe {teamAnswering}, à vous</TextBlack>
              <Header>Rappeurs cités</Header>
              <RappersContainer>
                <p>{rapper}</p>
                {rappers.map((rapper) => (
                  <p>{rapper}</p>
                ))}
              </RappersContainer>
              <TableBottom />
              <ContainerNewRapper>
                <ContainerColumn>
                  <TextBlue>Nouveau rappeur</TextBlue>
                  <RapperInput
                    type="search"
                    placeholder='ajouter un rappeur'
                    onKeyPress={(e) => addRappers(e)}
                  />
                </ContainerColumn>
              </ContainerNewRapper>
              <ContainerColumn style={{ marginTop: '2%' }}>
                {answerNumber < 1 ? (
                  <ContinuerContainer onClick={() => updateAnswer()}>
                    Manche suivante
                  </ContinuerContainer>
                ) : (
                  <ContinuerContainer>
                    <Link
                      style={{ textDecoration: 'none', color: 'white' }}
                      to={`/${
                        games[games.indexOf('Les 3 petits chats') + 1]
                      }/?game=${
                        games[games.indexOf('Les 3 petits chats') + 1]
                      }`}
                      onClick={() => updateAnswer()}
                    >
                      Continuer vers <br />
                      {games[games.indexOf('Les 3 petits chats') + 1]}
                    </Link>
                  </ContinuerContainer>
                )}
              </ContainerColumn>
            </ContainerColumn>
          ) : (
            <SecondContainer>
              <TextBlack>L'équipe {teamAnswering} commence la manche</TextBlack>
              <RapperArray selectRapper={selectRapper} />
            </SecondContainer>
          )}
        </ContainerRow>
      </ContainerColumn>
    </ContainerRow>
  )
}

export default PetitsChats
