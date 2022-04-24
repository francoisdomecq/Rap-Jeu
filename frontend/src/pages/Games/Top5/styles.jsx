import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import Continuer from '../../../assets/continuer.svg'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 110%;
  @media screen and (min-width: 300px) and (max-width: 400px) {
    height: 75%;
    align-items: flex-start;
  }
  @media screen and (min-width: 400px) and (max-width: 500px) {
    height: 90%;
    align-items: flex-start;
  }
  @media screen and (min-width: 500px) and (max-width: 600px) {
    height: 111%;
    align-items: flex-start;
  }
  @media screen and (min-width: 600px) and (max-width: 700px) {
    height: 130%;
    align-items: flex-start;
  }
  @media screen and (min-width: 700px) and (max-width: 800px) {
    height: 160%;
    align-items: flex-start;
  }
  @media screen and (min-width: 800px) and (max-width: 1000px) {
    height: 80%;
  }
  @media screen and (min-width: 1000px) and (max-width: 1100px) {
    height: 85%;
  }
  @media screen and (min-width: 1100px) and (max-width: 1250px) {
    height: 90%;
  }
`

export const ContainerRowAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  width: 40%;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    margin-top: 30%;
    width: 60%;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 60%;
  }
`
export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    height: 50%;
  }
`
export const ContainerColumnWinScreen = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  height: 60%;
`

export const ContainerRowTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 70%;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    align-content: center;
    flex-direction: column;
    height: 100%;
  }
  @media screen and (min-width: 600px) and (max-width: 800px) {
    height: 90%;
    align-content: flex-start;
    align-items: center;
  }
  @media screen and (min-width: 800px) and (max-width: 1000px) {
    height: 80%;
  }
`
export const ContainerColumnTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 40%;
  height: 100%;
  @media screen and (min-width: 300px) and (max-width: 450px) {
    width: 65%;
    height: 35%;
  }
  @media screen and (min-width: 450px) and (max-width: 600px) {
    height: 35%;
    width: 60%;
  }
  @media screen and (min-width: 600px) and (max-width: 800px) {
    height: 45%;
  }
  @media screen and (min-width: 800px) and (max-width: 1000px) {
    height: 80%;
  }
`

export const ContainerTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 45%;
  opacity: ${({ isSelected }) => (isSelected ? 0.5 : 1)};
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  &:hover {
    cursor: pointer;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 35%;
  padding: 2%;
  border-radius: 20px;
  padding: 0% 0% 1% 0%;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 0.95;
  box-shadow: 1px 1px 1px ${colors.blue};
  @media screen and (min-width: 350px) and (max-width: 500px) {
    width: 50%;
    padding: 2%;
  }
`
export const NextRoundButton = styled.div`
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
    width: 150px;
    height: 55px;
  }
  @media screen and (min-width: 500px) and (max-width: 700px) {
    width: 200px;
    height: 85px;
  }
`
export const TextLink = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  color: white;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 12px;
    width: 150px;
  }
  @media screen and (min-width: 500px) and (max-width: 700px) {
    width: 200px;
    font-size: 14px;
  }
`
