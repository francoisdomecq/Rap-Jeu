import { useContext } from 'react'
import { TeamContext } from '../../utils/context'
import {
  PageContainer,
  LeftTeamContainer,
  RightTeamContainer,
  TeamsNameLeft,
  TeamsNameRight,
  ScoreTeamLeft,
  ScoreTeamRight,
  ScoreInput,
} from './styles'
import { ContainerColumn } from '../../utils/styles/Containers'
function Teams() {
  const { team1, team2, scoreTeam1, scoreTeam2, updateScore } =
    useContext(TeamContext)
  const updateScoreTeam = (e, team) => {
    if (e.key === 'Enter') {
      updateScore(e.target.value, team)
      e.target.value = null
    }
  }
  return (
    <PageContainer>
      <LeftTeamContainer imgUrl="../../assets/jauge_gauche.svg">
        <TeamsNameLeft>
          {team1}
          <br />
          <ScoreTeamLeft>
            {scoreTeam1} points{' '}
            <ScoreInput
              type="number"
              placeholder="±"
              onKeyPress={(e) => updateScoreTeam(e, 'team1')}
              style={{ marginLeft: '2%' }}
            ></ScoreInput>
          </ScoreTeamLeft>
        </TeamsNameLeft>
      </LeftTeamContainer>
      <RightTeamContainer imgUrl="../../assets/jauge_droite.svg">
        <TeamsNameRight>
          {team2}
          <br />
          <ScoreTeamRight>
            <ScoreInput
              type="number"
              placeholder="±"
              onKeyPress={(e) => updateScoreTeam(e, 'team2')}
              style={{ marginRight: '2%' }}
            ></ScoreInput>{' '}
            {scoreTeam2} points
          </ScoreTeamRight>
        </TeamsNameRight>
      </RightTeamContainer>
    </PageContainer>
  )
}

export default Teams
