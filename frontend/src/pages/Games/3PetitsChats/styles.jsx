import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import Continuer from '../../../assets/continuer.svg'

export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  height: 100%;
  width: 100%;
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
    margin-top: 100%;
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
  width: 35%;
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
    margin-top: 10%;
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
      font-size:6px;
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
  @media screen and (min-width: 300px) and (max-width: 600px) {
    margin-top: 20%;
    margin-bottom: 10%;
  }
`
