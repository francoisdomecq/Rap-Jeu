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
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  height: 50%;
  width: 100%;
  margin-top: 8%;
  @media screen and (min-width: 300px) and (max-width: 800px) {
    height: 10%;
    margin-top: 40%;
  }
`
export const ContainerColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 90%;
  width: 100%;
`

export const ContainerColumn45 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 45%;
  height: 100%;
`
export const ContainerRappers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45%;
  height: 100%;
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 70%;
  padding-top: 1%;
  padding-bottom: 1%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
  border-bottom: 5px solid ${colors.yellow};
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: white;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  opacity: 0.95;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 12px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 18px;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
`
export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 70%;
  max-height: 200px;
  min-height: 150px;
  overflow-y: scroll;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  opacity: 0.95;
  @media screen and (min-width: 300px) and (max-width: 600px) {
    max-height: 150px;
    min-height: 100px;
  }
`

export const RappersContainer = styled.div`
  width: 99%;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: ${colors.yellow};
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 12px;
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 18px;
  }
`
export const TableBottom = styled.div`
  display: flex;
  width: 70%;
  padding-bottom: 2%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  opacity: 0.95;
`
export const ContainerNewRapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 40%;
  padding-bottom: 1%;
  border-radius: 20px;
  opacity: 0.95;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  @media screen and (min-width: 300px) and (max-width: 600px) {
    border-radius: 10px;
    width: 45%;
  }
  @media screen and (min-width: 600px) and (max-width: 800px) {
    border-radius: 10px;
    width: 45%;
  }
`

export const RapperInput = styled.input`
  text-align: center;
  width: 80%;
  border: 0px solid #000000;
  border-radius: 10px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 28px;
  font-weight: 700;
  color: white;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  ::placeholder {
    text-align: 'center';
    text-transform: none;
    width: 100%;
    font-family: 'Montserrat', 'sans-serif';
    font-size: 24px;
    font-weight: 700;
    color: white;
  }
  &:hover {
    text-underline-position: below;
    text-decoration: underline;
  }
  ::-webkit-search-cancel-button {
    position: relative;
    right: 15px;
    top: 50%;
  }
  @media screen and (min-width: 300px) and (max-width: 600px) {
    font-size: 12px;
    ::placeholder {
      font-size: 6px;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 900px) {
    font-size: 16px;
    ::placeholder {
      font-size: 10px;
    }
  }
  @media screen and (min-width: 900px) and (max-width: 1300px) {
    font-size: 20px;
    ::placeholder {
      font-size: 14px;
    }
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
  font-size: 16px;
  font-weight: 700;
  font-family: 'Montserrat';
  color: white;
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
  @media screen and (min-width: 300px) and (max-width: 400px) {
    margin-top: 50%;
    margin-bottom: 10%;
  }`
