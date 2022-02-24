import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { TeamContext } from '../../utils/context'
import JouerGauche from '../../assets/jauge_gauche.svg'
import JouerDroite from '../../assets/jauge_droite.svg'

const Image = styled.img`
  width: 100%;
  height: 100%;
`
const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const TeamsContainer = styled.div`
  position: relative;
  z-index: 1;
  width:36%;
`
const TeamsNameLeft = styled.p`
  position: absolute;
  top: 4px;
  left: 5px;
  z-index: 2;
  font-size:20px;
`
const ScoreTeamLeft = styled.p`
  position: absolute;
  top: 40px;
  left: 5px;
  z-index: 2;
  font-size:20px;
`
const TeamsNameRight = styled.p`
  position: absolute;
  top: 4px;
  right: 5px;
  z-index: 2;
  font-size:20px;
`
const ScoreTeamRight = styled.p`
  position: absolute;
  top: 40px;
  right: 5px;
  z-index: 2;
  font-size:20px;
`
function Teams() {
  const { team1, team2,scoreTeam1,scoreTeam2 } = useContext(TeamContext)

  return (
    <PageContainer>
      <TeamsContainer>
        <Image src={JouerGauche} alt="jouerGauche" />
        <TeamsNameLeft>{team1}</TeamsNameLeft>
        <ScoreTeamLeft>{scoreTeam1} POINTS</ScoreTeamLeft>
      </TeamsContainer>
      <TeamsContainer>
        <Image src={JouerDroite} alt="jouerDroite" />
        <TeamsNameRight>{team2}</TeamsNameRight>
        <ScoreTeamRight>{scoreTeam2} points</ScoreTeamRight>
      </TeamsContainer>
    </PageContainer>
  )
}

export default Teams
