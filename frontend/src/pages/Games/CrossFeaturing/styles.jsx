import styled from 'styled-components'
import colors from '../../../utils/styles/colors'
import RapperInputBG from '../../../assets/rollandgamos/rappeurInput.svg'

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
  margin-bottom: 2%;
`
export const ContainerTeamAnswer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 19%;
  padding: 1%;
  border-radius: 20px;
  background: rgb(255, 255, 24);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 24, 1) 0%,
    rgba(255, 210, 34, 1) 100%
  );
`

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
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
`

export const TableContainer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  width: 80%;
  max-height: 150px;
  min-height: 100px;
  overflow-y: scroll;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
`

export const RappersContainer = styled.div`
  width: 99%;
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
  color: ${colors.yellow};
`
export const TableBottom = styled.div`
  display: flex;
  padding-bottom: 3%;
  width: 80%;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
`
export const RapperInput = styled.input`
  text-align: center;
  width: 60%;
  border: 0px solid #000000;
  border-radius: 10px;
  font-family: 'Montserrat', 'sans-serif';
  font-size: 28px;
  font-weight: 700;
  color: white;
  background: linear-gradient(90deg, #15008d 0%, #198bf5 100%);
  background-color: ${colors.yellow};
  ::placeholder {
    text-transform: none;
    text-align: 'center';
    width: 100%;
    font-family: 'Montserrat', 'sans-serif';
    font-size: 28px;
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
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 60%;
  height: 100%;
`
export const Text = styled.p`
  font-family: 'Montserrat';
  font-weight: 700;
  font-size: 24px;
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
  color: white;
  &:hover {
    cursor: pointer;
  }
  padding-right: 1%;

`
