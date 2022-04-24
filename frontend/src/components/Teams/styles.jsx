import styled from 'styled-components'
import JouerGauche from '../../assets/jauge_gauche.svg'
import JouerDroite from '../../assets/jauge_droite.svg'
import colors from '../../utils/styles/colors'

//Max width = 900 pour le nom d'équipe
//Moins pour l'input

export const PageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`

export const LeftTeamContainer = styled.div`
  background-image: url(${JouerGauche});
  width: 40%;
  margin-left: 3%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (min-width: 350px) and (max-width: 650px) {
    width: 47%;
    margin-left: 1%;
  }
  @media screen and (min-width: 550px) and (max-width: 650px) {
    width: 40%;
    margin-left: 1%;
  }
  @media screen and (min-width: 650px) and (max-width: 750px) {
    width: 40%;
    margin-left: 1%;
  }
  @media screen and (min-width: 750px) and (max-width: 850px) {
    width: 45%;
    margin-left: 1%;
  }
  @media screen and (min-width: 850px) and (max-width: 1000px) {
    width: 45%;
    margin-left: 1%;
  }
  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    width: 45%;
    margin-left: 1%;
  }
`
export const TeamsNameLeft = styled.p`
  margin-top: 1%;
  margin-left: 3%;
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
  @media screen and (min-width: 350px) and (max-width: 400px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 12px;
    margin-top: 16.5%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 400px) and (max-width: 450px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 12px;
    margin-top: 15%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 450px) and (max-width: 500px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 16px;
    margin-top: 12%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 500px) and (max-width: 550px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 16px;
    margin-top: 11%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 550px) and (max-width: 650px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 18px;
    margin-top: 9%;
    margin-left: 2%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 650px) and (max-width: 750px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 24px;
    margin-top: 6%;
    margin-left: 2%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.6px;
  }
  @media screen and (min-width: 750px) and (max-width: 850px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 30px;
    margin-top: 3%;
    margin-left: 3.5%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 25%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.8px;
  }
  @media screen and (min-width: 850px) and (max-width: 1200px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 36px;
    margin-top: 1.8%;
    margin-left: 3.5%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 36%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 1px;
  }
`
export const ScoreTeamLeft = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-top: 2%;
  margin-left: 4%;
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
  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  @media screen and (min-width: 350px) and (max-width: 400px) {
    margin-left: 3%;
    font-size: 6px;
    margin-top: 0.5%;
  }
  @media screen and (min-width: 400px) and (max-width: 450px) {
    margin-left: 3%;
    font-size: 6px;
    margin-top: 5%;
  }
  @media screen and (min-width: 450px) and (max-width: 550px) {
    margin-left: 3%;
    font-size: 8px;
    margin-top: 0.5%;
  }
  @media screen and (min-width: 550px) and (max-width: 650px) {
    margin-left: 3%;
    font-size: 9px;
    margin-top: 5%;
  }
  @media screen and (min-width: 650px) and (max-width: 750px) {
    margin-left: 2%;
    font-size: 12px;
    margin-top: 0%;
  }
  @media screen and (min-width: 750px) and (max-width: 850px) {
    margin-left: 2%;
    font-size: 14px;
    margin-top: -1%;
  }
  @media screen and (min-width: 850px) and (max-width: 1000px) {
    margin-left: 2%;
    font-size: 16px;
    margin-top: 0%;
  }
  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    margin-left: 2%;
    font-size: 16px;
    margin-top: 0%;
  }
`

