import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import Continuer from '../../../assets/continuer.svg'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
  height: 110%;
  @media screen and (min-width: 300px) and (max-width: 400px) {
    height: 75%;
    align-items: flex-start;
  }
  @media screen and (min-width: 400px) and (max-width: 500px) {
    height: 80%;
    align-items: flex-start;
    justify-content: center;
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
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
`
export const ContainerRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
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
  @media screen and (min-width: 300px) and (max-width: 800px) {
    justify-content: flex-start;
    height: 80%;
  }
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
    flex-direction: column;
    justify-content: space-evenly;
  }
`

export const ContainerColumnPoints = styled.div`
  width: 35%;
`

export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`
export const ContainerRapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: space-evenly;
  border-radius: 20px;
  border: 2px solid ${colors.yellow};
  padding: 1%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  opacity: 0.95;
  @media screen and (min-width: 300px) and (max-width: 650px) {
    width: 30%;
  }
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 60%;
`
export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  @media screen and (min-width: 300px) and (max-width: 650px) {
    font-size: 12px;
  }
`
export const RapperInput = styled.input`
  outline: none;
  padding-top: 4%;
  text-align: center;
  border: 0px solid #000000;
  background-color: transparent;
  color: white;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 24px;
  font-weight: 700;
  ::placeholder {
    color: white;
    text-align: 'center';
    font-family: 'Montserrat', 'sans-serif';
    font-size: 24px;
    font-weight: 700;
    width: 100%;
    text-transform: none;
  }
  &:hover {
    text-underline-position: below;
    text-decoration: underline;
  }
  ::-webkit-search-cancel-button {
    position: relative;
    right: 500px;
  }
  width: 100%;
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
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
  opacity: ${({ isTeamSelected }) => (isTeamSelected ? 1 : 0.5)};
  @media screen and (min-width: 300px) and (max-width: 650px) {
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
