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
  height: 20%;
  width: 50%;
  flex-direction: column;
  justify-content: space-between;
  background-image: url(${JouerGauche});
  background-size: contain;
  background-repeat: no-repeat;
`
export const TeamsNameLeft = styled.p``
export const ScoreTeamLeft = styled.p``

export const RightTeamContainer = styled.div`
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

export const TeamsNameRight = styled.p``
export const ScoreTeamRight = styled.p``