export const RightTeamContainer = styled.div`
  background-image: url(${JouerDroite});
  width: 40%;
  margin-right: 3%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media screen and (min-width: 350px) and (max-width: 650px) {
    width: 47%;
    margin-right: 1%;
  }
  @media screen and (min-width: 550px) and (max-width: 650px) {
    width: 40%;
    margin-right: 1%;
  }
  @media screen and (min-width: 650px) and (max-width: 750px) {
    width: 40%;
    margin-right: 1%;
  }
  @media screen and (min-width: 750px) and (max-width: 850px) {
    width: 45%;
    margin-right: 1%;
  }
  @media screen and (min-width: 850px) and (max-width: 1000px) {
    width: 45%;
    margin-right: 1%;
  }
  @media screen and (min-width: 850px) and (max-width: 1200px) {
    width: 45%;
    margin-right: 1%;
  }
`

export const TeamsNameRight = styled.p`
  margin-top: 1%;
  margin-right: 3%;
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
  @media screen and (min-width: 350px) and (max-width: 400px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 12px;
    margin-top: 16.5%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 400px) and (max-width: 450px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 12px;
    margin-top: 15%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 450px) and (max-width: 500px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 16px;
    margin-top: 12%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 500px) and (max-width: 550px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 16px;
    margin-top: 11%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 550px) and (max-width: 650px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 18px;
    margin-top: 9%;

    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 650px) and (max-width: 750px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 24px;
    margin-top: 6%;

    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 15%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.4px;
  }
  @media screen and (min-width: 750px) and (max-width: 850px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 30px;
    margin-top: 3%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 25%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 0.8px;
  }
  @media screen and (min-width: 850px) and (max-width: 1200px) {
    padding-bottom: 0px;
    height: 42px;
    font-size: 36px;
    margin-top: 1.8%;
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 36%,
      rgba(0, 0, 0, 1) 100%
    );
    -webkit-text-stroke-width: 1px;
  }
`
export const ScoreTeamRight = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  font-size: 18px;
  margin-top: 0.5%;
  position: absolute;
  left: 85%;
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
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }
  @media screen and (min-width: 350px) and (max-width: 400px) {
    font-size: 6px;
    left: 88%;
    margin-top: 0.5%;
  }
  @media screen and (min-width: 400px) and (max-width: 450px) {
    font-size: 6px;
    left: 89%;
    margin-top: 0.5%;
  }
  @media screen and (min-width: 450px) and (max-width: 550px) {
    font-size: 8px;
    left: 89%;
    margin-top: 0.5%;
  }
  @media screen and (min-width: 550px) and (max-width: 650px) {
    font-size: 9px;
    left: 89%;
    margin-top: 0.5%;
  }
  @media screen and (min-width: 650px) and (max-width: 750px) {
    font-size: 12px;
    left: 89%;
    margin-top: 0%;
  }
  @media screen and (min-width: 750px) and (max-width: 850px) {
    font-size: 14px;
    left: 84%;
    margin-top: -0.5%;
  }
  @media screen and (min-width: 850px) and (max-width: 1000px) {
    font-size: 16px;
    left: 84%;
    margin-top: 0%;
  }
  @media screen and (min-width: 1000px) and (max-width: 1200px) {
    font-size: 16px;
    left: 84%;
    margin-top: 0%;
  }
`
export const ScoreInput = styled.input`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 16px;
  width: ${({ isLeft }) => (isLeft ? '12%' : '15%')};
  color: black;
  background: transparent;
  margin-top: 0;
  border: 2px solid white;
  @media screen and (min-width: 350px) and (max-width: 750px) {
    display: none;
  }
  @media screen and (min-width: 750px) and (max-width: 850px) {
    font-size: 8px;
    width: ${({ isLeft }) => (isLeft ? '7%' : '12%')};
    height: 8px;

  }
  @media screen and (min-width: 850px) and (max-width: 1200px) {
    font-size: 12px;
    width: ${({ isLeft }) => (isLeft ? '7%' : '12%')};
    height: 12px;
    margin-top: 2px;
  }
  @media screen and (min-width: 120px) and (max-width: 1300px) {
    font-size: 16px;
    width: ${({ isLeft }) => (isLeft ? '7%' : '12%')};
    height: 16px;
    margin-top: 2px;
  }
`
