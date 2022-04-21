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
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
`
export const ContainerRowMiddle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-wrap: wrap;
  height: 80%;
  width: 100%;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    height: 50%;
  }
`

export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`
export const ContainerColumn45 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  height: 100%;
  margin-bottom: 2%;
`

export const ContainerTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 45%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  border-radius: 10px;
  opacity: ${({ isSelected }) => (isSelected ? '0.4' : '1')};
  &:hover {
    cursor: pointer;
  }
`

export const ContainerTeamSelection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  padding: 1%;
  width: 100%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 1;
`

export const ContinuerContainer = styled.div`
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
  opacity: ${({ isClickable }) => (isClickable ? 1 : 0.6)};
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

export const ContainerCrossFeaturing = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  padding: 1%;
  border-radius: 20px;
  width: 60%;
  opacity: 0.95;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    border-radius: 10px;
  }
`
export const ContainerColumnNextRound = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 20%;
  width: 100%;
`