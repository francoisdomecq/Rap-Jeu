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
  height: 100%;
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

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`

export const ContainerColumn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  width: 100%;
`
export const ContainerRowStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    align-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
    flex-wrap: nowrap;
  }
  @media screen and (min-width: 600px) and (max-width: 800px) {
    width: 100%;
    height: 40%;
  }
`

export const ContainerColumnStart = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  height: 100%;
  width: 45%;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    align-content: center;
    height: 100%;
    width: 50%;
  }
`

export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
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
export const ContainerTeamSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 2%;
  padding: 2%;
  width: 100%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 0.95;
  box-shadow: 1px 1px 1px ${colors.blue};
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
  font-size: 16px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: white;
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
  @media screen and (min-width: 300px) and (max-width: 700px) {
    width: 150px;
    height: 55px;
  }
`
export const TextLink = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  color: white;
  @media screen and (min-width: 300px) and (max-width: 650px) {
    font-size: 12px;
    width: 150px;
  }
`
