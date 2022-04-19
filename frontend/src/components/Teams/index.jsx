import { useContext, useEffect } from 'react'
import { TeamContext } from '../../utils/context'
import { TextBlue } from '../../utils/styles/Text'
import {
  PageContainer,
  LeftTeamContainer,
  RightTeamContainer,
  TeamsNameLeft,
  TeamsNameRight,
  ScoreTeamLeft,
  ScoreTeamRight,
  ScoreInput,
  ContainerGame,
} from './styles'

function Teams({ game }) {
  const {
    team1,
    team2,
    scoreTeam1,
    scoreTeam2,
    updateScore,
    setTeam1,
    setTeam2,
    setScoreTeam1,
    setScoreTeam2,
  } = useContext(TeamContext)
  const localTeam1 = JSON.parse(localStorage.getItem('team1'))
  const localTeam2 = JSON.parse(localStorage.getItem('team2'))
  const localScoreTeam1 = JSON.parse(localStorage.getItem('scoreTeam1'))
  const localScoreTeam2 = JSON.parse(localStorage.getItem('scoreTeam2'))
  const updateScoreTeam = (e, team) => {
    if (e.key === 'Enter') {
      updateScore(e.target.value, team)
      e.target.value = null
    }
  }

  useEffect(() => {
    if (localTeam1 && localTeam2) {
      setTeam1(localTeam1)
      setTeam2(localTeam2)
      setScoreTeam1(localScoreTeam1)
      setScoreTeam2(localScoreTeam2)
    }
  })

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
              onKeyPress={(e) => updateScoreTeam(e, team1)}
              style={{ marginLeft: '2%', width: '12%' }}
            ></ScoreInput>
          </ScoreTeamLeft>
        </TeamsNameLeft>
      </LeftTeamContainer>

      <TextBlue style={{ fontSize: '24px', textTransform: 'uppercase' }}>
        {game}
      </TextBlue>

      <RightTeamContainer imgUrl="../../assets/jauge_droite.svg">
        <TeamsNameRight>
          {team2}
          <br />
          <ScoreTeamRight>
            <ScoreInput
              type="number"
              placeholder="±"
              onKeyPress={(e) => updateScoreTeam(e, team2)}
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
