import styled from 'styled-components'
import { useContext } from 'react'
import { TeamContext } from '../../utils/context'
import JouerGauche from '../../assets/jauge_gauche.svg'
import JouerDroite from '../../assets/jauge_droite.svg'

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const LeftTeamContainer = styled.div`
  display: flex;
  height: 20%;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${JouerGauche});
  background-size: contain;
  background-repeat: no-repeat;
`
const TeamsNameLeft = styled.p``
const ScoreTeamLeft = styled.p``

const RightTeamContainer = styled.div`
  display: flex;
  height: 10%;
  width: 40%;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  background-image: url(${JouerDroite});
  background-size: contain;
  background-repeat: no-repeat;
`

const TeamsNameRight = styled.p``
const ScoreTeamRight = styled.p``
function Teams() {
  const { team1, team2, scoreTeam1, scoreTeam2 } = useContext(TeamContext)

  return (
    <PageContainer>
      <LeftTeamContainer imgUrl="../../assets/jauge_gauche.svg">
        <TeamsNameLeft>dazda{team1}</TeamsNameLeft>
        <ScoreTeamLeft>{scoreTeam1} POINTS</ScoreTeamLeft>
      </LeftTeamContainer>
      <RightTeamContainer imgUrl="../../assets/jauge_droite.svg">
        <TeamsNameRight>dadaz{team2}</TeamsNameRight>
        <ScoreTeamRight>{scoreTeam2} points</ScoreTeamRight>
      </RightTeamContainer>
    </PageContainer>
  )
}

export default Teams
