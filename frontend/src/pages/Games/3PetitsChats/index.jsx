import { useState, useEffect, useContext } from 'react'
import { GameContext, TeamContext } from '../../../utils/context'
import { Link } from 'react-router-dom'
import RapperArray from '../../../components/Rappers'

import { TextBlack, TextBlue } from '../../../utils/styles/Text'

import {
  ContainerRow,
  ContainerColumn,
  ContainerColumn45,
  RappersContainer,
  Header,
  TableBottom,
  RapperInput,
  ContainerNewRapper,
  ContinueContainer,
  TableContainer,
} from './styles'

function PetitsChats() {
  const [answerNumber, updateAnswerNumber] = useState(0)
  const [rapper, setRapper] = useState('')
  const [rappers, setRappers] = useState([])
  const { games, updateGamesPlayed, teamAnswering, setTeamAnswering } =
    useContext(GameContext)
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

    if (teamAnswering === team1) updateScore(10, team2)
    else updateScore(10, team1)
    setTeamAnswering(team2)
  }

  useEffect(() => {
    if (scoreTeam1 >= scoreTeam2) setTeamAnswering(team1)
    else setTeamAnswering(team2)
  }, [team1, team2, scoreTeam1, scoreTeam2, setTeamAnswering])

  return (
    <ContainerRow style={{ marginBottom: '1%' }}>
      <ContainerColumn>
        {rapper ? (
          <ContainerColumn style={{ marginTop: '6%' }}>
            <ContainerRow
              style={{ justifyContent: 'space-evenly', width: '65%' }}
            >
              <ContainerColumn style={{ width: '38%' }}>
                <Header>Rappeurs cités</Header>
                <TableContainer>
                  <RappersContainer>
                    <p>{rapper}</p>
                    {rappers.map((rapper) => (
                      <p>{rapper}</p>
                    ))}
                  </RappersContainer>
                </TableContainer>
                <TableBottom />
              </ContainerColumn>

              <ContainerNewRapper>
                <TextBlue>Nouveau rappeur</TextBlue>
                <RapperInput
                  type="search"
                  placeholder="ajouter un rappeur"
                  onKeyPress={(e) => addRappers(e)}
                />
              </ContainerNewRapper>
            </ContainerRow>

            <ContainerColumn style={{ marginTop: '4%' }}>
              {answerNumber < 1 ? (
                <ContinueContainer onClick={() => updateAnswer()}>
                  Manche suivante
                  <br />
                  (Victoire de {teamAnswering === team1 ? team2 : team1})
                </ContinueContainer>
              ) : (
                <ContinueContainer>
                  <Link
                    style={{ textDecoration: 'none', color: 'white' }}
                    to={`/${
                      games[games.indexOf('Les 3 petits chats') + 1]
                    }/?game=${games[games.indexOf('Les 3 petits chats') + 1]}`}
                    onClick={() => updateAnswer()}
                  >
                    Continuer vers <br />
                    {games[games.indexOf('Les 3 petits chats') + 1]}
                    <br />
                    (Victoire de {teamAnswering === team1 ? team2 : team1})
                  </Link>
                </ContinueContainer>
              )}
            </ContainerColumn>
          </ContainerColumn>
        ) : (
          <ContainerColumn45 style={{ marginTop: '3%', marginBottom: '3%' }}>
            <RapperArray selectRapper={selectRapper} />
          </ContainerColumn45>
        )}
      </ContainerColumn>
    </ContainerRow>
  )
}

export default PetitsChats
