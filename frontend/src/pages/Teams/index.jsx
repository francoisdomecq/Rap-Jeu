import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GameContext } from '../../utils/context'
import styled from 'styled-components'

const Container1 = styled.div`
  display: flex;
  align-items: center;
`

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

const TeamWrapper = styled.div`
  width: 250px;
  background-color: #001c39;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: white;
  border-radius: 20px;
  text-align: center;
`
function Teams() {
  const { team1, team2, changeTeams } = useContext(GameContext)
  const question = 'Nom du top album us'
  return (
    <div>
      <Container1>
        <div>
          <h1>Création des équipes</h1>
          <p>{question}</p>
        </div>
      </Container1>
      <Container>
        <TeamWrapper>
          <p>Equipe 1 </p>
          <input
            type="text"
            value={team1}
            onChange={(event) => changeTeams(event, 'team1')}
          />
        </TeamWrapper>
        <TeamWrapper>
          <p>Equipe 2 </p>
          <input
            type="text"
            value={team2}
            onChange={(event) => changeTeams(event, 'team2')}
          />
        </TeamWrapper>
      </Container>
      <Container1>
        {console.log(team1, team2)}
        <Link to="/games">Choisir les jeux</Link>
      </Container1>
    </div>
  )
}

export default Teams
