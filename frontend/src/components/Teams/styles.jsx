import styled from 'styled-components'
import JouerGauche from '../../assets/jauge_gauche.svg'
import JouerDroite from '../../assets/jauge_droite.svg'

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const LeftTeamContainer = styled.div`
  background-image: url(${JouerGauche});
  width: 35%;
  margin-left: 5%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const TeamsNameLeft = styled.p`
  margin-top: 1%;
  margin-left: 2%;
  height: 42px;
  padding-bottom: 10px;
  text-transform: uppercase;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 40px;
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
`
export const ScoreTeamLeft = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-top: 2%;
  margin-left: 2%;
  padding-bottom: 2%;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 36%,
    rgb(255, 255, 255) 100%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
`

export const RightTeamContainer = styled.div`
  background-image: url(${JouerDroite});
  width: 35%;
  margin-right: 5%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`

export const TeamsNameRight = styled.p`
   margin-top: 1%;
  margin-right: 2%;
  height: 42px;
  padding-bottom: 10px;
  font-family: 'Raleway', sans-serif;
  font-weight: 700;
  font-size: 40px;
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
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
   margin-top: 0.5%;

  position: absolute;
  width: 21%;
  left: 84%;
  padding-bottom: 5px;
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 36%,
    rgb(255, 255, 255) 100%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
`
export const ScoreInput = styled.input`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  width: 10%;
  color: black;
  background: transparent;
  margin-top: 0;
  border: 2px solid white;
`
