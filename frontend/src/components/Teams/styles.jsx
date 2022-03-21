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
  padding: 0% 0% 0% 1%;
  flex-direction: column;
  background-image: url(${JouerGauche});
  background-size: contain;
  background-repeat: no-repeat;
`
export const TeamsNameLeft = styled.p`
  padding-bottom: 1px;
  margin-left: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 30px;
  background-color: red;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 36%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
`
export const ScoreTeamLeft = styled.p``

export const RightTeamContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 40%;
  padding: 0.5% 1% 0% 0%;
  flex-direction: column;
  background-image: url(${JouerDroite});
  background-size: contain;
  background-repeat: no-repeat;
`

export const TeamsNameRight = styled.p`
  margin-top: 17.9px;
  height: 42px;
  padding-bottom: 1px;
  margin-left: 12px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 30px;
  background-color: red;
  -webkit-text-stroke-width: 1.3px;
  -webkit-text-stroke-color: black;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 36%,
    rgba(0, 0, 0, 1) 100%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
`
export const ScoreTeamRight = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  line-height: 22px;

  background: linear-gradient(180deg, #fefbeb 0%, #bdbaa2 100%);
  background-size: 100%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  background-clip: text;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
