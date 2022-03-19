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
        <TeamsNameLeft>{team1}</TeamsNameLeft>
        <ScoreTeamLeft>{scoreTeam1} POINTS</ScoreTeamLeft>
      </LeftTeamContainer>
      <RightTeamContainer imgUrl="../../assets/jauge_droite.svg">
        <TeamsNameRight>{team2}</TeamsNameRight>
        <ScoreTeamRight>{scoreTeam2} POINTS</ScoreTeamRight>
      </RightTeamContainer>
    </PageContainer>
  )
}

export default Teams
