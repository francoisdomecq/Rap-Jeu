import styled from 'styled-components'
import timer from '../../assets/enchere_top5/timer.svg'

export const ContainerTimer = styled.div`
  position: absolute;
  top: 9.7%;
  width: 215px;
  height: 75px;
  background-size: contain;
  background-image: url(${timer});
  background-repeat: no-repeat;
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
`
