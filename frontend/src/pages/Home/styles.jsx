import styled from 'styled-components'
import Continuer from '../../assets/continuer.svg'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 1vw;
  padding-bottom: 5vw;
  left: 0;
  top: 0;
  background-image: linear-gradient(
      112.5deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(
      157.5deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(
      135deg,
      rgb(214, 214, 214) 0%,
      rgb(214, 214, 214) 10%,
      rgb(195, 195, 195) 10%,
      rgb(195, 195, 195) 53%,
      rgb(176, 176, 176) 53%,
      rgb(176, 176, 176) 55%,
      rgb(157, 157, 157) 55%,
      rgb(157, 157, 157) 60%,
      rgb(137, 137, 137) 60%,
      rgb(137, 137, 137) 88%,
      rgb(118, 118, 118) 88%,
      rgb(118, 118, 118) 91%,
      rgb(99, 99, 99) 91%,
      rgb(99, 99, 99) 100%
    ),
    linear-gradient(90deg, rgb(195, 195, 195), rgb(228, 228, 228));
  background-blend-mode: overlay, overlay, overlay, normal;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    height: 130%;
  }
  @media screen and (min-width: 500px) and (max-width: 900px) {
    height: 150%;
  }
  @media screen and (min-width: 900px) and (max-width: 1300px) {
    height: 130%;
  }
`
export const ContainerLogos = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 20%;
  @media screen and (min-width: 500px) and (max-width: 900px) {
    margin-top: 5vh;
  }
`
export const LinkImage = styled.a`
  width: 20%;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: 40%;
  }
  @media screen and (min-width: 500px) and (max-width: 900px) {
    width: 30%;
  }
`
export const Logo = styled.img`
  width: ${({ isRapJeuLogo }) => (isRapJeuLogo === true ? '50%' : '80%')};
  height: ${({ isRapJeuLogo }) => (isRapJeuLogo === true ? '50%' : '80%')};
`
export const ExplainationContainer = styled.div`
  display: flex;
  justify-content: center;
`
export const Explaination = styled.div`
  background-color: white;
  border: 3px solid black;
  border-radius: 20px;
  width: 70%;
  padding: 2%;
  padding-top: 0%;
  text-align: start;
 
  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: 80%;
  }
`
export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 16px;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 12px;
  }
`
export const TextH1 = styled.h1`
  font-family: 'Montserrat';
  text-align: center;
  font-size: 24px;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 18px;
  }
`
export const ContainerRow = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  margin-top: 2%;
`
export const ContinueContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url(${Continuer});
  background-repeat: no-repeat;
  background-size: contain;
  width: 326px;
  height: 105px;
  font-size: 20px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: white;
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: 300px;
  }
`
export const TextLink = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  color: white;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 24px;
    width: 300px;
  }
`
