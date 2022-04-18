import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import RapperInputBG from '../../../assets/rollandgamos/rappeurInput.svg'
import RapperContainerBG from '../../../assets/rollandgamos/rappeurContainer.svg'
import rectangle from '../../../assets/rectangle.svg'
import Continuer from '../../../assets/continuer.svg'
export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 100%;
`
export const SecondContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  height: 100%;
`
export const RappeurContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 300px;
  height: 150px;
  background-size: contain;
  background-image: url(${RapperContainerBG});
  background-repeat: no-repeat;
  opacity: 0.95;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 100%;
`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 3%;
  width: 60%;
`
export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
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
export const SearchInput = styled.input`
  text-align: center;
  background-color: ${colors.yellow};
  border: 0px solid #000000;
  border-radius: 20px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 24px;
  font-weight: 700;
  color: white;
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
    right: 15px;
    top: 50%;
  }
  width: 200px;
  height: 60px;
  background-size: contain;
  background-image: url(${RapperInputBG});
  background-repeat: no-repeat;
`

export const NextRoundButton = styled.button`
  background-color: ${colors.red};
  font-family: 'Montserrat', 'sans-serif';
  font-size: 24px;
  font-weight: 700;
  width: 45%;
  border-radius: 20px;
  color: white;
  &:hover {
    cursor: pointer;
  }
`
export const ContainerTeam = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  width: 45%;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
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
  padding: 2%;
  width: 100%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
  opacity: 1;
  box-shadow: 1px 1px 1px ${colors.blue};
`

export const ContainerScore = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 189px;
  height: 90px;
  background-size: contain;
  background-image: url(${rectangle});
  background-repeat: no-repeat;
`
export const ButtonScore = styled.input`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  color: white;
  text-align: center;
  font-size: 30px;
  font-weight: bold;
  ::placeholder {
    color: white;
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
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;
  opacity: ${({ isTeamSelected }) => (isTeamSelected ? 1 : 0.5)};
`

export const CongratsContainer = styled.div`
  background-image: linear-gradient(
    180deg,
    rgba(255, 255, 255, 1) 36%,
    rgb(255, 255, 255) 100%
  );
  background-size: 100%;
  background-repeat: repeat;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-stroke-width: 0px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
`
