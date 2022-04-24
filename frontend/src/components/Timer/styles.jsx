import styled from 'styled-components'
import timer from '../../assets/enchere_top5/timer.svg'

export const ContainerTimer = styled.div`
  position: absolute;
  top: 9.8%;
  width: 215px;
  height: 75px;
  background-size: contain;
  background-image: url(${timer});
  background-repeat: no-repeat;
  @media screen and (min-width: 300px) and (max-width: 400px) {
    top: 4.6%;
    width: 60px;
    align-items: flex-start;
  }
  @media screen and (min-width: 400px) and (max-width: 500px) {
    top: 4.6%;
    width: 80px;
    align-items: flex-start;
  }
  @media screen and (min-width: 500px) and (max-width: 600px) {
    top: 6.2%;
    width: 110px;
    align-items: flex-start;
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    top: 9.1%;
    width: 140px;
    align-items: flex-start;
  }
  @media screen and (min-width: 900px) and (max-width: 1200px) {
    top: 10%;
    width: 200px;
    align-items: flex-start;
  }
`
export const Time = styled.p`
  font-size: 40px;
  font-family: 'Orbitron';
  font-weight: 700;
  height: 100%;
  margin-top: 3%;
  margin-left: 19%;
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
  @media screen and (min-width: 300px) and (max-width: 400px) {
    font-size: 10px;
    margin-left: 22%;
  }
  @media screen and (min-width: 400px) and (max-width: 500px) {
    font-size: 14px;
    margin-left: 21%;
  }
  @media screen and (min-width: 500px) and (max-width: 600px) {
    font-size: 20px;
    margin-left: 19.5%;
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 26px;
    margin-left: 19%;
  }
  @media screen and (min-width: 900px) and (max-width: 120px) {
    font-size: 30px;
    margin-left: 19%;
  }
`
