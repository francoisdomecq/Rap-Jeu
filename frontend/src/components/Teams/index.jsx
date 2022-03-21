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
} from './styles'

function Teams() {
  const { team1, team2, scoreTeam1, scoreTeam2 } = useContext(TeamContext)

  return (
    <PageContainer>
      <LeftTeamContainer imgUrl="../../assets/jauge_gauche.svg">
        <TeamsNameLeft>
          {team1}
          <br />
          <ScoreTeamLeft>{scoreTeam1} points</ScoreTeamLeft>
        </TeamsNameLeft>
      </LeftTeamContainer>
      <RightTeamContainer imgUrl="../../assets/jauge_droite.svg">
        <TeamsNameRight>
          {team2}
          <br />
          <ScoreTeamRight>{scoreTeam2} points</ScoreTeamRight>
        </TeamsNameRight>
      </RightTeamContainer>
    </PageContainer>
  )
}

export default Teams
