import styled from 'styled-components'
import colors from '../../../utils/styles/colors'

import Continuer from '../../../assets/continuer.svg'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 110%;
  padding-top: 5%;
  padding-bottom: 5%;

  @media screen and (min-width: 300px) and (max-width: 400px) {
    height: 90%;
    align-items: flex-start;
    padding-bottom: 0%;
  }
  @media screen and (min-width: 400px) and (max-width: 500px) {
    height: 90%; 
    justify-content: flex-start;
    padding-bottom: 0%;
  }
  @media screen and (min-width: 500px) and (max-width: 600px) {
    height: 111%;
    padding-bottom: 0%;
  }
  @media screen and (min-width: 600px) and (max-width: 700px) {
    height: 130%;
    padding-bottom: 0%;
  }
  @media screen and (min-width: 700px) and (max-width: 800px) {
    height: 160%;
    padding-bottom: 0%;
  }
`

export const ContainerRowTeamAnswering = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    align-items: flex-start;
    width: 80%;
    height: 100%;
  }
`

export const ContainerColumnGlobal = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  /* @media screen and (min-width: 300px) and (max-width: 500px) {
    align-items: center;
    width: 100%;
    height: 40%;
  } */

`

export const ContainerRowAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  width: 50%;
  margin-top: 10%;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: 80%;
  }
`
export const TextButton = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: white;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 12px;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    font-size: 18px;
  }
`
export const ButtonAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 20px;
  width: 30%;
  border: solid 2px ${colors.yellow};
  background: linear-gradient(180deg, #15008d 0%, #198bf5 100%);
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 300px) and (max-width: 500px) {
    width: 40%;
    border-radius: 15px;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    width: 45%;
    border-radius: 15px;
  }
  @media screen and (min-width: 800px) and (max-width: 1000px) {
    width: 45%;
    border-radius: 15px;
  }
`
export const TextAnswer = styled.p`
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 24px;
  color: white;
  @media screen and (min-width: 300px) and (max-width: 500px) {
    font-size: 10px;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    font-size: 16px;
  }
`
export const ContainerAnswer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: linear-gradient(180deg, #15008d 0%, #198bf5 100%);
  border: 2px solid ${colors.yellow};
  border-radius: 20px;
  opacity: 0.95;
  width: 70%;
  padding: 1%;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    border-radius: 10px;
    width: 80%;
  }
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
  color: white;
  margin-top: 5%;
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
    font-size: 10px;
    width: 150px;
  }
  @media screen and (min-width: 500px) and (max-width: 700px) {
    width: 200px;
    font-size: 14px;
  }
`

export const Iframe = styled.iframe`
  width: 30%;
  height: 110%;
  margin-top: 2%;
  @media screen and (min-width: 350px) and (max-width: 500px) {
    width: 300px;
    height: 250px;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    width: 400px;
    height: 350px;
  }
`
export const ContainerColumnAnswer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 95%;
`

export const ContainerImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2%;
  width: 35%;
  @media screen and (min-width: 350px) and (max-width: 500px) {
    width: 300px;
    height: 250px;
  }
  @media screen and (min-width: 500px) and (max-width: 800px) {
    width: 400px;
    height: 350px;
  }
`
export const Image = styled.img`
  height: 100%;
  width: 50%;
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
  justify-content: space-between;
  flex-direction: column;
  height: 100%;
  width: 100%;
`