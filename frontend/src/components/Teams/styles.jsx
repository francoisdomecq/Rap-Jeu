import styled from 'styled-components'
import JouerGauche from '../../assets/jauge_gauche.svg'
import JouerDroite from '../../assets/jauge_droite.svg'

export const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`

export const LeftTeamContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 40%;
  padding: 0.5% 0% 0% 1%;
  flex-direction: column;
  background-image: url(${JouerGauche});
  background-size: contain;
  background-repeat: no-repeat;
`
export const TeamsNameLeft = styled.p`
  height: 0%;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`
export const ScoreTeamLeft = styled.p`
  width: 20%;
  height: 20%;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`

export const RightTeamContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 40%;
  padding: 0.5% 1% 0% 0%;
  flex-direction: column;
  background-image: url(${JouerDroite});
  background-size: contain;
  background-repeat: no-repeat;
  /* display: flex;
  width: 40%;
  padding: 0.5% 0% 0% 1%;
  flex-direction: column;
  background-image: url(${JouerGauche});
  background-size: contain;
  background-repeat: no-repeat;*/
`

export const TeamsNameRight = styled.p`
  height: 0%;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`
export const ScoreTeamRight = styled.p`
  height: 20%;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 20px;
`
