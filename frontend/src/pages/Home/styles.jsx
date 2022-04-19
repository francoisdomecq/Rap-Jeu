import styled from 'styled-components'
import Continuer from '../../assets/continuer.svg'

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SecondContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 1%;
`
export const LinkImage = styled.a`
  width: 5%;
  height: 5%;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: 15%;
    height: 15%;
  }
`
export const Logo = styled.img`
  width: ${({ isRapJeuLogo }) => (isRapJeuLogo === true ? '5%' : '100%')};
  height: ${({ isRapJeuLogo }) => (isRapJeuLogo === true ? '5%' : '100%')};
  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: ${({ isRapJeuLogo }) => (isRapJeuLogo === true ? '15%' : '100%')};
    height: ${({ isRapJeuLogo }) => (isRapJeuLogo === true ? '15%' : '100%')};
  }
`
export const ExplainationContainer = styled.div`
  display: flex;
  margin-top: 1%;
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
